import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppsContainer from '@crema/core/AppsContainer';
import BoardDetailView from './BoardDetailView';
import {useHistory, useLocation} from 'react-router-dom';
import {
  onGetBoardDetail,
  onNullifyBoardDetail,
} from '../../../../redux/actions/ScrumboardApp';
import styles from './index.module.scss';

const BoardDetail = () => {
  const history = useHistory();
  const boardDetail = useSelector(
    ({scrumboardApp}) => scrumboardApp.boardDetail,
  );
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    const path = pathname.split('/');
    const id = path[path.length - 1];
    dispatch(onGetBoardDetail(id));
    return () => {
      dispatch(onNullifyBoardDetail());
    };
  }, [dispatch, pathname]);

  const onGoToBoardList = () => {
    history.goBack();
  };

  if (!boardDetail) {
    return null;
  }

  return (
    <AppsContainer
      fullView
      noContentAnimation
      title={
        <>
          <span
            className={styles.scrumBoardDetailTitle}
            onClick={onGoToBoardList}>
            Scrum Board
          </span>
          &gt; {boardDetail.name}
        </>
      }>
      <BoardDetailView boardDetail={boardDetail} />
    </AppsContainer>
  );
};

export default BoardDetail;
