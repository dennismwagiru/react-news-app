import {Card, Col, Form, FormGroup, Row} from "react-bootstrap";
import Loading from "../../components/Loading.jsx";
import {Link} from "react-router-dom";
import Logo from "../../components/Logo.jsx";
import {useState} from "react";

const Login = () => {
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
        email: '', password: '', remember: false
    });

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <Form as={Card} onSubmit={handleSubmit} >
            <Card.Body className='d-flex'>
                <div className="p-4 p-md-5 flex-grow-1">

                    <div className="col-auto">
                        <h3> <Logo />  Login</h3>
                    </div>

                    <Form>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email address</label>
                            <input className="form-control" id="email" type="email" value={formData?.email}
                                   onChange={({target: { value}}) => setFormData({ ...formData, email: value})}/>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password" >Password</label>
                            </div>
                            <input className="form-control" id="password" type="password" value={formData.password}
                                   onChange={({target: { value}}) => setFormData({ ...formData, password: value})}/>
                        </div>
                        <div className="row flex-between-center">
                            <Col sm={6}>
                                <div className="form-check mb-0">
                                    <input className="form-check-input" type="checkbox" id="card-checkbox" checked={formData.remember}
                                           onChange={({target: { checked}}) => setFormData({ ...formData, remember: checked})}/>
                                    <label className="form-check-label mb-0" htmlFor="card-checkbox">Remember me</label>
                                </div>
                            </Col>
                            <Col sm={6} className="text-end">
                                <Link  to="/auth/forgot-password">
                                    Forgot Password?
                                </Link>
                            </Col>
                        </div>
                        <div className="mb-3">
                            {
                                processing ? <Loading /> : (
                                    <button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">
                                        Log in
                                    </button>
                                )
                            }
                        </div>

                        <p className='text-center' >Don't have an account?<br />
                            <Link to='/auth/register'>
                                Get started!
                            </Link>
                        </p>
                    </Form>
                </div>
            </Card.Body>
        </Form>
    );
};

export default Login