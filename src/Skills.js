import css from "./assets/tech/css.png"
import html from "./assets/tech/html.png"
import git from "./assets/tech/git.png"
import js from "./assets/tech/javascript.png"
import node from "./assets/tech/nodejs.png"
import react from "./assets/tech/reactjs.png"
import redux from "./assets/tech/redux.png"
import tailwind from "./assets/tech/tailwind.png"
import Skill from "./Skill"
const cards = [html , css , js , git , tailwind , react , node , redux]

export default function Skills(){

    return(
        <div  className="flex justify-center flex-wrap px-4 gap-5 mt-5">
            {
            cards.map(card => <Skill key = {card} image = {card} />)
        }
        </div>
    )
}