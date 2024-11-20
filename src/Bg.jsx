
import './Bg.css';
import close from './assets/close.png'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import Download from './Download'
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
                <div className='middle_cont_right'> 
                    <div className='download_cont'>
                        <Download title="תמונה חינם" subtitle="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"></Download>
                        <Download title="Pro" subtitle="תמונה מלאה"  btn_text="HD הורד"  small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></Download>
                    </div>

                </div>


                <div className='middle_cont_left'> 
                    <div className='tabs'>
                          <div className='tab_no_bg selected_tab'> הוסר רקע </div>
                          <div className='tab_original '>מקורי </div>
                    </div>

                    <div className='middle_cont_left'>

                    </div>
                </div>

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
