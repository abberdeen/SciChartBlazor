using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Data.Model
{
    public record DataPoint
    {
        public double X { get; init; }
        public double Y { get; init; }

        public DataPoint()
        {
        }

        public DataPoint(double x, double y)
        {
            X = x;
            Y = y;
        }
    }
}
