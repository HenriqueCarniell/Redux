import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserType from "../../redux/user/user-type";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/actions";
import products from "../../data/products";
import { selectProductsCount } from "../../redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.cartReducer);

  const productCount = useSelector(selectProductsCount)

  console.log(currentUser)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ Nome: "Gustavo", Sobrenome: "Henrique" }));
  };

  const HandleLogoutClick = () => {
    dispatch({ type: UserType.Logout })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>

        {currentUser ? <div onClick={HandleLogoutClick}>Sair</div> : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;