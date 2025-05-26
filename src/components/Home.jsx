import { useNavigate } from 'react-router-dom';
import pSvg from '../assets/p.svg';

function Home(){
    const navigate = useNavigate();

    function handleNewAcc(){
        navigate('/signup');
    }
    function handleOldAcc(){
        navigate('/login')
    }

    return (<>
        <div className="mainCont bg-purple-50 w-full h-[100vh] relative">
            <div className="home w-full md:w-[370px] bg-white relative m-auto h-full">
                <div className="theSVG md:pt-12 pt-19 ">
                    <img src={pSvg} alt="Home SVG" className=" w-90 m-auto h-90 object-cover" />
                </div>
                <div className="bottm absolute bottom-0 p-2 h-3/4 flex flex-col justify-end w-full"> 
                    <div className="head mb-7 md:mb-0"> 
                        <h1 className="text-4xl font-semibold pb-2">Welcome to PopX</h1>
                        <p className="w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="btns flex flex-col gap-2 mt-4">
                        <button className="bg-purple-600 text-white text-2xl md:text-xl p-4 md:p-2 rounded-md hover:bg-purple-700 font-bold" onClick={handleNewAcc}>Create Account</button>
                        <button className="bg-purple-600 text-white text-2xl md:text-xl p-4 md:p-2 rounded-md hover:bg-purple-700 font-bold" onClick={handleOldAcc}>Already Registered? Login</button>
                    </div>
                </div>
            </div>
        </div>
        </>)
}

export default Home;
// This code defines a Home component that renders a welcome message and a description of the home page.