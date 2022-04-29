import { useState } from 'react';
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "./useColorSelectorSettings";

const useHeadingSettings = ( startSize ) => {

  const color = useColorSelectorSettings("#000000", 1);
  const [ fontSize, setFontSize ] = useState(startSize);
  const [ fontWeight, setFontWeight ] = useState(700);
  const [ lineHeight, setLineHeight ] = useState(1);
  const [ isItalic, setIsItalic ] = useState(false);
  const [ isUnderline, setIsUnderline ] = useState(false);

  const settings = {
    color,
    fontSize, setFontSize,
    fontWeight, setFontWeight,
    lineHeight, setLineHeight,
    isItalic, setIsItalic,
    isUnderline, setIsUnderline,
    styles: {
      color: toFullHex(color),
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      fontStyle: isItalic ? "italic" : "normal",
      textDecoration: isUnderline ? "underline" : "none"
    }
  }

  return settings;

}

export default useHeadingSettings;
