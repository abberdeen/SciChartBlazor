using System;
using System.Collections.Generic;
using System.Linq;

namespace SciChartBlazor.Charts2D.Model.DataSeries;

/// <summary>
/// 
/// </summary>
/// <typeparam name="TX"> X-value is a Date, encoded as a Unix Timestamp.</typeparam>
/// <typeparam name="TOpen">The type of the open.</typeparam>
/// <typeparam name="THigh">The type of the high.</typeparam>
/// <typeparam name="TLow">The type of the low.</typeparam>
/// <typeparam name="TClose">The type of the close.</typeparam>
/// <seealso cref="SciChartBlazor.DataSeries.DataSeriesBase" />
public class OhlcDataSeries<TValue> : DataSeriesBase
{
    /// <summary>
    /// the X-values (dates) encoded as a Unix Timestamp
    /// </summary>
    public List<long> XValues { get; }

    /// <summary>
    /// Gets the open values.
    /// </summary>
    /// <value>
    /// The open values.
    /// </value>
    public List<TValue> OpenValues { get; }

    /// <summary>
    /// Gets the high values.
    /// </summary>
    /// <value>
    /// The high values.
    /// </value>
    public List<TValue> HighValues { get; }

    /// <summary>
    /// Gets the low values.
    /// </summary>
    /// <value>
    /// The low values.
    /// </value>
    public List<TValue> LowValues { get; }

    /// <summary>
    /// Gets the close values.
    /// </summary>
    /// <value>
    /// The close values.
    /// </value>
    public List<TValue> CloseValues { get; }


    /// <summary>
    /// Initializes a new instance of the <see cref="OhlcDataSeries{TX, TValue}"/> class.
    /// </summary>
    /// <param name="xValues">the X-values (dates) encoded as a Unix Timestamp.</param>
    /// <param name="openValues">The open values.</param>
    /// <param name="highValues">The high values.</param>
    /// <param name="lowValues">The low values.</param>
    /// <param name="closeValues">The close values.</param>
    public OhlcDataSeries(List<long> xValues, List<TValue> openValues, List<TValue> highValues, List<TValue> lowValues, List<TValue> closeValues)
    {
        XValues = xValues;
        OpenValues = openValues;
        HighValues = highValues;
        LowValues = lowValues;
        CloseValues = closeValues;
    }
    public OhlcDataSeries() : this(new List<long> { }, new List<TValue> { }, new List<TValue> { }, new List<TValue> { }, new List<TValue> { })
    { 
    }

    public void Append(long x, TValue open, TValue high, TValue low, TValue close)
    {
        XValues.Add(x);
        OpenValues.Add(open);
        HighValues.Add(high);
        LowValues.Add(low);
        CloseValues.Add(close);
    }

    public void Append(DateTime x, TValue open, TValue high, TValue low, TValue close)
    {
        var t = ((DateTimeOffset)x).ToUnixTimeSeconds(); 
        Append(t, open, high, low, close);
    }

}
