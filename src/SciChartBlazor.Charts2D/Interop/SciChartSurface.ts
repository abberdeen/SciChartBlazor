import { SciChartDefaults, SciChartJSLightTheme, SciChartSurface } from "scichart";
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

export async function clear(element) {
    const { sciChartSurface, wasmContext } = resolveContext(element);

    sciChartSurface.renderableSeries.clear();
    sciChartSurface.annotations.clear();
}

export async function unregister(element) {
    delete globalThis.chartInstances[element.id];
}

export async function setLicenseKey(key) {
    SciChartSurface.setRuntimeLicenseKey(key);
}