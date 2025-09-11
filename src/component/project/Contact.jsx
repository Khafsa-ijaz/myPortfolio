import "./Contact.css"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
export function Contact()
{
  const [successMessage, setSuccessMessage] = useState("");
  const [errors,setErrors]=useState({})
  
  const [formdata,setdata]=useState({
    fname:"",
    mail:"",
    subject:"",
    message:"",
  })
const handleinput=(e)=>
{
  const{id,value}=e.target;
  setdata({
    ...formdata,[id]:value,
  });
};
const handleSubmit=(e)=>
{
e.preventDefault();
 const validationErrors = validate();
 if (Object.keys(validationErrors).length > 0)
 {
  setErrors(validationErrors);
 }
 else
 {
   setdata({ fname:"",
    mail:"",
    subject:"",
    message:"",});
    setSuccessMessage("Form submitted successfully!");
 }

};
const validate = () => {
  const newErrors = {};

  if (!formdata.fname.trim()) {
    newErrors.name = "Name is required";
  }
  if (!formdata.mail.includes("@")) {
    newErrors.email = "Valid email is required";
  }
  if (!formdata.subject.trim()) {
    newErrors.subject = "Subject is required";
  }
  if (!formdata.message.trim()) {
    newErrors.message = "Message cannot be empty";
  }

  return newErrors;
};

    return(
      <div className="contact" id>
        <div className="contactHeading" data-aos="zoom-out-left">
            <h2>CONTACT</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="infoMain">
         <div className="contactInfo">
            <div className="subDiv">
              <div className="circle"><IoLocationOutline size={20} style={{color:"green"}}/></div>
                <div className="icon"> 
                  <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
                </div>
               
                
            </div>
             <div className="subDiv">
              <div className="circle"><FaPhone size={20} style={{color:"green"}}/></div>
                <div className="icon">
                  <h3>Call</h3>
                  <p>+1 5589 55488 55</p>
                  
                </div>
                
                
                </div>
              <div className="subDiv">
                <div className="circle"><HiOutlineMail size={20} style={{color:"green"}}/></div> 
                <div className="icon">
                  <h3>Email</h3>
                 <p>info@example.com</p>
                 </div>
               
              </div>
               <div className="subDiv">
                <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019201567854!2d-122.41941548468128!3d37.77492927975969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2e6f4b17%3A0x1a5d6e3b6b3211c0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1683657754917!5m2!1sen!2sus"
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
               </div>
        </div>
       <form className="form" onSubmit={handleSubmit}>
  <div className="row">
    <div className="field">
      <label htmlFor="name">Your Name</label>
      <input type="text" id="fname" placeholder="" value={formdata.fname} onChange={handleinput} />
        {errors.name && <p className="error">{errors.name}</p>}
    </div>
    <div className="field">
      <label htmlFor="mail">Your Email</label>
      <input type="email" id="mail" placeholder="" value={formdata.mail} onChange={handleinput}/>
    {errors.email && <p className="error">{errors.email}</p>}
    </div>
  </div>

  <div className="field">
    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" placeholder="" value={formdata.subject} onChange={handleinput}/>
    {errors.subject && <p className="error">{errors.subject}</p>}
  </div>

  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea id="message" rows="5" placeholder="" value={formdata.message} onChange={handleinput}></textarea>
  {errors.message && <p className="error">{errors.message}</p>}
  </div>

  <div className="btnContainer">

    <button type="submit">Send Message</button>
        {successMessage && <p className="success">{successMessage}</p>}
  </div>
</form>
</div>
       
      </div>
    )
}