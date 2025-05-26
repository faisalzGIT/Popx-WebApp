import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
          localStorage.setItem('userData', JSON.stringify({
      ...formData,
      profileImage: null,
      bio: ''
    }));

    console.log("Password is:"+formData.password)
    console.log('Account created and saved!');
    alert('Account created');
    navigate('/account-settings');
  };

    
  };

  return (
    <div className="h-[100vh] relative top-0 bg-purple-50 flex items-center justify-center ">
      <div className="h-[100vh] bg-white shadow-lg p-6 w-full md:w-[370px]">
        <h1 className="text-2xl font-bold mb-8 border-b-1 text-purple-900 border-purple-600 pb-3 px-3 w-fit m-auto">
          Create your PopX account
        </h1>
        
        <form className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder=""
              className={` peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <label htmlFor='fullName' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                ${formData.fullName?
                            "-top-3 text-[13px] font-semibold  text-purple-700":
                            " top-2  text-gray-500 "}`}>
              Full Name
            </label>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className='relative'>
           
            <input
              type="tel"
              name="phoneNumber"
              id='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
             <label htmlFor='phoneNumber' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                ${formData.phoneNumber?
                            "-top-3 text-[13px] font-semibold  text-purple-700":
                            " top-2  text-gray-500 "}`}>
              Phone number
            </label>
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Email */}
          <div className='relative'>
            
            <input
              type="email"
              name="email"
              id='email1'
              autoComplete="username"
              value={formData.email}
              onChange={handleInputChange}
              className={` peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <label htmlFor='email1' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                ${formData.email?
                            "-top-3 text-[13px] font-semibold  text-purple-700":
                            " top-2  text-gray-500 "}`}>
              Email address
            </label>

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className='relative'>
            
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id='pass'
                autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              className={`peer w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />

            {/* 👁 Eye toggle button */}
              {formData.password &&
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-700 focus:outline-none"
                >
                  {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                </button>
                }
            <label htmlFor='pass' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                        ${formData.password?
                    "-top-3 text-[13px] font-semibold  text-purple-700":
                    " top-2  text-gray-500 flex "}`}>
              Password
            </label>
            

            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Company Name */}
          <div className='relative'>
            
            <input
              type="text"
              name="companyName"
              id='compName'
              value={formData.companyName}
              onChange={handleInputChange}
              className="peer w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
            />
            <label htmlFor='compName' className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                ${formData.phoneNumber?
                            "-top-3 text-[13px] font-semibold  text-purple-700":
                            " top-2  text-gray-500 "}`}>
              Company name
            </label>
          </div>

          {/* Agency Question */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">
              Are you an Agency?*
            </p>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === true}
                  onChange={() => handleRadioChange(true)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.isAgency === true 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {formData.isAgency && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === false}
                  onChange={() => handleRadioChange(false)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.isAgency === false 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {formData.isAgency === false && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 outline-none mt-8"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;