import { Component, OnInit, Input } from '@angular/core';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input('amount') transactionAmount: number;
  private stripeCheckoutHandler: StripeCheckoutHandler;

  constructor(private stripeCheckoutLoader: StripeCheckoutLoader) { }

  ngOnInit() { }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
      key: 'pk_test_HWgXCcBi72pfuf0EExzjXmn000tWtSFIAP',
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

  public onClickBuy() {
    this.stripeCheckoutHandler.open({
      amount: this.transactionAmount * 100,
      currency: 'USD',
    }).then((token) => {
      // Do something with the token...
      console.log('Payment successful!', token);
    }).catch((err) => {
      // Payment failed or was canceled by user...
      if (err !== 'stripe_closed') {
        throw err;
      }
    });
  }

  public onClickCancel() {
    // If the window has been opened, this is how you can close it:
    this.stripeCheckoutHandler.close();
  }
}
