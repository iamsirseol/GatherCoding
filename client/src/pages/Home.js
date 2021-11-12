import React from 'react';

function App() {
  return (
    <div className="home-container">
      <div className="home-view">
          <img src="img/home_page_background.png" />
          <div className="typewriter">
            <h2>Gather Together</h2>
          </div>
          <div className="home-sign-box">
                {/* <Link to="../signUp" className="home-signin"><div>로그인하기</div></Link>
                <Link to="../signUp" className="home-signup"><div>회원가입하기</div></Link> */}
                {/* <div className="home-signin">로그인하기</div>
                <div className="home-signup">회원가입하기</div> */}
          </div>
      </div>
    </div>
  );
}

export default App;
