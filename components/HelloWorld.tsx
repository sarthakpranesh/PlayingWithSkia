import React from 'react';
import {useWindowDimensions} from 'react-native';
import {
  Canvas,
  Circle,
  Rect,
  Group,
  RoundedRect,
  useTiming,
} from '@shopify/react-native-skia';

// importing components
import Text from './Text';

const HelloWorld = () => {
  const window = useWindowDimensions();

  const moveRect = useTiming(window.width / 2 - window.width / 4, {
    duration: 10000,
  });

  const size = 256;
  const r = size * 0.33;
  return (
    <Canvas style={{flex: 1}}>
      {/* background */}
      <Rect
        x={0}
        y={0}
        width={window.width}
        height={window.height - 24}
        style="fill"
        strokeWidth={10}
        color="green"
      />

      <RoundedRect
        x={moveRect}
        y={(window.height / 3) * 2}
        width={window.width / 2}
        height={32}
        r={8}
        color="white"
      />
    </Canvas>
  );
};

export default HelloWorld;
