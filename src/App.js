import * as React from "react"
import useWindowSize from "@rooks/use-window-size"
import ParticleImage, { Vector, forces } from "react-particle-image"
import MyNavbarOne from "./components/navbarOne"
import 'bootstrap/dist/css/bootstrap.min.css'
import Body from "./pages/body"
import './styles/app.css'
const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50
  },
  color: ({ x, y, image }) => "#2C2A2A",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 100,
  friction: () => 0.05,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2)
  }
}

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5)
}

export default function App() {
  const { innerWidth, innerHeight } = useWindowSize()

  return (
    <div>

    
    <MyNavbarOne/>
    
    <ParticleImage
      className="particleCanvas"
      src={"/logo.png"}
      width={ Number(innerWidth) /2}
      height={ Number(innerHeight) - 80}
      scale={0.35}
      entropy={10}
      maxParticles={8000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#FFFFF"
    />
    {/* <div class="label"><p class="text-wrapper">No more surfing 100s of pages</p></div> */}
    <Body/>
    
    </div>
  )
}
