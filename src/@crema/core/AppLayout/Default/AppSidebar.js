import React from 'react';
import styles from './index.module.scss';
import UserInfo from '../components/UserInfo';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import MainSidebar from '../components/MainSidebar';
import {useDispatch, useSelector} from 'react-redux';
import {toggleNavCollapsed} from '../../../../redux/actions';

const AppSidebar = () => {
  const {isSidebarBgImage} = useSidebarContext();
  const dispatch = useDispatch();
  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  return (
    <>
      <MainSidebar
        className={clsx(
          styles.appMainSidebar,
          'd-none d-xl-flex flex-xl-column',
          isSidebarBgImage ? 'sidebarImgBackground' : '',
        )}>
        <div className={styles.appMainSidebarInner}>
          <UserInfo hasColor/>
          <AppScrollbar className={styles.appSidebarScrollbar} scrollToTop={false}>
            <AppVerticalMenu/>
          </AppScrollbar>
        </div>
      </MainSidebar>
    </>
  );
};

export default AppSidebar;
