import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { eduIcon, backIcon, refrIcon } from "../assets";

function Educational() {
  const [data, setData] = useState({});

  function getActivity() {
    fetch("https://www.boredapi.com/api/activity/?type=education")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => {
        console.error(err);
        throw new Error("Something went wrong - failed to fetch.");
      });
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div id="eduAct">
      <h2 id="eduHeader">
        <button
          type="submit"
          className="back"
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <NavLink to="/activity-generator/categories/">
            <img src={backIcon} alt="back button" />
          </NavLink>
        </button>
        Educational Activity
        <img src={eduIcon} className="icon" alt="books" />
      </h2>
      <h4 style={{wordWrap: "normal", width: "400px"}}>Activity: {data.activity}</h4>
      <h4>Number of Participants: {data.participants}</h4>
      <h4>Price: {data.price * 10}</h4>
      <p>Price is scaled 0-10, with 0 being free.</p>
      <h4>Accessibility: {data.accessibility * 10}</h4>
      <p>Accessibility is scaled 0-10, with 0 being most accessible.</p>
      <div id="eduBR">
        <label htmlFor="refresh">
          Don't want to do this one? Try another activity!
        </label>
        <button
          onClick={getActivity}
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <img src={refrIcon} alt="refresh" />
        </button>
      </div>
    </div>
  );
}

export default Educational;
