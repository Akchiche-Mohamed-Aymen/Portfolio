import { useEffect, useState  } from "react";
import Loader from "./Loader";
import Bullet from "./Bullet";
import Portfolio from "./3D_Scene";
import {motion} from 'framer-motion'
function HomePage() {
  const [load, setLoad] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
        setLoad(false);
    },2500);
  }, []);

  return (
    <div className="">
      <div className = "flex gap-2 justify-start">
        <Bullet/>
      <div>
      <h1 className="font-bold text-4xl text-white">
        Hi , I'm <span className="text-violet-600">Aymen</span>
      </h1>
      <p className="text-white text-lg font-normal mt-2">
        I developed graphical user
        Interfaces for web applications
      </p>
      </div>
      </div>
      <div className="h-44 flex-col flex items-center justify-center my-12">
        {load ? <Loader/> : <Portfolio/>}
      </div>
    </div>
  );
}

export default HomePage;
