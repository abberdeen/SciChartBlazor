namespace SciChartBlazor.Charts2D.Model.Axes;

/// <summary>
/// 
/// </summary>
public class NumberRange
{
    /// <summary>
    /// Initializes a new instance of the <see cref="NumberRange"/> class.
    /// </summary>
    /// <param name="min">The minimum.</param>
    /// <param name="max">The maximum.</param>
    public NumberRange(double min, double max)
    {
        Max = max;
        Min = min;
    }
    /// <summary>
    /// Determines the minimum of the parameters.
    /// </summary>
    /// <value>
    /// The minimum.
    /// </value>
    public double Min { get; set; }

    /// <summary>
    /// Determines the maximum of the parameters.
    /// </summary>
    /// <value>
    /// The maximum.
    /// </value>
    public double Max { get; set; }
}