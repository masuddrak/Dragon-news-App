import { Link, useLoaderData } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import Marquee from "react-fast-marquee";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import NewsCard from "./NewsCard";
import {  useState } from "react";


const Home = () => {
    const allNews = useLoaderData()
    const [isAllNew,setIsAllNews]=useState(true)
    const [categoryFinterData,setCategoryFinterData]=useState(allNews)
    // console.log(allNews)
   
    const filterCategory = (catagoryID) => {
        setIsAllNews(false)
        console.log("dsata filter",catagoryID)
        const filterData=allNews.filter(news=>news.category_id==catagoryID)
        setCategoryFinterData(filterData)
       
    }
    return (
        <div className="font-Poppins">
            <Header></Header>
            <div className="flex items-center  bg-slate-800 p-2 rounded gap-2 text-white my-4">
                <button className="btn btn-accent rounded-none">Latest</button>
                <Marquee pauseOnHover={true}>
                    <div className="flex gap-4">
                        <Link to="/"> amet consectetur adipisicing elit. Atque, quia....</Link>
                        <Link to="/"> amet consectetur adipisicing elit. Atque, quia....</Link>
                        <Link to="/"> amet consectetur adipisicing elit. Atque, quia....</Link>
                        <Link to="/"> amet consectetur adipisicing elit. Atque, quia....</Link>
                        <Link to="/"> amet consectetur adipisicing elit. Atque, quia....</Link>
                    </div>
                </Marquee>
            </div>
            <Navbar></Navbar>
            {/* main home page layout */}
            <div className="grid grid-cols-4 gap-10">
                <div><LeftSideBar filterCategory={filterCategory}></LeftSideBar></div>
                <div className="col-span-2 space-y-10">
                    {isAllNew?allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>):
                    categoryFinterData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div><RightSideBar></RightSideBar></div>
            </div>
        </div>
    );
};

export default Home;