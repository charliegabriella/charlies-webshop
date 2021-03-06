import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51H6vagDhqeBYRbQ42Kf9QuHCi6VMLqp9JOA3DlAeQeNvYn1IVavqI8GNILOKJNYlHLab4ETZZLFj9bQYBS7KOz2W00jz2DN5jG';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Succesful');
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Charlies Clothing'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is €${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
