using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Models;
using SciChartBlazor.Charts2D.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D
{
    public partial class BaseChart2D : ComponentBase, IAsyncDisposable
    {
        [Inject] 
        internal IJSRuntime JSRuntime { get; set; }

        protected ElementReference _chartRoot;

        public string Id { get; private set; } = "scichart-root-" + Guid.NewGuid().ToString();

        [Parameter]
        public int Width { get; set; } = 800;

        [Parameter]
        public int Height { get; set; } = 400;

        public async Task Init()
        {
            await JSRuntime.CallVoidAsync(InteropCommand.Init, _chartRoot);
        }

        public async Task AddRenderableSeries(FastLineRenderableSeries fastLineRenderableSeries)
        {
            await JSRuntime.InvokeVoidAsync("sciChartBlazor.appendFastLineRenderableSeries", _chartRoot, fastLineRenderableSeries);
        }

        public ValueTask DisposeAsync()
        {
            return JSRuntime.CallVoidAsync(InteropCommand.Unregister, _chartRoot);
        } 
    }
}
