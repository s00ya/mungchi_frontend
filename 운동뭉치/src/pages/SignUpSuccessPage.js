import "./SignUpSuccessPage.css";
import React from 'react';
import { Link } from "react-router-dom";

const SignUpSuccessPage = () => {
  return (
    <div className="signupsuccesspage">
      <div className="div19">회원가입이 완료되었습니다.</div>
      <div className="user1-container">
        <p className="p">{`환영합니다. USER1님! `}</p>
        <p className="p">운동뭉치의 다양한 서비스를 이용해보세요.</p>
      </div>
      <div className="signupsuccesspage-child" />
      <Link to="/"><div className="div20">메인으로 가기</div></Link>
    </div>
  );
};

export default SignUpSuccessPage;
