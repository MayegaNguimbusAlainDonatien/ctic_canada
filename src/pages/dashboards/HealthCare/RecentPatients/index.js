import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppSelect from '@crema/core/AppSelect';
import PatientsTable from './PatientsTable';
import PropTypes from 'prop-types';
import styles from './index.module.scss'

const RecentPatients = ({recentPatients}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      cardBodyClass='px-0'
      title={messages['healthCare.recentPatient']}
      action={
        <AppSelect
          selectBoxClass={styles.appSelectBox}
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <PatientsTable recentPatients={recentPatients} />
    </AppCard>
  );
};

export default RecentPatients;

RecentPatients.propTypes = {
  recentPatients: PropTypes.array,
};
