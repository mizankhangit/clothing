import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCardHidden } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCardHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
