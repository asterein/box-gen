import { useState } from "react";
import useHeadingSettings from "../../hooks/useHeadingSettings";
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "../../hooks/useColorSelectorSettings";
import ColorSelect from "../select/ColorSelect";
import RangeSelect from "../select/RangeSelect";
import CheckBoxSelect from "../select/CheckBoxSelect";
import ListSelect from "../select/ListSelect/ListSelect";

/*
link
  - color
  - bold / italic / underline
  - hover behaviour
*/

const FontsGen = () => {

  const [ bodyFontFamily, setBodyFontFamily ] = useState("Arial");
  const [ bodyFontSize, setBodyFontSize ] = useState(16);
  const [ bodyLineHeight, setBodyLineHeight ] = useState(1);
  const [ bodyLetterSpacing, setBodyLetterSpacing ] = useState(0);

  const [ linkHover, setLinkHover ] = useState(false);

  const [ linkIsItalic, setLinkIsItalic ] = useState(false);
  const [ linkIsUnderline, setLinkIsUnderline ] = useState(false);
  const [ linkWeight, setLinkWeight ] = useState(400);
  const linkColor = useColorSelectorSettings("#000000", 1);

  const [ linkIsItalicHover, setLinkIsItalicHover ] = useState(false);
  const [ linkIsUnderlineHover, setLinkIsUnderlineHover ] = useState(true);
  const [ linkWeightHover, setLinkWeightHover ] = useState(400);
  const linkColorHover = useColorSelectorSettings("#999999", 1);


  const linkStyles = {
    fontStyle: linkHover
      ? linkIsItalicHover ? "italic" : "normal"
      : linkIsItalic ? "italic" : "normal",
    textDecoration: linkHover
      ? linkIsUnderlineHover ? "underline" : "none"
      : linkIsUnderline ? "underline" : "none",
    fontWeight: linkHover
      ? linkWeightHover
      : linkWeight,
    color: linkHover
      ? toFullHex(linkColorHover)
      : toFullHex(linkColor),
    cursor: "pointer"
  }

  const [ targetHeading, setTargetHeading ] = useState(0);

  const h1 = useHeadingSettings(32);
  const h2 = useHeadingSettings(24);
  const h3 = useHeadingSettings(19);
  const h4 = useHeadingSettings(16);
  const h5 = useHeadingSettings(13);
  const h6 = useHeadingSettings(11);

  const headingSettings = [ h1, h2, h3, h4, h5, h6 ];

  return (
    <div className="gen-container">
      <div className="gen-controls">
        <div className="grid grid-2">
          <div style={{ gridColumn: "span 2" }}><b>Main Settings</b></div>
          <ListSelect
            label="Font Family"
            labelSize={0.9}
            options={[
              { label: "Arial", value: "Arial" },
              { label: "Monospace", value: "Monospace" },
              { label: "Serif", value: "serif" }
            ]}
            value={bodyFontFamily}
            setValue={setBodyFontFamily}
          />
          <RangeSelect
            id="body-font-size"
            label="Font Size"
            labelSize={0.9}
            units="px"
            value={bodyFontSize}
            setValue={setBodyFontSize}
            min={5}
            max={25}
          />
          <RangeSelect
            id="body-line-height"
            label="Line Height"
            labelSize={0.9}
            value={bodyLineHeight}
            setValue={setBodyLineHeight}
            min={1}
            max={3}
            step={0.25}
          />
          <RangeSelect
            id="body-letter-spacing"
            label="Letter Spacing"
            labelSize={0.9}
            value={bodyLetterSpacing}
            setValue={setBodyLetterSpacing}
            min={0}
            max={1}
            step={0.10}
          />
        </div>

        <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "5px" }}>
          <div className="grid grid-2">
            <div><b>Link Settings (default)</b></div>
            <div>
              <CheckBoxSelect
                id="link-italic"
                label="Italicize"
                value={linkIsItalic}
                setValue={setLinkIsItalic}
              />
              <CheckBoxSelect
                id="link-underline"
                label="Underline"
                value={linkIsUnderline}
                setValue={setLinkIsUnderline}
              />
            </div>
            <RangeSelect
              id="link-weight"
              label="Font Weight"
              labelSize={0.9}
              value={linkWeight}
              setValue={setLinkWeight}
              min={100}
              max={900}
              step={100}
            />
            <ColorSelect
              id="link-color"
              value={linkColor?.color}
              setValue={linkColor?.setColor}
              showOpacitySettings={false}
              blocking={true}
            />
          </div>
          <hr />
          <div className="grid grid-2">
            <div><b>Link Settings (hover)</b></div>
            <div>
              <CheckBoxSelect
                id="link-italic-hover"
                label="Italicize"
                value={linkIsItalicHover}
                setValue={setLinkIsItalicHover}
              />
              <CheckBoxSelect
                id="link-underline-hover"
                label="Underline"
                value={linkIsUnderlineHover}
                setValue={setLinkIsUnderlineHover}
              />
            </div>
            <RangeSelect
              id="link-weight-hover"
              label="Font Weight"
              labelSize={0.9}
              value={linkWeightHover}
              setValue={setLinkWeightHover}
              min={100}
              max={900}
              step={100}
            />
            <ColorSelect
              id="link-color-hover"
              value={linkColorHover?.color}
              setValue={linkColorHover?.setColor}
              showOpacitySettings={false}
              blocking={true}
            />
          </div>
        </div>

        {headingSettings.map((heading, index) => <div
          style={targetHeading !== index ? { cursor: "pointer"} : {}}
          onClick={() => setTargetHeading(index)}
        >
          <div
            className="grid grid-2"
            style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "1rem" }}
            key={index}
          >
            {targetHeading === index
              ? <>
                <div><b>Heading {index+1}</b></div>
                <div>
                  <CheckBoxSelect
                    id={`${index+1}-italic`}
                    label="Italicize"
                    value={heading?.isItalic}
                    setValue={heading?.setIsItalic}
                  />
                  <CheckBoxSelect
                    id={`${index+1}-underline`}
                    label="Underline"
                    value={heading?.isUnderline}
                    setValue={heading?.setIsUnderline}
                  />
                </div>
                <ColorSelect
                  id={`${index+1}-color`}
                  value={heading?.color?.color}
                  setValue={heading?.color?.setColor}
                  showOpacitySettings={false}
                  blocking={true}
                />
                <RangeSelect
                  id={`${index+1}-font-size`}
                  label="Font Size"
                  labelSize={0.9}
                  units="px"
                  value={heading?.fontSize}
                  setValue={heading?.setFontSize}
                  min={9}
                  max={50}
                />
                <RangeSelect
                  id={`${index+1}-font-weight`}
                  label="Font Weight"
                  labelSize={0.9}
                  value={heading?.fontWeight}
                  setValue={heading?.setFontWeight}
                  min={100}
                  max={900}
                  step={100}
                />
                <RangeSelect
                  id={`${index+1}-line-height`}
                  label="Line Height"
                  labelSize={0.9}
                  value={heading?.lineHeight}
                  setValue={heading?.setLineHeight}
                  min={0}
                  max={3}
                  step={0.25}
                />
              </>
              : <div style={{ gridColumn: "span 2" }}>
                  <b>Heading {index+1}</b>
                </div>
            }
          </div>
        </div>)}

      </div>
      <div className="gen-preview" style={{
        textAlign: "left",
        fontSize: `${bodyFontSize}px`,
        lineHeight: bodyLineHeight,
        fontFamily: bodyFontFamily,
        letterSpacing: `${bodyLetterSpacing}px`
      }}>
        <div style={{ textAlign: "center" }}>
          <span
            className="link-dummy"
            style={linkStyles}
            onMouseEnter={() => setLinkHover(true)}
            onMouseLeave={() => setLinkHover(false)}
          >Example Link (hover on me!)</span>
        </div>
        <h1 style={h1?.styles}>Heading 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae felis eget urna maximus consequat vitae et
        nulla. Duis vel convallis risus. Aliquam ex dolor, accumsan quis nunc ultricies, rutrum elementum est.</p>
        <h2 style={h2?.styles}>Heading 2</h2>
        <p><i>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut mattis sed
        sem in tempor. Nunc mattis, ex vel cursus scelerisque, risus sapien dignissim lectus.</i></p>
        <h3 style={h3?.styles}>Heading 3</h3>
        <p><b>Duis sit amet mauris eu justo viverra maximus. Sed tempus sit amet sapien a consequat. Pellentesque et aliquet
        eros. Donec iaculis a diam eget sollicitudin. Sed maximus volutpat interdum.</b></p>
        <h4 style={h4?.styles}>Heading 4</h4>
        <p><u>Quisque accumsan lobortis nunc a molestie. Curabitur blandit ante a justo pulvinar, quis vulputate velit
        convallis. Cras congue, sapien sit amet volutpat finibus, nisi elit luctus libero.</u></p>
        <h5 style={h5?.styles}>Heading 5</h5>
        <p><s>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin orci sem, sed pellentesque neque
        consequat eget. Morbi cursus facilisis erat, nec tristique tellus feugiat at.</s></p>
        <h6 style={h6?.styles}>Heading 6</h6>
        <div className="grid grid-2" style={{ textAlign: "left" }}>
          <ul>
            <li>Aenean sodales</li>
            <li>Curabitur non elementum</li>
            <li>Suspendisse eu cursus</li>
          </ul>
          <ol>
            <li>Aenean sodales</li>
            <li>Curabitur non elementum</li>
            <li>Suspendisse eu cursus</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FontsGen;
