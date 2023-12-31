import React from 'react';
import AppCard from '@crema/core/AppCard';
import VisitsTable from './VisitsTable';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const PageVisits = ({pageVisits}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull
      cardBodyClass='px-0'
      title={messages['dashboard.analytics.pageVisits']}
      action={messages['common.viewAll']}
      actionClass='text-danger'>
      <VisitsTable visitsData={pageVisits} />
    </AppCard>
  );
};

export default PageVisits;

PageVisits.propTypes = {
  pageVisits: PropTypes.array,
};
