
import './Bg.css';
import close from './assets/close.png'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import Download from './Download'
import { useState,useRef ,useEffect} from 'react';
import No_bg_tab from './No_bg_tab';
import close_1 from './assets/close1.png'
import not_robot_img from './assets/not_robot.png'
import axios from 'axios';

function Bg() {

    const [tab, set_tab] = useState('bg');
    const [show_eula, set_show_eula] = useState(false);
    const [show_download_popup, set_show_download_popup] = useState(false);
  
    const [err_msg, set_err_msg] = useState('');
    const [file_name, set_file_name] = useState('');
    const [color, set_color] = useState('');
    const [show_loader, set_show_loader] = useState(false);
    const [not_robot, set_not_robot] = useState(false);
    const [err_msg_down, set_err_msg_down] = useState('');
    
    
    useEffect(() => {
        if (not_robot){
            set_err_msg_down('');
        }
        
     }, [not_robot]);
  

    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.click();
    };

    function set_color_val(val){
        set_color(val);
    }

    function send_img_to_server(img_obj){

        if ((img_obj.files[0].type == "image/png" || img_obj.files[0].type == "image/jpg" || img_obj.files[0].type == "image/jpeg") 
                && img_obj.files[0].size<1000000) {

            set_show_loader(true);

            let req_url="http://localhost:4000/upload_img"

            let formData = new FormData();
            formData.append('file_img', img_obj.files[0]);
            formData.append('color',color);
        
            axios({
                method: "post",
                url: req_url,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
         
                if (response.data.success==false ){
                    set_err_msg('פורמט לא נתמך');
                } else {
                    set_show_loader(false);
                    set_file_name(response.data.file_name);
                }

               
            })
            .catch(function (response) {
                console.log(response);
            });

        } else {
            set_err_msg('פורמט לא נתמך');
        }

    }


    function download_img_func(){
        if (not_robot){
         
      
          fetch('http://localhost:4000/no_bg_'+file_name)
          .then(response => {
              response.blob().then(blob => {
                  let url = window.URL.createObjectURL(blob);
                  let a = document.createElement('a');
                  a.href = url;
                  a.download = file_name;
                  a.click();
              });
             
           });
                

        } else {
            set_err_msg_down('יש לסמן אני לא רובוט');
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
                        <Download set_show_download_popup={set_show_download_popup} file_name={file_name} title="תמונה חינם" subtitle="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"></Download>
                        <Download set_show_download_popup={set_show_download_popup} file_name={file_name} title="Pro" subtitle="תמונה מלאה"  btn_text="HD הורד"  small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></Download>
                    </div>

                </div>


                <div className='middle_cont_left'> 
                    <div className='tabs'>
                          <div className={'tab_no_bg ' + (tab=='bg'? "selected_tab": "")} onClick={()=>set_tab('bg')}> הוסר רקע </div>
                          <div className={'tab_original ' + (tab=='original'? "selected_tab": "")}  onClick={()=>set_tab('original')}>מקורי </div>
                    </div>

                    <div className='middle_cont_left'>
                        {tab=='bg' ?<No_bg_tab type="bg" file_name={file_name} set_color_val={set_color_val} show_loader={show_loader}></No_bg_tab>:
                        <No_bg_tab type="original" file_name={file_name} set_color_val={set_color_val} show_loader={show_loader}></No_bg_tab>}
                    </div>

                    <div className='middle_cont_left_footer'> 
                        <div className='text_eula'>
                         על ידי העלאת תמונה, אתה מסכים לתאנים וההגבלות
                      שלנו. אתר זה מוגן על ידי וחלים מדיניות ופרטיות ותנאי השימוש
                        </div>
                        <div className='eula' onClick={()=>set_show_eula(true)}> תקנון החברה </div>
                    </div>
                </div>

            </div>


            <div className='footer'>
                    <img src={banner} className='banner'/> 
                    <img src={logo} className='logo'/> 
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
                        <input type="checkbox" checked={not_robot} onChange={()=>set_not_robot(!not_robot)}/>
                        <div className='not_robot_text'> אני לא רובוט </div>
                        <img src={not_robot_img}  className='not_robot_img'/>

                    </div>


                    <div className='btn_popup_cont'>
                        <button className='btn_popup_cancel' onClick={()=>set_show_download_popup(false)}>ביטול</button>
                        <button className='btn_popup_approve' onClick={()=> download_img_func()}>אישור</button>
                    </div>

                    {err_msg_down?<div className='err_msg_not_robot'> {err_msg_down} </div>: ''}
                </div>
            </>: <></>   
            }

    </div>
  );
}

export default Bg;
