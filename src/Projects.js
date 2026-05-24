import {useState , useEffect , useRef} from "react"
import {projects} from "./utils"
import Project from "./Project"

export default function Overview() {
    const text = useRef(null)
    const [isVisible, setIsVisible] = useState(false); // Tracks when the element is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true); // Set visibility to true when in viewport
              }
            });
          },
          { threshold: 0.1 }
        );
        const element = document.querySelector(".projectDescribe");
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, []);
      useEffect(() => {
        const content = `Following projects showcase my skills and experience through real-world examples of 
         my work , Each project described with links to code repositories and live demos
         ,It reflects my ability to solve complex problems , work with diffrent technologies , and 
         manage projects effectively.`
         const element = document.querySelector(".projectDescribe");
        if (isVisible) {
          let index = 0;
          const typingInterval = setInterval(() => {
            if (index < content.length) {
              element.innerHTML+=  content[index];
              index++;
            } else {
              clearInterval(typingInterval); // Stop the interval when done
            }
          }, 50); // Adjust typing speed here
          return () => clearInterval(typingInterval); // Cleanup on unmount
        }
      }, [isVisible]);
      
    return (
      <>
        <p className = "text-gray-400 font-semibold px-5 text-center md:text-left">My Work</p>
        <h1 className = "text-white font-bold text-4xl px-5 text-center md:text-left">Projects.</h1>
        <p ref = {text} className = "text-gray-400 px-5 text-center md:text-left mt-3 projectDescribe">{text.currrent}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-4 pb-7 px-5 items-start w-full max-w-none">
      {
        projects.map((p, i) => <Project key={i} image={p.image} gitLink={p.gitLink} demo={p.demo} title={p.title} description={p.description} />)
      }
    </div>
        </>
    )
}