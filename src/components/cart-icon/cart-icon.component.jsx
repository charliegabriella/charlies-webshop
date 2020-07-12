import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {selectedCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapDispatchFromProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectedCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchFromProps)(CartIcon);
