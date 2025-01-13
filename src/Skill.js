
export default function Skill({image}){

    return(
       
        <div className = "h-28 skill relative w-28 bg-purple-800 rounded-full cursor-pointer flex items-center justify-center">
            <img src = {image} className = "w-20 h-16 "/>
        </div>
    )
}