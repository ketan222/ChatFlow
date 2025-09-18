import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-white text-gray-800">
      <div className="border-2 border-gray-200 w-[80%] md:w-[35%] lg:w-[30%] rounded-xl flex flex-col items-center p-6 shadow-md shadow-gray-500">
        {/* Header */}
        <div className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center justify-center w-full">
          Signup
        </div>

        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="border-2 border-gray-300 p-3 rounded-md w-full outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 p-3 rounded-md w-full outline-none"
          />
          <button
            className="bg-blue-500 text-white py-3 rounded-md w-full text-lg hover:scale-105 transition-transform"
            style={{ transitionDuration: "2s" }} // long smooth hover
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
            }}
          >
            {loading ? "Loading..." : "SignUp"}
          </button>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link
              to={`${loading ? "#" : "/login"}`}
              className="text-blue-500 hover:underline "
            >
              Login
            </Link>
          </div>
        </form>

        {/* Social Login Buttons */}
        <div className="flex gap-4 mt-6 w-full">
          <button className="flex items-center justify-center border-2 border-gray-300 px-4 py-2 rounded-md bg-white w-1/2 hover:bg-gray-100 transition">
            <GoogleIcon className="text-blue-500 mr-2" /> Google
          </button>
          <button className="flex items-center justify-center border-2 border-gray-300 px-4 py-2 rounded-md bg-white w-1/2 hover:bg-gray-100 transition ">
            <FacebookIcon className="text-blue-600 mr-2" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
