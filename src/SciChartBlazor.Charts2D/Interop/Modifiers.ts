import { chartBuilder } from "scichart";
import { resolveContext } from "./SciChartContext";

export namespace Modifiers {
    export async function add(element, jsonString) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        const mod = chartBuilder.buildModifiers(jsonString);
        sciChartSurface.chartModifiers.add(...mod);
    }

    export async function clear(element) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        sciChartSurface.chartModifiers.clear();
    }
}