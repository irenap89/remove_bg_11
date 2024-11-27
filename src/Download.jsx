
import './Download.css';
import new_icon from './assets/new.png'

function Download(props) {
  return (
    <div className={"Download " + (props.title=="Pro" ? "no_border": "")}>
       {props.title=="Pro"? <img src={new_icon} className='new_icon'/>: <></>}
      <div className={'Download_title ' + (props.title=="Pro" ? "move_title" : "")}> {props.title}</div>
      <div className='Download_subtitle'> {props.subtitle} </div>
      <button className='Download_btn' onClick={()=>props.set_show_download_popup(true)}> {props.btn_text} </button>
      <div className='Download_small_text'>{props.small_text} </div>
    </div>
  );
}

export default Download;
