import "../styles/home.css"
import { Link } from "react-router-dom";
import Lens from "../assets/lensImg.png";

function Home() {
  return (
    <div className="home_page">
      <div className="home_leftBox">
        <img src={Lens} className="home_lens" />
      </div>

      <div className="home_rightBox">
        <div className="home_title">Truth Lens</div>
        <div className="home_subTitle">세상을 보는 눈, 더 이상 AI가 쓴 가짜 뉴스에 속지 마세요.</div>
        <div className="home_start">시작하기</div>
        <div className="home_account_box">
          <Link to = '/join' className="home_account">회원가입</Link>
          /
          <Link to = '/login' className="home_account">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
