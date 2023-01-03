import { getStaticContextFromError } from "@remix-run/router"

export const addToCart=(food , quantity) => (dispatch , getState)=>{

     var cartItem = {
        name : food.name,
        _id : food.id,
        image : food.image,
        quantity : quantity,
        price : food.price,

     }
  
     dispatch({type:'ADD_TO_CART , payload : cartItem'})

     const cartItems = getState().cartreducer.cartItems
     localStorage.setItems('cartItems' , JSON.stringify(cartItems))
}