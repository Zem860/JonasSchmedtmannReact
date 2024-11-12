import PropTypes from "prop-types";
const MainBody = ({children}) => {

  return (
    <main className="main">
      {children}
    </main>
  );
};

export default MainBody;

  
MainBody.propTypes={
    children:PropTypes.array.isRequired,
  }