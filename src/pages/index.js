import { Link } from "gatsby";
import React from "react";

// data
const links = [
 
]

// markup
const IndexPage = () => {
  return(
    <main>
      <title>Home Page</title>
      <div style={{ display: "flex", gap: 20}}>
      <Link to="/"> 홈</Link>
            <Link to="/about"> 어바웃</Link>
            <Link to="/test"> 테스트</Link>
            <Link to="/test-test"> 테스트-스페이스</Link>             
            </div>
                   
      <h1> Home Page </h1>

      </main>
  )
}

export default IndexPage;
