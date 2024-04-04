
import moment from "moment";
import { FaBriefcase } from "react-icons/fa";

const LeftCard = ({ letCardImag1, title }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={letCardImag1} alt="Shoes" /></figure>
                <div className=" p-3 space-y-3">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <p>Sports</p>
                        <div className="flex items-center gap-3">
                            <FaBriefcase></FaBriefcase>
                            <p>{moment().format(" MMMM D, YYYY ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftCard;