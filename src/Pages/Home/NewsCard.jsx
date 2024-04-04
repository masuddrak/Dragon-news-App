import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id, thumbnail_url, image_url, details } = news
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>

                    {details?.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-green-700 font-bold underline">read more</Link></p>
                        : details}

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;