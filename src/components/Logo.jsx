import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from "react-router-dom";

const Logo = () => (
    <Link className="navbar-brand" to="/">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
    </Link>
);

export default Logo