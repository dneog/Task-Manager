import React, { useEffect, useState } from 'react'
import './Heading.css';
import icon from '../assets/icon.jpeg';
import ErrorToast from '../toast/ErrorToast';
import {useDispatch, useSelector} from 'react-redux';
import { selectMessage, selectShow } from '../redux/slice/ProductSlice';
import Toast from '../toast/Toast';


const Heading = () => {
  const message = useSelector(selectMessage)
  const show = useSelector(selectShow)

  const [showErrorMessage, setShowErrorMessage]= useState(false)
  const [errorMessage, setErrorMessage]= useState('')

  useEffect(()=> {
    setErrorMessage(message)
    setShowErrorMessage(show)

    setTimeout(()=> {
      setShowErrorMessage(false)
      setErrorMessage('')
     }, 5000)
  },[message, show])

 
  return (
    <div className='heading'>
       <img src={icon} className='imgs' alt="" />
       {showErrorMessage && <Toast message={errorMessage}/>}

    </div>
  )
}

export default Heading