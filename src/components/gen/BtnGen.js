import { useState } from "react";
import ColorSelect from "../select/ColorSelect";
import RangeSelect from "../select/RangeSelect";
import ListSelect from "../select/ListSelect/ListSelect";
import Border from "../properties/Border";
import Padding from "../properties/Padding";
import BoxShadow from "../properties/BoxShadow";
import useBorderSettings from "../../hooks/useBorderSettings";
import useBoxShadowSettings from "../../hooks/useBoxShadowSettings";
import usePaddingSettings from "../../hooks/usePaddingSettings";
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "../../hooks/useColorSelectorSettings";

const BtnGen = ({
  buttons=[
    {
      label: "Button Text 1",
      url: "https://github.com/asterein"
    },
    {
      label: "Button Text 2",
      url: "https://github.com/asterein"
    }
  ]
}) => {
  const [ hover, setHover ] = useState(false);
  const [ borderRadius, setBorderRadius ] = useState(0);

  const textColor = useColorSelectorSettings("#ffffff", 1);
  const bgColor = useColorSelectorSettings("#000000", 1);
  const hoverBgColor = useColorSelectorSettings("#999999", 1);

  const [ marginVertical, setMarginVertical ] = useState(0);
  const [ marginHorizontal, setMarginHorizontal ] = useState(0.25);

  const [ fontSize, setFontSize ] = useState(16);
  const [ fontWeight, setFontWeight ] = useState(400);
  const [ fontFamily, setFontFamily ] = useState("Arial");
  const [ letterSpacing, setLetterSpacing ] = useState(0);

  const borderSettings = useBorderSettings();
  const boxShadowSettings = useBoxShadowSettings();
  const paddingSettings = usePaddingSettings();

  return (
    <div className="gen-container">
      <div className="gen-controls">
        <div className="grid grid-2">
          <div style={{ gridColumn: "span 2" }}>Font Settings</div>
          <ListSelect
            label="Font Family"
            labelSize={0.9}
            options={[
              { label: "Arial", value: "Arial" },
              { label: "Monospace", value: "Monospace" },
              { label: "Serif", value: "serif" }
            ]}
            value={fontFamily}
            setValue={setFontFamily}
          />
          <ColorSelect
            id="text-color"
            value={textColor.color}
            setValue={textColor.setColor}
            showOpacitySettings={false}
            blocking={true}
          />
          <RangeSelect
            id={`font-size`}
            label="Font Size"
            labelSize={0.9}
            units="px"
            value={fontSize}
            setValue={setFontSize}
            min={5}
            max={25}
          />
          <RangeSelect
            id={`font-weight`}
            label="Font Weight"
            labelSize={0.9}
            value={fontWeight}
            setValue={setFontWeight}
            min={100}
            max={900}
            step={100}
          />
          <RangeSelect
            id="letter-spacing"
            label="Letter Spacing"
            labelSize={0.9}
            value={letterSpacing}
            setValue={setLetterSpacing}
            min={0}
            max={1}
            step={0.10}
          />
        </div>

        <Padding {...paddingSettings} />

        <div className="grid grid-2">
          <div style={{ gridColumn: "span 2" }}>Margin</div>
          <RangeSelect
            id="margin-vertical"
            label="Vertical"
            labelSize={0.9}
            value={marginVertical}
            setValue={setMarginVertical}
            units="rem"
            min="0"
            max="3"
            step="0.25"
          />
          <RangeSelect
            id="margin-horizontal"
            label="Horizontal"
            labelSize={0.9}
            value={marginHorizontal}
            setValue={setMarginHorizontal}
            units="rem"
            min="0"
            max="3"
            step="0.25"
          />
        </div>

        <RangeSelect
          id="border-radius"
          label="Corner Rounding"
          value={borderRadius}
          setValue={setBorderRadius}
          min="0"
          max="25"
        />

        <Border {...borderSettings} />
        <BoxShadow {...boxShadowSettings} />

        <ColorSelect
          id="bg-color"
          label="Background"
          value={bgColor.color}
          setValue={bgColor.setColor}
        />
        <ColorSelect
          id="bg-hover-color"
          label="Background (hover)"
          value={hoverBgColor.color}
          setValue={hoverBgColor.setColor}
        />
      </div>
      <div className="gen-preview" style={{ textAlign: "center" }}>
        {buttons.map((btn, index) => (
            <div
              className="gen-btn"
              style={{
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                color: toFullHex(textColor),
                borderRadius: `${borderRadius}px`,
                border: borderSettings.border,
                background: hover === index
                  ? toFullHex(hoverBgColor)
                  : toFullHex(bgColor),
                padding: paddingSettings.padding,
                boxShadow: boxShadowSettings.boxShadow,
                margin: `${marginVertical}rem ${marginHorizontal}rem`,
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                fontFamily: fontFamily,
                letterSpacing: `${letterSpacing}px`
              }}
              key={index}
              onClick={() => window.open(btn?.url, "_blank")}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(false)}
            >{btn?.label}</div>
        ))}
      </div>
    </div>
  );
}

export default BtnGen;
