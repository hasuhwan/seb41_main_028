import { useState } from 'react';
import { HabitWrapperVertical } from '../../components/habitWrapperVertical';
import { useIntersectionPage } from '../../hooks/useIntersection';
import { useAppSelector } from '../../ducks/store';

const RecommendList: React.FC = () => {
  const [habitWrapperData, setHabitWrapperData] = useState([]);
  const [page, setPage] = useState(1);
  const { userId } = useAppSelector((state) => state.loginIdentity);
  const url: string = `${
    process.env.NEXT_PUBLIC_SERVER_URL
  }/habits/sort/recommend?${userId ? 'userId=' + userId + '&' : ''}`;

  const [setTarget] = useIntersectionPage(
    url,
    page,
    setPage,
    setHabitWrapperData,
  );

  return (
    <div className="recommendlist-container">
      <div>
        <HabitWrapperVertical
          habitWrapperTitle="관심도가 높은 습관들 🤔"
          habitWrapperData={habitWrapperData}
        />
        <div ref={setTarget}></div>
      </div>
    </div>
  );
};

export default RecommendList;
