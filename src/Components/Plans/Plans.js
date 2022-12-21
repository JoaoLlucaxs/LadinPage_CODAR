import React from 'react'
import {cardPlans} from '../../data/data'
import {FiCheck} from 'react-icons/fi'

function Plans() {
  return (
    <div className='page_container'>
    <div className='container_card'>
        {cardPlans.map((item)=>(
            <div className='card'>
                <h1>{item.title}</h1>
                <div className=''>
                    {item.details.map((item)=>(
                        <div className='card_details'>
                            <li><FiCheck/>{item}</li>
                        </div>
                    ))}
                </div>
                <button className='btn_card'>Escolher</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Plans