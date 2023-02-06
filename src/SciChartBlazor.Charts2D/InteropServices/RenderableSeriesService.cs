using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Model.DataSeries;
using SciChartBlazor.Charts2D.Model.RenderableSeries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public class RenderableSeriesService
    {
        private IJSRuntime _jsRuntime;

        private ElementReference _element;

        private List<RenderableSeriesBase> _renderableSeries = new();

        public RenderableSeriesService(IJSRuntime jsRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = jsRuntime; 
        }
        
        public async Task Add(RenderableSeriesBase renderableSeries)
        {
            var json = renderableSeries.GetJson();
            var ids = await _jsRuntime.InvokeAsync<string[]>(JSInteropCommand.AddRenderableSeries, _element, json);
            renderableSeries.Id = ids[0];
            this._renderableSeries.Add(renderableSeries);
        }

        public async Task AddRange(IList<RenderableSeriesBase> renderableSeries)
        {
            foreach (var item in renderableSeries)
            {
                await Add(item);
            }
        }

        public async Task Remove(string renderableSeriesId)
        {
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.RemoveRenderableSeries, _element, renderableSeriesId);
            this._renderableSeries.Remove(this._renderableSeries.First(x => x.Id == renderableSeriesId));
        }

        public async Task Update(string renderableSeriesId, DataSeriesBase data)
        {
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.UpdateRenderableSeries, _element, renderableSeriesId, data.GetJson());
            // TODO: update _renderableSeries
        }
    }
}
