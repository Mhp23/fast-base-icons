import * as React from 'react';
import IconsList from './IconsList';
import {FastBaseProvider, Text} from '@fast-base/native';
import {StyleSheet} from 'react-native';

export default function App() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');

  const onThemeChanged = React.useCallback(() => {
    setMode(theme => (theme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <FastBaseProvider mode={mode}>
      <Text
        size="sm"
        onPress={onThemeChanged}
        style={style.theme}
        color={mode === 'dark' ? 'orange-300' : 'gray-800'}>
        {mode === 'dark' ? 'Light' : 'Dark'}
      </Text>
      <IconsList />
    </FastBaseProvider>
  );
}

const style = StyleSheet.create({
  theme: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 1,
  },
});
