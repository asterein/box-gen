import { useState } from "react";

export function colorSelectorSettingsToFullHex (settings) {
  const opacity = (settings?.color?.opacity*255).toString(16).slice(0,2);
  return `${settings?.color?.base}${opacity === "0" ? "00" : opacity}`;
}

const useColorSelectorSettings = ( startBase, startOpacity ) => {

  const [ color, setColor ] = useState({
    base: startBase,
    opacity: startOpacity
  });

  const settings = {
    color, setColor
  }

  return settings;
}

export default useColorSelectorSettings;
