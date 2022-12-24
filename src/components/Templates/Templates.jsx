import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore, db } from "../../firebase";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTemplate } from "../../action/index";
const Templates = () => {
  const dispatch = useDispatch();

  const renderTemplate = (id, component) => {
    console.log(id);
    console.log(component);
    dispatch(addTemplate(id, component));
  };

  return (
    <>
      <div className="templates container mt-5 pt-5">
        <h2 className="title">Templates</h2>
        <hr />
        <h2>Hotel</h2>
        <div className="row">
          <div className="col-lg-4 ">
            <Link
              to="/hotel5"
              onClick={() => renderTemplate("hotel5", "<H5 data={data}/>")}
            >
              <div className="box1"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/hotel4"
              onClick={() => renderTemplate("hotel4", "<H4 data={data}/>")}
            >
              <div className="box2"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/hotel3"
              onClick={() => renderTemplate("hotel3", "<H3 data={data}/>")}
            >
              <div className="box3"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/hotel2"
              onClick={() => renderTemplate("hotel2", "<H2 data={data}/>")}
            >
              <div className="box4"></div>
            </Link>
          </div>
        </div>
        <br></br>
        <h2 className="title">Panshop</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 ">
            <Link
              to="/panshop1"
              onClick={() => renderTemplate("panshop1", "<P1 data={data}/>")}
            >
              <div className="box5"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/panshop2"
              onClick={() => renderTemplate("panshop2", "<P2 data={data}/>")}
            >
              <div className="box6"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/panshop5"
              onClick={() => renderTemplate("panshop5", "<P5 data={data}/>")}
            >
              <div className="box7"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/panshop4"
              onClick={() => renderTemplate("panshop4", "<P4 data={data}/>")}
            >
              <div className="box8"></div>
            </Link>
          </div>

          <div className="col-lg-4 ">
            <Link
              to="/panshop3"
              onClick={() => renderTemplate("panshop3", "<P3 data={data}/>")}
            >
              <div className="box9"></div>
            </Link>
          </div>
        </div>
        <br />
        <h2 className="title">NGO's</h2>
        <hr />
        <div className="row">
          <br/>
        <div className="col-lg-4 ">
            <Link
              to="/ngo1"
              onClick={() => renderTemplate("ngo1", "<N1 data={data}/>")}
            >
              <div className="box10"></div>
            </Link>
          </div>
          <div className="col-lg-4 ">
            <Link
              to="/ngo2"
              onClick={() => renderTemplate("ngo2", "<N2 data={data}/>")}
            >
              <div className="box11"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
