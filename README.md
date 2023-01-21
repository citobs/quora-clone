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
