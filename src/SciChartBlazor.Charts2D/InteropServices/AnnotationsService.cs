using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Model.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public class AnnotationsService
    {
        private IJSRuntime _jsRuntime;

        private ElementReference _element;

        public AnnotationsService(IJSRuntime jsRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = jsRuntime; 
        }

        public async Task Add(AnnotationBase annotation)
        {

        } 
    }
}
