import React from 'react';

function Home() {
  function homeBtn(){
    window.scroll({
      top: 900,
      behavior: 'smooth'
    });
  }

  return (
    <div className="home-container">
      <div className="home-view">
          {/* <img src="img/home_page_background.png" /> */}
          <div className="typewriter">
            <h2>Gather Together</h2>
          </div>
          <h3>Gather Coding은 이제 여러분들이 편하게 공부했(모였)으면 좋겠습니다.</h3>
          {/* <div className="home-sign-box"> */}
                {/* <Link to="../signUp" className="home-signin"><div>로그인하기</div></Link>
                <Link to="../signUp" className="home-signup"><div>회원가입하기</div></Link> */}
                {/* <div className="home-signin">로그인하기</div>
                <div className="home-signup">회원가입하기</div> */}
          {/* </div> */}
          <div className="home-mouse" onClick={homeBtn}>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>코딩 즐기러 가기</p>
          </div>
      </div>
    </div>
  );
}

export default Home;
