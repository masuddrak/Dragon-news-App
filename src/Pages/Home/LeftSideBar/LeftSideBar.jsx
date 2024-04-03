import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

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
        </div>
    );
};

export default LeftSideBar;