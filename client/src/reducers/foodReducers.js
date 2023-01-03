export const getAllFoodReducer=(state={food : []} , action)=>{

     switch(action.type)
     {
        case 'GET_FOOD_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_FOOD_SUCCESS' : return{
            loading : false,
            food : action.payload
        }
        case 'GET_FOOD_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
     }

}