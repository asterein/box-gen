import RangeSelect from "../select/RangeSelect";
import ColorSelect from "../select/ColorSelect";
import CheckBoxSelect from "../select/CheckBoxSelect";
import ToggleSection from "../ToggleSection";

const Border = ({
  hasBorder,
  setHasBorder,
  borderWidth=1,
  setBorderWidth,
  borderColor="#000000",
  setBorderColor,
  min=1,
  max=5
}) => (
  <ToggleSection
    toggleHeader={<CheckBoxSelect
      id="has-border"
      label="Border"
      value={hasBorder}
      setValue={setHasBorder}
    />}
    toggleTrigger={hasBorder}
  >
    <ColorSelect
      id="border-color"
      value={borderColor}
      setValue={setBorderColor}
    />
    <RangeSelect
      id="border-width"
      label="Width"
      labelSize={0.9}
      value={borderWidth}
      setValue={setBorderWidth}
      min={min}
      max={max}
    />
  </ToggleSection>
);

export default Border;
