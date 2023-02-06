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
        public const string Library = "sciChartBlazor";

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

        public static string AddAnnotation => $"{Library}.Annotations.add";
        public static string RemoveAnnotation => $"{Library}.Annotations.remove";
        public static string ClearAnnotations => $"{Library}.Annotations.clear";

        public static string AddModifier => $"{Library}.Modifiers.add";
        public static string ClearModifiers => $"{Library}.Modifiers.clear";

        public static string ZoomTo => $"{Library}.Zoom.zoomTo";
        public static string ZoomExtents => $"{Library}.Zoom.zoomExtents";
    }
}