import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import LeftCard from "../../../Components/LeftCard";
import letCardImag1 from '../../../assets/1.png'
import letCardImag2 from '../../../assets/2.png'
import letCardImag3 from '../../../assets/3.png'
const LeftSideBar = () => {
    const [catagorys,setCatagorys]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCatagorys(data))
    },[])
    console.log(catagorys)
    return (
        <div>
            <h1 className="text-xl font-bold mb-3">All Category</h1>
            <div className="ml-3">
                {catagorys.map(catagory=><NavLink 
                key={catagory.id}
                className={`block mb-3 ${(isActive)=>isActive?"bg-green-400":""}`}
                to={`/${catagory.id}`}
                >{catagory.name}</NavLink>)}
            </div>
            <div className="space-y-4">
                <LeftCard letCardImag1={letCardImag1} title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}></LeftCard>
                <LeftCard letCardImag1={letCardImag2} sport={"Cricket"} title={"NBA 2K (basketball simulation video game series)"}></LeftCard>
                <LeftCard letCardImag1={letCardImag3} sport={"Football"}  title={"Madden NFL (American football simulation video game series)"}></LeftCard>
            </div>
        </div>
    );
};

export default LeftSideBar;