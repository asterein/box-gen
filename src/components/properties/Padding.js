import RangeSelect from "../select/RangeSelect";

const Padding = ({
  paddingVertical,
  setPaddingVertical,
  paddingHorizontal,
  setPaddingHorizontal,
  min=0.25,
  max=3,
  units="",
  step=0.25
}) => (
  <div className="grid grid-2">
    <div style={{ gridColumn: "span 2" }}>Padding</div>
    <RangeSelect
      id="padding-vertical"
      label="Vertical"
      labelSize={0.9}
      value={paddingVertical}
      setValue={setPaddingVertical}
      units={units}
      min={min}
      max={max}
      step={step}
    />
    <RangeSelect
      id="padding-horizontal"
      label="Horizontal"
      labelSize={0.9}
      value={paddingHorizontal}
      setValue={setPaddingHorizontal}
      units={units}
      min={min}
      max={max}
      step={step}
    />
  </div>
);

export default Padding;
