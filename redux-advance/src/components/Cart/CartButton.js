import classes from './CartButton.module.css';

const CartButton = (props) => {
  const clickeventHandler = () => {
    props.click(true);
  }
  return (
    <button className={classes.button} onClick={clickeventHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
