using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SciChartBlazor.Charts2D.Services
{
    public class SciChartSurfaceService
    {
        private static Lazy<RenderableSeriesService> renderableSeries;

        public SciChartSurfaceService( ref ElementReference element)
        {
            renderableSeries = new Lazy<RenderableSeriesService>(() => new RenderableSeriesService(JSRuntime, element));
        }

        public RenderableSeriesService RenderableSeries => renderableSeries.Value;
    }
}
