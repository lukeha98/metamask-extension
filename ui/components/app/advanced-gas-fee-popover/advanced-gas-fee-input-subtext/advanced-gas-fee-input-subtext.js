import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../ui/box';
import I18nValue from '../../../ui/i18n-value';

const AdvancedGasFeeInputSubtext = ({ latest, historical, feeTrend }) => {
  return (
    <Box className="advanced-gas-fee-input-subtext">
      <Box display="flex" alignItems="center">
        <span className="advanced-gas-fee-input-subtext__label">
          <I18nValue messageKey="currentTitle" />
        </span>
        <span>{latest}</span>
        {feeTrend === 'up' ? (
          <img src="./images/high-arrow.svg" alt="" />
        ) : (
          <img src="./images/low-arrow.svg" alt="" />
        )}
      </Box>
      <Box>
        <span className="advanced-gas-fee-input-subtext__label">
          <I18nValue messageKey="twelveHrTitle" />
        </span>
        <span>{historical}</span>
      </Box>
    </Box>
  );
};

AdvancedGasFeeInputSubtext.propTypes = {
  latest: PropTypes.string,
  historical: PropTypes.string,
  feeTrend: PropTypes.string,
};

export default AdvancedGasFeeInputSubtext;
