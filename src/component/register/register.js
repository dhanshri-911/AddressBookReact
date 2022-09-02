import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./register.css";
//import logo from "../assets/images/icon.png";
import UserService from "../../service/UserService";

const Register = (props) => {
  let initialValue = {
    userName: "",
    password: "",
    emailId: "",
    error: {
      userName: "",
      password: "",
      emailId: "",
    },
  };
  const [formValue, setForm] = useState(initialValue);

  const setData = (obj) => {
    console.log();
    setForm({
      ...formValue,
      ...obj,
      // isUpdate:true,
      // id: obj.empId,

      userName: obj.userName,
      password: obj.password,
      emailId: obj.email,
    });
    console.log(formValue);
  };

  const changeValue = (event) => {
    setForm({ ...formValue, [event.target.name]: event.target.value });
  };

  const save = async (event) => {
    event.preventDefault();

    let object = {
      userName: formValue.usertName,
      password: formValue.password,
      emailId: formValue.emailId,
    };
    console.log(object);

    UserService.addUser(object)
      .then((response) => {
        console.log(response);
        alert("User registration is Added", response);
      })
      .catch((error) => {
        console.log(error);
        alert("Not Added User!!");
      });
  };

  const reset = () => {
    setForm({
      ...initialValue,
      id: formValue.id,
      isUpdate: formValue.isUpdate,
    });
  };

  return (
    <div align="center">
      <form action="#" className="form" onSubmit={save} onReset={reset}>
        
          <div className="wrapper"><h2>Registration</h2></div>
          <div className="form-logo-content">
            {/* <Link to="/home">
                                <img src="../assets/images.png" style={{ height: "25px" }} />
                            </Link> */}
          </div>
        

        <div className="row-content">
          {/* USER NAME */}

          <label className="label text" htmlFor="userName" placeholder="Enter your">
            {" "}
            UserName{" "}
          </label>
          <input
            className="input-box"
            type="text"
            name="userName"
            id="userName"
            value={formValue.userName}
            onChange={changeValue}
            required
          />
          {/* <error-output className="userName-error" htmlFor="text" /> */}
        </div>

        <div className="row-content">
          {/* PASSWORD */}

          <label className="label text" htmlFor="password" placeholder="Enter your password">
            {" "}
            Password{" "}
          </label>
          <input
            className="input-box"
            type="password"
            name="password"
            id="password"
            value={formValue.password}
            onChange={changeValue}
            required
          />
          <error-output className="password-error" htmlFor="text" />
        </div>

        <div className="row-content">
          {/* EMAIL ID */}

          <label className="label text" htmlFor="emailId" placeholder="Enter email id">
            {" "}
            Email ID{" "}
          </label>
          <input
            className="input-box"
            type="text"
            name="emailId"
            id="emailId"
            value={formValue.emailId}
            onChange={changeValue}
            required
          />
          <error-output className="emailId-error" htmlFor="text" />
        </div>

        <div>
          <button className="button-reset" type="submit">
            {" "}
            Register{" "}
          </button>
        </div>

        <div className="link">
        <h3>Already have an account</h3>
          <Link to="/login" className="link">
             {" "}
            <h2>Login Now</h2>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
