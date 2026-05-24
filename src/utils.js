import todo from "./assets/projectsImg/todo.jpg"
import athan from "./assets/projectsImg/athan.jpg"
import tawasol from "./assets/projectsImg/tawasol.jpg"
import axely from "./assets/axely.png"
import clear from "./assets/clear.png"
export const projects = [
  {
    image : axely,
    gitLink : 'https://github.com/Akchiche-Mohamed-Aymen/driving-school-prototype',
    demo : 'https://axely-200.netlify.app/' ,
    title : 'Axely Driving School',
    description : `AXELY is a role-based digital learning platform prototype that connects trainers and students, allowing trainers to manage 
    training content while students access their personal learning portal and profile features.`
  },
  {
    image : clear,
    gitLink : 'https://github.com/Akchiche-Mohamed-Aymen/pfe',
    demo : 'https://clearpath-pfe.netlify.app/' ,
    title : 'ClearPath Business Consulting',
    description : `ClearPath is a professional business consulting and financial services platform targeted at small to medium-sized enterprises. `
  },
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