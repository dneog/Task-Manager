import React from 'react';
import './Second.css';

const Category = ({menu, handleItemSelect, active}) => {

  return (
    <div>
        <table className='table1' >
        <tbody>
            <tr>
            {menu.map((item)=> (           
            <td onClick={()=> handleItemSelect(item.id, item.name)} className={active== item.id ? 'ac1' : 'ac2'}>{item.name}</td>     
                ))}
            </tr>
       
        </tbody>  
        </table>
    </div>
  )
}

export default Category