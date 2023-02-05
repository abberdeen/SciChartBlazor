var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { chartBuilder } from "scichart";
import { resolveContext } from "./SciChartContext";
export var RenderableSeries;
(function (RenderableSeries) {
    function add(element, jsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            const seriesArray = chartBuilder.buildSeries(wasmContext, jsonString);
            sciChartSurface.renderableSeries.add(...seriesArray);
            sciChartSurface.zoomExtents();
            var ids = seriesArray.map(function (i) {
                return i.id;
            });
            return ids;
        });
    }
    RenderableSeries.add = add;
    function remove(element, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            var item = sciChartSurface.renderableSeries.getById(id);
            sciChartSurface.renderableSeries.remove(item);
        });
    }
    RenderableSeries.remove = remove;
    function update(element, id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            var item = sciChartSurface.renderableSeries.getById(id);
            const newdata = chartBuilder.buildDataSeries(wasmContext, data);
            item.dataSeries = newdata;
        });
    }
    RenderableSeries.update = update;
})(RenderableSeries || (RenderableSeries = {}));
