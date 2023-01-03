import React , {useState} from 'react';
import {Modal} from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux'
import {addToCart} from "../actions/cartActions";


export default function Food({food}) {
    const [ quantity , setquantity] = useState(1)
    const [ show , setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    const dispatch = useDispatch()
    function addtocart()
    {
      dispatch(addToCart(food , quantity))
    }

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded'>
    
        <div onClick={handleShow}>
           <h1>{food.name}</h1>
           <img src={food.image} className="img-fluid" style={{height:'200px' , width:'250px'}}/>
        </div>

    <div classNAme="flex-container">

        <div classNAme="w=100">
            <p>Quantity</p>
            <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(10).keys()].map((x , i)=>{

                     return <option value={i+1}>{i+1}</option>
              
                })}
            </select>
            
        </div>

    </div>
      <div className="flex-conatiner">
         <div className='m-1 w-100'>
            <h1 className='mt-1'>{food.price}</h1>
         </div>
         <div className='m-1 w-100'>
            <button className="btn" onClick={addtocart}>Add To Cart</button>
         </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.image} className="img-fluid" style={{height:"300px" , width:"350px"}}/>
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
            <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
