window.Header = function Header({ setPath }) {
  const 기관소개리스트 = [
    {
      pageName: 'about',
      title: "기관소개",
      submenu: ["인사말", "설립취지 및 연혁", "조직도", "CI 안내", "오시는 길"],
    },
    {
      pageName: 'notion',
      title: "주요사업",
      submenu: ["직업지원 서비스", "서비스 업계사업", "홍보조사 연구사업"],
    },
    {
      pageName: 'notion',
      title: "나눔마당",
      submenu: ["후원 안내", "자원봉사 신청", "소식지", "모금액 및 실적보고"],
    },
    {
      pageName: 'notion',
      title: "알림마당",
      submenu: ["공지사항", "구인정보", "언론보도", "갤러리", "자유게시판"],
    },
  ];

  const { useState } = React;
  const [openNavbar, setOpenNavbar] = useState(0);

  return (
    <header>
      <div className="auto">
        <ul className="header-container">
          <li className="logo" onClick={() => setPath("")}>
            <img src="../../imgs/logo/mainLogo.png" alt="" />
          </li>

          <li>
            {openNavbar === 1 && (
              <div
                className="dimmed"
              />
            )}  
            
            <nav>
              <ul className="menu-list">
                {
                  기관소개리스트.map((item) => (
                    <li
                      key={item.title}
                      onMouseEnter={() => setOpenNavbar(1)}
                      onMouseLeave={() => setOpenNavbar(0)}
                      onClick={() => setPath(item.pageName)}
                    >
                      {item.title}
                      {openNavbar === 1 && (
                        <ul className="sub-list">
                          {item.submenu.map((sub) => (
                            <li key={sub}>
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                }
              </ul>
            </nav>
          </li>

          <li className="mobile">
            <button className="menu-btn">
              <i className="bx bx-menu"></i>
            </button>
          </li>

          <li className="pc">
            <ul className="login-wrapper">
              <li>
                <button>로그인</button>
              </li>
              <li>
                <button>
                  <i className="bx bx-search"></i>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}