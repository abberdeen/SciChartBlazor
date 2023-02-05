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
export var Modifiers;
(function (Modifiers) {
    function add(element, jsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            const mod = chartBuilder.buildModifiers(jsonString);
            sciChartSurface.chartModifiers.add(...mod);
        });
    }
    Modifiers.add = add;
    function clear(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            sciChartSurface.chartModifiers.clear();
        });
    }
    Modifiers.clear = clear;
})(Modifiers || (Modifiers = {}));
