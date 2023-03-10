using System;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using static SciChartBlazor.Charts2D.Model.SciChartElementBase;

namespace SciChartBlazor.Charts2D.Model.DataSeries;

/// <summary>
/// 
/// </summary>
public abstract class BaseDataSeries
{
    /// <summary>
    /// Gets or sets the name of the data series.
    /// </summary>
    /// <value>
    /// The name of the data series.
    /// </value>
    public string? DataSeriesName { get; set; } = null;

    /// <summary>
    /// Gets or sets the data is sorted in x.
    /// </summary>
    /// <value>
    /// The data is sorted in x.
    /// </value>
    public bool? DataIsSortedInX { get; set; } = null;

    /// <summary>
    /// Gets or sets the contains na n.
    /// </summary>
    /// <value>
    /// The contains na n.
    /// </value>
    public bool? ContainsNaN { get; set; } = null;

    /// <summary>
    /// Gets the json.
    /// </summary>
    /// <returns></returns>
    public string GetJson()
    {
        var typeAttribute = GetType().GetCustomAttributes(typeof(SciChartDataSeries), true).FirstOrDefault() as SciChartDataSeries;
        var output = new jsonObject();

        switch (typeAttribute?.GetDataType())
        {
            case DataSeriesType.XyData:
                {
                    output.XyData = this;
                    break;
                }
            case DataSeriesType.XyyData:
                {
                    output.XyyData = this;
                    break;
                }
            case DataSeriesType.XyzData:
                {
                    output.XyzData = this;
                    break;
                }
        }

        JsonSerializerOptions _op = new()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
            Converters = { new JsonStringEnumConverter(), new DataSeriesConverter() }
        };

        return JsonSerializer.Serialize(output, _op);
    }

    [Serializable]
    private class jsonObject
    {
        public BaseDataSeries? XyData { get; set; } = null;

        public BaseDataSeries? XyyData { get; set; } = null;

        public BaseDataSeries? XyzData { get; set; } = null;
    }
}