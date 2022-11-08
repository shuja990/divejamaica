import ReactWeather, { useVisualCrossing } from "react-open-weather";

const WeatherWidget = () => {
  const { data, isLoading, errorMessage } = useVisualCrossing({
    key: "CQ23MQLLHHDBHQQWRNVQTF4R9",
    lat: "18.4762",
    lon: "77.8939",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <article>
      <div className="container">
        <div
          className="article-six"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Montego Bay"
            unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
            showForecast
          />
        </div>
      </div>
    </article>
  );
};

export default WeatherWidget;
