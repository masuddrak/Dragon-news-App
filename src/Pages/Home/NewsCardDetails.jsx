import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import RightSideBar from "./RightSideBar/RightSideBar";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";
import { authContext } from "../../AuthComponent/AuthComponet";

const NewsCardDetails = () => {
    const { firebaseLoader, setFirebaseLoader } = useContext(authContext)
    const [findNews, setFindNews] = useState({})
    const { title, image_url, details, thumbnail_url } = findNews
    const { id } = useParams()
    const allNews = useLoaderData()
    useEffect(() => {

        if (firebaseLoader) {
            return <h4 className="text-7xl">Loging</h4>
        }
        const uniqNews = allNews.find(news => news._id == id)
        setFindNews(uniqNews)
        setFirebaseLoader(false)
    }, [allNews, id])
    console.log(findNews)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-5 mt-5 gap-8">
                <div className="col-span-4">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="m-3">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <img src={thumbnail_url} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default NewsCardDetails;