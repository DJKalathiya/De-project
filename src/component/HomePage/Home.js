import React from "react";

export const Home = () => {
  return (
    <>
      <div className="container" style={{ overflow: "hidden", position: "relative", maxHeight: "500px", maxWidth: "700px", paddingTop: "75px" }}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active"  data-bs-interval="10000">
              <img src="https://picsum.photos/id/200/500/300" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Advertisement 1</h5>
                <a href="#" className="btn btn-dark">Read More</a>
              </div>
            </div>
            <div className="carousel-item"  data-bs-interval="10000">
              <img src="https://picsum.photos/id/10/500/300" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Advertisement 2</h5>
                <a href="#" className="btn btn-dark">Read More</a>
              </div>
            </div>
            <div className="carousel-item"  data-bs-interval="10000">
              <img src="https://picsum.photos/id/237/500/300" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Advertisement 3</h5>
                <a href="#" className="btn btn-dark">Read More</a>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};