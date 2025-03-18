/* eslint-disable no-unused-vars */
import {Canvas} from "@react-three/fiber"
import React from "react";
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";


const App = () => {
  return (
  <div className="w-full h-screen font-[Helvetica_Now_Display ">
    <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
    {["iPhone","iPad","services","ios","mac","products","iPhone","iPad","services","ios","mac","products"].map((e)=> (
    <a href="" className="text-white font-[500] text-sm capitalize">{e}</a>
))}
    </div>
    <div className="absolute flex flex-col  items-center top-40 left-1/2 -translate-x-1/2 text-white ">
    <h3 className="masked text-7xl tracking-tighter font-[700]">Be a pro.</h3>
    <h5> Oh so pro !</h5>
    <p className="text-center w-3/4 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, consequatur?</p>
    </div>
    <Canvas camera={{fov:12,position:[1,-10,220]}}>
    <Environment 
    files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"

    ]}
     />
     <ScrollControls>
      <MacContainer/>
      </ScrollControls>
  </Canvas>
  </div>
  );
  
};

export default App;
