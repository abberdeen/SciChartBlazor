using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SciChartBlazor.Charts2D.Data.Model.DataSeries;
using SciChartBlazor.Charts2D.SciChartSurfaceContext;
using SciChartBlazor.Charts2D.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SciChartBlazor.Charts2D.Data.Model;

namespace SciChartBlazor.Charts2D
{
    public partial class RenderableSeries : SciChartSurface
    {
        [Parameter]
        public List<DataPoint> DataSeries { get; init; } = new();

        [Parameter]
        public string Stroke { get; set; } = "";

        [Parameter]
        public int StrokeThickness { get; set; } = 1;

    }
}
