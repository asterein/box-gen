import { useState } from 'react';
import useColorSelectorSettings, {
  colorSelectorSettingsToFullHex as toFullHex } from "./useColorSelectorSettings";

const useBoxShadowSettings = () => {

  const [ hasBoxShadow, setHasBoxShadow ] = useState(false);
  const boxShadowColor = useColorSelectorSettings("#000000", 0.75);
  const [ boxShadowBlur, setBoxShadowBlur ] = useState(7);
  const [ boxShadowSize, setBoxShadowSize ] = useState(1);
  const [ boxShadowX, setBoxShadowX ] = useState(5);
  const [ boxShadowY, setBoxShadowY ] = useState(5);

  const settings = {
    hasBoxShadow, setHasBoxShadow,
    boxShadowColor: boxShadowColor.color, setBoxShadowColor: boxShadowColor.setColor,
    boxShadowBlur, setBoxShadowBlur,
    boxShadowSize, setBoxShadowSize,
    boxShadowX, setBoxShadowX,
    boxShadowY, setBoxShadowY,
    boxShadow: hasBoxShadow ? `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSize}px ${toFullHex(boxShadowColor)}` : "none"
  }

  return settings;

}

export default useBoxShadowSettings;
