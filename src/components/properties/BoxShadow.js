import RangeSelect from "../select/RangeSelect";
import ColorSelect from "../select/ColorSelect";
import CheckBoxSelect from "../select/CheckBoxSelect";
import ToggleSection from "../ToggleSection";

const BoxShadow = ({
  hasBoxShadow,
  setHasBoxShadow,
  boxShadowColor,
  setBoxShadowColor,
  boxShadowBlur,
  setBoxShadowBlur,
  boxShadowX,
  setBoxShadowX,
  boxShadowY,
  setBoxShadowY,
  boxShadowSize,
  setBoxShadowSize,
  max=15
}) => (
  <ToggleSection
    toggleHeader={<CheckBoxSelect
      id="has-box-shadow"
      label="Shadow"
      value={hasBoxShadow}
      setValue={setHasBoxShadow}
    />}
    toggleTrigger={hasBoxShadow}
  >
    <ColorSelect
      id="box-shadow-color"
      value={boxShadowColor}
      setValue={setBoxShadowColor}
    />
    <div className="grid grid-2">
      <RangeSelect
        id="box-shadow-blur"
        label="Offset X"
        labelSize={0.9}
        value={boxShadowX}
        setValue={setBoxShadowX}
        min={max*-1}
        max={max}
      />
      <RangeSelect
        id="box-shadow-blur"
        label="Offset Y"
        labelSize={0.9}
        value={boxShadowY}
        setValue={setBoxShadowY}
        min={max*-1}
        max={max}
      />
      <RangeSelect
        id="box-shadow-blur"
        label="Blur"
        labelSize={0.9}
        value={boxShadowBlur}
        setValue={setBoxShadowBlur}
        min={0}
        max={max*2}
      />
      <RangeSelect
        id="box-shadow-size"
        label="Size"
        labelSize={0.9}
        value={boxShadowSize}
        setValue={setBoxShadowSize}
        min={0}
        max={max}
      />
    </div>
  </ToggleSection>
);

export default BoxShadow;
