import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/b1.jpg";
import img2 from "../../images/b2.jpg";
import img3 from "../../images/b3.jpg";
import img4 from "../../images/b4.jpeg";
import img5 from "../../images/b5.jpeg";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="mt-12" id="reviews">
      <h1
        className="text-5xl text-black  text-center font-bold pt-14"
      >
        Customer's <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#5a1e63] to-[#b636c9]">Review</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 item-center justify-center px-[57px] mt-24">
        <div className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600">
          <div className=" flex ">
            <div className="pImg w-[50px] h-[50px] rounded-full truncate">
              <img
                src={img1}
                className="object-cover object-center transition duration-3s"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">Umar</h2>
              <span className="text-yellow-600">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
          <div class="mt-4">
            <p>
              great shoes also became fashion items. Some shoes are worn as
              safety equipment, such as steel-toe boots
            </p>
          </div>
        </div>
        <div className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600">
          <div className=" flex ">
            <div className="pImg w-[50px] h-[50px] rounded-full truncate">
              <img
                src={img2}
                className="object-cover object-center transition duration-3s"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">Brian</h2>
              <span className="text-yellow-600">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
          <div class="mt-4">
            <p>
              great shoes also became fashion items. Some shoes are worn as
              safety equipment, such as steel-toe boots
            </p>
          </div>
        </div>
        <div className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600">
          <div className=" flex ">
            <div className="pImg w-[50px] h-[50px] rounded-full truncate">
              <img
                src={img4}
                className="object-cover object-center transition duration-3s"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">Alexa</h2>
              <span className="text-yellow-600">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
          <div class="mt-4">
            <p>
              great shoes also became fashion items. Some shoes are worn as
              safety equipment, such as steel-toe boots
            </p>
          </div>
        </div>
        <div className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600">
          <div className=" flex ">
            <div className="pImg w-[50px] h-[50px] rounded-full truncate">
              <img
                src={img3}
                className="object-cover object-center transition duration-3s"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">Ibrahim</h2>
              <span className="text-yellow-600">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
          <div class="mt-4">
            <p>
              great shoes also became fashion items. Some shoes are worn as
              safety equipment, such as steel-toe boots
            </p>
          </div>
        </div>
        <div className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600">
          <div className=" flex ">
            <div className="pImg w-[50px] h-[50px] rounded-full truncate">
              <img
                src={img5}
                className="object-cover object-center transition duration-3s"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">Fatima</h2>
              <span className="text-yellow-600">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
          <div class="mt-4">
            <p>
              great shoes also became fashion items. Some shoes are worn as
              safety equipment, such as steel-toe boots
            </p>
          </div>
        </div>
        <div className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600">
          <div className=" flex ">
            <div className="pImg w-[50px] h-[50px] rounded-full truncate">
              <img
                src={img1}
                className="object-cover object-center transition duration-3s"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">Denny</h2>
              <span className="text-yellow-600">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
          <div class="mt-4">
            <p>
              great shoes also became fashion items. Some shoes are worn as
              safety equipment, such as steel-toe boots
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
