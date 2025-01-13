import {FeedBack} from "./FeedBack"
const feedbacks  = [
    `I thought it
     was impossible to make a 
     website as beatiful as our product , but Aymen
     proved me wrong `,
     ` I 've never met a web
      developer who truly
      cares about their clients' success like Aymen
      does
     `,
     `After Aymen optimezed our
     website . our traffic
     increased by 50% .We
     can't thank enough! 
     `
]
export default function Testimon(){

    return (
        <div style = {{background : "#19032c"}} className = "rounded-md py-4 px-2  my-5">
            <p className="text-gray-400">WHAT OTHERS SAY </p>
            <h1 className="text-white font-bold text-4xl">Testimontials. </h1>
            <div className="flex gap-9 mt-5 mb-3 justify-center flex-wrap">
            {feedbacks.map(feed =><FeedBack key = {feed} feedBack={feed}/>)}
        </div>
        </div>
       
    )
}