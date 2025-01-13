import {useState , useEffect , useRef} from "react"
import todo from "./assets/projectsImg/todo.jpg"
import athan from "./assets/projectsImg/athan.jpg"
import tawasol from "./assets/projectsImg/tawasol.jpg"
import weather from "./assets/projectsImg/weather.jpg"
import Project from "./Project"
const projects = [
  {
    image : todo,
    gitLink : "https://github.com/Akchiche-Mohamed-Aymen/React-todoList-app",
    demo : "https://todo-list-app-iota-wheat.vercel.app/" ,
    title : "Todo App",
    description : `Built a responsive task management application 
     with advanced filtering capabilities.Implemented CRUD functionality 
      using React.js and local storage for persistence`
  },
  {
    image : weather,
    gitLink :"https://github.com/Akchiche-Mohamed-Aymen/react-weather" ,
    demo : "https://weather-delta-beige.vercel.app/" ,
    title : "Weather App",
    description : `
    Developed a weather application fetching real-time  data from OpenWeather API.
    Integrated localization support for Arabic and English languages
    to allow traduction feature
    `
  },
  {
    image : athan ,
    gitLink : "https://github.com/Akchiche-Mohamed-Aymen/React-Athan-Times",
    demo : "https://athan-times.vercel.app/" ,
    title : "Athan Times App",
    description : `
    Developed a prayer schedule application with dynamic 
     city selection and countdown to the next prayer ,
     Integrated APIs to fetch country and city data and display accurate prayer times.
    `
  },
  {
    image :tawasol ,
    gitLink : "https://github.com/Akchiche-Mohamed-Aymen/social-media-website",
    demo : "https://tawasol-three.vercel.app/" ,
    title : "Tawasol Social App",
    description : `
    Created a social platform with user authentication (sign-up, login, logout).
    Features include creating, updating, deleting posts, and commenting on posts
    `
  }
]
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
        <div className = "flex flex-col md:flex-row justify-center gap-5 my-4 pb-7">
          {
            projects.map((p , i )=> <Project key = {i} image={p.image}  gitLink = {p.gitLink}  demo= {p.demo}  title={p.title} description = {p.description}/>)

          }
        </div>
        </>
    )
}