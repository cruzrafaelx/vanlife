import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {

  const { imageUrl, name } = useOutletContext()[0]
  console.log(imageUrl)


  return (
    <img src={imageUrl} 
         alt={`a picture of the van ${name}`}
         className='host-van-info-photo'></img>
  )
}
