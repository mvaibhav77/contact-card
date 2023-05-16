import {MdHome,MdChatBubble} from 'react-icons/md';
import {BsBriefcaseFill} from 'react-icons/bs'
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
    <Router>
      <div className="footer bg-white row px-0">
        <Link to='#home' className='col-4'>
          <button className="btn border-0 w-100">
            <div className="text-center fs-2"><MdHome color='#2ba1bf'/></div>
            <div className="text-center footer-item pb-1">HOME</div>
          </button>
        </Link>
        <Link to='#about' className='col-4'>
          <button className="btn border-0 w-100">
            <div className="text-center fs-2"><BsBriefcaseFill color='#2ba1bf'/></div>
            <div className="text-center footer-item pb-1">ABOUT</div>
          </button>
        </Link>
        <Link to='#enquiry' className='col-4'>
          <button className=" btn border-0 w-100">
            <div className="text-center fs-2"><MdChatBubble color='#2ba1bf'/></div>
            <div className="text-center footer-item pb-1">ENQUIRY</div>
          </button>
        </Link>
      </div>
    </Router>

  )
}

export default Footer