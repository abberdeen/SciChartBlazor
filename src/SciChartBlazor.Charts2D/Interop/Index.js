"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var scichart_1 = require("scichart");
//SciChartSurface.configure({
//    wasmUrl: "/_content/SciChartBlazor.Charts2D/scichart2d.wasm",
//    dataUrl: "/_content/SciChartBlazor.Charts2D/scichart2d.data"
//});
// static func. Call once. load wasm from CDN
scichart_1.SciChartSurface.useWasmFromCDN();
globalThis.chartInstances = {};
__exportStar(require("./SciChartContext"), exports);
__exportStar(require("./SciChartSurface"), exports);
__exportStar(require("./RenderableSeries"), exports);
__exportStar(require("./Annotations"), exports);
__exportStar(require("./Modifiers"), exports);
__exportStar(require("./Axis"), exports);
__exportStar(require("./Zoom"), exports);
//# sourceMappingURL=Index.js.map