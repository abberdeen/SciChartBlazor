using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Model.DataSeries;
using SciChartBlazor.Charts2D.Model.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public class ModifiersService
    {
        private IJSRuntime _jsRuntime;

        private ElementReference _element;

        public ModifiersService(IJSRuntime jsRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = jsRuntime; 
        }

        public async Task Add(AnnotationBase annotation)
        {

        }

        public async Task Remove(AnnotationBase annotation)
        {

        }
    }
}
