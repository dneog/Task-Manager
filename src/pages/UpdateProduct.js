import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Heading from '../components/Heading'
import {useParams, useNavigate} from 'react-router-dom';   
import {useDispatch, useSelector} from 'react-redux';
import {  addProduct, fetchProduct, selectAllProducts, updateProduct } from '../redux/slice/ProductSlice';
import '../components/Model.css';

const UpdateProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const allProducts= useSelector(selectAllProducts)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchProduct())
    }, [id, dispatch])

    const filterProduct = allProducts.find((data)=> data._id == id)
   

    const [product, setProduct] = useState(filterProduct)
    const {name, category, description} = product

    const handleInput = (e)=> {
        const {name, value}= e.target;
    setProduct({...product, [name]: value})
    }

    const handleSubmit= async (e)=> {
        e.preventDefault()
    const formData= new FormData()
    formData.append("name", name)
    formData.append('category', category)   
    formData.append('description', description) 

    await dispatch(updateProduct({
        id: id,
        formData: formData
    }))
    setTimeout(()=> {
        navigate('/')
    }, 400)
     
    }

  return (
    <div>
         <div className='home'>
      <Sidebar />    
        <div className='h'>
            <Heading />
           <>
            <div className='mainHomeA'>
                <div className='formData'>
                <form className='inp1' onSubmit={handleSubmit}>
        <label className='lb1'>Task Name</label>
        <input type="text" className='imps1' name="name" value={product.name} onChange={handleInput} id="" placeholder='Your Task Name'  />

        <label className='lb2'>Task Description</label>
        <textarea type="text" rows={6} className='imps1'  name="description" value={product.description} onChange={handleInput} id="" placeholder='Your Task Description' />

    <label className='lb2' >Category</label>
        <select name="category" value={product.category} onChange={handleInput} className='imps1' id="">
            <option value="">Select Category</option>
            <option value="Consultation">Consultation</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Investigation">Investigation</option>
            <option value="Procedure">Procedure</option>
            <option value="Package">Package</option>
            <option value="Home Care">Home Care</option>
        </select>

        <button type='submit' className='but1'>Update Task</button>

    </form>
                </div>
           
             </div>
            
            </>
        </div>
    </div>
    
    </div>
  )
}

export default UpdateProduct