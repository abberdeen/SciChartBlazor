using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Model.Axes;
using SciChartBlazor.Charts2D.Model.DataSeries;
using SciChartBlazor.Charts2D.Model.Themes;
using SciChartBlazor.Charts2D.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace SciChartBlazor.Charts2D.SciChartSurfaceContext
{
    public partial class SciChartSurface : ComponentBase, IAsyncDisposable
    {
        [Inject]
        internal IJSRuntime jsRuntime { get; set; }

        protected Lazy<RenderableSeriesService> renderableSeries;
        protected Lazy<AnnotationsService> annotations;
        protected Lazy<ModifiersService> modifiers;
        protected Lazy<AxisService> axis;

        protected ElementReference _chartRoot;

        protected override async Task OnInitializedAsync()
        { 
            await base.OnInitializedAsync(); 
        }

        protected override Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
            }

            return base.OnAfterRenderAsync(firstRender);
        }

        public async Task Initialize(SciChartThemeBase? theme = null)
        {
            theme ??= new SciChartLightTheme();

            await jsRuntime.InvokeVoidAsync(JSInteropCommand.Init, _chartRoot, theme);

            renderableSeries = new Lazy<RenderableSeriesService>(
              () => new RenderableSeriesService(jsRuntime, _chartRoot));

            annotations = new Lazy<AnnotationsService>(
                () => new AnnotationsService(jsRuntime, _chartRoot));

            modifiers = new Lazy<ModifiersService>(
               () => new ModifiersService(jsRuntime, _chartRoot));

            axis = new Lazy<AxisService>(
                () => new AxisService(jsRuntime, _chartRoot));
        }

        //public AxisBase XAxis { get; set; }
        //public AxisBase YAxis { get; set; }
        public RenderableSeriesService RenderableSeries => renderableSeries.Value;
        
        public AnnotationsService Annotations => annotations.Value;
        
        public ModifiersService Modifiers => modifiers.Value;
        
        // public AxisService Axis => axis.Value;

        [Parameter]
        public int Width { get; set; } = 800;

        [Parameter]
        public int Height { get; set; } = 400;

        public string Id { get; private set; } = "scichart-root-" + Guid.NewGuid().ToString();

        #region Serivces

        /// <summary>
        /// Zooms to a region in the X axis.
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <returns></returns>
        public async Task ZoomTo(double start, double end) =>
            await jsRuntime.InvokeVoidAsync(JSInteropCommand.ZoomTo, _chartRoot, start, end);

        public async Task ZoomExtents() =>
            await  jsRuntime.InvokeVoidAsync(JSInteropCommand.ZoomExtents, _chartRoot);

        public async Task AddXAxis(AxisBase xAxis)
        {
            await axis.Value.AddXAxis(xAxis);
        }

        public async Task AddYAxis(AxisBase yAxis)
        {
            await axis.Value.AddYAxis(yAxis);
        }

        #endregion


        public ValueTask DisposeAsync()
        {
            return jsRuntime.InvokeVoidAsync(JSInteropCommand.Unregister, _chartRoot);
        }
    }
}
