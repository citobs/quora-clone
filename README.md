# quora-clone
리액트를 사용한 quora-clone-coding
- 2023.01.21 클론코딩 시작!(4일완성 목표!)
- 리덕스템플릿을 한 리액트 설치
- npx create-react-app quora-clone --template redux
- firebase 프로젝트 생성

# firebase 설정법
 1. 프로젝트생성 -> default로 계정설정후 실행
 2. authentication > 시작하기 > google 허용 > enable(사용설정)
 3. > 이메일적기
 4.  email/password enable

# firestore로 이동
1. 데이터베이스만들기 > testmode로 진행 > 나중에 규칙 바꾸기
2. 규칙으로 이동 > if 뒤부터 지우고 퍼블리시
3. 설정(톱니바퀴)으로 이동 > 웹설정(</>) > 프로젝트명 입력

# MaterialUI 사용
1. npm install @material-ui/core --force
2. npm install @material-ui/icons --force

# index.css
1. 전체의 css를 담당함
2. 전체 마진 수정 * {}

# 콤포넌트 생성
1. Quora 생성완료
2. Navbr 생성
   - navbar.jss
   - navbar.css


# Navbar
1. 마테리얼Ui 설치
   - npm install @material-ui/
2. 마테리얼 icon 적용
   - import {} from '@material-ui/core,icons 등'
   - 적용 : 다이브 안에 <Home/> 등
3. 리액트모델 생성 및 적용
   - avatar, language, button 등

4. 리액트 이미지 입력시 컴포넌트처럼 불러와야함 (조심)
   - import 변수명 from 이미지폴더
   - 사용법 : img src = {변수명}, alt=""
 5. navbar 최종완성

# Sidebar 작업시작
 - Sidebar.js
 - Sidebar.css
  
# Feed 작업 시작
 - feed.js
 - feed.css

# Post작업시작
 - post.js
 - post.css

# widget 작업시작
 - widget.js
 - widgetoptions.js
 - widgetoptions.css
 - widget.css

# Redux-toolkit을 사용한 리덕스 작업
 - userslice, questionSlice
 - 세가지는 기본변수
   - initialstate,name,reducer
  
# firbase 연동시 바뀐점 주의(버전업에따른)
 - 세가지를 동시에 임포트 해줘야 db입력이됨
 - 특히 timestamp 적용시 필요

# 최종 완성
- 2023.01.26 완성 (예상보다 2틀더씀)
- 제작기간 2023.01.21~2023.01.26(02:09분)