const ErrorMessage = ({ items }) => {
  return (  
    items.length === 0 && <h3 className="errr">No Subjects Available</h3>
  );
};

export default ErrorMessage;
