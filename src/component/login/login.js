import React, { useState, useEffect } from "react";
 import UserService from '../../service/UserService';
import { useNavigate,useParams, Link } from "react-router-dom";



const Login = (props) => {
  const navigate = useNavigate();
  let initialValue = {
    password: "",
    emailId: "",
    error: {
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

      password: obj.password,
      emailId: obj.emailId,
    });
    console.log(formValue);
  };

  const changeValue = (event) => {
    setForm({ ...formValue, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();

    let object = {
      password: formValue.password,
      emailId: formValue.emailId,
    };
       console.log(object);
      UserService.UserLogin(object)
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token",response.data.data)
        alert("Login Successfully", response);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        alert("User Not Login!!");
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
    <div align = "center" className="form-content">
      <form action="#" className="form" onSubmit={login} onReset={reset} align="center" >
         <div className="formhead">
            <h3>User Login Form</h3>
          </div>
          <div className="row-content">
          <label className="emailId" htmlFor="emailId">
            {" "}
            Email ID{" "}
          </label>
          <input type="text" className="input" id="emailId" name="emailId" value={formValue.emailId}
          placeholder="userEmailId.." onChange={changeValue} required />
          <error-output className="text-error" htmlFor="name"></error-output>
          </div>

        <div className="row-content">
        <label className="password " htmlFor="password">
            {" "}
            Password{" "}
          </label>
          <input type="password" className="input" id="password" name="password" value={formValue.password} onChange={formValue.password}
                            placeholder="password.." type="password" onChange={changeValue} required/>
                        <error-output className="text-error" htmlFor="name"></error-output>
                    
          {/* <input
            className="input"
            type="password"
            name="password"
            id="password"
            value={formValue.password}
            onChange={changeValue}
            required
          /> */}
          <error-output className="password-error" htmlFor="text" />
        </div>

        <div>
          
            <button className="button" type="submit" size="large">
              {" "}
              Login{" "}
            </button>
          </div>

        <div className="link">
          <Link to="/register" className="link">
            {" "}
            New User? Click Here {" "}
          </Link>
        </div>
      </form>
    </div>
   
  );
};

export default Login;
