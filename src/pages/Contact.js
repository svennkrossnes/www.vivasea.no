import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', { required: true })} placeholder="Name" />
                {errors.name && <span>Name is required</span>}

                <input {...register('email', { required: true })} placeholder="Email" />
                {errors.email && <span>Email is required</span>}

                <textarea {...register('message', { required: true })} placeholder="Message" />
                {errors.message && <span>Message is required</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
