using System.Collections.Generic;
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
                url += $"&startTime={new DateTimeOffset(startTime.Value).ToUnixTimeMilliseconds()}";
            }
            if (endTime.HasValue)
            {
                url += $"&endTime={new DateTimeOffset(endTime.Value).ToUnixTimeMilliseconds()}";
            }
            url += $"&limit={limit}";
            
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip;

            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                var content = reader.ReadToEnd();

                var candles = JsonSerializer.Deserialize<List<long[]?>>(content);
               
                var list = new List<PriceBar>();
                if (candles != null) 
                {
                    foreach (var candle in candles)
                    {
                        if (candle != null) {
                            var item = new PriceBar();
                            item.date = candle[0] / 1000;
                            item.open = candle[1];
                            item.high = candle[2];
                            item.low = candle[3];
                            item.close = candle[4];
                            item.volume = candle[5];
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
            public long open { get; set; }
            public long high { get; set; }
            public long low { get; set; }
            public long close { get; set; }
            public long volume { get; set; }
        }
    }
}
