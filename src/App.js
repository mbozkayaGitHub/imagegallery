
import { useState } from 'react';

import Images from "./data";
import "./style.css";


function App() {

  const [selectedImg, setSelectedImg] = useState(Images[0])
  return (
    <div className="App">
     <div className='container'>
      <img src={selectedImg} alt="" className='selected' />
     </div>
     <div className='imgContainer'>
{Images.map((a,index)=> (
  <img key={index} src={a} alt='Tantuni'
  onClick={()=>setSelectedImg(a)}
  />

))}
     </div>
    </div>
  );
}

export default App;
