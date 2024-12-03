
import './No_bg_tab.css';
import img_1 from './assets/img_1.png'
import { useRef , useState } from "react";

function No_bg_tab(props) {

    const [selected_col, setselected_col] = useState();

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

          <img src={img_1} className='img_1'/>  

    </div>
  );
}

export default No_bg_tab;
