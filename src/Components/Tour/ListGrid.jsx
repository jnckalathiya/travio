import React from "react";
import Search from "../Sidebar/Search";
import Advice from "../Sidebar/Advice";
import { Tabs } from "antd";
import { IoMdList } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import ToureList from "./ToureList";
import ToureGrid from "./ToureGrid";
import Category from "../Sidebar/Category";
import Range from "../Sidebar/Range";
import Duration from "../Sidebar/Duration";
import Review from "../Sidebar/Review";

const ListGrid = () => {
  return (
    <div className="list-grid-outer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
            <div className="item-shorting">
              <div className="pull">
                <h3>Showing 1-6 of 20 Results</h3>
              </div>
              <div className="sort-box" >
                <select class="wide">
                  <option selected disabled>
                    Sort by
                  </option>
                  <option value="1">Sort 01</option>
                  <option value="2">Sort 02</option>
                  <option value="3">Sort 03</option>
                  <option value="3">Sort 04</option>
                </select>
              </div>
            </div>
            <div className="menubox">
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    label: <IoMdList />,
                    key: "1",
                    children: <ToureList itemsPerPage={6} />,
                  },
                  {
                    label: <IoGridOutline />,
                    key: "2",
                    children: <ToureGrid itemsPerPage={6} />,
                  },
                ]}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div className="sidebar-inner">
              <Search />
              <Category />
              <Range/>
              <Duration/>
              <Review/>
              <Advice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGrid;
