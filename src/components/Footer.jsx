import PropTypes from 'prop-types';

const Footer = ({children}) => {
    return ( <>{children}</> );
}
 
export default Footer;

Footer.propTypes = {
    children:PropTypes.any,
}