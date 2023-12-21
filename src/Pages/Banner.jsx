import { useNavigate } from 'react-router-dom';
import picture from '../../public/banner.png'

const Banner = () => {
    const navigate = useNavigate();
    const handleClick =() =>{
        navigate('/LogIn')
    }
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${picture})`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="mx-auto">
            <button onClick={handleClick} className="btn btn-primary text-4xl">Let's Explore</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;