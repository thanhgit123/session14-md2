import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addProduct,deleteProduct,editProduct} from '../../store/index.js'
export default function Product() {
  const [product,setproduct] = useState();
  const ditpatch = useDispatch()
  const data= useSelector(state => state.productReducer.products)
  

  const handleAdd =()=>{
      ditpatch(addProduct({
        name: product,
        id: Math.floor(Math.random() * 99993029)
      }))

      setproduct("");
}
const handleCook=(id)=>{
    ditpatch(deleteProduct(id))
}
const handleEdit=(product)=>{
    setproduct(product.name);

}
  return (
    <>
      {data.map((item,index) => {
        return (
          <li key={index}>
           <p> Name: {item.name} {''}, </p> 
            <p> Price: {item.price}{" "}  </p> 
            <button onClick={()=>handleCook(item.id)}>Cook</button>
            <button onClick={()=>handleEdit(item.id)}>Edit</button>
          </li>
        );
      })}
      <input type="text" onChange={(e)=>setproduct(e.target.value)} value={product} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
