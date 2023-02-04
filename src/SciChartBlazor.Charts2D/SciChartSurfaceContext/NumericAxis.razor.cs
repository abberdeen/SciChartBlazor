﻿using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.SciChartSurfaceContext
{
    public partial class NumericAxis : ComponentBase, IAsyncDisposable
    {
        public string Text { get; set; } = "NumericAxis";
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {

        }
        public ValueTask DisposeAsync()
        {
            throw new NotImplementedException();
        }
    }

}
