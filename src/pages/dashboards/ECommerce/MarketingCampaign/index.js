import React from 'react';
import AppCard from '@crema/core/AppCard';
import MarketingTable from './MarketingTable';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const MarketingCampaign = ({marketingCampaign}) => {
  const {messages} = useIntl();
  return (
    <AppCard cardBodyClass='px-0' heightFull
      title={messages['eCommerce.marketingCampaign']}>
      <MarketingTable marketingCampaignData={marketingCampaign} />
    </AppCard>
  );
};

export default MarketingCampaign;

MarketingCampaign.propTypes = {
  marketingCampaign: PropTypes.array,
};
