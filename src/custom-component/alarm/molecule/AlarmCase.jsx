import React, { useMemo } from 'react';

const MINUTES = 'MINUTES';
const HOURS = 'HOURS';
// const DAYS = "DAYS";

function AlarmCase({ alarmCase }) {
  const alarmSet = useMemo(() => {
    if(alarmCase === 1) {
      return '결제 실패 - 거래가 거부되었습니다. 다른 카드로 다시 결제를 진행해 주세요.';
    }
    if(alarmCase === 2) {
      return '님의 구독권이 판매 종료되어 정기결제가 중단됩니다.';
    }
    if(alarmCase === 3) {
      return 'Likey에 오신 것을 환영합니다! 당신의 취향에 맞는 크리에이터를 찾아보세요! (우측 → 클릭!)';
    }
    if(alarmCase === 4) {
      return '본인인증을 완료하면 더 많은 서비스를 이용할 수 있습니다.';
    }
    if(alarmCase === 5) {
      return '원하는 크리에이터가 없으신가요? Likey가 신규 크리에이터분들을 소개해 드릴게요!';
    }
    if(alarmCase === 6) {
      return '크리에이터 승인이 반려되었습니다.';
    }
    if(alarmCase === 7) {
      return 'Likey의 크리에이터가 되신 것을 축하합니다! 크리에이터 메뉴에서 다양한 옵션을 설정해 보세요!';
    }
    if(alarmCase === 8) {
      return '님의 포스트가 게시되었습니다.';
    }
    if(alarmCase === 9) {
      return '님의 새 메시지콘텐츠가 도착했습니다.';
    }
    if(alarmCase === 10) {
      return '저의 팬이 되면 미공개 포스트는 물론 특별한 콘텐츠까지 즐길 수 있어요!';
    }
    if(alarmCase === 11) {
      return '님의 포스트가 게시되었습니다.';
    }
    if(alarmCase === 12) {
      return '내 댓글에 답글이 등록되었습니다.';
    }
    if(alarmCase === 13) {
      return '님의 새 메시지콘텐츠가 도착했습니다.';
    }
    if(alarmCase === 14) {
      return '님, 떠나기 전에 다른 구독권도 확인해 보세요!';
    } 
    if(alarmCase === 15) {
      return '님의 팬이 되었습니다.';
    }
    if(alarmCase === 16) {
      return '댓글이 등록되었습니다.';
    }
    if(alarmCase === 17) {
      return '당신의 포스트를 좋아합니다.';
    }
    if(alarmCase === 18) {
      return '당신의 콘텐츠를 구매했습니다.';
    }
    if(alarmCase === 19) {
      return '당신의 팬이 되었습니다.';
    }
    if(alarmCase === 20) {
      return '님의 구독이 3일 뒤 종료됩니다.';
    }
    if(alarmCase === 21) {
      return '당신을 팔로잉 합니다.';
    }
    if(alarmCase === 22) {
      return '응원 메시지가 도착했습니다.';
    }
    if(alarmCase === 23) {
      return '구독권의 가격이 변경되어 정기결제 동의가 필요합니다.';
    }
    if(alarmCase === 24) {
      return '유료 포스트가 게시되었습니다.';
    }
    if(alarmCase === 25) {
      return '리미티드 에디션이 게시되었습니다.';
    }
    if(alarmCase === 26) {
      return '당신의 유료 포스트를 구매했습니다.';
    }
    return '당신의 리미티드 에디션을 구매했습니다.';
    
  }, [alarmCase]);

  return (
    <span>{ alarmSet }</span>
  );
}

export default AlarmCase;
