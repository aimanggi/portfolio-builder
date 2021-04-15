import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/navigation/Header";

const Home = () => {
  // State for storing all portfolio data
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    // first effect run fetch function to get portfolio data

    // .then version
    // axios.get("https://portfolio-builder-oh.herokuapp.com/all").then((data) => {
    //   console.log(data);
    //   setPortfolio(data.data.data);
    // });

    // async await version
    const fetch = async () => {
      const data = await axios.get(
        "https://portfolio-builder-oh.herokuapp.com/all"
      );

      console.log(data);
      // set portfolio data to state
      setPortfolio(data.data.data);
    };
    fetch();
  }, []);

  console.log("portfolio", portfolio);
  return (
    <div>
      <Header />
      <div className="container home">
        <div>Hello, I’m</div>
        <div className="name">Anggi Maulinda</div>
        <div className="occupation">Frontend developer | UI/UX Enthusiast</div>

        <section className="portfolio-list">
          {portfolio.map((project, index) => {
            return (
              <div key={project._id} className="portfolio-item">
                {/* Refer to App.js router */}
                <Link to={`/portfolio/${project._id}`}>
                  <div className="portfolio-wrapper">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="title">{project.title}</div>
                      <div>{project.overview}</div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
