import { FastLineRenderableSeries, NumericAxis, XyDataSeries } from "scichart";
import { resolveContext } from "./SciChartContext";
 
export async function appendFastLineRenderableSeries(element, series) {
    const { sciChartSurface, wasmContext } = resolveContext(element);

    const xAxis = new NumericAxis(wasmContext);
    const yAxis = new NumericAxis(wasmContext);

    sciChartSurface.xAxes.add(xAxis);
    sciChartSurface.yAxes.add(yAxis);

    const xyDataSeries = new XyDataSeries(wasmContext);
    series.dataSeries.map(({ x, y }) => xyDataSeries.append(x, y));

    const lineSeries = new FastLineRenderableSeries(wasmContext, {
        stroke: series.stroke || "#ff6600",
        strokeThickness: series.strokeThickness || 2,
        dataSeries: xyDataSeries,
    });

    sciChartSurface.renderableSeries.add(lineSeries);

    sciChartSurface.zoomExtents();
}
