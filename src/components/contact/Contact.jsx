/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location from "../../assets/location.svg";


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure, odio minus mollitia eveniet illum non magni natus pariatur itaque.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>rasimax55@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>0901808908</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="" /> <p>Tamil Nadu, India</p>
                </div>
            </div>
        </div>
        <div className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your Email" name="email" />
            <label htmlFor="">Write your Message</label>
            <textarea name="message" rows="8" placeholder="Enter Your response"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
