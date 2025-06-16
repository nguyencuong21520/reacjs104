import React, { useState, useEffect } from "react";
import { Button, Input, Select, message } from "antd";
import ErrorMsg from "./components/ErrorMsg";
import { GlobalOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

// Validation patterns
const VALIDATION_PATTERNS = {
  fullName: /^[a-zA-Z\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneNumber: /^[0-9]{10}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

// API endpoint
const API_ENDPOINT = "https://api.example.com/register";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    location: "vietnam"
  });

  // Validate form fields
  const validateField = (name, value) => {
    if (!value) return `${name} is required`;

    const patterns = {
      fullName: "Name should only contain letters and spaces (2-50 characters)",
      email: "Please enter a valid email address",
      phoneNumber: "Phone number should be 10 digits",
      password: "Password must be at least 8 characters with letters and numbers"
    };

    return VALIDATION_PATTERNS[name]?.test(value) ? "" : patterns[name];
  };

  // Handle input change
  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const errors = {};
      
      // Validate all fields
      Object.keys(formData).forEach((key) => {
        if (key !== "location") {
          const error = validateField(key, formData[key]);
          if (error) errors[key] = error;
        }
      });

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      // Call API
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      message.success("Registration successful!");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        location: "vietnam"
      });
      setFormErrors({});
      
    } catch (error) {
      message.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setFormErrors({});
    };
  }, []);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <h2 className="text-xl mb-6 text-gray-500">Let's get you started</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block mb-2">Full Name</label>
            <Input 
              name="fullName"
              value={formData.fullName}
              prefix={<UserOutlined />} 
              onChange={(e) => handleChange("fullName", e.target.value)}
              status={formErrors.fullName ? "error" : ""}
            />
            <ErrorMsg message={formErrors.fullName || "This is the name you'll use on your profile."} />
          </div>

          <div className="form-group">
            <label className="block mb-2">Email Address</label>
            <Input 
              name="email"
              value={formData.email}
              prefix={<MailOutlined />} 
              onChange={(e) => handleChange("email", e.target.value)}
              status={formErrors.email ? "error" : ""}
            />
            <ErrorMsg message={formErrors.email || "We'll send you a confirmation email."} />
          </div>

          <div className="form-group">
            <label className="block mb-2">Phone Number</label>
            <Input 
              name="phoneNumber"
              value={formData.phoneNumber}
              prefix={<PhoneOutlined />} 
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              status={formErrors.phoneNumber ? "error" : ""}
            />
            <ErrorMsg message={formErrors.phoneNumber || "We'll use this for important updates."} />
          </div>

          <div className="form-group">
            <label className="block mb-2">Password</label>
            <Input.Password 
              name="password"
              value={formData.password}
              prefix={<LockOutlined />} 
              onChange={(e) => handleChange("password", e.target.value)}
              status={formErrors.password ? "error" : ""}
            />
            <ErrorMsg message={formErrors.password || "Must be at least 8 characters with letters and numbers."} />
          </div>

          <div className="form-group">
            <label className="flex items-center gap-1 mb-2">
              <span>Location</span>
              <span className="text-[10px] text-gray-500">
                (Optional)
              </span>
            </label>
            <Select
              value={formData.location}
              onChange={(value) => handleChange("location", value)}
              prefix={<GlobalOutlined />}
              className="w-full"
              options={[
                { value: "vietnam", label: "Vietnam" },
                { value: "japan", label: "Japan" },
                { value: "china", label: "China" },
                { value: "other", label: "Other" },
              ]}
            />
            <ErrorMsg message="Select your country of residence." />
          </div>

          <div className="form-group">
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full"
              loading={loading}
            >
              {loading ? "Registering..." : "Submit"}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
