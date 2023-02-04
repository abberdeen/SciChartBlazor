import { FastCandlestickRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastCandlestickRenderableSeries";
import { FastOhlcRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastOhlcRenderableSeries";

export function resolveContext(element) {
    return globalThis.chartInstances.hasOwnProperty(element.id) && globalThis.chartInstances[element.id];
}

//FastCandlestickRenderableSeries 
//FastOhlcRenderableSeries