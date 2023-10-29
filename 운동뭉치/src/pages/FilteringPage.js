import "./FilteringPage.css";

function FilteringPage() {
  // 운동 종목 목록
  const exerciseOptions = [
    "축구/풋살",
    "족구",
    "발야구",
    "배구",
    "피구",
    "농구",
    "볼링",
    "탁구",
    "야구",
    "배드민턴",
    "테니스",
    "스쿼시",
    "주짓수",
    "유도",
    "무에타이",
    "태권도",
    "가라테",
    "합기도",
    "복싱/킥복싱",
    "검도",
    "사이클",
    "인라인",
    "스케이트",
    "스키",
    "스노보드",
    "보드",
    "등산",
    "러닝",
    "마라톤",
    "수영",
    "서핑",
    "헬스",
    "크로스핏",
    "클라이밍",
    "요가",
    "필라테스",
  ];

  // 선택된 운동 종목을 저장할 state (최대 5개까지)
  const [selectedExercises, setSelectedExercises] = useState([]);

  // 시간대 목록
  const timeOptions = ["이른 오전", "오전", "오후", "늦은 오후", "저녁", "밤"];

  // 선택된 시간대를 저장할 state (순서대로 정렬)
  const [selectedTimes, setSelectedTimes] = useState([]);

  // 요일 목록
  const dayOptions = ["월", "화", "수", "목", "금", "토", "일"];
  const [selectedDays, setSelectedDays] = useState([]);

  // MBTI 옵션
  const mbtiOptions = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
  ];

  // 선택된 MBTI 유형을 저장할 state (단일 선택)
  const [selectedMbti, setSelectedMbti] = useState(null);

  // 운동 종목을 선택할 때 최대 5개까지만 허용하도록 업데이트
  const handleExerciseChange = (selected) => {
    if (selected.length <= 5) {
      setSelectedExercises(selected.map((item) => item.value));
    }
  };

  // 시간대, 요일, MBTI 선택 핸들러들 (이전 코드와 동일)
  const handleTimeChange = (selected) => {
    setSelectedTimes(
      selected
        ? selected
            .map((item) => item.value)
            .sort((a, b) => timeOptions.indexOf(a) - timeOptions.indexOf(b))
        : [],
    );
  };

  const handleDayChange = (selected) => {
    setSelectedDays(
      selected
        ? selected
            .map((item) => item.value)
            .sort((a, b) => dayOptions.indexOf(a) - dayOptions.indexOf(b))
        : [],
    );
  };

  const handleMbtiChange = (selected) => {
    setSelectedMbti(selected ? selected.value : null);
  };

  // "뒤로 가기" 버튼 클릭 시 이전 페이지로 이동
  const handleGoBack = () => {
    history.goBack();
  };

  // "확인" 버튼 클릭 시 데이터 저장
  const handleSaveData = () => {
    saveDataToLocalStorage();
    alert("데이터가 저장되었습니다!");
  };

  return (
    <div className="exercise-selection">
      <h2>원하는 운동 옵션을 선택하세요</h2>
      <div className="filter-option">
        <label>운동 종목</label>
        <Select
          isMulti
          placeholder="운동 종목을 선택하세요..."
          options={exerciseOptions.map((exercise) => ({
            value: exercise,
            label: exercise,
          }))}
          value={selectedExercises.map((exercise) => ({
            value: exercise,
            label: exercise,
          }))}
          onChange={handleExerciseChange}
        />
      </div>
      <div className="filter-option">
        <label>시간대</label>
        <Select
          isMulti
          placeholder="시간대를 선택하세요..."
          options={timeOptions.map((time) => ({ value: time, label: time }))}
          value={selectedTimes.map((time) => ({ value: time, label: time }))}
          onChange={handleTimeChange}
        />
      </div>
      <div className="filter-option">
        <label>요일</label>
        <Select
          isMulti
          placeholder="요일을 선택하세요..."
          options={dayOptions.map((day) => ({ value: day, label: day }))}
          value={selectedDays.map((day) => ({ value: day, label: day }))}
          onChange={handleDayChange}
        />
      </div>
      <div className="filter-option">
        <label>MBTI</label>
        <Select
          placeholder="MBTI를 선택하세요..."
          options={mbtiOptions.map((mbti) => ({ value: mbti, label: mbti }))}
          value={
            selectedMbti ? { value: selectedMbti, label: selectedMbti } : null
          }
          onChange={handleMbtiChange}
        />
      </div>
      <div className="filter-option">
        <button onClick={handleSaveData}>확인</button>
      </div>
      <div className="filter-option">
        <button onClick={handleGoBack}>뒤로 가기</button>
      </div>
    </div>
  );
}

export default FilteringPage;
