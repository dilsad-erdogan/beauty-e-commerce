import Slider from "react-slick";

const SliderMain = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full mx-auto p-6 relative max-w-screen-lg">
            {/* Text and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
                <h2 className="text-4xl font-bold drop-shadow-lg">Welcome to Nude Store</h2>
                <p className="mt-2 text-lg drop-shadow-md">Discover our latest products and trends.</p>
                <a href="/shop" className="mt-4 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition">Shop Now</a>
            </div>

            {/* Slider */}
            <Slider {...settings}>
                <div className="flex justify-center items-center">
                    <img src="https://static.wixstatic.com/media/84770f_44e3162df7dc4eb69d6d3f848b26416d~mv2.jpg/v1/fill/w_1075,h_580,q_90,enc_avif,quality_auto/84770f_44e3162df7dc4eb69d6d3f848b26416d~mv2.jpg" alt="Slide 1" className="w-full max-h-3/4 object-cover rounded-lg"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://static.wixstatic.com/media/84770f_b1e324e5195449fba23df0d9f889767d~mv2.jpg/v1/fill/w_1075,h_580,q_90,enc_avif,quality_auto/84770f_b1e324e5195449fba23df0d9f889767d~mv2.jpg" alt="Slide 2" className="w-full max-h-3/4 object-cover rounded-lg"/>
                </div>
            </Slider>
        </div>
    );
}

export default SliderMain;