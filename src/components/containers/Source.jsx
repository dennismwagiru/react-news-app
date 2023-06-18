import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Source = ({ id, name }) => (
    <Col sm={4} xs={12} className='mb-2'>
        <Card as={Link} to={`/sources/${id}/articles`} >
            <Card.Body>
                <h5 className="card-title">{name}</h5>
            </Card.Body>
        </Card>
    </Col>
);

Source.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
}

export default Source