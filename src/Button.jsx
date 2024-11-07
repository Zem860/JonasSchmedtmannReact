const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >{children}</button>
    //如果我們要在這種自訂元件裡面寫東西有開合的tag，那要用children
  );
};

export default Button;
