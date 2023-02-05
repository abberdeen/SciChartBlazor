using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Data.Model.DataSeries;
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
        public RenderableSeriesService(IJSRuntime JSRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = JSRuntime; 
        }

        public async Task Add(FastLineRenderableSeries fastLineRenderableSeries)
        {
            await _jsRuntime.InvokeVoidAsync("sciChartBlazor.appendFastLineRenderableSeries", _element, fastLineRenderableSeries);
        }
    }
}
