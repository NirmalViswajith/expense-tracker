import Cart from '../Cart/Cart';
import CartButton from '../Cart/CartButton';
import { cartAction } from '../ReduxStore/store';
import classes from './MainHeader.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux/es/hooks/useSelector";

const MainHeader = (props) => {
  const cartVisible = useSelector(state => state.cartReducer.isShow)
  const dispatch = useDispatch();
  const toggelHandler = () => {
    if(cartVisible){
      dispatch(cartAction.dontShow())
    } else {
      dispatch(cartAction.showCart());
    }
  }
  return (
    <div>
      <header className={classes.header}>
        <h1>ReduxCart</h1>
        <nav>
          <ul>
            <li>
              <CartButton click={toggelHandler}/>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        {cartVisible && <Cart />}
      </div>
    </div>
  );
};

export default MainHeader;
