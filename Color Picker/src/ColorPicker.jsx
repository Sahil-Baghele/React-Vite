import React, {useState} from 'react';

function ColorPicker(){
 
 const [color, setColor] = useState("#ffffff");

 function change(event){
 setColor(event.target.value);
 }

    return(
        <div className='container'>
           <h1>
            Color Picker
            </h1> 
            <div className='display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
              <label>Select a color:</label>
              <input type="color" value={color} onChange={change}/>
        </div>
    );

}

export default ColorPicker