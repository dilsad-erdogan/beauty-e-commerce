import { useState } from "react";

const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    };  

    return (
        <div className="w-full mx-auto p-6 relative max-w-screen-lg">
            {/* Contact form */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
                <form className="flex flex-col mb-5" onSubmit={handleSubmit}>
                    <div className="flex flex-row">
                        <div className="p-4">
                            <label htmlFor="name" className="text-gray-400 font-bold text-lg">First Name</label>
                            <input type="name" id="name" className="bg-gray-400 border text-white text-sm rounded-lg block w-full p-2.5" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
                        </div>

                        <div className="p-4">
                            <label htmlFor="name" className="text-gray-400 font-bold text-lg">Last Name</label>
                            <input type="name" id="name" className="bg-gray-400 border text-white text-sm rounded-lg block w-full p-2.5" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="p-4">
                            <label htmlFor="email" className="text-gray-400 font-bold text-lg">Email</label>
                            <input type="email" id="email" className="bg-gray-400 border text-white text-sm rounded-lg block w-full p-2.5" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        </div>

                        <div className="p-4">
                            <label htmlFor="text" className="text-gray-400 font-bold text-lg">Subject</label>
                            <input type="text" id="text" className="bg-gray-400 border text-white text-sm rounded-lg block w-full p-2.5" value={subject} onChange={(e) => {setSubject(e.target.value)}} />
                        </div>
                    </div>

                    <div className="p-4">
                        <label htmlFor="text" className="text-gray-400 font-bold text-lg">Add message here</label>
                        <textarea type="text" id="text" className="bg-gray-400 border text-white text-sm rounded-lg block w-full p-2.5" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                    </div>

                    <div className="p-4">
                        <button type="submit" className="bg-pink-500 rounded-full hover:bg-pink-600 text-white transition duration-200 mt-2 py-2 px-8 w-full">Login</button>
                    </div>
                </form>
            </div>

            {/* Picture */}
            <div className="flex justify-center items-center">
                <img src="https://static.wixstatic.com/media/94e66f_996d5a24bcda43ebb3cf2ade8b04abe9~mv2_d_2001_2001_s_2.jpg/v1/fill/w_846,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/94e66f_996d5a24bcda43ebb3cf2ade8b04abe9~mv2_d_2001_2001_s_2.jpg" alt="Slide 1" className="w-full object-cover rounded-lg blur-sm"/>
            </div>
        </div>
    )
}

export default ContactUs