import PropTypes from "prop-types";
import {Card, Col} from "react-bootstrap";

const Article = ({id, source_id, author_id, title, web_url, image_url, description, content, published_at}) => {
    return (
        <Col sm={4} xs={12} className='mb-2' >
            <Card >
                <Card.Body >
                    { image_url &&
                        <img src={image_url} className="card-img-top" alt="..." />
                    }
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={web_url} target='_blank' rel='noreferrer' className="card-link">Read More</a>
                </Card.Body>
            </Card>
        </Col>
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