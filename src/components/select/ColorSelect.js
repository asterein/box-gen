import "./ColorSelect.css";

const ColorSelect = ({
  id,
  label="",
  labelSize=1,
  value,
  setValue,
  showOpacitySettings=true
}) => (
  <div className="grid grid-2 color-select" style={{ fontSize: `${labelSize}rem`}}>
    <div style={{ gridColumn: "span 2"}}>{label}</div>

    <div>
      <label htmlFor={`${id}-base`}>
        <div>Color</div>
        <div>{value.base}</div>
      </label>
      <input
        id={`${id}-base`}
        type="color"
        value={value.base}
        onChange={(e) => setValue({...value, base: e.target.value})}
      />
    </div>

    {showOpacitySettings && <div>
      <label htmlFor={`${id}-opacity`}>
        <div>Opacity</div>
        <div>{value.opacity*100}%</div>
      </label>
      <input
        id={`${id}-opacity`}
        type="range"
        value={value.opacity}
        min={0}
        max={1}
        step={0.1}
        onChange={(e) => setValue({...value, opacity: e.target.value})}
      />
    </div>}
  </div>
);

export default ColorSelect;
