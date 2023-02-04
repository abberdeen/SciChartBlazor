using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D
{
    public partial class CandlestickChart : BaseChart2D 
    {
        [Inject] internal IJSRuntime JSRuntime { get; set; }

        public CandlestickChart()
        {
            
        }
     
    }
}
