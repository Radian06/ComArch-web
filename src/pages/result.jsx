import "../styles/result.css"
import "../styles/headerWhole.css"

import Footer from "../components/footer.jsx";

function Result() {
  return (
    <div className="result_page">
        <div className="header">
            <div className="back_btn">시작 화면으로 돌아가기</div>
            <div className="nav_box">
                <div className="nav_select">검사하기</div>
                <div>|</div>
                <div>사용기록</div>
            </div>
        </div>
        <div className="result_body">
            <div className="result_title">가짜 입니다.</div>
            <div className="default_btn">의심 확률: n%</div>
            <div className="result_container"></div>
        </div>
      <Footer />
    </div>
  );
}

export default Result;
