import { useEffect } from "react";
import Banner from "../Banner/Banner";
import OurStory from "../OurStory/OurStory";
import Testimonials from "../Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import Categories from "../Categories/Categories";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const categories = useLoaderData();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <Banner></Banner>
            <OurStory></OurStory>
            <Categories categories={categories}></Categories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;