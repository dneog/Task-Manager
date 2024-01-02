import React, { useEffect, useState } from 'react'
import './Task.css';
import './Home.css';
import Sidebar from '../components/Sidebar';
import Heading from '../components/Heading';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import Second from '../components/Second';
import Model from '../components/Model';
import {useSelector, useDispatch} from 'react-redux';
import { IS_OPEN, selectIsOpen } from '../redux/slice/ModelSlice';
import { AiOutlineCloseSquare } from "react-icons/ai";
import InputForm from '../components/InputForm';
import { selectNewProduct, selectProduct } from '../redux/slice/ProductSlice';

const Task = () => {
  const newProducts = useSelector(selectNewProduct)
 
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleOpen=()=> {
    setOpen(!open) 
  }
  const handleClose=(data)=> {
    setOpen(!open) 
    setOpen(data)  
  }

  return (
    <> 
   <div>
 
   </div>
  
    <div className='home'>
  
      <Sidebar />    
        <div className='h'>
            <Heading />
           <>
            <div className='mainHomeA'>
         
                <div className='task1'>
                    <div className='task2'>
                    <p className='pk1'>Package Executive Dashboard</p>
                    <div className='task3'>
                        <p className='pk2'>Welcome Apsar Shaikh</p>
                        <FaRegCircleUser style={{width: '30px', height: '28px'}} />
                        <IoNotificationsOutline style={{width: '30px', height: '30px'}} className='bell' />
                        <p className='one'>1</p>
                    </div>
                    </div>
                    <hr />
                    <div className='task4'>
                        <div className='task5'>
                        <p className='t1'>Empanelment Case Requests</p>
                        <p className='t2'>View Assigned Grade</p>
                        </div>

                        <div className='task6'>
                         <div>
                          <p className='t3'>THCP Code :</p>
                          <p className='t4'>312568</p>
                         </div>
                         <div>
                          <p className='t3'>Case Id :</p>
                          <p className='t4'>29 Jun 2023</p>
                         </div>
                         <div>
                          <p className='t3'>Zone :</p>
                          <p className='t4'>North</p>
                         </div>
                         <div>
                          <p className='t3'>Provider Name : </p>
                          <p className='t4'>12548 - Apollo Hospital Nerul,Navi Mumbai</p>
                         </div>
                         <div>
                          <p className='t3'>Last Assigned :</p>
                          <p className='t4'>Amit Kumar</p>
                         </div>
                        </div>
                       
                    </div>


                </div>


                <div className='task7'>

                <div className='task8'>               
                  <p className='ad1'>Advance tarif</p>

                  <PiDotsThreeCircleVertical className='ad2' onClick={()=> handleOpen()}  />

                  {open && <Model>
                    <div className='cr'>
                    <p className='cr1'>Create Task</p>
                    <AiOutlineCloseSquare className='close' onClick={()=> handleClose()}/>
                 
                    </div>
                    <InputForm handleClose={handleClose}/>
              
                  </Model>}
               
                </div>

                <Second open={open}/>
                
                </div>
                
             </div>
            
            </>
        </div>
    </div>
    </>
  )
}

export default Task