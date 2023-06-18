import PropTypes from "prop-types";

const Message = ({message, type = 'danger'}) => (
    <div className={`alert alert-${type}`}>
        <p >
            {message}
        </p>
    </div>
);

Message.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(["danger", "success", "info"]),
}

export default Message