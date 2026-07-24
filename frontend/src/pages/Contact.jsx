import Navbar from "../components/Navbar";
import "../styles/contact.css";

function Contact(){

    return(

        <>

        <Navbar/>

        <section className="contact">

        <div className="contact-box">

        <h1>Contact Us</h1>

        <input type="text" placeholder="Your Name"/>

        <input type="email" placeholder="Email"/>

        <textarea rows="6" placeholder="Message"></textarea>

        <button>Send Message</button>

        </div>

        </section>

        </>

    );

}

export default Contact;