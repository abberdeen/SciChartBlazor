﻿using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public static class JSRuntimeExtension
    {
        public static ValueTask CallVoidAsync(this IJSRuntime jsRuntime, string command, ElementReference element) 
        {
           return jsRuntime.InvokeVoidAsync($"{InteropCommand.Library}.{command}", element);
        }
    }
}
