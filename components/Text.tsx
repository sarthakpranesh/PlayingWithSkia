import React from 'react';
import {
  Text as SkiaText,
  useFont,
  Fill,
  Group,
} from '@shopify/react-native-skia';

const Text = () => {
  const fontSize = 32;
  const font = useFont(require('./Nasa21.ttf'), fontSize);
  if (font === null) {
    console.log('not getting loaded');
    return null;
  }
  return (
    <Group>
      <Fill color="#ffffff" />
      <SkiaText text="Hello from skia" font={font} y={fontSize + 300} x={100} />
    </Group>
  );
};

export default Text;
