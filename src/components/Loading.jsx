import {ClipLoader} from "react-spinners";
import PropTypes from "prop-types";

const Loading = ({isLoading}) => (
    <div className='text-center mt-2 mb-2'>
        <ClipLoader loading={isLoading} />
    </div>
);

Loading.propTypes = {
    isLoading: PropTypes.bool
}

export default Loading