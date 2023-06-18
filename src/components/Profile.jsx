import { Dropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Profile = () => {
    return (

        <Dropdown navbar={true} as="li">
            <Dropdown.Toggle
                bsPrefix="toggle"
                as={Link}
                to="#!"
                className="pe-0 nav-link"
            >
                <div className="avatar">
                    <img className="rounded-circle" src="https://prium.github.io/falcon/v3.5.0/assets/img/team/3-thumb.png" alt="" />
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-card  dropdown-menu-end">
                <div className="bg-white rounded-2 py-2 dark__bg-1000">
                    <Dropdown.Item as={Link} to="/profile">
                        Profile &amp; account
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/auth/logout">
                        Logout
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Profile