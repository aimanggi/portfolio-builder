import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import Header from "../components/navigation/Header";

const Details = () => {
  const location = useLocation();
  const match = useRouteMatch();
  console.log(location, match);

  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios
      .get(`https://portfolio-builder-oh.herokuapp.com/${match.params.id}`)
      .then((data) => {
        setPortfolio(data.data.data);
      });
  }, []);

  console.log("details", portfolio);

  return (
    <div>
      <Header />
      {!portfolio ? (
        <div>Loading..</div>
      ) : (
        <div className="container details">{portfolio.title}</div>
      )}
    </div>
  );
};

export default Details;
