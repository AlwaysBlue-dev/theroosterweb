import React from "react";
import { NavLink } from "react-router-dom";
import carousel1 from "../Images/Carousel/pic1.png";
import carousel2 from "../Images/Carousel/pic2.png";
import carousel3 from "../Images/Carousel/pic3.jpg";
import carousel4 from "../Images/Carousel/pic4.jpg";
import Cards from "./Cards";
import Cardsdata from "./Cardsdata";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="pic" />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="pic" />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="pic" />
          </div>
          <div className="carousel-item">
            <img src={carousel4} className="d-block w-100" alt="pic" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="main_heading my-5">
        <div className="text-center">
          <h1 className="display-5 deals">Deals</h1>
          <h3>
            The Rooster’s brings you the deal for anyone and everyone. From the
            little fam to the fuller House celebrations, We has gotten a deal
            for all.
          </h3>
          <NavLink to="/menu">
            <button className="btn btn-outline-primary menu_btn">
              Click to check menu
            </button>
          </NavLink>

          <hr className="w-50 mx-auto my-5" />
        </div>
      </section>
      {Cardsdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.sname}
          />
        );
      })}
    </>
  );
};
export default Home;
