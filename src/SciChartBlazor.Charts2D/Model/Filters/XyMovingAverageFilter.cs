using SciChartBlazor.Charts2D.Model.DataSeries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Model.Filters
{
    public class XyMovingAverageFilter<TX, TY> : XyFilterBase<TX, TY>
    {

        /// <summary>
        ///  The length of the moving average
        /// </summary>
        public int? Length { get; set; }

        public XyMovingAverageFilter(BaseDataSeries originalSeries) : base(originalSeries)
        {
        }
    }
}
