const RangeSelect = ({
  id,
  label,
  labelSize=1,
  units="",
  value,
  setValue,
  min=0,
  max=1,
  step=1
}) => (
  <div>
    <label htmlFor={id} style={{ fontSize: `${labelSize}rem`, display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div>{label}</div>
      <div>{value}{units}</div>
    </label>
    <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(e.target.value)} />
  </div>
);

export default RangeSelect;
