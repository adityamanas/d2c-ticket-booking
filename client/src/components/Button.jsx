const Button = ({ btnName, type, ...params }) => {
  return (
    <>
      <button
        type={!type ? "" : type}
        {...params}
        className="btn"
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
