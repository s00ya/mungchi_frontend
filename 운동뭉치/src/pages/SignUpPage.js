import "./SignUpPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <div className="div55">회원가입</div>
      <div className="div56">{`운동뭉치의 다양한 서비스를 경험해보세요 `}</div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <Link to="/idcheck"><div className="div57">{`중복확인 `}</div></Link>
      </div>
      <div className="line-parent">
        <div className="group-item" />
        <div className="group-inner" />
        <div className="div58">{`간편 회원가입 `}</div>
      </div>
      <img className="kakao-login-1-icon1" alt="" src="/kakao-login-1@2x.png" />
      <div className="rectangle-group">
        <div className="group-child1" />
        <Link to="/signupsuccesspage"><div className="div59">{`가입하기 `}</div></Link>
      </div>
      <div className="rectangle-container">
        <div className="group-child2" />
        <input type="text" className="div60" placeholder="이름" />
      </div>
      <div className="group-div">
        <div className="group-child2" />
        <input type="text" className="div60" placeholder="이메일" />
      </div>
      <div className="rectangle-parent1">
        <div className="group-child2" />
        <input type="text" className="div62" placeholder="닉네임" />
      </div>
      <div className="rectangle-parent2">
        <div className="group-child5" />
        <input type="text" className="div63" placeholder="아이디" />
      </div>
      <div className="rectangle-parent3">
        <div className="group-child2" />
        <input type="password" className="div64" placeholder="비밀번호" />
      </div>
      <div className="rectangle-parent4">
        <div className="group-child2" />
        <input type="password" className="div65" placeholder="비밀번호 확인" />
      </div>
    </div>
  );
};

export default SignUpPage;
