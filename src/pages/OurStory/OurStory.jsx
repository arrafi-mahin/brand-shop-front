import { Link } from "react-router-dom";

const OurStory = () => {
    return (
        <div className="py-24 bg-blue-50">
            <div className="max-w-[1280px] mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="content">
                        <h2 className="text-blue-950 font-bold text-5xl mb-16">Our Story</h2>
                        <p className="text-blue-950 text-justify">
                            At RAFI AUTOS, our story is more than just a tale of selling cars; it's a journey in wheels, fueled by passion and driven by a commitment to serve our community. Our story began in 2023, when a group of automotive enthusiasts came together with a shared dream to create a place where individuals and families could find their perfect vehicles, a place where every customer's automotive dream could become a reality. <br /><br /> 

                            From the very beginning, we knew we wanted to be different. Our founders believed in the power of exceptional customer service and a unique car-buying experience. With that vision, we set out to create a car dealership that prioritized the customer above all else. We wanted our customers to feel not just satisfied but genuinely delighted when they walked through our doors.<br /><br />

                            Over the years, we've grown and evolved, expanding our inventory and services to meet the ever-changing needs of our customers. We've worked diligently to handpick the finest selection of cars, from stylish sedans to rugged SUVs and powerful trucks. Our dedication to quality and reliability means that every vehicle on our lot meets our high standards.<br /><br />

                            What sets us apart is our team of automotive experts, who are not just salespeople but enthusiasts and advisors. We believe in educating our customers, empowering them with the knowledge they need to make the best choice for their needs and lifestyle. Whether you're a first-time car buyer or a seasoned automotive veteran, we're here to guide you through the process.<br /><br />

                            Our commitment extends beyond the initial sale. We've built a full-service center staffed with certified technicians who are passionate about keeping your vehicle in top shape. Regular maintenance and unexpected repairs are a part of the automotive journey, and we're here to ensure your vehicle stays running smoothly for years to come.<br /><br />

                            As we've grown, we've also grown our commitment to the community. We sponsor local events, charities, and organizations because we believe in giving back to the people who have supported us over the years. Our community is our family, and we're proud to be a part of it.<br /><br />

                            Today, [Car Shop Name] stands as a testament to our unwavering commitment to our customers, our community, and the world of automobiles. Our story is still being written, one satisfied customer at a time. Thank you for being a part of our journey in wheels. We look forward to continuing to serve you and help you find your perfect ride.
                        </p>
                    </div>
                    <div className="img">
                        <img data-aos="fade-right" className="rounded-lg" src="https://i.ibb.co/wBS5y9V/friendly-team.jpg" alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;