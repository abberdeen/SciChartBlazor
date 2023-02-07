namespace SciChartBlazor.BlazorServerDemo
{
    public static class DateTimeExtensions
    {
        public static long ToUnix(this DateTime dateTime) 
        {
            return new DateTimeOffset(dateTime).ToUnixTimeMilliseconds();
        }
    }
}
