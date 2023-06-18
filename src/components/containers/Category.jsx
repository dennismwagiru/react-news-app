import {Badge, Card, Col, Stack} from "react-bootstrap";
import PropTypes from "prop-types";

const Category = ({ name, sources }) => (
    <Col sm={4} xs={12} className='mb-2'>
        <Card >
            <Card.Body>
                <h5 className="card-title">{name}</h5>
                <Stack direction='horizontal'>
                    {
                        sources?.map(source => <Badge className='me-2' bg="success" key={source.id}>{source.name}</Badge>)
                    }
                </Stack>
                {/*<p className="card-text text-end">{source?.name}</p>*/}
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