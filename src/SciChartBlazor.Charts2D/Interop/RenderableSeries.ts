import { chartBuilder } from "scichart";
import { resolveContext } from "./SciChartContext";

export namespace RenderableSeries
{
    export async function add(element, jsonString) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        const seriesArray = chartBuilder.buildSeries(wasmContext, jsonString);

        sciChartSurface.renderableSeries.add(...seriesArray);
        sciChartSurface.zoomExtents();

        var ids = seriesArray.map(function (i) {
            return i.id;
        });
        return ids
    }

    export async function remove(element, id) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        var item = sciChartSurface.renderableSeries.getById(id);
        sciChartSurface.renderableSeries.remove(item);
    }

    export async function update(element, id, data) {
        const { sciChartSurface, wasmContext } = resolveContext(element);

        var item = sciChartSurface.renderableSeries.getById(id);
        const newdata = chartBuilder.buildDataSeries(wasmContext, data);
        item.dataSeries = newdata;
    }   
}