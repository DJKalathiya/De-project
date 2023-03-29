import React from 'react'
import { useParams } from "react-router-dom";
export const Types = () => {
  const id = useParams();
  console.log(id);
  
  return (
    <>
      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
          <li className="list-group">Address</li>
          </div>
        </div>
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
          <li className="list-group">Address</li>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
          <li className="list-group">Address</li>
          </div>
        </div>
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
          <li className="list-group">Address</li>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
          <li className="list-group">Address</li>
          </div>
        </div>
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
          <li className="list-group">Address</li>
          </div>
        </div>
      </div>
    </>
  );
};