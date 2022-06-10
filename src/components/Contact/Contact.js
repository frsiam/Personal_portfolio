import React from 'react';
import './Contact.css';
// import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rct95qn', 'template_d2vvp0a', form.current, 'sIgc0Y8uL_8xdOj0B')
            .then((result) => {
                if (result.text === 'OK') {
                    e.target.reset();
                    alert('Message sent')
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="mycontainer contact_container">
                <div className="contact_options">
                    {/* <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>siam.frs@gamil.com</h5>
                        <a target='_blank' href="mailto:siam.frs@gmail.com">Send a Message</a>
                    </article> */}
                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Md Foyzur Rahman Siam</h5>
                        <a target='_blank' href="https://m.me/siam.frs">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+8801930820152</h5>
                        <a target='_blank' href="https://web.whatsapp.com/send?phone=+8801930820152">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
                    <button type='submit' className='mybtn mybtn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;