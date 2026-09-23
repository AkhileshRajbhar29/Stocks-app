import React from "react";
import { useState } from "react";

const SignUp = () => {

  const [loginEmail, setLoginEmail] =useState(" ");
  const [loginPassword, setPasswordEmail] =useState(" ");

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden", padding: "20px",
      }}
    >
      {/* Main Glass Container */}
      <div
        className="w-100 position-relative overflow-hidden"
        style={{ maxWidth: "1020px", height: "665px", backgroundColor:"rgba(59, 56, 111, 0.6)",  border: "2px solid rgba(255,255,255,0.55)", borderRadius: "25px", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)", boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
        }}
      >
 

 

        {/*  SIGNUP CARD   */}

        <div
          className="position-absolute start-50 top-50"
          style={{
            width: "365px",
            minHeight: "410px",
            transform: "translate(-50%, -42%)",
            padding: "50px 32px 25px",
            borderRadius: "20px",
            border: "2px solid rgba(255,255,255,0.3)",
            background: "rgba(70,80,100,0.38)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 10px 35px rgba(0,0,0,0.35)",
            color: "white",
          }}
        >
          {/* Heading */}
          <h1
            className="text-center fw-bold"
            style={{ fontSize: "30px", marginBottom: "15px",
            }}
          >
            Sign Up
          </h1>

          {/* Login */}
          <p
            className="text-center"
            style={{ fontSize: "14px",  marginBottom: "30px", color: "rgba(255,255,255,0.9)",
            }}
          >
            Already a member?
            <a
              href="/"
              className="text-decoration-none fw-bold"
              style={{
                color: "#2196f3",
              }}
            >
              {" "}
              Log in
            </a>
          </p>

          {/* Email */}
          <div className="mb-4">
            <label
              className="d-block fw-medium"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Email
            </label>

            <input
              type="email"
              className="w-100"
              style={{ height: "30px", background: "transparent", border: "none", borderBottom: "2px solid white", outline: "none", color: "white", fontSize: "16px"}}/>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="d-block fw-medium"
              style={{ fontSize: "15px", marginBottom: "5px", }}
            >
              Password
            </label>

            <input
              type="password"
              className="w-100"
              style={{
                height: "30px",
                background: "transparent",
                border: "none",
                borderBottom: "2px solid white",
                outline: "none",
                color: "white",
                fontSize: "16px",
              }}
            />
          </div>

          {/* Signup Button */}
          <button
            className="btn w-100 text-white fw-bold"
            style={{ height: "46px", borderRadius: "5px", backgroundColor: "#5592fb", fontSize: "19px",
            }}
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="d-flex align-items-center gap-2 mt-3">
            <span
              className="flex-grow-1"
              style={{
                height: "2px",
                backgroundColor: "white",
              }}
            ></span>

            <span
              style={{
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              or sign up with
            </span>

            <span
              className="flex-grow-1"
              style={{
                height: "2px",
                backgroundColor: "white",
              }}
            ></span>
          </div>

          {/* Social Buttons */}
          <div className="d-flex justify-content-center gap-4 mt-3">

            <button
              className="border-0 rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "38px", height: "38px", background: "transparent", color: "#1877f2", fontSize: "23px"}}
            >
              <i class="fa-brands fa-facebook" style={{color: "#5592fb"}}></i>
            </button>

            <button
              className="border-0 rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "38px", height: "38px", background: "transparent", color: "#4285f4", fontSize: "23px" }}
            >
              <img
                src="media/images/google.png"
                alt="Google"
                style={{ width: "24px", height: "24px"}}
              />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;