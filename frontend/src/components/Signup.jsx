import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Example usage in your code

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="bg-green min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="mb-5">
          <form className="card-body" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg text-green">
              Please Create An Account!
            </h3>

            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Name</span>
              </label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input input-bordered file-input-bordered"
                required
              />
            </div>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered file-input-bordered"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered file-input-bordered "
                required
              />
            </div>

            {/* submit btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-green text-white"
                value="Sign up"
              />
            </div>

            {/* close btn */}
            <Link to="/">
              <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </div>
            </Link>

            <div className="text-center my-2 text-green">
              Have an account?
              <Link to="/login">
                <button className="ml-2 underline text-green">
                  Login here
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
