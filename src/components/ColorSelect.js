const ColorSelect = ({
  id,
  label,
  value,
  setValue
}) => (
  <div>
    <label htmlFor={id}>{label} / {value}</label>
    <input id={id} type="color" value={value} onChange={(e) => setValue(e.target.value)} />
  </div>
);

export default ColorSelect;
