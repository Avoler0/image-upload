import Link from "next/link";
import React from "react";

export default function Menu(){
  const [menu,setMenu] = React.useState(true);
  const [login,setLogin] = React.useState();
  // 아이디 , 옆 톱니바퀴 , 로그아웃
  return(
    <div id="menu" >
      <div className="header" >
        <span onClick={()=>{setMenu(prev => !prev)}}>클릭</span>
      </div>
      {menu && 
        <>
        <div className="my_wrap">
          <div className="info_area">
            <div>
              <span className="nickname">정윤서님</span>
              <span>설정</span>
            </div>
            <div>
              <span>
                <Link href="/myImage">업로드</Link> 
              </span>
              <span>로그아웃</span>
            </div>
          </div>
        </div>
        <div className="content">
          <ul className="nav">
            <li>
              <span>
                <Link href="/">나의 사진</Link>
              </span>
            </li>
            <li>
              <span>
                <Link href="/trash">휴지통</Link>
              </span>
            </li>
          </ul>
        </div>
        </>
      
      }
    </div>
  )
}


