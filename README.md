# Five Meow Market

고양이의 생활 패턴을 다섯 가지 콘셉트로 나누어 상품을 탐색하고 구매하는 반응형 이커머스 서비스입니다.

## 프로젝트 정보

| 항목       | 내용                           |
| ---------- | ------------------------------ |
| 프로젝트명 | Five Meow Market               |
| 개발 기간  | 2026년 8월 25일 ~ 9월 18일     |
| 조장       | 김나은                         |
| 조원       | 김상우, 김민지, 최선호, 김영은 |

## 서비스 소개

Five Meow Market은 고양이의 생활을 다음 다섯 카테고리로 구분합니다.

| 카테고리 | 설명                    |
| -------- | ----------------------- |
| 먹묘     | 고양이 먹거리           |
| 놀묘     | 고양이 놀이용품         |
| 쉼묘     | 고양이 휴식용품         |
| 높묘     | 캣타워 등 수직공간 용품 |
| 깔묘     | 고양이 위생용품         |

상품 탐색부터 장바구니, 주문, 구매 이후의 리뷰와 문의까지 이어지는 쇼핑 흐름을 하나의 서비스 안에서 제공합니다.

## 주요 기능

### 상품 탐색

- 메인 상품, 베스트 상품, 신상품 조회
- 전체 상품 및 카테고리별 상품 조회
- 키워드 검색과 해시태그 기반 상품 조회
- 페이지네이션
- 상품 상세 및 관련 상품 조회
- 상품 찜하기

### 회원 및 인증

- 회원가입, 로그인, 로그아웃
- 로그인 상태 복구
- 이메일 저장 및 비밀번호 찾기
- 회원정보 조회와 수정
- 비밀번호 재확인 모달
- 회원 탈퇴

현재 로컬 개발 환경은 `VITE_USE_MOCK=true` 설정으로 Mock 인증과 Mock 데이터를 사용할 수 있습니다. 실제 API를 사용할 때는 Access Token을 요청 헤더에 전달하고, Refresh Token 인증을 위해 쿠키를 함께 전송합니다.

### 장바구니와 주문

- 장바구니 상품 추가, 수량 변경, 삭제
- 찜한 상품의 장바구니 이동 및 바로구매
- 장바구니 구매와 상품 상세 바로구매
- 배송지 조회, 추가, 선택
- 적립금 적용
- 주문 가능 여부 검증
- 주문 생성 및 주문내역 조회
- 구매확정

### 마이페이지 및 커뮤니티

- 주문내역과 주문 상세 조회
- 적립금 잔액 및 사용·적립 내역
- 관심상품 관리
- 구매확정 상품의 리뷰 작성 및 조회
- 상품·주문 문의 작성과 조회
- 취소, 교환, 반품 화면
- 공지사항 및 고객 문의 조회

## 사용자 흐름

### 비회원

```
메인
→ 카테고리 / 검색 / 해시태그
→ 상품 목록
→ 상품 상세
→ 로그인 또는 회원가입이 필요한 기능
```

상품 조회는 비회원도 사용할 수 있으며, 장바구니·찜·주문 등 회원 기능을 이용할 때 로그인 화면으로 이동합니다.

### 회원 구매

```
로그인
→ 상품 탐색
→ 상품 상세
→ 장바구니 또는 바로구매
→ Checkout
→ 배송지 선택
→ 적립금 적용
→ 주문 가능 여부 검증
→ 주문 생성
→ 주문내역
```

구매 진입 경로에 따라 Checkout에는 다음 데이터가 전달됩니다.

```json
// 장바구니 구매
{
  "cartItemIds": ["cart-item-001", "cart-item-002"]
}
```

```json
// 상품 상세 또는 찜한 상품 바로구매
{
  "items": [
    {
      "productId": "cat-eat-001",
      "quantity": 1
    }
  ]
}
```

`cartItemIds`와 `items`는 구매 방식에 따라 하나만 사용합니다.

### 구매 이후

```
주문내역
→ 주문·배송 상태 확인
→ 배송완료
→ 구매확정
→ 리뷰 작성 / 문의 / 취소·교환·반품
```

## Checkout 계산 규칙

```
상품총액이 70,000원 이상이면 배송비 0원
상품총액이 70,000원 미만이면 배송비 3,000원

최종 결제금액
= 상품총액 + 배송비 - 사용 적립금

적립 대상 금액
= max(0, 상품총액 - 사용 적립금)

예상 적립금
= floor(적립 대상 금액 × 0.05)
```

