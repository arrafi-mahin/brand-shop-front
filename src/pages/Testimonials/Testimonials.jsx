

const Testimonials = () => {
    return (
        <div className="py-24 bg-blue-50">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-blue-950 font-bold text-5xl mb-16 text-center">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="card p-8 text-center" data-aos="slide-left">
                        <img className="w-16 h-16 rounded-full mx-auto mb-5" src="https://i.ibb.co/3sFS7rx/testimonial02.jpg" alt="" />
                        <h2 className="text-center text-3xl text-blue-950 font-bold">Pavel Nedved</h2>
                        <span className="font-bold mb-5">Businessmen</span>
                        <p className="italic text-center">Some people dream of success, while other people get up every morning and make it happen.</p>
                        <div className="rating block mt-5">
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                        </div>
                    </div>
                    <div className="card p-8 text-center" data-aos="slide-up">
                        <img className="w-16 h-16 rounded-full mx-auto mb-5" src="https://i.ibb.co/6gDBW40/testimonial03.jpg" alt="" />
                        <h2 className="text-center text-3xl text-blue-950 font-bold">Franz Beckenbauer</h2>
                        <span className="font-bold mb-5">Reporter</span>
                        <p className="italic text-center">Some people dream of success, while other people get up every morning and make it happen.</p>
                        <div className="rating block mt-5">
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                        </div>
                    </div>
                    <div className="card p-8 text-center" data-aos="slide-right">
                        <img className="w-16 h-16 rounded-full mx-auto mb-5" src="https://i.ibb.co/s9VVCGv/testimonial04.jpg" alt="" />
                        <h2 className="text-center text-3xl text-blue-950 font-bold">Alfredo Stefano </h2>
                        <span className="font-bold mb-5">Merketer</span>
                        <p className="italic text-center">Some people dream of success, while other people get up every morning and make it happen.</p>
                        <div className="rating block mt-5">
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-blue-950" />
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    );
};

export default Testimonials;