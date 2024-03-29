import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import { fahrenheitToCelcius, TempUnit } from '../../utils/unitConversion';

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = (props) => {
  const { degreeType } = useSelector((state: AppStore) => ({
    degreeType: state.app.tempUnit,
  }));

  if (degreeType === TempUnit.CELCIUS) {
    return <>{fahrenheitToCelcius(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;
