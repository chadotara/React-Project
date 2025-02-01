import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import address_icon from '../../assets/location-icon.png'
import white_icon from '../../assets/white-arrow.png'






const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bec18146-5926-4bf4-9312-e0ea38c6b6f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }};

  return (
    <div className='contact'>
        <div className="contact-col">

            <h3>Send us Message <img src={message_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quasi voluptas tenetur optio itaque deserunt accusantium commodi beatae maxime, nostrum blanditiis ea a. Reprehenderit voluptatem animi dignissimos voluptates similique minus.</p>
            <ul>
                <li> <img src={email_icon} alt="" />Contact@horizon.us</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7899</li>
                <li> <img src={address_icon} alt="" /> 398 Ford Street , San Jose ,California <br /> 95134  United States</li>
            </ul>
        </div>
        <div className="contact-col">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor=""> Your Name </label>
            <input type="text" name="name" placeholder='Enter Your Name' required />
            <label htmlFor=""> Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone number' required />
            <label htmlFor=""> Write Messages here</label>
            <textarea name="message" id=""  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_icon} alt="" /> </button>
          </form>

          <span>{result}</span>
        </div>


      
    </div>
  )
}

export default Contact
