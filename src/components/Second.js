import React, { useEffect, useState } from 'react'
import Category from './Category'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux';
import { deleteProduct, fetchProduct, selectAllProducts, selectLoading } from '../redux/slice/ProductSlice';
import Model from './Model';
import {useNavigate} from 'react-router-dom';


const Second = ({open}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allProducts= useSelector(selectAllProducts)
    const loading = useSelector(selectLoading)
    const [active, setActive] = useState(1)
    const [category, setCategory] = useState('Consultation')
    const [id, setId]= useState('')
    const [openModel, setOpenModel] = useState(false)
    

    useEffect(()=> {
      dispatch(fetchProduct())
    }, [dispatch])

    // useEffect(()=> {
    //   setTimeout(()=> {
    //     dispatch(fetchProduct())
    //   }, 200)
      
    // }, [open])

    

  

    const menu= [
        {id: 1, name: "Consultation"},
        {id: 2, name: "Pharmacy"},
        {id: 3, name: "Investigation"},
        {id: 4, name: "Procedure"},
        {id: 5, name: "Package"},
        {id: 6, name: "Home Care"},
    ]

    const handleItemSelect= (itemID, itemName)=> {
        setActive(itemID)
        setCategory(itemName)
    }
    
    const filteredProducts = allProducts.filter((data) => data.category === category);
    

    const handleModelOpen=(id)=> {
      setId(id)
      setOpenModel(!openModel)
    }

    const handleDelete=(id)=> {
      dispatch(deleteProduct(id))
      setTimeout(()=> {
        dispatch(fetchProduct())
      },400)
    }

    const handleNavigate = (id)=> {
      navigate(`/update/${id}`)
      
    }
    
  return (
    <div className='dv'>
        <Category menu={menu} handleItemSelect={handleItemSelect} active={active} />

        <table className='table2'>

          <thead>
            <tr>
              <td className='td'>S. No.</td>
              <td className='td'>Name</td>
              <td className='td'>Description</td>
              <td className='td'>Actions</td>
            </tr>
          </thead>

          <tbody>
            
            {!loading && filteredProducts.length>0 && filteredProducts.map((item, index)=> (
                 <tr style={{backgroundColor : index % 2 !== 0 ? '#efefef' : ''}}>
                 <td className='td1 st'>{index+ 1}</td>
                 <td className='td1' style={{width: '150px'}}>{item.name}</td>
                 <td className='td1'>{item.description}</td>
                 <td className='td1 st2'>
                   <div className='ed'>
                   <FaRegEdit className='ed1' onClick={()=>handleNavigate(item._id)} />
                 <AiOutlineDelete className='ed2' onClick={()=> handleDelete(item._id)} />
                   </div>
                
                 </td>
               </tr>
            ))}
           
          </tbody>
         
        </table>
        {loading && <div className='pageLoading'></div>}
        {!loading && filteredProducts.length==0 && <p className='sorry'>Sorry, No Data Found</p>}
    </div>
  )
}

export default Second