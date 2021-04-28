import "./Button.scss";
const Button = ({ buttonName, handleClick, backgroundColor }) => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg"
      onClick={handleClick}
      style={{backgroundColor}}
    >
      {buttonName}
    </button>
  );
};
export default Button;
