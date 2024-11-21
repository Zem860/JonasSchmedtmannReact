import PropTypes from "prop-types";
import Options from "./Options";
const Question = ({question}) => {
    return ( <>
    <h4>{question.question}</h4>
    <Options question={question}/>
    </> );
}
 
export default Question;

Question.propTypes = {
    question:PropTypes.shape({
        question:PropTypes.string,
        options:PropTypes.array,
    })
}