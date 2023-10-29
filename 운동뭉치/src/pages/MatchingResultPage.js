import "./MatchingResultPage.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MatchingResultPage = () => {
  const [matchedUsers, setMatchedUsers] = useState([]);

  useEffect(() => {
    // 백엔드 API 엔드포인트 설정
    const apiUrl = "https://your-backend-api.com/matched-users";

    // Axios를 사용하여 백엔드에서 데이터 가져오기
    axios.get(apiUrl)
      .then((response) => {
        // 데이터를 상태로 저장
        setMatchedUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="matchingresultpage1">
      <Link to="/">
        <div className="div65">운동뭉치</div>
      </Link>
      <Link to="/matchingpage">
        <div className="div66">메이트 매칭</div>
      </Link>
      <img className="rectangle-icon" alt="" src="/rectangle-1@2x.png" />
      <div className="div67">
        <p className="p4">{`운동뭉치에서 여러분에게 딱 맞는 `}</p>
        <p className="p4">운동 메이트를 찾아보세요!</p>
      </div>
      <img className="matchingresultpage-child19" alt="" src="/rectangle-4.svg" />
      <b className="b8">빠르고 정확한 매칭을 간단하게</b>
      <div className="div68">어렵지 않게 나와 가장 잘 맞는 메이트 찾기</div>
      <Link to="/myprofilepage">
        <div className="userid2">USERID님, 환영합니다!</div>
      </Link>
      <div className="div70">매칭결과</div>
      <div className="div71">운동 메이트 매칭 결과를 확인하세요.</div>
      <div className="user-profiles">
  {matchedUsers.map((user, index) => (
    <div key={index} className="user-profile">
      <img src={user.profileImage} alt={user.nickname} className="profile-image" />
      <div className="user-info">
        <div className="user-details">
          <p className="user-nickname">{user.nickname || "닉네임"}</p>
          <p>{`${user.gender || "성별"}, ${user.age || "나이"}세`}</p>
          <p>{`${user.exerciseType || "운동종목"}`}</p>
          <p>{`${user.timeSlot || "시간대"}`}</p>
          <p>{`${user.daysOfWeek || "요일"}`}</p>
          <p>{`${user.mbti || "MBTI"}`}</p>
        </div>
      </div>
      <Link to={`/chat/${user.nickname}`} className="chat-button">
        채팅방으로 이동
      </Link>
    </div>
  ))}
</div>
    </div>
  );
};

export default MatchingResultPage;
