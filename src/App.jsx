import { useState } from 'react'
import './App.css'

function App() {
  const [res, setRes] = useState("0");
  const [str, setStr] = useState("0");

  const addNum = (value, text) => {
    if(res == "0"){
      setRes(text);
    }else{
      setRes(res + text);
    }

    if(str == "0"){
      setStr(value);
    }else{
      setStr(str + value);
    }
  }

  const clear = () => {
    setRes("0");
    setStr("");
  }

  const result = () => {
    console.log(str);
    let nums = str.split(" ");
    if (nums[nums.length - 1] == "+"){
      setRes("Error");
      clear();
    }
  }

  return (
    <>
    <div className="row">
    <input className='visor' value={res} readOnly></input>
    </div>
    <div className="row">
      <button className='btn' value='1' onClick={(e) => addNum(e.target.value, e.target.textContent)}>1</button>
      <button className='btn' value='2'onClick={(e) => addNum(e.target.value, e.target.textContent)}>2</button>
      <button className='btn' value='3'onClick={(e) => addNum(e.target.value, e.target.textContent)}>3</button>
      <button className='btn opBtn' value=' + ' onClick={(e) => addNum(e.target.value, e.target.textContent)}>+</button>
    </div>
    <div className="row">
      <button className='btn' value='4' onClick={(e) => addNum(e.target.value, e.target.textContent)}>4</button>
      <button className='btn' value='5' onClick={(e) => addNum(e.target.value, e.target.textContent)}>5</button>
      <button className='btn' value='6' onClick={(e) => addNum(e.target.value, e.target.textContent)}>6</button>
      <button className='btn opBtn' value=' - ' onClick={(e) => addNum(e.target.value, e.target.textContent)}>-</button>
    </div>
    <div className="row">
      <button className='btn' value='7' onClick={(e) => addNum(e.target.value, e.target.textContent)}>7</button>
      <button className='btn' value='8' onClick={(e) => addNum(e.target.value, e.target.textContent)}>8</button>
      <button className='btn' value='9' onClick={(e) => addNum(e.target.value, e.target.textContent)}>9</button>
      <button className='btn opBtn' value=' * ' onClick={(e) => addNum(e.target.value, e.target.textContent)}>*</button>
    </div>
    <div className="row">
      <button className='btn' value='.' onClick={(e) => addNum(e.target.value, e.target.textContent)}>.</button>
      <button className='btn' value='0' onClick={(e) => addNum(e.target.value, e.target.textContent)}>0</button>
      <button className='btn opBtn' value='=' onClick={() => result()}>=</button>
      <button className='btn opBtn' value=' / ' onClick={(e) => addNum(e.target.value, e.target.textContent)}>/</button>
    </div>
    <div className="row">
      <button className="cBtn" onClick={() => clear()}>C</button>
    </div>
    </>
  )
}

export default App