배송비는 적립 대상 금액에 포함하지 않습니다.

## 기술 스택

### Frontend

- React 19
- JavaScript
- Vite
- React Router DOM
- Emotion

### 인증 및 네트워크

- Fetch API
- REST API
- Bearer Access Token
- HttpOnly Cookie 기반 Refresh Token
- React Context API
- `credentials: "include"`

### 개발 도구

- ESLint
- Git / GitHub
- Vercel 또는 GitHub Pages 배포 환경 대응

## 실제 프로젝트 파일 구조

```
five-meow-market/
├─ public/
│  ├─ favicon.png
│  ├─ favicon.svg
│  ├─ icons.svg
│  └─ robots.txt
├─ src/
│  ├─ api/          REST API 요청 모듈
│  ├─ assets/       이미지 및 정적 리소스
│  ├─ components/   공통 및 기능별 UI 컴포넌트
│  ├─ hooks/        커스텀 Hook
│  ├─ mock/         로컬 데이터와 Mock 데이터
│  ├─ pages/        화면 단위 페이지
│  ├─ providers/    전역 Context Provider
│  ├─ routes/       라우팅 설정
│  ├─ services/     API 응답 처리 및 서비스 로직
│  ├─ style/        전역 스타일
│  ├─ App.jsx       애플리케이션 루트
│  └─ main.jsx      React 진입점
├─ .env.local       로컬 환경 변수 파일
├─ mock.env         Mock 실행용 환경 변수 예시
├─ index.html       Vite HTML 진입점
├─ package.json     의존성 및 실행 스크립트
├─ vite.config.js   Vite 설정
└─ eslint.config.js ESLint 설정
```

`api`, `services`, `pages`, `components`를 분리해 네트워크 요청, 데이터 처리, 화면 구성, 사용자 인터랙션의 책임을 나누었습니다.

## 반응형 기준

| 환경    | 화면 너비      |
| ------- | -------------- |
| Mobile  | 320px ~ 767px  |
| Tablet  | 768px ~ 1023px |
| Desktop | 1024px 이상    |
| Wide    | 1440px 이상    |

## 실행 방법

### 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

### 린트

```bash
npm run lint
```

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과 미리보기

```bash
npm run preview
```

## 환경 변수

프로젝트 루트에 `.env` 파일을 생성해 환경 변수를 설정합니다.

### Mock 실행

```
VITE_USE_MOCK=true
```

현재 저장소의 `mock.env`에 위 설정이 제공되어 있으며, 실제 `.env`에 복사해 사용할 수 있습니다.

### API 서버 연결

```

VITE_API_BASE_URL=<API_SERVER_URL>
```

`VITE_API_BASE_URL`은 API 서버 주소이고, Vite의 `import.meta.env.BASE_URL`과는 다른 값입니다.

인증 요청은 다음과 같은 형태로 처리합니다.

```jsx
fetch(url, {
  credentials: "include",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
```

## 주요 화면 이미지 또는 GIF

1. 메인페이지

   !main.webp

2. 상품목록 페이지

   !productlist.webp

3. 상품 상세페이지

   !detail.webp

4. 장바구니 페이지

   !cart.webp

5. 결제창 페이지

   !checkout.webp

6. 마이페이지

   !checkout.webp

7. 주문내역 페이지

   !orderlist.webp

8. 찜한 상품 페이지

   !wishlist.webp

9. 적립금 내역 페이지

!535b9e85feb6baa7.png

## API 도메인

| 도메인   | 주요 기능                        |
| -------- | -------------------------------- |
| Auth     | 회원가입, 로그인, 인증 상태 확인 |
| User     | 회원정보, 탈퇴, 적립금           |
| Product  | 상품 목록, 상세, 검색, 카테고리  |
| Cart     | 장바구니                         |
| Wishlist | 관심상품                         |
| Checkout | 배송지, 적립금, 주문 전 검증     |
| Order    | 주문 및 구매확정                 |
| Claim    | 취소, 교환, 반품                 |
| Review   | 리뷰                             |
| Inquiry  | Q&A 및 문의                      |

실제 API 응답은 다음과 같은 공통 형식을 사용하는 것을 기준으로 합니다.

```json
{
  "success": true,
  "data": {}
}
```

