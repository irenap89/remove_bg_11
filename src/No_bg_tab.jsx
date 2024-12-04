
import './No_bg_tab.css';
import img_1 from './assets/img_1.png'
import { useRef , useState } from "react";

function No_bg_tab(props) {

    const [selected_col, setselected_col] = useState();
    const [show_loader, setshow_loader] = useState(false);


    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.click();
    };


    

  return (
    <div className='no_bg_tab_cont'>
         {/* {props.type} */}

           {props.type =='bg' ? <div className='no_bg_tab_header'>
                <div className='no_bg_tab_title'> אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף </div>

                <button className='select_color_btn' onClick={focusInput}>צבע רקע   <span className='selected_color' style={{backgroundColor: selected_col}}> </span> </button>

                <input type="color" ref={inputElement} className='input_color' value={selected_col} onChange={(e)=>setselected_col(e.target.value)}/>    
            </div> : <></>}

        {props.file_name?<>

          { props.type =='bg'?
          <img src={'http://localhost:4000/no_bg_'+props.file_name} className='img_1'/>  :
          <img src={'http://localhost:4000/'+props.file_name} className='img_1'/>}

        </>: ''}

        {show_loader==false && !props.file_name? <div className='start_upload_img'> יש להעלות תמונה</div>: ''}

        {show_loader? <div className='loader_cont'>
              <div className='loader_cont_in'>
                  39%
              </div>
        </div>: ''}

    </div>
  );
}

export default No_bg_tab;
