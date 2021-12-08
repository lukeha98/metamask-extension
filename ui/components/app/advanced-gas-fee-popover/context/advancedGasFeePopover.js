import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AdvancedGasFeePopoverContext = createContext({});

export const AdvancedGasFeePopoverContextProvider = ({ children }) => {
  const [gasLimit, setGasLimit] = useState();
  const [maxFeePerGas, setMaxFeePerGas] = useState();
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState();
  const [isDirty, setDirty] = useState();
  const [hasError, setHasError] = useState(false);
  const [feeTrends, setFeeTrends] = useState({
    baseFeeTrends: '',
    priorityFeeTrends: '',
  });

  const setFeeTrendsData = useCallback(
    (field, value) => {
      if (value !== 'level') {
        setFeeTrends({ ...feeTrends, [field]: value });
      }
    },
    [feeTrends, setFeeTrends],
  );

  return (
    <AdvancedGasFeePopoverContext.Provider
      value={{
        gasLimit,
        hasError,
        isDirty,
        feeTrends,
        maxFeePerGas,
        maxPriorityFeePerGas,
        setDirty,
        setGasLimit,
        setHasError,
        setFeeTrends,
        setMaxPriorityFeePerGas,
        setMaxFeePerGas,
        setFeeTrendsData,
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
