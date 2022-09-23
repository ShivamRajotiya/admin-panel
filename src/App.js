import React from "react";
import Dashboard from "./MyComponents/Dashboard/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import "@fontsource/poppins";
import AllPatient from "./MyComponents/Patient/AllPatient";
import AddPatient from "./MyComponents/Patient/AddPatient";
import EditPatient from "./MyComponents/Patient/EditPatient";
import AllDoctor from "./MyComponents/Doctors/AllDoctor";
import AddDoctor from "./MyComponents/Doctors/AddDoctor";
import EditDoctor from "./MyComponents/Doctors/EditDoctor";
import Login from "./MyComponents/Login/Login";
import EditProfile from "./MyComponents/Login/EditProfile";
import Forget from "./MyComponents/Login/Forget";
import AllLab from "./MyComponents/Lab/AllLab";
import AddLab from "./MyComponents/Lab/AddLab";
import EditLab from "./MyComponents/Lab/EditLab";
import AllPharmacy from "./MyComponents/Pharmacy/AllPharmacy";
import AddPharmacy from "./MyComponents/Pharmacy/AddPharmacy";
import EditPharmacy from "./MyComponents/Pharmacy/EditPharmacy";
import MobileNav from "./MyComponents/MobileNav/MobileNav";
import AllItem from "./MyComponents/MobileNav/AllItem";
import AllOrders from "./MyComponents/Orders/AllOrders";
import OrderView from "./MyComponents/Orders/OrderView";
import AllMedicalRecord from "./MyComponents/MedicalHis/AllMedicalRecord";
import AllPrescription from "./MyComponents/Prescription/AllPrescription";
import AllPayment from "./MyComponents/Payment/AllPayment";
import AllAppointment from "./MyComponents/Appointment/AllAppointment";
import LabTest from "./MyComponents/LabTest/LabTest";
import { ToastContainer } from "react-toastify";
import AdminRegistration from "./MyComponents/Login/AdminRegistration";
import Adminreg from "./MyComponents/Login/Adminreg";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {/* <Dashboard/> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/adminreg" element={<Adminreg />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-patient" element={<AllPatient />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/edit-patient" element={<EditPatient />} />
        <Route path="/all-doctor" element={<AllDoctor />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/edit-doctor" element={<EditDoctor />} />
        <Route path="/all-lab" element={<AllLab />} />
        <Route path="/add-lab" element={<AddLab />} />
        <Route path="/edit-lab" element={<EditLab />} />
        <Route path="/all-pharmacy" element={<AllPharmacy />} />
        <Route path="/add-pharmacy" element={<AddPharmacy />} />
        <Route path="/edit-pharmacy" element={<EditPharmacy />} />
        <Route path="/mobile-nav" element={<MobileNav />} />
        <Route path="/all-item" element={<AllItem />} />
        <Route path="/all-orders" element={<AllOrders />} />
        <Route path="/view-order" element={<OrderView />} />
        <Route path="/all-medical-history" element={<AllMedicalRecord />} />
        <Route path="/all-prescription" element={<AllPrescription />} />
        <Route path="/all-payment" element={<AllPayment />} />
        <Route path="/all-appointment" element={<AllAppointment />} />
        <Route path="/lab-test" element={<LabTest />} />
      </Routes>
    </>
  );
};

export default App;
