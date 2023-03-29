import React from "react";

export const Profile = () => {
  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" />
                <h5 className="my-3">Full Name</h5>
                <p className="text-muted mb-1">Service types</p>
                <p className="text-muted mb-4">Addresses Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores.</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-dark mx-2">Edit</button>
                  <button type="button" className="btn btn-outline-dark ms-1">Log Out</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8" >
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">About</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quam, omnis modi, sed voluptatem asperiores, vero doloremque sequi placeat laudantium veniam quos similique quidem animi earum ullam ratione itaque saepe?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 col-lg-8">
              <img src="https://picsum.photos/id/10/500/300" alt="Photos" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
