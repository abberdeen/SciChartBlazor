var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { resolveContext } from "./SciChartContext";
export var Zoom;
(function (Zoom) {
    function zoomExtents(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            sciChartSurface.zoomExtents();
        });
    }
    Zoom.zoomExtents = zoomExtents;
    function zoomTo(element, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sciChartSurface, wasmContext } = resolveContext(element);
            var xAxis = sciChartSurface.xAxes.get(0);
            const coordCalc = xAxis.getCurrentCoordinateCalculator();
            var coordStart = coordCalc.getCoordinate(start);
            var coordend = coordCalc.getCoordinate(end);
            xAxis.zoom(coordStart, coordend);
        });
    }
    Zoom.zoomTo = zoomTo;
})(Zoom || (Zoom = {}));
