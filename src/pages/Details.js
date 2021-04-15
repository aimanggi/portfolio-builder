import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import Header from "../components/navigation/Header";

const Details = () => {
  const location = useLocation();
  const match = useRouteMatch();
  console.log(location, match);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://portfolio-builder-oh.herokuapp.com/${match.params.id}`)
      .then((data) => {
        setDetails(data.data.data);
      });
  }, []);

  console.log("details", details);

  return (
    <div>
      <Header />
      {!details ? (
        <div>Loading..</div>
      ) : (
        <div className="container details">{details.title}</div>
      )}
    </div>
  );
};

export default Details;
