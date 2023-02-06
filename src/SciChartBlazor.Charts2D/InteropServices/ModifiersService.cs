using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;
using SciChartBlazor.Charts2D.Model.Modifiers;
using System;
using System.Collections.Generic;

namespace SciChartBlazor.Charts2D.Services
{
    public class ModifiersService
    {
        private IJSRuntime _jsRuntime;

        private ElementReference _element;

        // private List<ModifierBase> _modifiers = new();

        public ModifiersService(IJSRuntime jsRuntime, ElementReference element)
        { 
            this._element = element;
            this._jsRuntime = jsRuntime; 
        }

        public async Task Add(ModifierBase modifier)
        {
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.AddModifier, _element, modifier.GetJson());
        }

        public async Task AddRange(IEnumerable<ModifierBase> modifiers)
        {
            foreach (var modifier in modifiers)
            {
                await Add(modifier);
            }
        }

        public async Task Clear()
        {
            await _jsRuntime.InvokeVoidAsync(JSInteropCommand.ClearModifiers, _element);
        }
    }
}
