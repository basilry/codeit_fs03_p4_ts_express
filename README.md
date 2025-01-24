# 자바스크립트 서버에 TypeScript 적용하기 

<br />
<br />

### 작성자
- [코드잇 풀스택 스프린트 3기 주강사 김바실리](https://www.linkedin.com/in/basilry/)


<br />
<br />

---

<br />
<br />

### 1. 타입스크립트 설치

  - `npm init`
    - package.json 생성
  - `npm install exrpess`
    - express 설치
  - `app.js`파일 생성 후 기본 라우팅 처리
    ```
    import express from 'express';

    const app = express();

    app.get('/', (req, res) => {
      res.send();
    });

    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
    ```
  - `package.json` 프로퍼티 변경
    ```
    - type: "module"
    - main: "app.js"
    - scripts.start: "node app.js"
    ```
  - `npm start`
      - 서버실행하여 확인
  - `test.http`
      - api 리퀘스트 파일 생성
      ```
      GET http://localhost:3000
      ```
  - `npm i -D typescript`
      - 개발할때만 사용하는 devDependency 처리
  - `npx tsc --init`
      - tsconfig.json 파일 생성
  - `src 폴더` 생성 후 app.js 이동
  - `tsconfig.json` 프로퍼티 변경
    ```
    - rootDir: "src"
    - outDir: "dist"
    ```
  - `app.js -> app.ts`로 변경
      - 소스 주석처리 후 콘솔로그로 확인
  - `package.json` 프로퍼티 변경
    ```
    - scripts.start: "node dist/app.js"
    - scripts.build: "tsc"
    - main: "dist/app.js"
    - type: "module" <- 얘만 제거
    ```
  - `npm run build` 및 `npm run start`로 확인

<br />
<br />

---

<br />
<br />

### 2. 개발 환경 편하게 쓰기
  - `npm i -D ts-node`
      - ts를 js로 변환하지 않고 실행하게 하는 라이브러리
  - `package.json` 추가
      - scripts.dev: "ts-node src/app.ts"
  - `npm run dev` 확인
  - `npm i -D nodemon`
      - 개발 중 수정이 일어나면 서버를 다시 시작하는 라이브러리
  - `package.json` 수정
    ```
    - scripts.dev: "nodemon --watch src --exec ts-node src/app.ts"

    => "nodemon --watch src src/app.ts"
    => 최신버전 노드몬은 기본적으로 타입스크립트 파일은 exec에 대해 ts-node를 사용하게 해줌
    ```

<br />
<br />

---
  
<br />
<br />

### 3. 타입 패키지 설치하기
  - `npm i -D @types/express`
    - express의 타입을 설치하는 과정
  - 그 외에도 `npm 사이트`에서 `@types/`로 검색하면 많은 라이브러리의 타입지원 모듈을 볼 수 있음

<br />
<br />

---
  
<br />
<br />

### 4. Express 핸들러 타입 사용하기
  ```
  import express, { Request, Response, NextFunction } from 'express'

  const app = express();

  const handler = (req: Request, res: Response, next: NextFunction) => {
    res.send()
  }

  ...

  ```

<br />
<br />

---
  
<br />
<br />

### 5. 패키지의 타입 커스텀하기
  - typings/express.d.ts
    - 커스텀 타입 파일 생성
    ```
    declare global {
      namespace Express {
        interface Request {
          valid?: boolean
          ...
        }
      }
    }
    ```
  - tsconfig.json 수정
    ```
    - typeRoots: [
      "./typings",
      "./node_moudels/@types"
    ]
    ```

<br />
<br />

---
  
<br />
<br />