import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {

  const {price} = useOutletContext()[0]

  return (
    <p className='host-van-pricing'><span>€{price}</span>/day</p>
  )
}
