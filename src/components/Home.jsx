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
            <div className="home w-full md:max-w-full bg-white relative m-auto h-full">
                <div className="theSVG md:pt-12 pt-19 ">
                    <img src={pSvg} alt="Home SVG" className=" w-90 m-auto h-90 object-cover" />
                </div>
                <div className="bottm absolute bottom-0 md:relative md:gap-4 p-2 h-1/3 flex flex-col justify-end w-full"> 
                    <div className="head mb-7 md:mb-0"> 
                        <div className="monotonFont text-2xl md:text-6xl text-purple-950 pb-2 text-center">
                            <span className='px-1 md:px-3'>Welcome</span>
                            <span className='px-1 md:px-3'>to</span>
                            <span className='px-1 md:px-3'>PopX</span>
                        </div>
                        <p className="w-full text-center">Join our platform to manage your Users Efficiently</p>
                    </div>
                    <div className="btns flex flex-col gap-2 mt-4">
                        <button className="md:w-[360px] w-full m-auto bg-purple-600 text-purple-50 text-2xl md:text-xl p-4 md:p-2 rounded-md hover:bg-purple-700 font-semibold" onClick={handleNewAcc}>Create Account</button>
                        <button className="md:w-[360px] w-full m-auto bg-purple-600 text-purple-50 text-2xl md:text-xl p-4 md:p-2 rounded-md hover:bg-purple-700 font-semibold" onClick={handleOldAcc}>Already Registered? Login</button>
                    </div>
                </div>
            </div>
        </div>
        </>)
}

export default Home;
// This code defines a Home component that renders a welcome message and a description of the home page.