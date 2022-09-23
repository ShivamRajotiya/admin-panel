import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import {
  RiUserHeartFill,
  RiFileList3Fill,
  RiHeartPulseFill,
  RiSettings5Fill,
  RiCustomerService2Fill,
  RiHomeSmileFill
} from "react-icons/ri";
import { FaUserNurse, FaRupeeSign } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import {
  MdLocalPharmacy,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { TbReportMedical } from "react-icons/tb";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { SiSlideshare } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Sidebar = ({ width, setWidth }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={
          width
            ? "w-20 overflow-y-scroll h-screen z-50 absolute md:relative left-0 bg-[#089CAC] transition-all duration-400"
            : "w-60 overflow-y-auto h-screen bg-[#089CAC] md:flex-col md:flex hidden transition-all duration-400"
        }
      >
        <div className="flex justify-center mx-auto text-white font-semibold text-2xl mt-4">
          <MdClose
            className="cursor-pointer md:hidden"
            onClick={() => {
              setWidth(!width);
            }}
          />
          <h2
            onClick={() => {
              navigate("/dashboard");
            }}
            className={
              width ? "hidden md:flex cursor-pointer" : "cursor-pointer"
            }
          >
            Logo
          </h2>
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-10 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/dashboard"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiHomeSmileFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Dashboard
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/all-patient"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiUserHeartFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Pateint
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/all-doctor"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <FaUserNurse className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Doctor
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/all-lab"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <ImLab className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Lab
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/all-pharmacy"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <MdLocalPharmacy className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Pharmacy
            </h2>
          </NavLink>
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-4 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/all-orders"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <IoBagAdd className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Orders
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/all-medical-history"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <TbReportMedical className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Medical
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/all-prescription"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiFileList3Fill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Prescription
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/all-payment"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <FaRupeeSign className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Payment
            </h2>
          </NavLink>
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-4 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/all-appointment"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <BsFillCalendarCheckFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Appointments
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/lab-test"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiHeartPulseFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Lab Test
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/services"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <MdOutlineMiscellaneousServices className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Services
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/support"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiCustomerService2Fill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Support
            </h2>
          </NavLink>
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-4 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/banner"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <SiSlideshare className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
            Banners
            </h2>
          </NavLink>
          
          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/setting"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiSettings5Fill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
            Setting
            </h2>
          </NavLink>
          
          {/* <hr className="border-1 border-gray-500" />
          <div className="flex cursor-pointer items-center space-x-2 ">
            <ImLab className="text-xl text-white " />
            <h2
              className={width ? "hidden" : "text-sm text-white font-normal"}
            >
              Lab
            </h2>
          </div>
          <hr className="border-1 border-gray-500" /> */}
          {/* <div className="flex cursor-pointer items-center space-x-2 ">
            <MdLocalPharmacy className="text-xl text-white " />
            <h2
              className={width ? "hidden" : "text-sm text-white font-normal"}
            >
              Pharmacy
            </h2>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
