import { chartBuilder } from "scichart";
import { resolveContext } from "./SciChartContext";

export namespace Annotations {
    export async function add(element, jsonString) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        const annotations = chartBuilder.buildAnnotations(jsonString);
        sciChartSurface.annotations.add(...annotations);

        var ids = annotations.map(function (i) {
            return i.id;
        });
        return ids
    }

    export async function clear(element) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        sciChartSurface.annotations.clear();
    }

    export async function remove(element, id) {
        const { sciChartSurface, wasmContext } = resolveContext(element);
        var item = sciChartSurface.annotations.getById(id);
        sciChartSurface.annotations.remove(item);
    }
}