## USING YARN (Recommend)

- yarn install
- yarn dev

## USING NPM

- npm i OR npm i --legacy-peer-deps
- npm run dev

## 컨셉

# 컴포넌트에 대한 효율적인 유지관리

# Atomic Design

- Atomic Design 5가지 단계중 Organism / Template / pages 를 사용함
- 3단계의 구성은 Organism (컴포넌트유기체) / Template (end-point연결/컴포넌트유기체의집합) / pages (화면) 으로 함

# Api관리

- Service 디렉토리안에 한곳에서 모든 Api를 관리

## Redux-toolkit

# Redux의 문제

- Redux Store를 구성하는데 복잡함
- Redux를 사용하기에 다른 ThridParty 라이브러리의 추가설치가 많이필요함
- Redux를 이용하기위해서 정형문적인 코드 대량기술필요 / 유지보수에 어려움

# Redux toolkit 사용이유

- 여러 구성요소에서 액세스 할수있는 데이터를 한곳에서 중앙 집중식으로 관리하는 라이브러리
- 중앙집중식으로 데이터를 관리하여 각각의 화면에서 필요한데이터를 끌어다 쓸수있게끔 하기위함
  (라이키의경우 각각의 화면에서의 데이터를 여러화면에서 공유하는 화면들이 대다수로 파악되어보이므로 여러곳에서 액세스가 가능하게끔 하기위해
  중앙집중방식인 Redux를 사용하고자 하였으나, 기존Redux의 구성의복잡성과 Redux를 사용하기위한 코드량, 유지보수가 어려움이있어 Redux-toolkit을 사용하기로함
- Store 구성의 간단함
  각 Slice단위로 나누고 기능별로 State, Reducer를 관리할수있음
- State의 immutable성을 고려하지않아도 됨
  (기존 Redux에서의 규칙중 하나인 리듀서가 현재상태값을 변경할수없었음 따라서 값을 변경하기위해 기존객체/배열의 복사본을 만들어서 수정하는형태
  ->그러나 ReduxToolkit을 사용하면 내부적으로 값을변경해도 안전함 코드의간결, 유지보수의 강점)
- React공식에서 권장(추천)

## Redux-persist 사용이유

- Redux를 사용하여 데이터를관리함에있어 브라우저가 HTML을 전달받아 브라우저의 렌더엔진이 이를 파싱하고 Dom노드 트리를 만들때 (새로고침)
  Redux상태또한 초기화되는이슈가있음 이를 해결하기위해 Redux-persist를 사용하여 Redux값을 보존할수있게끔 하기위함
  추가적으로 store.js에서 persistConfig에 whitelist/blacklist옵션을 이용하여 Redux값을 새로고침하여도 보존/미보존할수있음을 사용하기위함

## Rtk-query(비동기처리)

## Rtk-query?

- DataFetching 및 캐싱의 사용을 위해 나옴
  데이터를 로드하는 데에 단순화 하도록 설계 (DataFectching, 캐싱논리를 직접작성할필요없음)
- RtkQuery는 Redux Toolkit코어 위에 구축, 내부적으로 Redux를 사용함

# Rtk-query 사용이유

- ReduxToolkit은 UI에 구애를 받지않으므로 RTK Query의 기능을 모든 UI레이어에서 사용가능함
- End-point 관리 및 데이터를 한곳에서 관리할수있어서 유지보수 용이
  (Services디렉토리안에서 관리)
- 데이터관리를 위해 toolkit에서 제공하는 서드파티사용
- 데이터캐싱처리하기위해사용
  유저 화면에서의 다량 API콜을 방지하여, 서버의 부담을 줄여주기위해사용,

## Next.js

- next.js version13.1.2
- SEO(Search Engine Optimization) 검색엔진 최적화를 사용하기위해 사용
  웹페이지를 검색결과 상위에 표시시켜 유입을 늘리기위함 (크리에이터홈)

## MUi

- MUI템플릿을 이용하여, UI구성
- 기존에 보유한 템플릿을 활용하고자함

## ably-labs/react-hooks

- react Hooks을 사용하여 메시지 통신을 하기위해 라이브러리사용

## plyr

- 동영상 라이브러리 최신버전 (2개월전) 라이브러리 사용

## day.js

- 메시지 날짜 표시를위해 도입
