const Banner = () => {
    return (
        <div className="py-24 md:py-40 banner-area bg-no-repeat bg-center bg-cover" style={{ 
            backgroundImage: `url('https://i.ibb.co/XxCHMKn/toa-heftiba-TVQFl9-R-MLQ-unsplash.jpg')` 
          }}>
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="bg-blue-950 p-12 rounded-lg">
                    <h1 data-aos="fade-left" className="text-white font-medium text-5xl text-center leading-[4rem]">Make your<br/><span className="uppercase font-bold">appearance</span><br/>extra special</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;