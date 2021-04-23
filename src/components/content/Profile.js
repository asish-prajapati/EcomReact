import React from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <div className="row h-200">
      <div className="col-sm-4"></div>
      <div className="col-sm-4  my-auto">
        <div className="card card-block w-25">
          <img src={props.data.profileimg} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.data.email}</h5>
            <br />
            <p className="card-text">
              Hello , {props.data.username} . Welcome To your Profile Page !
            </p>
            <br />
            <Link to="/" className="btn btn-primary">
              Go to HomePage
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>{" "}
    </div>
  );
}

export default Profile;
