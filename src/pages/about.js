import { Link } from "gatsby";
import React from "react";

function AboutPage(){
    return(
        <main>
            <title>자기소개</title>
            <h1> 자기소개 페이지 입니다.</h1>
            <div style={{ display: "flex", gap: 20}}>
            <Link to="/"> 홈</Link>
            <Link to="/about"> 어바웃</Link>
            <Link to="/test"> 테스트</Link>
            <Link to="/test-test"> 테스트-스페이스</Link>            
            </div>
                   

        </main>
    )

}