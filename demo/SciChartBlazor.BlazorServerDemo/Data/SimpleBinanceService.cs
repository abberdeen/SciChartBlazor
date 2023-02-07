using System.Collections.Generic;
using System.Globalization;
using System.Net;
using System.Runtime.InteropServices;
using System.Text.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace SciChartBlazor.BlazorServerDemo.Data
{
    public class SimpleBinanceService
    {
        public static List<PriceBar>? GetCandles(string symbol,
                                                   string interval,
                                                   DateTime? startTime,
                                                   DateTime? endTime,
                                                   int limit = 500)
        {
            string url = $"https://api.binance.com/api/v3/klines?symbol={symbol}&interval={interval}";

            if (startTime.HasValue)
            {
                url += $"&startTime={startTime.Value.ToUnix()}";
            }
            if (endTime.HasValue)
            {
                url += $"&endTime={endTime.Value.ToUnix()}";
            }
            url += $"&limit={limit}";
            
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip;

            var doubleParse = (string input) => double.Parse(input, CultureInfo.InvariantCulture);

            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                var content = reader.ReadToEnd();

                var candles = JsonSerializer.Deserialize<List<List<dynamic>>>(content);
               
                var list = new List<PriceBar>();
                if (candles != null) 
                {
                    foreach (var candle in candles)
                    {
                        if (candle != null) {
                            var item = new PriceBar();
                            item.date = long.Parse(candle[0].ToString()) / 1000;
                            item.open = doubleParse(candle[1].ToString());
                            item.high = doubleParse(candle[2].ToString());
                            item.low = doubleParse(candle[3].ToString());
                            item.close = doubleParse(candle[4].ToString());
                            item.volume = doubleParse(candle[5].ToString());
                            list.Add(item);                       
                        }
                    }
                    return list;
                }
            }
            return null;
        }

        public record PriceBar
        {
            public long date { get; set; }
            public double open { get; set; }
            public double high { get; set; }
            public double low { get; set; }
            public double close { get; set; }
            public double volume { get; set; }
        }
    }
}
