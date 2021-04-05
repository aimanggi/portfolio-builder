import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/navigation/Header";

const Home = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const getAll = axios
      .get("https://portfolio-builder-oh.herokuapp.com/all")
      .then((data) => {
        console.log(data.data.data);
        setPortfolio(data.data.data);
      });
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
                <Link to={`/${project._id}`}>
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
