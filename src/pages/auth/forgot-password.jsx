import {useState} from "react";
import {Card, Col, Form} from "react-bootstrap";
import Logo from "../../components/Logo.jsx";
import {Link} from "react-router-dom";
import Loading from "../../components/Loading.jsx";

const ForgotPassword = () => {
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <Form as={Card} onSubmit={handleSubmit} >
            <Card.Body className='d-flex'>
                <div className="p-4 p-md-5 flex-grow-1">

                    <div className="col-auto">
                        <h3> <Logo />  Forgot Password</h3>
                    </div>

                    <Form>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email address</label>
                            <input className="form-control" id="email" type="email" value={formData?.email}
                                   onChange={({target: { value}}) => setFormData({ ...formData, email: value})}/>
                        </div>

                        <div className="mb-3">
                            {
                                processing ? <Loading /> : (
                                    <button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">
                                        Submit
                                    </button>
                                )
                            }
                        </div>

                        <p className='text-center' >Try Again?<br />
                            <Link to='/auth/login'>
                                Sign In
                            </Link>
                        </p>
                    </Form>
                </div>
            </Card.Body>
        </Form>
    );
};

export default ForgotPassword