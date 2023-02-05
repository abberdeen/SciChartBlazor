﻿using System.Text.Json;
using SciChartBlazor.Charts2D.Model;
using SciChartBlazor.Charts2D.Model.DataSeries;

namespace SciChartBlazor.Charts2D.Model.RenderableSeries;

/// <summary>
/// A Spline Band Series.
/// </summary>
/// <typeparam name="TX">The type of the x.</typeparam>
/// <typeparam name="TY1">The type of the y1.</typeparam>
/// <typeparam name="TY2">The type of the y2.</typeparam>
/// <seealso cref="SciChartBlazor.RenderableSeries.RenderableSeriesBase" />
public class SplineBandRenderableSeries<TX, TY1, TY2> : RenderableSeriesBase
{
    /// <summary>
    /// The type of the element. Usually the name of the element in JS.
    /// </summary>
    /// <value>
    /// The type.
    /// </value>
    [SciChartElementType]
    public override string Type => "SplineBandSeries";

    /// <summary>
    /// Gets or sets the fill.
    /// </summary>
    /// <value>
    /// The fill.
    /// </value>
    public string? Fill { get; set; }

    /// <summary>
    /// Gets or sets the fill y1.
    /// </summary>
    /// <value>
    /// The fill y1.
    /// </value>
    public string? FillY1 { get; set; }

    /// <summary>
    /// Gets or sets the stroke y1.
    /// </summary>
    /// <value>
    /// The stroke y1.
    /// </value>
    public string? StrokeY1 { get; set; }


    /// <summary>
    /// Gets the data series.
    /// </summary>
    /// <value>
    /// The data series.
    /// </value>
    [SciChartDataSeries(DataSeriesType.XyyData)]
    public override DataSeriesBase DataSeries { get; }

    /// <summary>
    /// Gets or sets the interpolation points.
    /// </summary>
    /// <value>
    /// The interpolation points.
    /// </value>
    public int? InterpolationPoints { get; set; }


    /// <summary>
    /// Initializes a new instance of the <see cref="SplineBandRenderableSeries{TX, TY1, TY2}"/> class.
    /// </summary>
    /// <param name="dataSeries">The data series.</param>
    public SplineBandRenderableSeries(XyyDataSeries<TX, TY1, TY2> dataSeries)
    {
        DataSeries = dataSeries;
    }
}
