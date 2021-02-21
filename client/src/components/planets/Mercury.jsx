import React, { Suspense, useState, useEffect } from "react";
import axios from 'axios';
import { Canvas } from "react-three-fiber";
import { Stars } from "@react-three/drei";
import CameraControls from './CameraControls';
import RenderPlanet from './RenderPlanet';
import Navbar from '../Navbar';

export default function Mercury(props) {

  const [data, setData] = useState({});

  useEffect(() => {
    const planet = "mercury"
    axios.get(`/getPlanetDetails/${planet}`)
    .then(result => {
      setData(result.data);
    });
  }, [])

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="planet-details">
          <div>Moons:{data.moons}</div>
          <div>Min Temp: -184°C</div>
          <div>Max Temp: 430°C</div>
          <div>Perihelion:{data.perihelion}km</div>
          <div>Aphelion:{data.aphelion}km</div>
          <div>Eccentricity:{data.eccentricity}</div>
          <div>Gravity:{data.gravity}m/s<sup>2</sup></div>
          <div>Density:{data.density}g/cm<sup>3</sup></div>
          <div>Equatorial Radius:{data.equaRadius}km</div>
          <div>Polar Radius:{data.polarRadius}km</div>
          <div>Sideral Orbit:{data.sideralOrbit}days</div>
          <div>Sideral Rotation:{data.sideralRotation}hours</div>
          <div>Axial Tilt:{data.axialTilt}°</div>
        </div>
        <Canvas className="planet-model">
          <CameraControls zoomedInDistance={165} zoomedOutDistance={275} />
          {/* <directionalLight intensity={0.5} /> */}
          <ambientLight intensity={0.6} />
          <Suspense>
            <RenderPlanet planets="mercury" />
          </Suspense>
          <Stars
            radius={150} // Radius of the inner sphere (default=100)
            depth={70} // Depth of area where stars should fit (default=50)
            count={4000} // Amount of stars (default=5000)
            factor={5} // Size factor (default=4)
          />
        </Canvas>
      </main>
    </div>
  )
}