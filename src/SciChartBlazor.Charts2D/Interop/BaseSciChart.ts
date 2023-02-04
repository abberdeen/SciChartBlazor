import { SciChartSurface } from "scichart";
import { resolveContext } from "./SciChartContext";

export async function init(element) {
    let { sciChartSurface, wasmContext } = resolveContext(element);

    if (sciChartSurface === undefined) {
        const newContext = await SciChartSurface.create(element.id);
        sciChartSurface = newContext.sciChartSurface;
        wasmContext = newContext.wasmContext;
        globalThis.chartInstances[element.id] = { sciChartSurface, wasmContext };
    }
}

export async function unregister(element) {
    delete globalThis.chartInstances[element.id];
}