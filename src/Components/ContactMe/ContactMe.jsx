import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yw9o7sd', 'template_bvccn24', form.current, {
                publicKey: 'KRSs8kmxdH4WN6Mae',
            })
            .then(
                (result) => {
                    if (result) {
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: "Message Sent Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }


                    e.target.reset();
                },
                (error) => {
                    if (error) {
                        Swal.fire({
                            position: "middle",
                            icon: "warning",
                            title: "Unable to send message",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='contact' className="min-h-screen flex flex-col items-center justify-center px-4">
            <h2 className="text-white text-4xl font-bold mb-8">Contact Me</h2>

            <form
                ref={form}
                onSubmit={sendEmail}
                className=" shadow-xl shadow-cyan-900 w-full max-w-md p-8 rounded-lg"
            >
                <label className="block text-gray-300 mb-2 font-semibold" htmlFor="user_name">
                    Your Name
                </label>
                <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Enter your name"
                    required
                    className="w-full mb-6 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <label className="block text-gray-300 mb-2 font-semibold" htmlFor="user_email">
                    Your Email
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Enter your email"
                    required
                    className="w-full mb-6 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <label className="block text-gray-300 mb-2 font-semibold" htmlFor="message">
                    Your Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    required
                    rows={5}
                    className="w-full mb-6 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                />

                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors duration-300 text-white font-semibold py-3 rounded-md"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
