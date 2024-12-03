
import './Bg.css';
import close from './assets/close.png'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import Download from './Download'
import { useState,useRef } from 'react';
import No_bg_tab from './No_bg_tab';
import close_1 from './assets/close1.png'
import not_robot from './assets/not_robot.png'
import axios from 'axios';

function Bg() {

    const [tab, set_tab] = useState('bg');
    const [show_eula, set_show_eula] = useState(false);
    const [show_download_popup, set_show_download_popup] = useState(false);
  
    const [err_msg, set_err_msg] = useState('');

    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.click();
    };

    function send_img_to_server(img_obj){

        if ((img_obj.files[0].type == "image/png" || img_obj.files[0].type == "image/jpg" || img_obj.files[0].type == "image/jpeg") 
                && img_obj.files[0].size<1000000) {

            let req_url="http://localhost:4000/upload_img"

            let formData = new FormData();
            formData.append('file_img', img_obj.files[0]);
            // formData.append('color','red');
        
            axios({
                method: "post",
                url: req_url,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                //handle success
                debugger;

                console.log('res:'+ response.data);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        } else {
            set_err_msg('פורמט לא נתמך');
        }

    }

  return (
    <div className="Bg">
        <div className='bg_cont'>
            <div className='header'> 
                <div className='header_title'> העלה תמונה כדי להסיר את הרקע </div>
                <img src={close} className='close_icon'/>
                <button className='upload_btn' onClick={focusInput}> העלאת תמונה </button>
                <div className='upload_btn_text'> פורמטים נתמכים  png, jpg</div>

                {err_msg?<div className='err_msg'> {err_msg} </div>: ''}


                <input type="file" ref={inputElement} className='file_input' onChange={(e)=>send_img_to_server(e.target)}/>
            </div>

            <div className='middle_cont'>
                <div className='middle_cont_right'> 
                    <div className='download_cont'>
                        <Download set_show_download_popup={set_show_download_popup} title="תמונה חינם" subtitle="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"></Download>
                        <Download set_show_download_popup={set_show_download_popup} title="Pro" subtitle="תמונה מלאה"  btn_text="HD הורד"  small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></Download>
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
                    <img src={close_1} className='close_1' onClick={()=>set_show_eula(false)}/>

                    <div className='eula_popup_text'> 
                        dfghfdgh <br/>
                        fdhgj 
                        ghfj 
                        gfhj <br/>
                        dfghfdgh <br/>
                        fdhgj <br/>
                        ghfj 
                        gfhj
                    </div>

                </div>
            </>: <></>   
            }


            {show_download_popup?
            <>
                <div className='overlay'> </div>
                <div className='download_popup_cont'>
                    <img src={close_1} className='close_1' onClick={()=>set_show_download_popup(false)}/>

                    <div className='top_img'></div>

                    <div className='download_popup_title'>
                        אישור להורדת תמונה
                    </div>

                    <div className='download_popup_subtitle'>
                        ?האם להוריד את התמונה
                    </div>

                    <div className='checkbox_cont'>
                        <input type="checkbox" />
                        <div className='not_robot_text'> אני לא רובוט </div>
                        <img src={not_robot}  className='not_robot_img'/>

                    </div>


                    <div className='btn_popup_cont'>
                        <button className='btn_popup_cancel' onClick={()=>set_show_download_popup(false)}>ביטול</button>
                        <button className='btn_popup_approve'>אישור</button>
                    </div>

                </div>
            </>: <></>   
            }

    </div>
  );
}

export default Bg;
