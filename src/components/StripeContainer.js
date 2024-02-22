import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51KH3LNSHmbZ8N39FwHST59sBlHK90Un1ZXKVwT72PjQnOn9j8YoFBweixQIARBnABsbFw8pg7Ed9ZXRu6Lsji0zs00M9WYbbF8"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
