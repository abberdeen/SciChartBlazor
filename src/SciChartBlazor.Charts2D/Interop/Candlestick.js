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
exports.initSciChart = exports.runExample = void 0;
var SciChartSurface_1 = require("scichart/Charting/Visuals/SciChartSurface");
var NumericAxis_1 = require("scichart/Charting/Visuals/Axis/NumericAxis");
var NumericFormat_1 = require("scichart/types/NumericFormat");
var TextAnnotation_1 = require("scichart/Charting/Visuals/Annotations/TextAnnotation");
var AnnotationBase_1 = require("scichart/Charting/Visuals/Annotations/AnnotationBase");
var AnchorPoint_1 = require("scichart/types/AnchorPoint");
var ZoomPanModifier_1 = require("scichart/Charting/ChartModifiers/ZoomPanModifier");
var ZoomExtentsModifier_1 = require("scichart/Charting/ChartModifiers/ZoomExtentsModifier");
var MouseWheelZoomModifier_1 = require("scichart/Charting/ChartModifiers/MouseWheelZoomModifier");
var AutoRange_1 = require("scichart/types/AutoRange");
var NumberRange_1 = require("scichart/Core/NumberRange");
var OhlcDataSeries_1 = require("scichart/Charting/Model/OhlcDataSeries");
var FastCandlestickRenderableSeries_1 = require("scichart/Charting/Visuals/RenderableSeries/FastCandlestickRenderableSeries");
var LegendModifier_1 = require("scichart/Charting/ChartModifiers/LegendModifier");
var CategoryAxis_1 = require("scichart/Charting/Visuals/Axis/CategoryAxis");
var SmartDateLabelProvider_1 = require("scichart/Charting/Visuals/Axis/LabelProvider/SmartDateLabelProvider");
var data_1 = require("./data");
function runExample() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, sciChartSurface, wasmContext, ohlcDataSeries, item, definition, json;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, initSciChart()];
                case 1:
                    _a = _b.sent(), sciChartSurface = _a.sciChartSurface, wasmContext = _a.wasmContext;
                    // Set loading notification
                    sciChartSurface.annotations.add(new TextAnnotation_1.TextAnnotation({ text: "Loading price data...", x1: 0.5, y1: 0.5, xCoordinateMode: AnnotationBase_1.ECoordinateMode.Relative, yCoordinateMode: AnnotationBase_1.ECoordinateMode.Relative, horizontalAnchorPoint: AnchorPoint_1.EHorizontalAnchorPoint.Center, verticalAnchorPoint: AnchorPoint_1.EVerticalAnchorPoint.Center, fontSize: 20 }));
                    ohlcDataSeries = new OhlcDataSeries_1.OhlcDataSeries(wasmContext, {
                        dataSeriesName: "Bitcoin/US Dollar",
                        xValues: data_1.dateValues,
                        openValues: data_1.openValues,
                        highValues: data_1.highValues,
                        lowValues: data_1.lowValues,
                        closeValues: data_1.closeValues,
                    });
                    // Add the volume with metadata (Convert Up/Down bar into Green/Red color. This is used later in the paletteprovider)
                    //const volumeSeries = new XyDataSeries(wasmContext, {
                    //    dataSeriesName: "Volume",
                    //    xValues: priceBars.map(p => p.date),
                    //    yValues: priceBars.map(p => p.volume),
                    //});
                    //sciChartSurface.renderableSeries.add(new FastColumnRenderableSeries(wasmContext, { dataSeries: volumeSeries, yAxisId: "volumeYAxis", dataPointWidth: 0.1, strokeThickness: 0 }))
                    // Add the candlestick series with highest z-index
                    sciChartSurface.renderableSeries.add(new FastCandlestickRenderableSeries_1.FastCandlestickRenderableSeries(wasmContext, { dataSeries: ohlcDataSeries }));
                    item = sciChartSurface.renderableSeries.get(0);
                    console.log(item.toJSON());
                    console.log(item.dataSeries.toJSON());
                    // Add a moving average
                    //const movingAverage50Data = new XyMovingAverageFilter(ohlcDataSeries, { dataSeriesName: "MA (50)", length: 50 });
                    //sciChartSurface.renderableSeries.add(new FastLineRenderableSeries(wasmContext, { dataSeries: movingAverage50Data, stroke: "SteelBlue" }));
                    //// Add a second moving average
                    //const movingAverage200Data = new XyMovingAverageFilter(ohlcDataSeries, { dataSeriesName: "MA (200)", length: 200 });
                    //sciChartSurface.renderableSeries.add(new FastLineRenderableSeries(wasmContext, { dataSeries: movingAverage200Data, stroke: "Crimson" }));
                    // Clear loading notification
                    sciChartSurface.annotations.clear();
                    definition = sciChartSurface.toJSON(true);
                    json = JSON.stringify(definition);
                    console.log("json definition: ");
                    console.log(json);
                    return [2 /*return*/];
            }
        });
    });
}
exports.runExample = runExample;
function initSciChart() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, sciChartSurface, wasmContext, xAxis, yAxis, volumeYAxis;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, SciChartSurface_1.SciChartSurface.create("scichart-root")];
                case 1:
                    _a = _b.sent(), sciChartSurface = _a.sciChartSurface, wasmContext = _a.wasmContext;
                    xAxis = new CategoryAxis_1.CategoryAxis(wasmContext, { labelProvider: new SmartDateLabelProvider_1.SmartDateLabelProvider() });
                    yAxis = new NumericAxis_1.NumericAxis(wasmContext, {
                        labelFormat: NumericFormat_1.ENumericFormat.Decimal,
                        labelPrecision: 2,
                        autoRange: AutoRange_1.EAutoRange.Always,
                        growBy: new NumberRange_1.NumberRange(0.1, 0.1)
                    });
                    volumeYAxis = new NumericAxis_1.NumericAxis(wasmContext, {
                        growBy: new NumberRange_1.NumberRange(0, 4),
                        id: "volumeYAxis",
                        isVisible: false,
                        autoRange: AutoRange_1.EAutoRange.Always,
                    });
                    sciChartSurface.xAxes.add(xAxis);
                    sciChartSurface.yAxes.add(yAxis);
                    // sciChartSurface.yAxes.add(volumeYAxis);
                    // Add some zoom, pan interaction
                    sciChartSurface.chartModifiers.add(new ZoomPanModifier_1.ZoomPanModifier(), new ZoomExtentsModifier_1.ZoomExtentsModifier(), new MouseWheelZoomModifier_1.MouseWheelZoomModifier(), new LegendModifier_1.LegendModifier({ showCheckboxes: false, showLegend: true }));
                    // That's it! You just created your first SciChartSurface!
                    return [2 /*return*/, { sciChartSurface: sciChartSurface, wasmContext: wasmContext }];
            }
        });
    });
}
exports.initSciChart = initSciChart;
//# sourceMappingURL=Candlestick.js.map