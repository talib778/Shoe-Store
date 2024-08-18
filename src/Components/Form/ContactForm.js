// src/ContactForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitMessage, setSubmitMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitMessage('Form submitted successfully!\nWe will contact you soon.');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    useEffect(() => {
        if (submitMessage) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submitMessage, navigate]);

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </div>
    );
};

export default ContactForm;
