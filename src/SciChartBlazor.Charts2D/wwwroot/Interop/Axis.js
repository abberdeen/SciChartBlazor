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
export var Axis;
(function (Axis) {
    function addXAxis(element, jsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            console.log(sciChartSurface);
            sciChartSurface.xAxes.clear();
            const axis = chartBuilder.buildAxes(wasmContext, jsonString);
            sciChartSurface.xAxes.add(...axis);
        });
    }
    Axis.addXAxis = addXAxis;
    function addYAxis(element, jsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            sciChartSurface.yAxes.clear();
            const axis = chartBuilder.buildAxes(wasmContext, jsonString);
            sciChartSurface.yAxes.add(...axis);
        });
    }
    Axis.addYAxis = addYAxis;
})(Axis || (Axis = {}));
