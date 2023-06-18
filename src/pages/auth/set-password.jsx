import {useState} from "react";
import {Card, Form} from "react-bootstrap";
import Logo from "../../components/Logo.jsx";
import Loading from "../../components/Loading.jsx";
import {Link} from "react-router-dom";

const SetPassword = () => {
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
        password: '', password_confirmation: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <Form as={Card} onSubmit={handleSubmit} >
            <Card.Body className='d-flex'>
                <div className="p-4 p-md-5 flex-grow-1">

                    <div className="col-auto">
                        <h3> <Logo />  Set Password</h3>
                    </div>

                    <Form>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password" >Password</label>
                            </div>
                            <input className="form-control" id="password" type="password" value={formData.password}
                                   onChange={({target: { value}}) => setFormData({ ...formData, password: value})}/>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password_confirmation" >Confirm Password</label>
                            </div>
                            <input className="form-control" id="password_confirmation" type="password_confirmation" value={formData.password_confirmation}
                                   onChange={({target: { value}}) => setFormData({ ...formData, password_confirmation: value})}/>
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

export default SetPassword