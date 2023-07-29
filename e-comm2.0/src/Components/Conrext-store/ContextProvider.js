

import React, { useEffect, useReducer, useState } from 'react';
import cartContext from './CartContext';
const defaultState={
    items:[],
    totalAmount:0
}

const url="https://crudcrud.com/api/dd7729a036ae426da2299440aab60b88";


  const saveToCrud=async (title,price,img,id)=>{
          const email = localStorage.getItem('email');
          try{
            const res =await fetch(`${url}/${email}`,
            {
              method:'POST',
              body:JSON.stringify({
                title:title,
                price:price,
                img:img,
                id:id,
                quantity:1
              }),
              headers:{
                "Content-Type":"application/json"
              }
            });
            console.log('added');
          }catch(err){
            console.log(err);
          }
        }


        const toGetFromCrud=async ()=>{
          const email = localStorage.getItem('email');
          try{
            const res =await fetch(`${url}/${email}`,
            {
              method:'GET',
              headers:{
                "Content-Type":"application/json"
              }
            });
            const dataa=await res.json();
            return dataa
          }catch(err){
            console.log(err);
          }
        };


        const deleteItem= async (id)=>{
          const email = localStorage.getItem('email');
          try{
            const res = await fetch(`${url}/${email}/${id}` ,{
             method : 'DELETE',
             headers :{
               'Content-Type' : 'application/json'
             }
           })
       
         }catch(err){
           console.log(err.message)
         }
        }




const ContextProvider = (props) => {

    const [cartItems,setCartItems]=useState([])

    const reducerFunction=async (state,action)=>{
        if(action.type==='ADD'){
          const duplicate= await toGetFromCrud();
          console.log('duplicate',duplicate);
          const findId=duplicate.find((itm)=>itm.id===action.item.id);
          const isAlready=findId===undefined ? false : true;
          if(isAlready){
            return alert('This item is already added to the cart')
          }else{

          const data22= await saveToCrud(action.item.title,action.item.price,action.item.imageUrl,action.item.id);

          console.log('data22',data22);

          const dataa1= await toGetFromCrud();
          console.log(dataa1);
          setCartItems(dataa1)
        console.log('cartItems',cartItems);
      }
            
        }
        if(action.type==='REMOVE'){
         await deleteItem(action.id);
         console.log('action.id',action.id);
          const dataa1= await toGetFromCrud();
          console.log(dataa1);
          return setCartItems(dataa1)
        }
        return state;
    }

    const [cartState,dispatchAction]=useReducer(reducerFunction,defaultState);
    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);
    const initialEmail=localStorage.getItem('email');
    const [email1,setEmail]=useState(initialEmail);


  

    const addToCartHandler =(item)=>{
        dispatchAction({type:'ADD',item:item})
    };

    const removeFromCartHandler=(id)=>{
        dispatchAction({type:'REMOVE',id:id})
    }

    const Useremail=email1

    const emailCapture =(email)=>{
        
        localStorage.setItem('email',email);
        setEmail(email);
        console.log(Useremail);
    }

    const loginHandler =async (token)=>{
        setToken(token);
        localStorage.setItem('token',token);
        console.log(Useremail);
        // const dataa1= await toGetFromCrud();
        //   console.log(dataa1);
        //   return setCartItems(dataa1)
        
    };

    const logoutHandler =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setEmail(null)
        setToken(null);
        setCartItems([])
    };


    const userIsLoggedIn=!!token;

  
    useEffect(() => {
        const fetchData = async () => {
           const data = await toGetFromCrud();
           console.log('fromseEffectdata',data);
           setCartItems(data);
        }
      
        fetchData();
      }, [userIsLoggedIn]);

  

    const ContextValue={
        items:cartItems,
        totalAmount:cartState.totalAmount,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        userEmailTrack:emailCapture,
        emailOfUser:Useremail,
    }

  return (
    <cartContext.Provider value={ContextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default ContextProvider;
