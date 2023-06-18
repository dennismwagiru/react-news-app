import {Card, Col} from "react-bootstrap";
import PropTypes from "prop-types";

const Author = ({ name, source }) => (
    <Col sm={4} xs={12} className='mb-2'>
        <Card >
            <Card.Body>
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-end">{source?.name}</p>
            </Card.Body>
        </Card>
    </Col>
);

Author.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    source: {
        name: PropTypes.string,
        description: PropTypes.string
    },
    description: PropTypes.string,
}

export default Author