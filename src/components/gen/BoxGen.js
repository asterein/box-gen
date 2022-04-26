import { useState } from "react";
import ColorSelect from "../select/ColorSelect";
import RangeSelect from "../select/RangeSelect";
import ListSelect from "../select/ListSelect/ListSelect";
import Border from "../properties/Border";
import Padding from "../properties/Padding";
import useBorderSettings from "../../hooks/useBorderSettings";
import usePaddingSettings from "../../hooks/usePaddingSettings";
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "../../hooks/useColorSelectorSettings";

const BoxGen = ({
  contents="Your text here!"
}) => {
  const [ borderRadius, setBorderRadius ] = useState(0);

  const bgColor = useColorSelectorSettings("#ffffff", 1);
  const textColor = useColorSelectorSettings("#000000", 1);
  const [ textAlign, setTextAlign ] = useState("inherit");

  const borderSettings = useBorderSettings();
  const paddingSettings = usePaddingSettings();

  return (
    <div className="gen-container">
      <div className="gen-controls">
        <ListSelect
          label="Text Align"
          options={[
            { label: "auto", value: "inherit" },
            { label: "left", value: "left" },
            { label: "right", value: "right" },
            { label: "center", value: "center" },
            { label: "justify", value: "justify" }
          ]}
          value={textAlign}
          setValue={setTextAlign}
        />
        <Padding {...paddingSettings} />

        <RangeSelect
          id="border-radius"
          label="Corner Rounding"
          value={borderRadius}
          setValue={setBorderRadius}
          min="0"
          max="25"
        />

        <Border {...borderSettings} />

        <ColorSelect
          id="bg-color"
          label="Background"
          value={bgColor.color}
          setValue={bgColor.setColor}
        />
        <ColorSelect
          id="text-color"
          label="Text"
          value={textColor.color}
          setValue={textColor.setColor}
        />
      </div>
      <div className="gen-preview" style={{ textAlign: "center" }}>
        <div
          style={{
            color: toFullHex(textColor),
            textAlign: textAlign,
            borderRadius: `${borderRadius}px`,
            border: borderSettings.border,
            background: toFullHex(bgColor),
            padding: paddingSettings.padding
          }}
        >
          {contents}
        </div>
      </div>
    </div>
  );
}

export default BoxGen;
