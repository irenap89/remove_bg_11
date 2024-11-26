
import './Bg.css';
import close from './assets/close.png'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import Download from './Download'
import { useState } from 'react';
import No_bg_tab from './No_bg_tab';

function Bg() {

    const [tab, set_tab] = useState('bg');
    const [show_eula, set_show_eula] = useState(false);
    
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
                          <div className={'tab_no_bg ' + (tab=='bg'? "selected_tab": "")} onClick={()=>set_tab('bg')}> הוסר רקע </div>
                          <div className={'tab_original ' + (tab=='original'? "selected_tab": "")}  onClick={()=>set_tab('original')}>מקורי </div>
                    </div>

                    <div className='middle_cont_left'>
                        {tab=='bg' ?<No_bg_tab type="bg"></No_bg_tab>:
                        <No_bg_tab type="original"></No_bg_tab>}
                    </div>

                    <div className='middle_cont_left_footer'> 
                        <div className='text_eula'>
                            על ידי העלאת תמונה, אתה מסכים לתאנים וההגבלות
                        </div>
                        <div className='eula' onClick={()=>set_show_eula(true)}> תקנון החברה </div>
                    </div>
                </div>

            </div>


            <div className='footer'>
                    <img src={banner} /> 
                    <img src={logo} /> 
            </div>


        </div>

            {show_eula?
            <>
                <div className='overlay'> </div>
                <div className='eula_popup_cont'>
                    dfghfdgh <br/>
                    fdhgj 
                    ghfj 
                    gfhj <br/>
                    dfghfdgh <br/>
                    fdhgj <br/>
                    ghfj 
                    gfhj 

                </div>
            </>: <></>

                
            }

    </div>
  );
}

export default Bg;
