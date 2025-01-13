export default function  Container({children}){
    return (
        <div className="container max-w-3xl w-full mx-auto px-5 mt-20">
            {children}
        </div>
    )
}