"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderableSeries = void 0;
var scichart_1 = require("scichart");
var SciChartContext_1 = require("./SciChartContext");
var RenderableSeries;
(function (RenderableSeries) {
    function add(element, jsonString) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, sciChartSurface, wasmContext, seriesArray, ids;
            var _b;
            return __generator(this, function (_c) {
                _a = (0, SciChartContext_1.resolveContext)(element), sciChartSurface = _a.sciChartSurface, wasmContext = _a.wasmContext;
                seriesArray = scichart_1.chartBuilder.buildSeries(wasmContext, jsonString);
                (_b = sciChartSurface.renderableSeries).add.apply(_b, seriesArray);
                sciChartSurface.zoomExtents();
                ids = seriesArray.map(function (i) {
                    return i.id;
                });
                return [2 /*return*/, ids];
            });
        });
    }
    RenderableSeries.add = add;
    function remove(element, id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, sciChartSurface, wasmContext, item;
            return __generator(this, function (_b) {
                _a = (0, SciChartContext_1.resolveContext)(element), sciChartSurface = _a.sciChartSurface, wasmContext = _a.wasmContext;
                item = sciChartSurface.renderableSeries.getById(id);
                sciChartSurface.renderableSeries.remove(item);
                return [2 /*return*/];
            });
        });
    }
    RenderableSeries.remove = remove;
    function update(element, id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, sciChartSurface, wasmContext, item, newdata;
            return __generator(this, function (_b) {
                _a = (0, SciChartContext_1.resolveContext)(element), sciChartSurface = _a.sciChartSurface, wasmContext = _a.wasmContext;
                item = sciChartSurface.renderableSeries.getById(id);
                newdata = scichart_1.chartBuilder.buildDataSeries(wasmContext, data);
                item.dataSeries = newdata;
                return [2 /*return*/];
            });
        });
    }
    RenderableSeries.update = update;
})(RenderableSeries = exports.RenderableSeries || (exports.RenderableSeries = {}));
//# sourceMappingURL=RenderableSeries.js.map