import React, { useContext, useEffect } from "react";
import { DataContext, DataProvider } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props)=>{
        const {className, style, onClick} = props;

        return(
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className="arrows h-[40px] w-[40px]" style={{...style,display:"block", borderRadius:"50px", background:'#f53347', color:"white", position:"absolute", padding:"2px", left:"50px"}}/>
            </div>
        )
  }

  const SampleNextArrow = (props)=>{
        const {className, style, onClick} = props;

        return(
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowRight className="arrows h-[40px] w-[40px]" style={{...style,display:"block", borderRadius:"50px", background:'#f53347', color:"white", position:"absolute", padding:"2px", right:"50px"}}/>
            </div>
        )
  }

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev"/>
  };

  return (
    <div>
      <Slider {...settings}>
        {
            data?.slice(0,7).map((product, index) => 
                <div key={index} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
                    <div className="flex gap-8 justify-center h-[600px] items-center px-4">
                        <div className="space-y-6">
                            <h3 className="text-red-500 font-semibold font-sans text-sm">Powering your World with the Best in electronics</h3>
                            <h1 className="text-3xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">{product.title}</h1>
                            <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">{product.description}</p>
                            <button className="bg-gradient-to-r from-red-500 to-purple-500  text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
                        </div>
                        <div>
                            <img src={product.image} alt={product.title} className="rounded-full w-[550px] hover:scale-105 transition-all shadow-xl shadow-red-400" />
                        </div>
                    </div>
                </div>
            )
        }
      </Slider>
    </div>
  );
};

export default Carousel;
