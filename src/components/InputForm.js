import React, { useState } from 'react';
import './Model.css';
import {useDispatch} from 'react-redux';
import {  addProduct, fetchProduct } from '../redux/slice/ProductSlice';
import ErrorToast from '../toast/ErrorToast';

const initialState= {
    name: '',
    category: '',
    description: ''
  }

const InputForm = ({handleClose}) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(initialState)
    const {name, category, description} = product

    const [showErrorMessage, setShowErrorMessage]= useState(false)
    const [errorMessage, setErrorMessage]= useState('')

    const [showErrorMessage2, setShowErrorMessage2]= useState(false)
    const [errorMessage2, setErrorMessage2]= useState('')

    const [showErrorMessage3, setShowErrorMessage3]= useState(false)
    const [errorMessage3, setErrorMessage3]= useState('')


    const handleModelClose=()=> {
      const data = false
      handleClose(data)
    }

    const handleInput = (e)=> {
        const {name, value}= e.target;
    setProduct({...product, [name]: value})
    }

    const handleSubmit= async (e)=> {
        e.preventDefault()
        if(name==''){
          setErrorMessage('Please Add Task Name')
          setShowErrorMessage(!showErrorMessage)
           setTimeout(()=> {
            setShowErrorMessage(false)
            
           }, 3000)
        }else if(description==''){
          setErrorMessage2('Please Add Task Description')
          setShowErrorMessage2(!showErrorMessage)
           setTimeout(()=> {
            setShowErrorMessage2(false)
            
           }, 3000)
        }else if(category==''){
          setErrorMessage3('Please select a Category')
          setShowErrorMessage3(!showErrorMessage)
           setTimeout(()=> {
            setShowErrorMessage3(false)
            
           }, 3000)
        }else{
          const formData= new FormData()
          formData.append("name", name)
          formData.append('category', category)   
          formData.append('description', description) 
          await dispatch(addProduct(formData))
           setProduct(initialState);
            handleModelClose()
            setTimeout(()=> {
              dispatch(fetchProduct())
            }, 200)
        }
   
    }

  return (
    <form className='inp1' onSubmit={handleSubmit}>
        <label className='lb1'>Task Name</label>
        <input type="text" className='imps1' name="name" autoComplete='off' value={product?.value} onChange={handleInput} id="" placeholder='Your Task Name'  />
        {showErrorMessage && <ErrorToast message={errorMessage}/>}

        <label className='lb2'>Task Description</label>
        <textarea type="text" rows={3} className='imps1'  name="description" value={product?.value} onChange={handleInput} id="" placeholder='Your Task Description' />
        {showErrorMessage2 && <ErrorToast message={errorMessage2}/>}

    <label className='lb2' >Category</label>
        <select name="category" value={product?.value} onChange={handleInput} className='imps1' id="">
            <option value="">Select Category</option>
            <option value="Consultation">Consultation</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Investigation">Investigation</option>
            <option value="Procedure">Procedure</option>
            <option value="Package">Package</option>
            <option value="Home Care">Home Care</option>
        </select>
        {showErrorMessage3 && <ErrorToast message={errorMessage3}/>}

        <button type='submit' className='but1'>Add Task</button>

    </form>
  )
}

export default InputForm