import React from 'react'
import { data } from './Data';
import "./App.css";
import Cart from "./component/Cart";
import "./component/Card.css";
function App() {
  
  return (
    <div>
      {data.data.map((val,key) => (
        <div key={key} className="category">
          <h2>{val.name}</h2>
          <div className="cards">
          <Cart data={val.productList}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
