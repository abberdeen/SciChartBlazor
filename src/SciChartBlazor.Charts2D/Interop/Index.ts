import { SciChartSurface } from "scichart";

//SciChartSurface.configure({
//    wasmUrl: "/_content/SciChartBlazor.Charts2D/scichart2d.wasm",
//    dataUrl: "/_content/SciChartBlazor.Charts2D/scichart2d.data"
//});

// static func. Call once. load wasm from CDN
SciChartSurface.useWasmFromCDN();

declare global {
    var chartInstances: any;
}
globalThis.chartInstances = {};

export * from "./SciChartContext"
export * from "./SciChartSurface"
export * from "./RenderableSeries"
