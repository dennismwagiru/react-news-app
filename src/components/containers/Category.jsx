import {Badge, Card, Col, Stack} from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Category = ({ id, name, sources }) => (
    <Col sm={4} xs={12} className='mb-2'>
        <Card as={Link} to={`/categories/${id}/articles`} >
            <Card.Body>
                <h5 className="card-title">{name}</h5>
                <Stack direction='horizontal'>
                    {
                        sources?.map(source => <Badge className='me-2' bg="success" key={source.id}>{source.name}</Badge>)
                    }
                </Stack>
            </Card.Body>
        </Card>
    </Col>
);

Category.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    sources: PropTypes.array,
    description: PropTypes.string,
}

export default Category