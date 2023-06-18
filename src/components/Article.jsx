import PropTypes from "prop-types";

const Article = ({id, source_id, author_id, title, web_url, image_url, description, content, published_at}) => {
    return (
        <div className='col-md-4 mb-2'>
            <div className="card" >
                { image_url &&
                    <img src={image_url} className="card-img-top" alt="..." />
                }
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={web_url} target='_blank' rel='noreferrer' className="card-link">Read More</a>
            </div>
        </div>
    );
};
Article.propTypes = {
    id: PropTypes.number,
    source_id: PropTypes.number,
    author_id: PropTypes.number,
    title: PropTypes.string,
    web_url: PropTypes.string,
    image_url: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    published_at: PropTypes.string,
    created_at: PropTypes.string
}

export default Article