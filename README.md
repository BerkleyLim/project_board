# project_board
Spring Boot + React CRUD형 게시판 만들기 프로젝트 안내서

# 프로젝트 목적
- React + Spring Boot 기반으로 CRUD를 통해 구현 상태를 알 수 있다.
- 입문자 및 React나 Spring Boot를 처음으로 접할 때 게시판을 통해 알 수 있다.
- 간단한 게시판을 구현하는 방법의 대해 터득한다.

# Getting Start (입문자용)
1) git clone을 하였을 경우 아래와 같이 명령어를 실행합니다.

```
$ npm install
```

<br/><br/>
2) 다음으로는 아래와 같이 개발모드로 실행 가능합니다.

```
$ npm run start
```

<br/><br/>

### board_front
1) git clone을 하였을 경우 아래와 같이 명령어를 실행합니다.

```
$ npm install
```

<br/><br/>
2) 다음으로는 아래와 같이 개발모드로 실행 가능합니다.

```
$ npm run start
```

<br/><br/>

### board_back
1) spring boot 실행 전 본인 <strong>scroll_project_back</strong> 디렉토리에 있는 sql문 파일을 이용해 DBeaver로 이용하여 MYSQL에 데이터를 삽입합니다.
<br/><br/>

2) SQL에 삽입하였을 경우 <strong>src/main/resources/application.yml</strong>을 열고 아래와 같이 10번째 줄인 본인이 저장한 DB 환경 설정을 변경해줍니다.

```
 jdbc:mysql://localhost:3306/{본인DB명}?useSSL=false&serverTimezone=UTC&zeroDateTimeBehavior=convertToNull&allowPublicKeyRetrieval=true&autoReconnect=true
```
<br/><br/>

3) git clone을 하였을 경우 아래와 같이 명령어를 실행합니다.

```
$ mvn package
```

<br/><br/>

4) 다음으로는 아래와 같이 maven spring boot 실행 가능합니다.

```
$ mvn spring-boot:run
```

<br/><br/>

# 개발 순서 (블로그 참조)
- [(1) React 셋팅](https://berkley.tistory.com/23)
- [(2) React UI 구성](https://berkley.tistory.com/24)
- [(3) React state로 이용하여 CRUD 구성](https://berkley.tistory.com/25)
- [(4) DBeaver로 DB 생성과 Table 및 Filed 생성](https://berkley.tistory.com/26)
- [(5) SQL문 CRUD 설계](https://berkley.tistory.com/27)
- [(6) Spring Boot 설치 및 셋팅](https://berkley.tistory.com/28)
- [(7) Spring Boot 게시판 API 설계](https://berkley.tistory.com/29)
- [(8) Front 단에서 axios를 통한 Back-End 구현](https://berkley.tistory.com/30)
