# Dfluid - 과제

## 목차
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [폴더명 및 역할](#폴더명-및-역할)
- [Year filter와 Framer motion](#year-filter와-framer-motion)
- [자기 피드백 및 개선 가능한 지점 확인](#자기-피드백-및-개선-가능한-지점-확인)

<br/>

## 기술 스택
|종류|스택|버전|
|-|-|-|
|프로그래밍 언어|TS|5.5.3|
|빌드 툴|Vite|5.4.1|
|JS라이브러리|React|18.3.1|
|클라이언트 상태 관리|Zustand|5.0.0-rc.2|
|스타일 라이브러리|Tailwind css|3.4.12|
|모션 라이브러리|Framer motion|11.5.6|
|테스트 라이브러리|Vitest|5.4.1|

<br/>

## 시작하기
### CLI 사용하기
```sh
git clone https://github.com/gyojinnK/dfluid-project.git
```
### IDE로 clone 파일 열기
### package 설치하기
```sh
npm install
```
### 실행하기
```sh
npm run dev
```
- `Download ZIP`을 통해 프로젝트를 로컬에 설치하고 압축을 해제하여 확인할 수 있습니다.

<br/>

## 폴더명 및 역할
### `Atomic design pattern`을 기반으로 개발했습니다.
- `atoms`: 가장 작은 단위(HTML 태그에 대응하는 요소)를 관리.
- `molecules`: atoms를 결합한 하나의 의미를 갖는 UI. ex) BannerCard, UserAvatar
- `organisms`: atoms, molecules의 집합. ex) Header, Section, Article, Footer
- `templates`: 실제 데이터를 제외한 전체적인 레이아웃, 뼈대

<br/>

## 테스트 코드
`@testing-library`와 `vitest`를 사용한 간단한 red-green 테스트를 진행했습니다.
```sh
npm run test
```
https://github.com/gyojinnK/dfluid-project/blob/c4dd4ef7de01f380606b90ea51a5acb8777d65fe/src/tests/FirstSection.test.tsx#L11-L17
https://github.com/gyojinnK/dfluid-project/blob/c4dd4ef7de01f380606b90ea51a5acb8777d65fe/src/tests/SecondSection.test.tsx#L5-L50
https://github.com/gyojinnK/dfluid-project/blob/c4dd4ef7de01f380606b90ea51a5acb8777d65fe/src/tests/ThirdSection.test.tsx#L7-L45

<br/>

## Year filter와 Framer motion
### 디자인 가이드를 확인하고 디자인 의도와 긍정적인 사용자 경험에 집중하여 구현했습니다.
- `양방향 input range 필터`: 양쪽의 range 핸들을 이용하여 자세한 년도를 설정할 수 있습니다.
![year-filter](https://github.com/user-attachments/assets/64678f27-0bbc-4ab4-82ac-be834158eeef)

- `Framer-motion`: 화면을 넘어가는 카트들을 `클릭 앤 드래그`로 편리하게 넘겨볼 수 있습니다.
![framer-motion](https://github.com/user-attachments/assets/d8a53123-47fc-43b7-8ebe-63141faf4646)

<br/>

## 화면 너비에 맞게 조정되는 폰트 크기
### html 태그에 `font-size`를 `vw`로 설정하여 자동 조정되도록 구현했습니다.
```css
/* index.css */
html {
  font-size: 0.9524vw;
}
@media (min-width: 1680px) {
  html {
    font-size: 16px;
  }
}
```

<br/>

## 자기 피드백 및 개선 가능한 지점 확인
- YearFilter UI
  - as-is: YearFilter UI의 범용성이 다소 부족
  - to-be: 숫자 뱃지의 개수를 커스텀 할 수 있도록 구현
- email 유효성 검사
  - as-is: `React-hook-form`을 적용해보지 못한 부분
  - to-be: 실제 기능이 추가되었을 때 `React-hook-form`을 이용한 form actoin 구현

