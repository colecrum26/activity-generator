import { useState, useEffect } from "react";

function getCategories(props) {
  const [type, setType] = useState("");
  const [data, setData] = useState({});

  const getActivity = async () => {
    try {
      // let url = `https://www.boredapi.com/api/activity/?type=${type}`;
      const url = "https://www.boredapi.com/api/activity/?type=education";
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }
  };
  // console.log(data);

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      {data.map((activity) => {
        return (
          <div key={activity.key}>
            <h2>{activity.activity}</h2>
            <h3>{activity.type}</h3>
            <h3>{activity.participants}</h3>
            <h3>{activity.price}</h3>
            <h3>{activity.accessibility}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default getCategories;
