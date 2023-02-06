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

        private List<AnnotationBase> _annotations = new();

        public AnnotationsService(IJSRuntime jsRuntime, ElementReference element)
        {
            this._element = element;
            this._jsRuntime = jsRuntime;
        }

        public async Task Add(AnnotationBase annotation)
        {
            string json = annotation.GetJson();
            var ids = await _jsRuntime.InvokeAsync<string[]>(JSInteropCommand.AddAnnotation, _element, json);
            annotation.Id = ids[0];
            this._annotations.Add(annotation);
        }

        public async Task AddRange(IList<AnnotationBase> annotations)
        {
            // This is super hacky!
            string[] json1 = annotations.Select(x => x.GetJson()).ToArray();

            string json2 = "[";

            for (int i = 0; i < json1.Length; i++)
            {
                if (i != 0)
                    json2 += ",";
                json2 += $" {json1[i]}";

            }
            json2 += "]";

            var ids = await _jsRuntime.InvokeAsync<string[]>(JSInteropCommand.AddAnnotation, _element, json2);

            for (int i = 0; i < annotations.Count(); i++)
            {
                annotations[i].Id = ids[i];
                this._annotations.Add(annotations[i]);
            }
        }

        public async Task Remove(AnnotationBase annotation)
        {
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.RemoveAnnotation, _element, annotation.Id);
            this._annotations.Remove(annotation);
        }

        public async Task Clear()
        {
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.ClearAnnotations, _element);
            this._annotations.Clear();
        }
    }
}
