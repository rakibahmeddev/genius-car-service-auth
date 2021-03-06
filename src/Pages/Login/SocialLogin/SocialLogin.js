import React from "react";
import google from "../../../images/socialLogin/google.png";
import facebook from "../../../images/socialLogin/facebook.png";
import github from "../../../images/socialLogin/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="social-login d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mx-4 mt-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary  w-50"></div>
      </div>

      {errorElement}
      {/* google sign in  */}
      <div className="google-sign-in my-3">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-white border border-dark d-flex justify-content-center align-items-center d-block mx-auto"
        >
          <img className="mx-2" src={google} alt="" />{" "}
          <span>Continue with Google</span>
        </button>
      </div>
      {/* facebook sign in  */}
      <div className="google-sign-in my-3">
        <button className="btn btn-primary d-flex justify-content-center align-items-center d-block mx-auto">
          <img className="mx-2" src={facebook} alt="" />{" "}
          <span>Continue with Facebook</span>
        </button>
      </div>
      {/* github sign in  */}
      <div className="google-sign-in my-3">
        <button className="btn btn-dark d-flex justify-content-center align-items-center d-block mx-auto">
          <img className="mx-2" src={github} alt="" />{" "}
          <span>Continue with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
