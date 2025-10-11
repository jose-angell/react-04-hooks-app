import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};
type TraficLightColors = keyof typeof colors;
export const useTrafficLight = () => {
   const [light, setLight] = useState<TraficLightColors>('red');
 const [ countdown, setCountdown] = useState(5);
  useEffect(() => {
    if(countdown === 0) return;
    
    const intervalid = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => {
      clearInterval(intervalid);
    }
  }, [countdown]);
  // Change light color effect
  useEffect(() => {
    if(countdown > 0) return;
    if(countdown === 0) {
      setCountdown(5);
      if(light === 'red'){
        setLight('green');
        return;
      }
      if(light === 'green'){
        setLight('yellow');
        return;
      } 
      if(light === 'yellow'){
        setLight('red');
        return;
      }
      return;
    }
  }, [countdown,light])
  return {
    //props
    colors,
    light,
    countdown,
    // computed
    percentage: (countdown / 5) * 100,
    redLight: light === 'red' ? colors[light] : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
    greenLight: light === 'green' ? colors[light] : 'bg-gray-500'
    // methods

  }
}
