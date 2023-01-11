import * as React from 'react';
import { DynamicButton } from 'dnd-button';

export const Footer = () => {
  return <h1>
    <DynamicButton onClick={() => console.log('click')} icon={{
      position: 'end',
      element: 'icon'
    }}>Button Libs</DynamicButton>
    This is Footer
  </h1>;
}
