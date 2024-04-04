import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import RightSideBar from "./RightSideBar/RightSideBar";

const NewsCardDetails = () => {
    const { id } = useParams()
    console.log()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-5 mt-5">
                <div className="col-span-4">
                    <p>{id}</p>
                    new details
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default NewsCardDetails;