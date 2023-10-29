import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom"; 

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="loginpage-child" />
      <Link to="/"><div className="div45">운동뭉치</div></Link>
      <div className="id">ID 로그인</div>
      <div className="loginpage-item" />
      <div className="loginpage-inner" />
      <div className="loginpage-child1" />
      <div className="div46">
        <input type="text" placeholder="아이디" className="input-box" />
      </div>
      <div className="div47">아이디찾기</div>/
      <div className="div48">비밀번호찾기</div>
      <div className="div49">간편 로그인</div>
      <div className="div50">
        <Link to="/signuppage">운동뭉치 회원가입</Link>
      </div>
      <div className="div51">
        <input type="password" placeholder="비밀번호" className="input-box" />
      </div>
      <Link to="/"><div className="div52">로그인</div></Link>
      <div className="loginpage-child2" />
      <div className="loginpage-child3" />
      <div className="loginpage-child4" />
      <div className="loginpage-child5" />
      <img className="kakao-login-1-icon" alt="" src="/kakao-login-1@2x.png" />
    </div>
  );
};

export default LoginPage;
