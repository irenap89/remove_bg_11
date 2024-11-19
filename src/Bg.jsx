
import './Bg.css';
import close from './assets/close.png'
import banner from './assets/banner.png'
import logo from './assets/logo.png'

function Bg() {
  return (
    <div className="Bg">
        <div className='bg_cont'>
            <div className='header'> 
                <div className='header_title'> העלה תמונה כדי להסיר את הרקע </div>
                <img src={close} className='close_icon'/>
                <button className='upload_btn'> העלאת תמונה </button>
                <div className='upload_btn_text'> פורמטים נתמכים  png, jpg</div>
            </div>

            <div className='middle_cont'>


            </div>


            <div className='footer'>
                    <img src={banner} /> 
                    <img src={logo} /> 
            </div>


        </div>
    </div>
  );
}

export default Bg;
