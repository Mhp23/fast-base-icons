import * as React from 'react';
import IconsList from './IconsList';
import {FastBaseProvider} from '@fast-base/native';

export default function App() {
  return (
    <FastBaseProvider mode="dark">
      <IconsList />
    </FastBaseProvider>
  );
}
