import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser"

function FormContact() {
  const toast = (title , text , icon)=>{
    Swal.fire({
      title,
      text,
      icon
    });
  }
  function sendEmail(e){
    e.preventDefault()
    const data =  [...new FormData(e.target)]
    if(data[0][1].length > 0 && data[1][1].includes('@') && data[2][1].length > 0){
    emailjs.sendForm('service_ddmgmaj', 'template_pn3qokz', e.target, "F-0-7xZ7jiMkLpei5")
    .then(
      () => toast("SUCCESS" ,"Thanks To Contact Us" , "success"), 
      () => 
        toast("ERROR" ,"Failed To Send Email " , "error"),
    );}
    else   toast("ERROR" ,"Fill All Fields Please " , "error")
  }
  return (
    <>
  <form className="bg-violet-900 block mx-auto" onSubmit ={sendEmail} >
    <h5 className="text-gray-300 font-normal">GET IN TOUCH</h5>
    <h1 className="text-white font-bold text-2xl">CONTACT.</h1>
    <label>Your Name : </label>
    <input 
    name = "Name"
    type="text" placeholder="What is your Name ? "/>
    <label>Your Email : </label>
    <input 
    name= "email"
    type="email" placeholder="What is your email ? "/>
    <label>Your Message : </label>
    <textarea
    name= "message"
     placeholder="what you want to say ?"/>
    <button  type="submit" className="my-3 text-white w-fit px-3 py-1 bg-violet-700 duration-1000 hover:bg-violet-950  rounded-md">Send</button>
  </form>

  </>

  )
}

export default FormContact
