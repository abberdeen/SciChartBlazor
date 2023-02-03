var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SciChartSurface } from "scichart";
import { NumericAxis } from "scichart/Charting/Visuals/Axis/NumericAxis";
import { XyDataSeries } from "scichart/Charting/Model/XyDataSeries";
import { FastLineRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastLineRenderableSeries";
let chartInstances = {};
function resolveContext(element) {
    return chartInstances.hasOwnProperty(element.id) && chartInstances[element.id];
}
export function init(element) {
    return __awaiter(this, void 0, void 0, function* () {
        let { sciChartSurface, wasmContext } = resolveContext(element);
        if (sciChartSurface === undefined) {
            const newContext = yield SciChartSurface.create(element.id);
            sciChartSurface = newContext.sciChartSurface;
            wasmContext = newContext.wasmContext;
            chartInstances[element.id] = { sciChartSurface, wasmContext };
        }
    });
}
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
export function unregister(element) {
    return __awaiter(this, void 0, void 0, function* () {
        delete chartInstances[element.id];
    });
}
