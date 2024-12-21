
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaTelegramPlane, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        orderNumber: "",
        query: "",
        });
        
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };
        
        const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        };
        
return (
<div className="">
    <header className="header">
        <div className="logo">LOGO</div>
        <div className="header-options">
            <span href='/'>Help</span>
            <span href='/'>Deutsch</span>
            <span href='/'>EUR</span>
            <div className="menu">☰</div>
           
        </div>
    </header>
    
    <div className="text-center">
        <h1 className="mb-3">Hello, how can we help you?</h1>
        <p>Find Travel guide, FAQ, chat,</p>
    </div>
    <div>

        {/* Options Section */}
        <section className="options">
            <div className="option">
                <div className="icon">❓</div>
                <h2>FAQ</h2>
                <p>Lorem ipsum doloor sit amet</p>
            </div>
            <div className="option">
                <div className="icon">📍</div>
                <h2>Travel Guide</h2>
                <p>Lorem ipsum doloor sit amet</p>
            </div>
        </section>

        {/* Chat Section */}

        <section className="chat">
            <h2>Chat</h2>
            <p>Lorem ipsum doloor sit amet</p>
                        <div className="chat-options">
                        <div className="chat-option">
                            <FaTelegramPlane size={40} color="#0088cc" />
                             <span href="/"> Telegram </span>
                        </div>
                        <div className="chat-option">
                            <FaWhatsapp size={40} color="#25D366" />
                            <span href="">WhatsApp</span>
                        </div>
                        <div className="chat-option">
                            <div className="icon mt-3" size={40}>💬</div>
                            <span>Live Chat</span>
                        </div>
                    </div>
                                
            


        </section>



        {/* Social Section */}
        <section className="social">
            <h2>Social</h2>
            <p>Lorem ipsum doloor sit amet</p>
            <div className="social-icons">
                <FaFacebook size={30} color="#1877F2" />
                <FaInstagram size={30} color="#C13584" />
                <FaTwitter size={30} color="#1DA1F2" />
                <FaLinkedin size={30} color="#0077B5" />
            </div>
        </section>


    </div>
    <div className="card my-4 p-4 shadow">
        <h2 className="card-title mb-4 text-center">Send Query</h2>
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <input type="text" name="orderNumber" className="form-control" placeholder="Order no." value={formData.orderNumber} onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3">
                <textarea name="query" className="form-control" placeholder="Your Query" rows="5" value={formData.query} onChange={handleChange} required></textarea>
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>
);
}

export default App ;