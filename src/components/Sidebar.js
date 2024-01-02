import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Sidebar.css';
import { LiaClipboardListSolid } from "react-icons/lia";
import { LiaChartPieSolid } from "react-icons/lia";
import { IoIosGitNetwork } from "react-icons/io";
import { MdLinkOff } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { AiOutlineAudit } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { selectIsOpen } from '../redux/slice/ModelSlice';
import {useSelector, useDispatch} from 'react-redux';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    

    const activeLink=({isActive})=> {
      return (
        isActive ? "active li" : "li"
      )
        }

  return (
    <div className='sidebar' style={{width: isOpen ? "260px" : "50px"}}>
        <div className='l1' style={{width: isOpen ? "240px" : "35px"}} >
        <HiOutlineMenuAlt1 className='bag2' onClick={()=> setIsOpen(!isOpen)} />
       
        </div>

        {/* Navigation Part */}

        <div className='list'>

        <NavLink to={'/home'} className={activeLink}>
        <LiaChartPieSolid  className='dash'/>
        <p className='add2' style={{display: isOpen ? "block" : "none"}}>Dashboard</p>
        </NavLink>



        <NavLink to={'/'} className={activeLink} >
        <LiaClipboardListSolid  className='add1' />     
        <p className='add2' style={{display: isOpen ? "block" : "none"}}>Task Queue</p>
        </NavLink>



        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <IoIosGitNetwork className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none", cursor:'not-allowed'}}>Network Providers</p>
        </NavLink>



        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <MdLinkOff  className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none",cursor:'not-allowed' }}>Non Network Providers</p>
        </NavLink>

        
        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <IoDocumentTextOutline  className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none",cursor:'not-allowed' }}>Documents</p>
        </NavLink>

        
        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <FiUser  className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none",cursor:'not-allowed' }}>Profile</p>
        </NavLink>

        
        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <AiOutlineAudit  className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none",cursor:'not-allowed' }}>Audit</p>
        </NavLink>

        
        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <BiSupport  className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none",cursor:'not-allowed' }}>Support</p>
        </NavLink>

        
        <NavLink to={'/home2'} style={{cursor:'not-allowed'}} className={activeLink}>
        <IoIosSearch  className='add1'/>
        <p className='add2' style={{display: isOpen ? "block" : "none",cursor:'not-allowed' }}>Search</p>
        </NavLink>

        
        </div>
    </div>
  )
}

export default Sidebar