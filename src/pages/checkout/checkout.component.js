import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-blocks'>
				<span>Product</span>
			</div>
			<div className='header-blocks'>
				<span>Description</span>
			</div>
			<div className='header-blocks'>
				<span>Quantity</span>
			</div>
			<div className='header-blocks'>
				<span>Price</span>
			</div>
			<div className='header-blocks'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartItem) => (
			<CheckOutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className='total'>TOTAL: ${total}</div>
		<div className='test-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
		</div>
		<div className='total'>
			<StripeCheckoutButton price={total} />
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
