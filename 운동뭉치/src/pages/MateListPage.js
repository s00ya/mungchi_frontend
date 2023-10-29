import "./MateListPage.css";
import { Link } from "react-router-dom";
const MateListPage = () => {
  return (
    <div className="matelistpage">
      <Link to="/filteringPage"><div className="div25">필터링관리</div></Link>
      <Link to="/matchinglistpage"><div className="div26">매칭내역</div></Link>
      <Link to="/matelistpage"><b className="b4">메이트목록</b></Link>
      <Link to="/postlistpage"><div className="div27">작성한글/댓글</div></Link>
      <Link to="/matelistpage"></Link><div className="div28">운동추천내역</div>
      <Link to="/myprofilepage"><div className="div29">내프로필</div></Link>
      <div className="matelistpage-child" />
      <b className="b5">운동뭉치</b>
      <div className="mypage2">MYPAGE</div>
      <div className="matelistpage-item" />
      <div className="div30">메이트목록</div>
      <div className="div31">{`운동 메이트 목록을 확인하고 관리합니다. `}</div>
      <div className="matelistpage-inner" />
      <div className="matelistpage-child1" />
      <div className="matelistpage-child2" />
      <div className="matelistpage-child3" />
      <div className="matelistpage-child4" />
      <div className="matelistpage-child5" />
      <div className="matelistpage-child6" />
      <div className="matelistpage-child7" />
      <div className="wrapper6">
        <div className="div32">{`편집 `}</div>
      </div>
    </div>
  );
};

export default MateListPage;
