import React, { useState } from "react";


// Validation patterns
const VALIDATION_PATTERNS = {
  fullName: /^[a-zA-Z\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneNumber: /^[0-9]{10}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

const api = "https://648834b2a68e9e73da5e022f.mockapi.io/api/v1/users";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    location: 'vietnam'
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);


  const validateField = (keyName, value) => {
    if(!value) return `${keyName} is required`;

    const patterns = {
      fullName: "Name should only contain letters and spaces (2-50 characters)",
      email: "Please enter a valid email address",
      phoneNumber: "Phone number should be 10 digits",
      password: "Password must be at least 8 characters with letters and numbers"
    };

    return VALIDATION_PATTERNS[keyName]?.test(value) ? "" : patterns[keyName];
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(formErrors).some(error => error)) return;

    try {
      setLoading(true);
      // const response = await axios.post(api, formData);
      // console.log("🚀 ~ handleSubmit ~ response:", response)
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }


  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Let's get you started</h2>
          <p className="text-red-500 text-xs">Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none"
              placeholder="Enter your full name"
            />
            {formErrors.fullName && <p className="text-sm text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
            {formErrors.email && <p className="text-sm text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none"
              placeholder="Enter your phone number"
            />
            {formErrors.phoneNumber && <p className="text-sm text-red-500 text-xs mt-1">{formErrors.phoneNumber}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none"
              placeholder="Create a password"
            />
            {formErrors.password && <p className="text-sm text-red-500 text-xs mt-1">{formErrors.password}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Location
              <span className="text-xs text-gray-400 ml-1">(Optional)</span>
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none"
            >
              <option value="vietnam">Vietnam</option>
              <option value="japan">Japan</option>
              <option value="china">China</option>
              <option value="other">Other</option>
            </select>
            {formErrors.location && <p className="text-sm text-red-500 text-xs mt-1">{formErrors.location}</p>}
          </div>

          <div className="mb-0">
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-red-500 text-xs">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
