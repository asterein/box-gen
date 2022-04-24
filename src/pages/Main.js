import { useState } from "react";
import ColorSelect from "../components/ColorSelect";
import RangeSelect from "../components/RangeSelect";
import ListSelect from "../components/ListSelect/ListSelect";
import "./Main.css";

const Main = () => {
  const [ borderRadius, setBorderRadius ] = useState(0);
  const [ borderWidth, setBorderWidth ] = useState(1);
  const [ bgColor, setBgColor ] = useState("#ffffff");
  const [ textColor, setTextColor ] = useState("#000000");
  const [ borderColor, setBorderColor ] = useState("#000000");
  const [ paddingVertical, setPaddingVertical ] = useState(1);
  const [ paddingHorizontal, setPaddingHorizontal ] = useState(1);
  const [ margin, setMargin ] = useState(0);
  const [ textAlign, setTextAlign ] = useState("inherit");

  return (
    <div id="main-container">
      <div id="main-controls">
        <div>
          <pre>
            color: {textColor};<br />
            text-align: {textAlign};<br />
            border-radius: {borderRadius}px;<br />
            border: {borderWidth}px solid {borderColor};<br />
            background: {bgColor};<br />
            padding: {paddingVertical}rem {paddingHorizontal}rem;
          </pre>
        </div>

        <ListSelect
          label="Text Align"
          options={[
            {
              label: "auto",
              value: "inherit"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "justify",
              value: "justify"
            }
          ]}
          value={textAlign}
          setValue={setTextAlign}
        />
        <div className="grid grid-2">
          <div style={{ gridColumn: "span 2" }}>Padding</div>
          <RangeSelect
            id="padding-vertical"
            label="Vertical"
            labelSize={0.9}
            value={paddingVertical}
            setValue={setPaddingVertical}
            units="rem"
            min="0.25"
            max="10"
            step="0.25"
          />
          <RangeSelect
            id="padding-horizontal"
            label="Horizontal"
            labelSize={0.9}
            value={paddingHorizontal}
            setValue={setPaddingHorizontal}
            units="rem"
            min="0.25"
            max="10"
            step="0.25"
          />
        </div>
        {/*<RangeSelect
          id="margin"
          label="Margin"
          value={margin}
          setValue={setMargin}
          units="rem"
          min="-5"
          max="5"
          step="0.25"
        />*/}
        <RangeSelect
          id="border-radius"
          label="Corner Rounding"
          value={borderRadius}
          setValue={setBorderRadius}
          min="0"
          max="25"
        />
        <RangeSelect
          id="border-width"
          label="Border Width"
          value={borderWidth}
          setValue={setBorderWidth}
          min="1"
          max="5"
        />
        <ColorSelect
          id="border-color"
          label="Border Color"
          value={borderColor}
          setValue={setBorderColor}
        />
        <ColorSelect
          id="bg-color"
          label="Background Color"
          value={bgColor}
          setValue={setBgColor}
        />
        <ColorSelect
          id="text-color"
          label="Text Color"
          value={textColor}
          setValue={setTextColor}
        />
      </div>
      <div id="main-preview" style={{ textAlign: "center" }}>
        <div
          style={{
            color: textColor,
            textAlign: textAlign,
            borderRadius: `${borderRadius}px`,
            border: `${borderWidth}px solid ${borderColor}`,
            background: bgColor,
            margin: `${margin}rem`,
            padding: `${paddingVertical}rem ${paddingHorizontal}rem`
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id nisi leo. Donec hendrerit, nisi non molestie congue, tellus orci bibendum ipsum, hendrerit sodales augue massa vitae massa. Donec ut elit gravida, finibus sapien sed, porta ligula.
        </div>
      </div>
    </div>
  );
}

export default Main;
