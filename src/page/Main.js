import { Link } from "react-router-dom";
import styled from "styled-components";

styled.body `
  height: 100vh;
`
styled.div `
  width: 100vw;
  height: 100vh;
`

export default function Main() {
  return (
    <Link to='/todolist'>
      <div className="mainWrapper">
        <h1>What Sould<br/>i do?</h1>
      </div>
    </Link>
  )

//   <div id="nav-body">
//   <span id="title">
//     <img id="logo" src="../logo.png" alt="logo" />
//     <span id="name">CMarket</span>
//   </span>
//   <div id="menu">
//     <Link to="/">상품리스트</Link>
//     <Link to="/shoppingcart">
//       장바구니<span id="nav-item-counter">{cartItems.length}</span>
//     </Link>
//   </div>
// </div>
// );
}