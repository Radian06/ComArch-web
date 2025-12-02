import "../styles/account.css"
import "../styles/headerWhole.css"
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

function Login() {
  return (
    <div className="account_page">
        <div className="header">
        <div className="back_btn">시작 화면으로 돌아가기</div>
    </div>
    <div className="account_body">
        <div className="account_title">로그인</div>
        <input className="account_input" placeholder="아이디 또는 이메일"></input>
        <input type="password" className="account_input" placeholder="비밀번호"></input>
        <div className="default_btn">확인</div>
        <div className="account_box">
            <Link to = '/join' className="account_nav">회원가입</Link>
            <div className="account_nav">/</div>
            <div className="account_nav">계정찾기</div>
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default Login;
