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
import { resolveContext } from "./SciChartContext";
export function init(element, theme) {
    return __awaiter(this, void 0, void 0, function* () {
        let { sciChartSurface, wasmContext } = resolveContext(element);
        if (sciChartSurface === undefined) {
            const newContext = yield SciChartSurface.create(element.id, {
                theme,
            });
            sciChartSurface = newContext.sciChartSurface;
            wasmContext = newContext.wasmContext;
            globalThis.chartInstances[element.id] = { sciChartSurface, wasmContext };
            //   SciChartDefaults.enableResampling = true;
        }
    });
}
export function clear(element) {
    return __awaiter(this, void 0, void 0, function* () {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        sciChartSurface.renderableSeries.clear();
        sciChartSurface.annotations.clear();
    });
}
export function unregister(element) {
    return __awaiter(this, void 0, void 0, function* () {
        delete globalThis.chartInstances[element.id];
    });
}
export function setLicenseKey(key) {
    return __awaiter(this, void 0, void 0, function* () {
        SciChartSurface.setRuntimeLicenseKey(key);
    });
}
