using Microsoft.Extensions.Options;
using SciChartBlazor.Charts2D.Model.DataSeries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Model.Filters
{
    public abstract class XyFilterBase<TX, TY> : XyDataSeries<TX, TY>
    {
        /**
     * The {@link BaseDataSeries} to be filtered
     */
        public BaseDataSeries OriginalSeries { get; set; }
        /**
         * The field that will be returned by getOriginalYValues.
         */
        // public DataSeriesField Field { get; set; }
        /**
         * The field that will be returned by getOriginalYValues.
         */
        // public DataSeriesField xField;
        /**
         * Creates an instance of {@link XyFilterBase}
         * @param originalSeries the {@link BaseDataSeries} to be filtered
         * @param options the {@link IXyFilterOptions} which can be passed to configure the Filter at construct time
         */
        public XyFilterBase(BaseDataSeries originalSeries)
        {
            this.OriginalSeries = originalSeries;
        }

    }
}
