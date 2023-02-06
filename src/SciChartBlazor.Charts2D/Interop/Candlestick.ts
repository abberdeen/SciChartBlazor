import { SciChartSurface } from "scichart/Charting/Visuals/SciChartSurface";
import { NumericAxis } from "scichart/Charting/Visuals/Axis/NumericAxis";
import { ENumericFormat } from "scichart/types/NumericFormat";
import { TextAnnotation } from "scichart/Charting/Visuals/Annotations/TextAnnotation";
import { ECoordinateMode } from "scichart/Charting/Visuals/Annotations/AnnotationBase";
import { EHorizontalAnchorPoint, EVerticalAnchorPoint } from "scichart/types/AnchorPoint";
import { ZoomPanModifier } from "scichart/Charting/ChartModifiers/ZoomPanModifier";
import { ZoomExtentsModifier } from "scichart/Charting/ChartModifiers/ZoomExtentsModifier";
import { MouseWheelZoomModifier } from "scichart/Charting/ChartModifiers/MouseWheelZoomModifier";
import { EAutoRange } from "scichart/types/AutoRange";
import { NumberRange } from "scichart/Core/NumberRange"; 
import { OhlcDataSeries } from "scichart/Charting/Model/OhlcDataSeries";
import { FastCandlestickRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastCandlestickRenderableSeries";
import { XyMovingAverageFilter } from "scichart/Charting/Model/Filters/XyMovingAverageFilter";
import { FastLineRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastLineRenderableSeries";
import { XyDataSeries } from "scichart/Charting/Model/XyDataSeries";
import { FastColumnRenderableSeries } from "scichart/Charting/Visuals/RenderableSeries/FastColumnRenderableSeries";
import { LegendModifier } from "scichart/Charting/ChartModifiers/LegendModifier";
import { SciChartDefaults } from "scichart/Charting/Visuals/SciChartDefaults";
import { CategoryAxis } from "scichart/Charting/Visuals/Axis/CategoryAxis";
import { SmartDateLabelProvider } from "scichart/Charting/Visuals/Axis/LabelProvider/SmartDateLabelProvider";
import { closeValues, dateValues, highValues, lowValues, openValues }  from "./data";
 
export async function runExample() {

    // Create an empty SciChartSurface
    const { sciChartSurface, wasmContext } = await initSciChart();

    // Set loading notification
    sciChartSurface.annotations.add(new TextAnnotation({ text: "Loading price data...", x1: 0.5, y1: 0.5, xCoordinateMode: ECoordinateMode.Relative, yCoordinateMode: ECoordinateMode.Relative, horizontalAnchorPoint: EHorizontalAnchorPoint.Center, verticalAnchorPoint: EVerticalAnchorPoint.Center, fontSize: 20 }));

  
    // Set price bars as Candlestick in Scichart
    const ohlcDataSeries = new OhlcDataSeries(wasmContext, {
        dataSeriesName: "Bitcoin/US Dollar",
        xValues: dateValues,
        openValues: openValues,
        highValues: highValues,
        lowValues: lowValues,
        closeValues: closeValues,
    });

    // Add the volume with metadata (Convert Up/Down bar into Green/Red color. This is used later in the paletteprovider)
    //const volumeSeries = new XyDataSeries(wasmContext, {
    //    dataSeriesName: "Volume",
    //    xValues: priceBars.map(p => p.date),
    //    yValues: priceBars.map(p => p.volume),
    //});
    //sciChartSurface.renderableSeries.add(new FastColumnRenderableSeries(wasmContext, { dataSeries: volumeSeries, yAxisId: "volumeYAxis", dataPointWidth: 0.1, strokeThickness: 0 }))

    // Add the candlestick series with highest z-index
     sciChartSurface.renderableSeries.add(new FastCandlestickRenderableSeries(wasmContext, { dataSeries: ohlcDataSeries }));
    var item = sciChartSurface.renderableSeries.get(0);
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

    const definition = sciChartSurface.toJSON(true);
    const json = JSON.stringify(definition);
    console.log("json definition: ");
    console.log(json);
}


export async function initSciChart() {
    // LICENSING //
    // Set your license code here
    // You can get a trial license key from https://www.scichart.com/licensing-scichart-js/
    // Purchased license keys can be viewed at https://www.scichart.com/profile
    //
    // e.g.
    //
    // SciChartSurface.setRuntimeLicenseKey("YOUR_RUNTIME_KEY");
    //
    // Also, once activated (trial or paid license) having the licensing wizard open on your machine
    // will mean any or all applications you run locally will be fully licensed.

    // Create the SciChartSurface in the div 'scichart-root'
    // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
    // instance must be passed to other types that exist on the same surface.
    const { sciChartSurface, wasmContext } = await SciChartSurface.create(
        "scichart-root"
    );

    // Create an X,Y Axis and add to the chart
    const xAxis = new CategoryAxis(wasmContext, { labelProvider: new SmartDateLabelProvider() });
    const yAxis = new NumericAxis(wasmContext, {
        labelFormat: ENumericFormat.Decimal,
        labelPrecision: 2,
        autoRange: EAutoRange.Always,
        growBy: new NumberRange(0.1, 0.1)
    });

    // Add a hidden YAxis for volume
    const volumeYAxis = new NumericAxis(wasmContext, {
        growBy: new NumberRange(0, 4),
        id: "volumeYAxis",
        isVisible: false,
        autoRange: EAutoRange.Always,
    });

    sciChartSurface.xAxes.add(xAxis);
    sciChartSurface.yAxes.add(yAxis);
   // sciChartSurface.yAxes.add(volumeYAxis);

    // Add some zoom, pan interaction
    sciChartSurface.chartModifiers.add(
        new ZoomPanModifier(),
        new ZoomExtentsModifier(),
        new MouseWheelZoomModifier(),
        new LegendModifier({ showCheckboxes: false, showLegend: true })
    )

    // That's it! You just created your first SciChartSurface!
    return { sciChartSurface, wasmContext };
}
