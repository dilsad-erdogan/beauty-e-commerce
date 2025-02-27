const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-300">
            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                {/* Newsletter Section */}
                <div className="md:w-1/2">
                    <h2 className="font-semibold uppercase" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Join Our Newsletter *</h2>
                    <hr className="my-2 border-gray-400" />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-5 h-5 border border-gray-500" />
                        <span>Yes, subscribe me to your newsletter. *</span>
                    </div>
                    <button className="mt-3 bg-pink-500 px-3 py-2 rounded-full hover:bg-pink-600 text-white transition duration-200">
                        Subscribe Now
                    </button>
                </div>
        
                {/* Links Section */}
                <div className="md:w-1/3 flex justify-between">
                    <div className="space-y-2">
                        <a href="#" className="block">Shop</a>
                        <a href="#" className="block">Services</a>
                        <a href="#" className="block">Gift Card</a>
                        <a href="#" className="block">Contact</a>
                    </div>
                    <div className="space-y-2">
                        <a href="#" className="block">Youtube</a>
                        <a href="#" className="block">Instagram</a>
                        <a href="#" className="block">X</a>
                    </div>
                </div>
            </div>
    
            {/* Copyright Section */}
            <div className="text-center text-sm text-gray-500 mt-6">
                © 2025 by Dilşad Rukiye Erdoğan. <a href="https://www.linkedin.com/in/dilşad-erdoğan-089547221/" className="underline text-pink-500 hover:text-pink-600">Linkedin</a>
            </div>
        </footer>
    );
};
  
export default Footer;  