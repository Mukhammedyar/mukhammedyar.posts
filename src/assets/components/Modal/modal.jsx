import React from 'react'
import cl from './modal.module.css' 
    
export default function Modal({ children, visible, setVisible }) {
    const rootClasses = [cl.modalBody]
    
    if (visible) {
        rootClasses.push(cl.active)
    }

  return (
      <div className={rootClasses.join(' ')} onClick={e => setVisible(!visible)}>
          <div className={cl.modalWindow} onClick={e => e.stopPropagation()}>
              {children}
        </div>
    </div>
  )
}
