import React from 'react'
import { getTotalPagesArray } from '../../../utils/utils'

export default function PageCounter({ onClick, page ,totalPages }) {
  let arrayPages=getTotalPagesArray(totalPages)
     
  return (
    <div className="d-flex my-5">
        {arrayPages.map(p => (
          <div 
            onClick={() => onClick(p)}
          key={p} 
          className={`border text-center p-2 px-3 ${page===p ? "btn btn-dark text-light fw-bold": "btn btn-outline-dark"}`} >
            <span>{p}</span>
          </div>
        ))
        }
        </div>
  )
}
