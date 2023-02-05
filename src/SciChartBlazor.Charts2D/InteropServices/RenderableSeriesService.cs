using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop; 
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

        public RenderableSeriesService(IJSRuntime jsRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = jsRuntime; 
        }

        public async Task Add(RenderableSeriesBase renderableSeries)
        {
            var json = renderableSeries.GetJson();
            await _jsRuntime.InvokeAsync<string[]>(JSInteropCommand.AddRenderableSeries, _element, json);
        }
    }
}
