import { useState } from 'react';
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "./useColorSelectorSettings";

const useBorderSettings = () => {

  const [ hasBorder, setHasBorder ] = useState(false);
  const [ borderWidth, setBorderWidth ] = useState(1);
  const borderColor = useColorSelectorSettings("#000000", 1);

  const settings = {
    hasBorder, setHasBorder,
    borderWidth, setBorderWidth,
    borderColor: borderColor.color, setBorderColor: borderColor.setColor,
    border: hasBorder ? `${borderWidth}px solid ${toFullHex(borderColor)}` : "none",
  }

  return settings;

}

export default useBorderSettings;
