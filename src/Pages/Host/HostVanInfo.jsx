import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {

    const { hostVanDetails } = useOutletContext()
    console.log(hostVanDetails)
    
  return (
    <div>HostVanInfo</div>
  )
}
