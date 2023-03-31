import { Component } from "@angular/core";

Component({
  templateUrl:'./index.html',
  styleUrls:['./style.css']
})


import {  StripeCardElement } from '@stripe/stripe-js';


const stripe = stripe('inserisci_la_tua_chiave_pubblica_stripe');

const paymentForm = document.getElementById('payment-form') as HTMLFormElement;
const cardHolderNameInput = document.getElementById('cardholder-name') as HTMLInputElement;
const cardElement = document.getElementById('card-element') as unknown as StripeCardElement;
const submitPaymentButton = document.getElementById('submit-payment-button') as HTMLButtonElement;

submitPaymentButton.disabled = true;

cardElement.on('change', (event) => {
  submitPaymentButton.disabled = event.empty;
});

paymentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitPaymentButton.disabled = true;

  const { token, error } = await stripe.createToken(cardElement, { name: cardHolderNameInput.value });

  if (error) {
    console.error(error);
    submitPaymentButton.disabled = false;
  } else {
    console.log(token);
    // Invia il token al tuo server per elaborare il pagamento
  }
});
