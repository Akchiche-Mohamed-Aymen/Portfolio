


export default function Project({image , gitLink , demo , title , description}){
 
    return(
        <a  href = {demo} target="_blank">
        <div className="bg-violet-950 rounded-md p-2 shadow-md	shadow-violet-400 duration-1000 hover:shadow-violet-600 hover:shadow-xl">
            <div className = "w-full md:w-60 h-44 relative ">
                <img src ={image} className="w-full md:w-60 h-44 rounded-md " alt=""/>
                <a href = {gitLink} target="_blank" className ="absolute top-2 right-5" >
                 <i
                  className="fa-brands fa-github  text-2xl font-bold bg-whte cursor-pointer"></i>
                </a>
            </div>
            <h1 className = "font-bold text-white text-2xl ">{title}</h1>
            <p className = "text-gray-300 ">{description}</p>
        </div>
        </a>
    )
}
