import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details } = news
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="m-3">
                    <h2 className="card-title">{title}</h2>

                    {details?.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-green-700 font-bold underline">read more</Link></p>
                        : details}
                   
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
NewsCard.propTypes = {
    news: PropTypes.object,
}
