namespace SciChartBlazor.Charts2D.Model.Axes;

/// <summary>
/// 
/// </summary>
/// <seealso cref="SciChartBlazor.Axes.AxisBase" />
public class DateTimeNumericAxis : AxisBase
{
    //public DateTimeNumericAxis(AxisStyle? axisStyle) : base(axisStyle)
    //{
    //}

    /// <summary>
    /// The type of the element. Usually the name of the element in JS.
    /// </summary>
    /// <value>
    /// The type.
    /// </value>
    public override string Type => "DateTimeNumericAxis";
}
