import PropTypes from "prop-types";
const MainBody = ({children}) => {
    return ( <>{children}</> );
}
 
export default MainBody;

MainBody.propTypes = {

    children: PropTypes.node

}