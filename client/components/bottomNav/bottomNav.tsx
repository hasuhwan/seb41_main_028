import { MainBottomNav } from './mainBottomNav';
import { HabitPageBottomNav } from './habitPageBottomNav';
import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';

export function BottomNav() {
  //라우팅 된 페이지 경로에 따른 조건 부 렌더링 작성해야함.
  const router = useRouter();
  const pathname: string = router.asPath;
  //경로 조건에 따른 nav bar 다르게 해야함. 페이지 작성 다되고나면 분할 예정
  // 로그인 페이지 회원가입 페이지는 nav bar 존재하지 않는다.
  const openScroll = useCallback(() => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.removeProperty('overflow');
    }
  }, []);
  useEffect(() => {
    openScroll();
  }, [pathname]);
  const paramArr: string[] = pathname.split('/');
  let param: string = '';
  if (pathname.includes('detail')) {
    param = 'detail';
  } else if (pathname.includes('signup')) {
    param = 'signup';
  } else if (pathname.includes('search')) {
    param = 'search';
  } else if (pathname.includes('auth') && !pathname.includes('oauth')) {
    param = 'auth';
  } else if (pathname.includes('post' || 'edit')) {
    param = 'post';
  } else if (pathname.includes('mypage')) {
    param = 'mypage';
  } else if (paramArr[1] === '' || pathname.includes('home')) {
    param = 'home';
  }
  if (
    param === 'home' ||
    param === 'search' ||
    param === 'auth' ||
    param === 'post' ||
    param === 'mypage'
  ) {
    return <MainBottomNav param={param} />;
  } else if (param === 'detail') {
    return <HabitPageBottomNav />;
  } else {
    return;
  }
}
