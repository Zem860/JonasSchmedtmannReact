import PropTypes from "prop-types";
const ErrorMsg = ({errMsg}) => {
    return ( <div className="error"><span>❌</span>{errMsg}</div> );
}
 
export default ErrorMsg;

ErrorMsg.propTypes = {
    errMsg:PropTypes.string.isRequired,
}