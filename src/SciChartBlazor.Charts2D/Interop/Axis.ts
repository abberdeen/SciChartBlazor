import { chartBuilder } from "scichart";
import { resolveContext } from "./SciChartContext";

export namespace Axis
{
    export async function addXAxis(element, jsonString) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        console.log(sciChartSurface)
        sciChartSurface.xAxes.clear();
        const axis = chartBuilder.buildAxes(wasmContext, jsonString);
        sciChartSurface.xAxes.add(...axis);
    }

    export async function addYAxis(element, jsonString) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        sciChartSurface.yAxes.clear();
        const axis = chartBuilder.buildAxes(wasmContext, jsonString);
        sciChartSurface.yAxes.add(...axis);
    }
}