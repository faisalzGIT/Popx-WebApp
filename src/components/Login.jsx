import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// <FaRegEye /> 
// <FaRegEyeSlash />



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    //Initialize userData with useState callback
    const [userData] = useState(() => 
        JSON.parse(localStorage.getItem("userData")) || {
            email: "",
            password: ""
        }
    );


    const handleLogin = (e) => {
        e.preventDefault(); // prevent form submission or page reload
        if (!email.trim() || !password.trim()) {
          alert("Please fill in both email and password.");
          return;
        }

        // Add your login logic here
        // For example, you might want to validate the email & password format
            if (!/\S+@\S+\.\S+/.test(email)) {
              alert('Please enter a valid email');
              return;
            }
            if (password.length < 8) {
              alert('Please enter a valid Password (at least 8 characters)');
              return;
            }

        // Proceed with login (e.g., API call)
        if(email === userData.email && password === userData.password){
            alert("Login Successful");
            navigate('/account-settings'); // Redirect to account settings page after successful login
        } else {
            alert("Invalid email or password"); 
        }


        console.log("Logging in with", email, password);
        // Reset fields after login
        setEmail("");
        setPassword("");
    }

  return (
    <>
        <div className="mainCont bg-purple-50 w-full h-[100vh]">
            <div className="home w-fit md:w-[360px] bg-white relative m-auto h-full">
                <div className="bottm p-4 0 h-1/2">
                    <div className="head"> 
                        <h1 className="text-3xl font-bold pt-4">Sign-in to your PopX Account</h1>
                        <p className="w-3/4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
                    </div>
                    <form onSubmit={handleLogin} className="inputFields flex flex-col gap-4 mt-4 ">
                        <div className="emailInput relative">
                            <input   autoComplete="email" type="text" id="emailLog"  value={email} onChange={(e) => setEmail(e.target.value)} className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8454f4]"/>
                            <label htmlFor="emailLog" 
                            className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                ${email?
                            "-top-3 text-[13px] font-semibold  text-purple-700":
                            " top-2  text-gray-500 "}`}>Email Address</label>
                        </div>
                        <div className="passwordInput relative">
                            <input   autoComplete="current-password" type={showPassword ? "text" : "password"} id="passLog" value={password} onChange={(e) => setPassword(e.target.value)} className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8454f4]"/>
                            <label htmlFor="passLog" 
                            className={`absolute left-1 bg-white transition-all duration-300 text-[15px] transform scale-100 px-1 py-0 peer-focus:text-[13px] peer-focus:text-purple-700 peer-focus:-top-3  peer-focus:opacity-100 peer-focus:font-semibold                          
                                ${password?
                            "-top-3 text-[13px] font-semibold  text-purple-700":
                            " top-2  text-gray-500 "}`}>Password</label>

                            {/* 👁 Eye toggle button */}
                            {password &&
                            <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-700 focus:outline-none"
                                  >
                                    {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                                  </button>
                                  }
                        </div>
                        <button
                          type="submit"
                          className="w-full font-semibold bg-purple-700 text-purple-50 py-2 rounded-md hover:bg-purple-800 transition">
                          Login
                        </button>
                    </form>
            
            
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;
// This code defines a Login component that renders a login form with fields for username and password, and a submit button.