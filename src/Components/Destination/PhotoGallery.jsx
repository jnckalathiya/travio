import { Image } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <div className="text">
        <h3>Photo Gallery</h3>
        <p>
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="img-content">
        <div className="img">
          <Image src="assets/img/destination-4.jpg" alt="" />
          <Link>
            <FaPlus />
          </Link>
        </div>
        <div className="img">
        <Image src="assets/img/destination-5.jpg" alt="" />
          <Link>
            <FaPlus />
          </Link>
        </div>
        <div className="img">
        <Image src="assets/img/destination-6.jpg" alt="" />
          <Link>
            <FaPlus />
          </Link>
        </div>
        <div className="img">
        <Image src="assets/img/destination-7.jpg" alt="" />
          <Link>
            <FaPlus />
          </Link>
        </div>
        <div className="img">
        <Image src="assets/img/destination-8.jpg" alt="" />
          <Link>
            <FaPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
