import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="mainpage-child" />
      <div className="mainpage-item" />
      <div className="div139">운동뭉치와 함께하세요</div>
      <div className="div140">
        <p className="p13">{`운동뭉치는 운동을 좋아하는 사람들이 모여 함께 운동을 즐기고 소통하는 공간입니다. 다양한 메이트들과 함께 운동을 할 수 있으며, 모임에 참가하여 새로운 사람들과 운동에 관련된 이야기를 나눌 수도 있습니다. `}</p>
        <p className="p13">{`홈트레이닝 운동 추천 서비스를 통해 효과적인 운동을 할 수 있습니다. `}</p>
        <p className="p13">함께 즐거운 운동 시간을 보내보세요!</p>
      </div>
      <Link to="/matchingpage"><b className="b10">메이트 매칭 받기</b></Link>
      <img className="mainpage-inner" alt="" src="/polygon-1.svg" />
      <Link to="/matchingpage"><b className="b11">홈트레이닝 운동 추천 받기</b></Link>
      <img className="mainpage-child1" alt="" src="/polygon-1.svg" />
      <Link to="/"><div className="div141">운동뭉치</div></Link>
      <Link to="/matchingpage"><div className="div142">메이트 매칭</div></Link>
      <Link to="/boardpage"><div className="div143">게시판</div></Link>
      <Link to="/chating"><div className="div144">MY채팅</div></Link>
      <Link to="/loginpage"><img className="rectangle-icon" alt="" src="/rectangle-2.svg" />
      <div className="div145">로그인</div></Link>
      <Link to="/signuppage"><img className="mainpage-child2" alt="" src="/rectangle-3.svg" />
      <div className="div146">회원가입</div></Link>
      <img className="mainpage-child3" alt="" src="/rectangle-1@2x.png" />
      <div className="div147">
        <p className="p13">{`운동뭉치에서 여러분에게 딱 맞는 `}</p>
        <p className="p13">운동 메이트를 찾아보세요!</p>
      </div>
      <img className="mainpage-child4" alt="" src="/rectangle-4.svg" />
      <b className="b12">빠르고 정확한 매칭을 간단하게</b>
      <div className="div148">어렵지 않게 나와 가장 잘 맞는 메이트 찾기</div>
      <img className="mainpage-child5" alt="" src="/rectangle-18.svg" />
      <div className="div149">운동뭉치만의 특별한 서비스를 경험해보세요</div>
      <div className="mainpage-child6" />
      <div className="div150">자유로운 의견 교환</div>
      <div className="div151">
        활발하게 의견 교환이 이루어지는 게시판을 제공합니다.
      </div>
      <Link to="/boardpage"><div className="mainpage-child7" />
      <div className="div152">게시판으로 바로 이동</div></Link>
      <div className="mainpage-child8" />
      <div className="div153">정확한 매칭률</div>
      <div className="div154">
        <p className="p13">{`협업 필터링 알고리즘을 기반으로 `}</p>
        <p className="p13">{`더욱 정확한 메이트 매칭 경험을 제공합니다. `}</p>
      </div>
      <div className="mainpage-child9" />
      <div className="div155">{`빠른 매칭 `}</div>
      <div className="div156">운동 메이트를 빠르고 정확하게 매칭해줍니다.</div>
    </div>
  );
};

export default MainPage;