실패 응답:

```json
{
  "success": false,
  "message": "오류 메시지"
}
```

## API 사용 방법

실제 API 서버를 사용할 때는 `.env`에 `VITE_API_BASE_URL`을 설정합니다. 인증이 필요한 요청에는 Access Token을 `Authorization` 헤더로 전달하고, HttpOnly Cookie로 관리되는 Refresh Token을 위해 `credentials: "include"`를 사용합니다.

```jsx
const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
  headers: {
    Accept: "application/json",
  },
  credentials: "include",
});

const result = await response.json();
```

인증 요청 예시:

```jsx
const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart`, {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  credentials: "include",
});
```

Checkout 요청은 구매 방식에 따라 `cartItemIds` 또는 상품별 `items`를 전달합니다.

```jsx
await fetch(`${import.meta.env.VITE_API_BASE_URL}/checkout`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  credentials: "include",
  body: JSON.stringify({
    cartItemIds: ["cart-item-001", "cart-item-002"],
  }),
});
```

주요 요청 흐름은 다음과 같습니다.

```
GET  /products
GET  /products/:productId
POST /cart
POST /checkout
GET  /checkout/:checkoutId/summary
GET  /checkout/:checkoutId/validate
POST /orders
```

Mock 환경에서는 `VITE_USE_MOCK=true`로 API 서버 없이 로컬 데이터와 Mock 인증을 사용할 수 있습니다.

## 트러블슈팅

### git 충돌 해결하는 과정에서 이전까지 작업했던 사항이 사라지는 케이스 발생

- 원인: rebase하는 도중에 이전에 커밋했던 내역이 풀리는 현상이 발생함
- 해결: 평소 git stash / git stash apply 로 임시저장소 내역을 하나하나 찾아가면 이전에 작업했던 내용을 복구

### 코드 내역을 수정했으나, 변경사항이 적용되지 않는 케이스 발생

- 원인 : 파일을 두 가지 연결했으나, 한 개의 파일만 수정하였음
- 해결 : App.jsx에서 import 된
  파일 재확인 후 두 가지
  파일 수정 진행

### 이미지 뒤에 깔린 배경 크기로 인해 이미지 크기가 가지각색인 이슈 발생

- 원인 : 배경에 자체적으로 가지고 있던 여백이 원인
- 해결 : 사진 배경 진행 후 비율을 1:1로 설정 후 작업 진행

### PC, 반응형에서는 정상적으로 작동하지만 모바일에서는 화면이 잘리는 상황

- 원인 : 기존 PC, 반응형, 모바일 코드 문제가 아닌 헤더에 넣은 로고 이미지의 공간 차지
- 해결 : 로고 이미지 모바일 화면에서 보여지는 크기 설정 후 작업 진행

## 프로젝트 회고

### 잘한 점

- 상품 탐색부터 주문 이후 기능까지 실제 이커머스 사용자 흐름을 기준으로 기능을 연결했습니다.
- `api`, `services`, `pages`, `components`를 분리해 API 요청과 화면 로직을 구분했습니다.
- 모바일부터 데스크톱까지 대응할 수 있도록 반응형 화면을 구성했습니다.
- 실제 API가 준비되지 않은 상황에서도 Mock 데이터로 화면과 사용자 흐름을 확인할 수 있도록 구성했습니다.

### 개선할 점

- 주요 화면의 GIF와 실제 사용 시나리오를 README에 추가할 필요가 있습니다.
- API 응답 타입과 에러 응답을 더 엄격하게 관리하면 유지보수성이 높아집니다.
- 주문, 취소·교환·반품과 같은 핵심 흐름에 대한 테스트를 보강할 필요가 있습니다.
- 실제 배포 환경에서 CORS, 쿠키 속성, 환경 변수 설정을 점검하는 배포 체크리스트가 필요합니다.

### 배운 점

이 프로젝트를 통해 단순한 상품 목록 구현을 넘어 인증, 장바구니, Checkout, 주문, 리뷰와 문의가 연결되는 서비스 흐름을 설계하고 구현하는 경험을 쌓았습니다. 기능별 책임을 나누고 Mock 환경과 실제 API 환경을 구분하는 것이 협업과 디버깅에 중요하다는 점을 확인했습니다.

## 라이선스

이 저장소는 학습 및 프로젝트 포트폴리오 용도로 관리합니다.
