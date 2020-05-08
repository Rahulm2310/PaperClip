import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Contact from './components/Contact';

//loading WorkSans font from assets/fonts folder
const fetchFonts = () => {
  return Font.loadAsync({
    'work-sans': require('./assets/fonts/WorkSans.ttf'),
  });
};

//Root Component
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false); //boolean to check if font loaded or not

  if (!fontLoaded) {
    return (
      //showing loader until the fonts are loaded
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <Contact />;
}
