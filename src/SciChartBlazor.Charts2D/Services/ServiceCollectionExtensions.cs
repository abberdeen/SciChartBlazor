using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;

namespace SciChartBlazor.Charts2D.Services;

/// <summary>
/// An extention for ServiceCollection. Used to add the SciChartBlazor service.
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// An extention for ServiceCollection. Used to add the SciChartBlazor service.
    /// </summary>
    /// <param name="services">IServiceCollection</param>
    /// <param name="options">The Scichart options</param>
    /// <returns>Continues the IServiceCollection chain.</returns>
    public static IServiceCollection AddSciChart(this IServiceCollection services, Action<SciChartOptions> options)
    {
        services.Configure(options);
        services.TryAddScoped<ISciChartBlazorService, SciChartBlazorService>();
        return services;
    }
}