import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, error, isValidating, mutate } = useSWR(URL, {
    refreshInterval: 5000,
  });

  if (error) return <div>{error.message}</div>;
  if (isValidating) return <div>loading...</div>;

  const { longitude, latitude } = data;
  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate(URL, { refreshInterval: 5000 })}
      />
    </main>
  );
}
