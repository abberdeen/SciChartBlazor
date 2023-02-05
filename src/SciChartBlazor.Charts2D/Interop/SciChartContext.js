"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveContext = void 0;
function resolveContext(element) {
    return globalThis.chartInstances.hasOwnProperty(element.id) && globalThis.chartInstances[element.id];
}
exports.resolveContext = resolveContext;
//# sourceMappingURL=SciChartContext.js.map