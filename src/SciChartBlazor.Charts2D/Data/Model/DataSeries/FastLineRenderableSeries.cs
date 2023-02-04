using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SciChartBlazor.Charts2D.Data.Model;

namespace SciChartBlazor.Charts2D.Data.Model.DataSeries
{
    public record FastLineRenderableSeries
    {
        public List<DataPoint> DataSeries { get; init; } = new();
        public string Stroke { get; set; } = "";
        public int StrokeThickness { get; set; } = 1;
    }
}
