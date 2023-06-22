import React, { useState } from 'react'
import { toast } from "react-toastify";
import './CSS/Loginstyle.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../MyContax/Auth';
import Layout from '../Common/Layout';
const Login = () => {
  const [auth, setAuth] = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Button Loading 
    try {
      const res = await axios.post(
        `https://ecom23-i2q2.onrender.com/api/auth/login`,
        { email, password }
      );
      console.log("Res", res);

      if (res && res.data.success) {
        await toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        navigate("/")
        localStorage.setItem("auth", JSON.stringify(res.data));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>

      {/* Sing in  Form  Start*/}
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                The best offer <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
              <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <h1 style={{ textAlign: "center", marginBottom: 50, textDecoration: "underline", color: "#83b9f8" }}>User Login</h1>
                    {/* 2 column grid layout with text inputs for the first and last names */}

                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                      <input type="email" id="form3Example4" className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      <input type="password" id="form3Example4" className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">

                      <Link to="/forgetPassword" className="form-check-label" htmlFor="form2Example33">
                        Forget Password
                      </Link>
                    </div>
                    {/* Submit button */}
                    <button type="submit" id="form3Example4" className="btn btn-primary btn-block mb-4"
                      onClick={handleSubmit}
                    >
                      Log In
                    </button>
                    <div className="form-check d-flex justify-content-center mb-4">
                      <Link to="/register" className="form-check-label" htmlFor="form2Example33">
                        Not a user? or Sign Up
                      </Link>
                    </div>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sing in  Form  End*/}

    </>
  )
}

export default Login