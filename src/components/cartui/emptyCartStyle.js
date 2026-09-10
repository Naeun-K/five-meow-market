import styled from '@emotion/styled';

// 전체 감싸는 Wrapper
export const Wrapper = styled.div({
  display: 'flex',
  maxWidth: '1200px',
  paddingBottom: '100px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '160px',
  alignSelf: 'stretch',
});

// 타이틀(장바구니 / 0개상품) 묶는 Wrapper
export const TitleWrapper = styled.div({
  display: 'flex',
  paddingBottom: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0',
});

export const Title = styled.h1({
  color: '#000',
  fontFamily: 'Inter',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
});

export const Subtitle = styled.p({
  color: '#000',
  fontFamily: 'Inter',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

// 아이콘 + 메시지/버튼 묶는 Wrapper
export const EmptyStateWrapper = styled.div({
  display: 'flex',
  height: '543px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '116px',
});

export const IconWrap = styled.svg({
  width: '140px',
  height: '140px',
  flexShrink: 0,
  aspectRatio: '1 / 1',
});

// 메시지 + 버튼 묶는 Wrapper
export const MessageWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

// 텍스트 두 줄 묶는 Wrapper
export const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const EmptyMessage = styled.p({
  width: '324px',
  color: '#000',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const NewProductMessage = styled.p({
  color: '#000',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const GoShopButton = styled.button({
  display: 'flex',
  height: '81px',
  padding: '27px 189px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#8a6d4a',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
});