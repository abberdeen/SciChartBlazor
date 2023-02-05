using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public static class JSInteropCommand
    {
        /// <summary>
        /// Webpack module.exports.output.library
        /// </summary>
        private const string Library = "sciChartBlazor";

        /// <summary>
        ///
        /// </summary>
        public static string Init => $"{Library}.init";

        /// <summary>
        ///
        /// </summary>
        public static string Unregister => $"{Library}.unregister";

        /// <summary>
        /// 
        /// </summary>
        public static string AddRenderableSeries => $"{Library}.RenderableSeries.add";
        public static string RemoveRenderableSeries => $"{Library}.RenderableSeries.remove";
        public static string UpdateRenderableSeries => $"{Library}..RenderableSeries.update";

        public static string AddXAxis => $"{Library}.Axis.addXAxis";
        public static string AddYAxis => $"{Library}.Axis.addYAxis";

    }
}