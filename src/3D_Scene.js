import portfolio from "./assets/portfolio.jpg"

export default function Portfolio() {
  return (
    <>
      <img src = {portfolio} className="w-52 h-52 rounded-full mx-auto block shadow-xl shadow-blue-400" alt = "" />
      <h1 className = "font-bold text-white text-2xl text-center">Hi , I am <span className = "text-blue-400">Akchiche Mohamed Aymen</span></h1>
      <p className="text-white text-center">Frontend Web Developer</p>
    </>
  );
}