"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveContext = void 0;
function resolveContext(element) {
    return globalThis.chartInstances.hasOwnProperty(element.id) && globalThis.chartInstances[element.id];
}
exports.resolveContext = resolveContext;
//FastCandlestickRenderableSeries 
//FastOhlcRenderableSeries
//# sourceMappingURL=SciChartContext.js.map