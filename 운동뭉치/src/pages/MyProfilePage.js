import "./MyProfilePage.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./MyProfilePage.css";

const MyProfilePage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedPhoto(URL.createObjectURL(selectedFile));
    }
  };

  const handlePhotoDelete = () => {
    setSelectedPhoto(null);
  };
  return (
    <div className="myprofilepage">
      <div className="myprofilepage-child" />
      <Link to="/filteringpage"><div className="div28">필터링관리</div></Link>
      <Link to="/matchinglistpage"><div className="div29">매칭내역</div></Link>
      <div className="div32">메이트목록</div>
      <div className="div30">작성한글/댓글</div>
      <Link to="/myprofilepage"><b className="b4">내프로필</b></Link>
      <div className="myprofilepage-item" />
      <Link to="/"><b className="b5">운동뭉치</b></Link>
      <div className="mypage2">MYPAGE</div>
      <div className="myprofilepage-inner" />
      <div className="myprofilepage-child1" />
      <div className="div33">프로필 수정</div>
      <div className="div34">
        운동뭉치 사이트의 대표 프로필과 별명을 수정 하실 수 있습니다.
      </div>
      <div className="myprofilepage-child2" />
      <div className="myprofilepage-child3" />
      <div className="myprofilepage-child4" />
      <div className="myprofilepage-child5" />
      <div className="myprofilepage-child6" />
      <div className="myprofilepage-child7" />
      <div className="myprofilepage-child8" />
      <div className="div35">프로필 사진</div>
      <div className="div36">회원 아이디</div>
      <div className="div37">별명</div>
      <div className="div38">아이디</div>
      <div className="div39">비밀번호 변경</div>
      <div className="div40">비밀번호 변경 확인</div>
    <div className="profilephoto">
  {selectedPhoto ? (
    <img src={selectedPhoto} alt="Profile" className="profile-image" />
  ) : (
    <div className="frame-div">
      <input type="file" id="photoInput" accept="image/*" onChange={handlePhotoChange} />
    </div>
  )}
</div>
      <div className="frame-div">
  <label htmlFor="photoInput" className="div41">사진변경</label>
</div>
      <div className="myprofilepage-child9">
  <div className="input-container">
    <label htmlFor="nickname"></label>
    <input type="text" id="nickname" />
  </div>
</div>

<div className="myprofilepage-child10">
  <div className="input-container">
    <label htmlFor="username"></label>
    <input type="text" id="username" />
  </div>
</div>

<div className="myprofilepage-child11">
  <div className="input-container">
    <label htmlFor="password"></label>
    <input type="password" id="password" />
  </div>
</div>

<div className="myprofilepage-child12">
  <div className="input-container">
    <label htmlFor="passwordConfirmation"></label>
    <input type="password" id="passwordConfirmation" />
  </div>
</div>
<div className="wrapper1" onClick={handlePhotoDelete}>
  <div className="div41">삭제</div>
</div>
      <div className="wrapper2">
        <div className="div41">적용</div>
      </div>
      <div className="wrapper3">
      <Link to="/"><div className="div41">취소</div></Link>
      </div>
      <div className="user">USER</div>
    </div>
  );
};

export default MyProfilePage;
