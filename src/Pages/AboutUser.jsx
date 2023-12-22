import { PiStudent } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import { MdDeveloperMode } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";

const AboutUser = () => {
    return (
        <div>
             <div className='py-10 bg-rose-400 text-rose-100'>
            <div className="text-center text-5xl py-14">People Who Use To Make<br/> Their Daily life Easy</div>
            <div className="grid md:grid-cols-4 px-5 md:px-24">
                <div className="text-center pb-10">
                    <PiStudent className="text-6xl mx-auto"/>
                    <h1 className='py-2 text-4xl'>Student</h1>
                    
                </div>
                <div className="text-center pb-10">
                    <CiBank className="text-6xl mx-auto" />
                    <h1 className='py-2 text-4xl'>Bankers</h1>
                    
                </div>
                <div className="text-center pb-10">
                   <MdCorporateFare className="text-6xl mx-auto" />
                    <h1 className='py-2 text-4xl'>Corporate professionals</h1>
                    
                </div>
                <div className="text-center pb-10">
                   <MdDeveloperMode className="text-6xl mx-auto"/>
                    <h1 className='py-2 text-4xl'>Developers</h1>
                    
                </div>
            </div>
        </div> 
        </div>
    );
};

export default AboutUser;