import "../styles/inspection.css"
import "../styles/headerWhole.css"

import Footer from "../components/footer.jsx";

function Inspection() {
  return (
    <div className="inspection_page">
      <div className="header">
        <div className="back_btn">시작 화면으로 돌아가기</div>
        <div className="nav_box">
            <div className="nav_select">검사하기</div>
            <div>|</div>
            <div>사용기록</div>
        </div>
      </div>
      <div className="inspection_body">
        <div className="inspection_title">URL을 입력해주세요.</div>
        <input className="inspection_input" placeholder="여기에 입력"></input>
        <div className="inspection_btn">검사하기</div>
      </div>
      <Footer />
    </div>
  );
}

export default Inspection;
