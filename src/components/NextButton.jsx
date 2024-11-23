import PropTypes from "prop-types";
const NextButton = ({dispatch, answer}) => {
    if (answer === null) return null;
    return ( <button className="btn btn-ui" onClick={()=>{dispatch({type:'nextQuestion'})}}>Next</button> );
}
 
export default NextButton;

NextButton.propTypes={
    dispatch:PropTypes.func,
    answer:PropTypes.any,
}
