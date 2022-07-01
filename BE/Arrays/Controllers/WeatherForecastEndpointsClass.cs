using Arrays;
namespace Arrays.Controllers;

public static class WeatherForecastEndpointsClass
{
    public static void MapWeatherForecastEndpoints (this IEndpointRouteBuilder routes)
    {
        routes.MapGet("/api/WeatherForecast", () =>
        {
            return new [] { new WeatherForecast() };
        })
        .WithName("GetAllWeatherForecasts");

        routes.MapGet("/api/WeatherForecast/{id}", (int id) =>
        {
            //return new WeatherForecast { ID = id };
        })
        .WithName("GetWeatherForecastById");

        routes.MapPut("/api/WeatherForecast/{id}", (int id, WeatherForecast input) =>
        {
            return Results.NoContent();
        })
        .WithName("UpdateWeatherForecast");

        routes.MapPost("/api/WeatherForecast/", (WeatherForecast model) =>
        {
            //return Results.Created($"/WeatherForecasts/{model.ID}", model);
        })
        .WithName("CreateWeatherForecast");

        routes.MapDelete("/api/WeatherForecast/{id}", (int id) =>
        {
            if (id < 1)
                return Results.NotFound();
            return Results.Ok(new WeatherForecast { ID = id });
        })
        .WithName("DeleteWeatherForecast");  
    }
}
