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

      </div>
      <Footer />
    </div>
  );
}

export default Inspection;
