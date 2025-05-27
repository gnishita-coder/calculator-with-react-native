import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Display from './components/display';
import { styles } from './assets/style';
import Keyboard from './components/keyboard/keyboard';
import { LinearGradient } from 'expo-linear-gradient';
import SplashScreen from './components/SplashScreen';


export default function App() {
  const [oldOper, setOldOper] = useState("");
  const [oper, setOper] = useState("");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen onAnimationFinish={() => setShowSplash(false)} />;

  
  return (
      <LinearGradient     colors={['#FFFFFF','#ADD8FF', '#ADD8FF' ]}
      style={{ flex: 1, paddingTop: 50, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={styles.container}>
        <Display
          oper={oper}
          setOper={setOper}
        />
        <Keyboard 
          oper={oper}
          setOper={setOper}
        />
        <StatusBar style="dark" />
        </View>
      </LinearGradient>
  );
}


