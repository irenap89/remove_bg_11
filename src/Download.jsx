
import './Download.css';
import new_icon from './assets/new.png'
import { useState } from 'react';

function Download(props) {

  const [err_msg, set_err_msg] = useState('');

  function download_btn_press(){
    if(props.file_name) {
      
      props.set_show_download_popup(true)
    } else {
      set_err_msg('אין קובץ להורדה')
    }
  }


  return (
    <div className={"Download " + (props.title=="Pro" ? "no_border": "")}>
       {props.title=="Pro"? <img src={new_icon} className='new_icon'/>: <></>}
      <div className={'Download_title ' + (props.title=="Pro" ? "move_title" : "")}> {props.title}</div>
      <div className='Download_subtitle'> {props.subtitle} </div>
      <button className='Download_btn' onClick={()=>download_btn_press()}> {props.btn_text} </button>
      {err_msg?<div className='err_msg_download'> {err_msg} </div>: ''}
      <div className='Download_small_text'>{props.small_text} </div>
    </div>
  );
}

export default Download;
