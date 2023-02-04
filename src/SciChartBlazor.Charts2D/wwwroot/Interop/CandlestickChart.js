var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FastLineRenderableSeries, NumericAxis, XyDataSeries } from "scichart";
import { resolveContext } from "./SciChartContext";
export function appendFastLineRenderableSeries(element, series) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
