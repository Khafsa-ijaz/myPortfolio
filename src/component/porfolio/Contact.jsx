import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Swal from "sweetalert2";


export function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_sg2aq4s",  
      "template_5mra7po",  
      form.current,
      "XO3MAT48Cl-i6MU8Q"  
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent ",
          text: "Thanks for contacting me. I'll reply soon!",
          confirmButtonColor: " rgb(208, 160, 35)",
          backgroundColor:" rgb(208, 160, 35)"
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
  icon: "error",
  title: "Message Failed",
  text: "Sorry, your message could not be sent. Please try again later!",
  confirmButtonText: "OK",
  confirmButtonColor: "rgb(208, 160, 35)", 
  background: "#fff",
  color: "#333",
});
      }
    );

  e.target.reset();
};
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2><span style={{color:"rgb(208, 160, 35)"}}>-</span>Get In Touch</h2>
        <p>
I’m always open to new opportunities and collaborations. Let’s build something amazing together!
</p>


        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="call"> <div className="circle2"><FiPhoneCall size={23} style={{color:"rgb(208, 160, 35)"}}/></div> <p><a href="tel:+923485167609">+92 3213389593</a></p></div>
            <div className="call"> <div className="circle2"><AiOutlineMail size={23} style={{color:"rgb(208, 160, 35)"}}/></div> <p><a href="mailto:khansaijaz2@gmail.com">khafsaijazijazkhan16@gmail.com</a></p></div>
           <div className="call"> <div className="circle2"><CiLocationOn size={23} style={{color:"rgb(208, 160, 35)"}}/></div> <p>Kaffal Garh, Bagh AJK</p></div>
            
        
          </div>

          {/* Contact Form */}
          <form  ref={form} onSubmit={sendEmail}  className="contact-form">
            <input type="text"  name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
