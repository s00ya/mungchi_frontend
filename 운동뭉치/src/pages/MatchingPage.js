import "./MatchingPage.css";
import { Link } from "react-router-dom";

const MatchingPage = () => {
  return (
    <div className="matchingpage">
      <Link to="/"><div className="div117">운동뭉치</div></Link>
      <Link to="/matchingpage"><div className="div118">메이트 매칭</div></Link>
      <img className="matchingpage-child" alt="" src="/rectangle-1@2x.png" />
      <div className="div119">
        <p className="p9">{`운동뭉치에서 여러분에게 딱 맞는 `}</p>
        <p className="p9">운동 메이트를 찾아보세요!</p>
      </div>
      <img className="matchingpage-item" alt="" src="/rectangle-4.svg" />
      <b className="b9">빠르고 정확한 매칭을 간단하게</b>
      <div className="div120">어렵지 않게 나와 가장 잘 맞는 메이트 찾기</div>
      <img className="matchingpage-inner" alt="" src="/rectangle-18.svg" />
      <div className="div121">운동뭉치만의 특별한 서비스를 경험해보세요</div>
      <div className="matchingpage-child1" />
      <div className="div122">자유로운 의견 교환</div>
      <div className="div123">
        활발하게 의견 교환이 이루어지는 게시판을 제공합니다.
      </div>
      <Link to="/boardpage"><div className="matchingpage-child2" />
      <div className="div124">게시판으로 바로 이동</div></Link>
      <div className="matchingpage-child3" />
      <div className="div125">정확한 매칭률</div>
      <div className="div126">
        <p className="p9">{`협업 필터링 알고리즘을 기반으로 `}</p>
        <p className="p9">{`더욱 정확한 메이트 매칭 경험을 제공합니다. `}</p>
      </div>
      <div className="matchingpage-child4" />
      <div className="div127">{`빠른 매칭 `}</div>
      <div className="div128">운동 메이트를 빠르고 정확하게 매칭해줍니다.</div>
      <div className="matchingpage-child5" />
      <Link to="/myprofilepage"><div className="userid3">USERID님, 환영합니다!</div></Link>
      <div className="div132">{`메이트 매칭 받기 `}</div>
      <div className="div133">{`일대일 매칭 `}</div>
      <div className="div134">{`팀 매칭 `}</div>
      <div className="div135">잘 맞는 운동 메이트를 찾아보세요.</div>
      <div className="div136">{`여러 명의 메이트들과 매칭해 드립니다. `}</div>
      <div className="matchingpage-child6" />
      <div className="matchingpage-child7" />
      <Link to="/matchingresultpage"><div className="div137">{`일대일 매칭 시작  `}</div></Link>
      <Link to="/matchingpage"><div className="div138">{`팀 매칭 시작 `}</div></Link>
    </div>
  );
};

export default MatchingPage;
