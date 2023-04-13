import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css'
import Header from "../../components/Header/Header";

const Register = () => {
  return (
    <>
    <Header />
      <div className="register bg-light">
        <div className="container">
          <h2>Ro’yhatdan O’tish</h2>
          <p>Xush kelibsiz! E’lon berish uchun ro’yhatdan o’ting.</p>
        </div>
      </div>
    </>
  );
};

export default Register;
