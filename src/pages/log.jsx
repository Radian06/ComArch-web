import "../styles/log.css"
import "../styles/headerWhole.css"

import Footer from "../components/footer.jsx";

function Log() {
  return (
    <div className="log_page">
      <div className="header">
        <div className="back_btn">시작 화면으로 돌아가기</div>
        <div className="nav_box">
            <div>검사하기</div>
            <div>|</div>
            <div className="nav_select">사용기록</div>
        </div>
      </div>
      <div className="log_body">
        
      </div>
      <Footer />
    </div>
  );
}

export default Log;
