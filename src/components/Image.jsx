import React from 'react'

export const Image = (props) => {
 
  return (
      <>
    <div className='second_div'>
        <img src={props.data.url} alt="" srcset="" />
        <p>→</p>
    </div>
      </>
  )
}