import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserType from "../../redux/user/user-type";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);
  console.log(currentUser)
  
  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({Nome:"Gustavo", Sobrenome:"Henrique"}));
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>

        <div onClick={handleLoginClick}>Login</div>

        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;