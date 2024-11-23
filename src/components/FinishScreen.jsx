import PropTypes from "prop-types";
const FinishScreen = ({points}) => {
    return ( <p>You scored {points}</p> );
}
 
export default FinishScreen;

FinishScreen.PropTypes= {
    points:PropTypes.number
}