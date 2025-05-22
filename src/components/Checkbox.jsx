const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <div className="option-div">
        <label>{label}</label>
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Checkbox;
