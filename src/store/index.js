import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1.khởi tạo state : import createSlice
// 2. khởi tạo reduer :
// 3.khởi tạo store
// 4. xuất kho mang di dùng


// khoi tao state
const productState = createSlice({
  name: "redux-toolkit",
  initialState: {
    products: [
      {
        id :1,
        name: "trà đá hay nước lọc",
        price: 4000,
      },
      {
        id :2,
        name: " trà đá",
        price: 5000,
      },
      {
        id :3,
        name: "sai",
        price: 6000,
      },
      {
        id :4,
        name: "là nước lọc",
        price: 1000,
      },
    ],
  },
   reducers:{
      addProduct:(state,action)=>{
          state.products.push(action.payload)
      },
      deleteProduct:(state,action)=>{
          state.products = state.products.filter((item) => item.id != action.payload)
      },
      editProduct:(state,action)=>{
          let index = state.products.findIndex((item)=>{
            return item.id == action.payload.id
          }) 
          state.products[index]= action.payload
      }

  }
  // payload laf mac dinh, la gia tri truyen len
});

// 1.1 xuat ra action
  export  const  {addProduct,deleteProduct,editProduct} = productState.actions;

// khoi tao reducer
const productReducer = productState.reducer;

// khoi tao store
const store = configureStore({
  reducer:{
      productReducer,
  }
})
// xuat ra cho ung dung dung
export default store;