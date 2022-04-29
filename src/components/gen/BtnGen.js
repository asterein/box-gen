import { useState } from "react";
import ColorSelect from "../select/ColorSelect";
import RangeSelect from "../select/RangeSelect";
import Border from "../properties/Border";
import Padding from "../properties/Padding";
import BoxShadow from "../properties/BoxShadow";
import useBorderSettings from "../../hooks/useBorderSettings";
import useBoxShadowSettings from "../../hooks/useBoxShadowSettings";
import usePaddingSettings from "../../hooks/usePaddingSettings";
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "../../hooks/useColorSelectorSettings";

/*
button
  - font-size
  - font-weight
  - color
  - background-color
  - border color
  - border-radius
  - min-width
  - min-height
*/

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
  const hoverBgColor = useColorSelectorSettings("#000000", 1);

  const [ marginVertical, setMarginVertical ] = useState(0);
  const [ marginHorizontal, setMarginHorizontal ] = useState(0.25);

  const borderSettings = useBorderSettings();
  const boxShadowSettings = useBoxShadowSettings();
  const paddingSettings = usePaddingSettings();

  return (
    <div className="gen-container">
      <div className="gen-controls">
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
        <ColorSelect
          id="text-color"
          label="Text"
          value={textColor.color}
          setValue={textColor.setColor}
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
                margin: `${marginVertical}rem ${marginHorizontal}rem`
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
