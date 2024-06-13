import React from "react";
import Search from "../Sidebar/Search";
import Download from "../Sidebar/Download";
import Post from "../Sidebar/Post";
import Advice from "../Sidebar/Advice";
import DesLeft from "./DesLeft";

const DesDetails = () => {
  return (
    <>
      <div className="desdetail-outer">
        <div className="container">
          <div className="desdetail-inner row">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="content-inner">
                <DesLeft />
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="sidebar-inner">
                <Search />
                <Download/>
                <Post/>
                <Advice/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesDetails;
