import PropTypes from "prop-types";



const Count = ({ text, num, handle }) => {
    return (
        <>
            <button onClick={()=>{handle(true)}}>+</button>
            {`${text}: ${num}`}
            <button onClick={()=>{handle(false)}}>-</button>
        </>
    );
};

Count.propTypes = {
    text: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    handle: PropTypes.func.isRequired,
};

export default Count;
