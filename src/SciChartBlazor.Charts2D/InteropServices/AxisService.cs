using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Model.Annotations;
using SciChartBlazor.Charts2D.Model.DataSeries;
using SciChartBlazor.Charts2D.Model.Axes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public class AxisService
    {
        private IJSRuntime _jsRuntime;

        private ElementReference _element;

        public AxisService(IJSRuntime jsRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = jsRuntime; 
        }

        public async Task AddXAxis(AxisBase axis)
        {
        //    axis.Id = "xAxis-" + Guid.NewGuid();    
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.AddXAxis, _element, axis.GetJson());
        }

        public async Task AddYAxis(AxisBase axis)
        {
         //  axis.Id = "yAxis-" + Guid.NewGuid();
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.AddYAxis, _element, axis.GetJson());
        }

    }
}
