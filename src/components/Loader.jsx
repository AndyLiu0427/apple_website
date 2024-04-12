import { useGSAP } from '@gsap/react'
import { Html } from '@react-three/drei'
import gsap from 'gsap/gsap-core'
import React from 'react'

const Loader = () => {
  useGSAP(() => {
    gsap.to('#loading', {
      opacity: 1,
    })
  }, [])

  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div id="loading" className="w-[10vw] h-[10vw] rounded-full opacity-0">
          Loading...
        </div>
      </div>
    </Html>
  )
}

export default Loader