import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AdvancedGasFeePopoverContext = createContext({});

export const AdvancedGasFeePopoverContextProvider = ({ children }) => {
  const [gasLimit, setGasLimit] = useState();
  const [maxFeePerGas, setMaxFeePerGas] = useState();
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState();
  const [isDirty, setDirty] = useState();
  const [hasError, setHasError] = useState(false);
  const [maxBaseFee, setMaxBaseFee] = useState();

  return (
    <AdvancedGasFeePopoverContext.Provider
      value={{
        gasLimit,
        hasError,
        isDirty,
        maxFeePerGas,
        maxPriorityFeePerGas,
        maxBaseFee,
        setDirty,
        setGasLimit,
        setHasError,
        setMaxPriorityFeePerGas,
        setMaxFeePerGas,
        setMaxBaseFee,
      }}
    >
      {children}
    </AdvancedGasFeePopoverContext.Provider>
  );
};

export function useAdvancedGasFeePopoverContext() {
  return useContext(AdvancedGasFeePopoverContext);
}

AdvancedGasFeePopoverContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
