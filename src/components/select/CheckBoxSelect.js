const CheckBoxSelect = ({
  id,
  label,
  value,
  setValue
}) => (
    <div onClick={() => setValue(!value)} style={{ cursor: "pointer" }}>
      <input id={id} type="checkbox" checked={value} readOnly={true} /> {label}
    </div>
);

export default CheckBoxSelect;
