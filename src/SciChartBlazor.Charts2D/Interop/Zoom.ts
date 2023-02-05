import { resolveContext } from "./SciChartContext";

export namespace Zoom {
    export async function zoomExtents(element) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        sciChartSurface.zoomExtents();
    }

    export async function zoomTo(element, start, end) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        var xAxis = sciChartSurface.xAxes.get(0);

        const coordCalc = xAxis.getCurrentCoordinateCalculator();
        var coordStart = coordCalc.getCoordinate(start);
        var coordend = coordCalc.getCoordinate(end);

        xAxis.zoom(coordStart, coordend);
    }
}