import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import Heading from '../components/Heading';
import Sidebar from '../components/Sidebar';
import { selectIsOpen } from '../redux/slice/ModelSlice';
import {useSelector} from 'react-redux';

const Home = () => {


  return (
    <>
    
    <div className='home'>
      <Sidebar />    
        <div className='h'>
            <Heading />
           <>
            <div className='mainHomeA'>
              Home
             </div>
            
            </>
        </div>
    </div>
    </>
   
  )
}

export default Home