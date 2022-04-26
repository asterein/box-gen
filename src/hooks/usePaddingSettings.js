import { useState } from 'react';

const usePaddingSettings = () => {

  const [ paddingVertical, setPaddingVertical ] = useState(1);
  const [ paddingHorizontal, setPaddingHorizontal ] = useState(1);

  const settings = {
    paddingVertical, setPaddingVertical,
    paddingHorizontal, setPaddingHorizontal,
    padding: `${paddingVertical}rem ${paddingHorizontal}rem`
  }

  return settings;

}

export default usePaddingSettings;
