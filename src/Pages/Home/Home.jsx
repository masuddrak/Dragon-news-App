import { Link, useLoaderData } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import Marquee from "react-fast-marquee";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import NewsCard from "./NewsCard";


const Home = () => {
    const allNews=useLoaderData()
    console.log(allNews)
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
                <div><LeftSideBar></LeftSideBar></div>
                <div className="col-span-2">
                    {
                        allNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div><RightSideBar></RightSideBar></div>
            </div>
        </div>
    );
};

export default Home;