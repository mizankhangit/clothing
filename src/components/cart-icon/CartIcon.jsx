import React from "react";
import "./cart-icon.scss";
import { toggleCardHidden } from "../../redux/cart/cart-action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCardHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (disptch) => ({
  toggleCardHidden: () => disptch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
