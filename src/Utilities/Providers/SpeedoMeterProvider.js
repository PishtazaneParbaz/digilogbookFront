import React from 'react';

const SpeedoMeterProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = React.useState(valueStart);

  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};
export default SpeedoMeterProvider; 