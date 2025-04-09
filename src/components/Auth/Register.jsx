import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://fff-api.navkiraninfotech.com/api/register", data);
      console.log("Success:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      
      // Extract the error message properly
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      
      alert(errorMessage); // Display error message
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
  <div className="card p-4 shadow rounded" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Register</h2>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      {/* <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          {...register("name", { required: "Name is required" })} 
          className={`form-control ${errors.name ? "is-invalid" : ""}`} 
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div> */}

      {/* Email Field */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } 
          })} 
          className={`form-control ${errors.email ? "is-invalid" : ""}`} 
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      {/* Password Field */}
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          {...register("password", { 
            required: "Password is required", 
            minLength: { value: 6, message: "At least 6 characters" } 
          })} 
          className={`form-control ${errors.password ? "is-invalid" : ""}`} 
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100">Register</button>
    </form>
  </div>
</div>

  );
};

export default Register;
