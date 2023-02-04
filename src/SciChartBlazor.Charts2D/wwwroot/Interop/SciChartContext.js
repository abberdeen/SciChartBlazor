export function resolveContext(element) {
    return globalThis.chartInstances.hasOwnProperty(element.id) && globalThis.chartInstances[element.id];
}
//FastCandlestickRenderableSeries 
//FastOhlcRenderableSeries
