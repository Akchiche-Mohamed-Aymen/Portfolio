import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Card({title , i , image}) {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the card is visible
        triggerOnce: false, // Only trigger once
    });

  return (
    <motion.div
    ref={ref}
    animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} // Reverts when out of view
    transition={{
        duration: 0.5, // Animation duration
        delay:  i* 0.9, // Add staggered animation
    }}
    className = "card w-72 md:w-48 h-52  flex flex-col justify-center items-center bg-purple-950 rounded border-2 hover:border-gray-50 border-gray-500">
       <img src={image} className=" w-20 h-20"/>
       <h2 className = "text-white text-2xl">{title} </h2>
    </motion.div>
  )
}
