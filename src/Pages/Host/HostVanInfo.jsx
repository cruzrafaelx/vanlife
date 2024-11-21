import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {

    const {name, description, type} = useOutletContext()[0]
    
  return (
    <div className='host-van-info'>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Category:</strong> {type}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Visibility:</strong> public</p>
    </div>
  )
}
