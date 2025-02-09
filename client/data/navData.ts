interface homeNavDataType {
  navTitle: string;
  navTo: string;
  pathname: string;
}

export const homeNavData: Array<homeNavDataType> = [
  {
    navTitle: '홈',
    navTo: '/',
    pathname: '/',
  },
  {
    navTitle: '신규',
    navTo: '/home/newlist',
    pathname: '/home/newlist',
  },
  {
    navTitle: '인기',
    navTo: '/home/hotlist',
    pathname: '/home/hotlist',
  },
  {
    navTitle: '추천',
    navTo: '/home/recommendlist',
    pathname: '/home/recommendlist',
  },
];

interface detailNavFuncType {
  navTitle: string;
  navTo: string;
  pathname: string;
}

export const detailNavFunc = (
  habitId: string | string[],
): Array<detailNavFuncType> => [
  {
    navTitle: '상세정보',
    navTo: `/habit/detail/${habitId}`,
    pathname: `/habit/detail/[habitId]`,
  },
  {
    navTitle: '통계',
    navTo: `/habit/detail/${habitId}/statistic`,
    pathname: `/habit/detail/[habitId]/statistic`,
  },
  {
    navTitle: '후기',
    navTo: `/habit/detail/${habitId}/review`,
    pathname: `/habit/detail/[habitId]/review`,
  },
  {
    navTitle: '인증',
    navTo: `/habit/detail/${habitId}/auth`,
    pathname: `/habit/detail/[habitId]/auth`,
  },
];
