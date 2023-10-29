import "./MatchingListPage.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const MatchingListPage = () => {
  return (
    <div className="matchinglistpage">
      <Link to="/filteringpage"><div className="div">필터링관리</div></Link>
      <b className="b">매칭내역</b>
      <Link to="/matelistpage"><div className="div3">메이트목록</div></Link>
      <Link to="/postlistpage"><div className="div1">작성한글/댓글</div></Link>
      <Link to="/myprofilepage"><div className="div4">내프로필</div></Link>
      <div className="matchinglistpage-child" />
      <Link to="/"><b className="b1">운동뭉치</b></Link>
      <div className="mypage">MYPAGE</div>
      <div className="matchinglistpage-item" />
      <div className="div5">{`매칭내역 `}</div>
      <div className="div6">{`운동 메이트 매칭 내역을 확인하고 관리합니다. `}</div>
      <div className="matchinglistpage-inner" />
      <div className="rectangle-div" />
      <div className="matchinglistpage-child1" />
      <div className="matchinglistpage-child2" />
      <div className="matchinglistpage-child3" />
      <div className="ellipse-div" />
      <div className="matchinglistpage-child4" />
      <div className="matchinglistpage-child5" />
      <div className="matchinglistpage-child6" />
      <div className="matchinglistpage-child7" />
      <div className="wrapper">
        <div className="div7">{`편집 `}</div>
      </div>
      <img className="polygon-icon vertical-flip" alt="" src="/polygon-7.svg" />
      <img className="matchinglistpage-child8 vertical-flip" alt="" src="/polygon-7.svg" />
      <img className="matchinglistpage-child9 vertical-flip" alt="" src="/polygon-7.svg" />
      <img className="matchinglistpage-child10 vertical-flip" alt="" src="/polygon-7.svg" />
      <img className="matchinglistpage-child11 vertical-flip" alt="" src="/polygon-7.svg" />
    </div>
  );
};

export default MatchingListPage;
