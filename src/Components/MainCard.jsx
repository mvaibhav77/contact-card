import logo from '../assets/logo.png'
import { MdCall, MdMail, MdLocationOn } from 'react-icons/md'
import {SiGooglechrome} from 'react-icons/si'

function MainCard() {
  return (
    <div className="card main-card" id='home'>
        <div className="card-body text-white">
            <div className="header mt-3">
                <img src={logo} alt="" srcSet="" height={90} width={160} className='img border border-light rounded my-2'/>
                <h4>DAERA-REALTY</h4>
                <h5>REAL-ASSETS 'Promoters & Marketers'</h5>
                <hr/>
            </div>
            <div className="badges row justify-content-center">
                <button className="btn btn-primary rounded mx-3 my-2 col" onClick={(e)=>{
                    e.preventDefault();
                    window.open('https://wa.me/919003867237', '_blank');
                }}>Whatspp</button>
                <button className="btn btn-primary rounded mx-3 my-2 col"onClick={(e)=>{
                    e.preventDefault();
                    window.open('https://wa.me/919003867237', '_blank');
                }}>Direction</button>
                <button className="btn btn-primary rounded mx-3 my-2 col"onClick={(e)=>{
                    e.preventDefault();
                    window.open('mailto:balaji@digitalsolutionsbay.com', '_blank');
                }}>Mail</button>
                <button className="btn btn-primary rounded mx-3 my-2 col"onClick={(e)=>{
                    e.preventDefault();
                    window.open('tel:9003867237', '_blank');
                }}>Call</button>
            </div>
            <div className="badges-info col mt-4 mx-3">
                <div className="row align-items-center px-1">
                    <button className="btn rounded-circle col-2 col-sm-1 btn-dark"><MdLocationOn /></button>
                    <p className='col-9 rounded p-2'>	Near Shalini Grounds(CGMG), 5th Block, JAYANAGARA, Bengaluru-560041</p>
                </div>
                <div className="row align-items-center  px-1">
                    <button className="btn rounded-circle col-2 col-sm-1 btn-dark"><MdMail /></button>
                    <p className='col-9 rounded p-2'>balaji@digitalsolutionsbay.com</p>
                </div>
                <div className="row align-items-center  px-1">
                    <button className="btn rounded-circle col-2 col-sm-1 btn-dark"><SiGooglechrome /></button>
                    <p className='col-9 rounded p-2'>https://coinmasters.in</p>
                </div>
                <div className="row align-items-center  px-1">
                    <button className="btn rounded-circle col-2 col-sm-1 btn-dark text-center"><MdCall /></button>
                    <p className='col-9 rounded p-2'>+91 90038 67237 <br /> +91 18259 8076</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainCard