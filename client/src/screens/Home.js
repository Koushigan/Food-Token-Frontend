import React, { useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'

import Food from '../components/Food'
import { getAllFood } from '../actions/foodActions'

export default function Home() {

      const dispatch = useDispatch()

      const foodstate = useSelector(state=>state.getAllFoodReducer)

      const {food , error , loading} = foodstate

      useEffect(() => {
         dispatch(getAllFood)
        
      }, [])

  return (
    <div>
        <div className="row justify-content-center">

            {loading ? (<h1>Loading</h1>): error ? (<h1>Something went wrong</h1>) : (

              food.map((food) => {

                return (
                <div className="col-md-3 m-3 " key={food._id}>
            <div>
               <Food food={food}/>
            </div>
        </div>
                );

})
    
            )}

            
        </div>
    </div>
  )
}
