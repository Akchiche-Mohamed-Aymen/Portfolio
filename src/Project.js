export default function Project({ image, gitLink, demo, title, description }) {
    return (
       <a href={demo} target="_blank" className="h-full w-full">
    <div className="bg-violet-950 rounded-md p-2 shadow-md shadow-violet-400 duration-1000 hover:shadow-violet-600 hover:shadow-xl flex flex-col h-full w-full">
                <div className="w-full h-44 relative">
                    <img src={image} className="w-full h-44 rounded-md object-cover" alt="" />
                    {gitLink && <a href={gitLink} target="_blank" className="absolute top-2 right-2">
                        <i className="fa-brands fa-github text-2xl font-bold cursor-pointer text-white"></i>
                    </a>}
                </div>
                <div className="flex flex-col flex-1 mt-2">
                    <h1 className="font-bold text-white text-2xl">{title}</h1>
                    <hr className="border-gray-600 my-2" />
                    <p className="text-gray-300 flex-1">{description}</p>
                </div>
            </div>
        </a>
    )
}