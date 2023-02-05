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
export var Annotations;
(function (Annotations) {
    function add(element, jsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            const annotations = chartBuilder.buildAnnotations(jsonString);
            sciChartSurface.annotations.add(...annotations);
            var ids = annotations.map(function (i) {
                return i.id;
            });
            return ids;
        });
    }
    Annotations.add = add;
    function clear(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            sciChartSurface.annotations.clear();
        });
    }
    Annotations.clear = clear;
    function remove(element, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            var item = sciChartSurface.annotations.getById(id);
            sciChartSurface.annotations.remove(item);
        });
    }
    Annotations.remove = remove;
})(Annotations || (Annotations = {}));
