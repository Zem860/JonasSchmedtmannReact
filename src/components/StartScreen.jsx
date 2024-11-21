import PropTypes from "prop-types";
const StartScreen = ({numQuestions, dispatch}) => {
    return ( <div className="start">
    <h2>Start React Quiz!</h2>
    <h3>{numQuestions} questions to test your React Mastery!</h3>
    <button className="btn btn-ui" onClick={()=>{dispatch({type:'start'})}}>{`Let's start`}</button>
    </div> );
}
 
export default StartScreen;

StartScreen.propTypes = {
    numQuestions:PropTypes.number,
    dispatch: PropTypes.func,
}