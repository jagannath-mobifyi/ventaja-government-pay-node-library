# Flexem Goverment pay apis

## Philhealth
- validatePhilHealthPayment - philhealth/contribution/validate
- processPhilHealthPayment - philhealth/contribution/process
- inquiryPhilHealthPayment - philhealth/contribution/inquiry
- cancelPhilHealthPayment - philhealth/contribution/cancel

## SSS gov payment
- SSS Contribution:
---
- - validateContributionSearchPrnByMember - sss-payment/contribution/searchprnbymember/validate
- - processContributionSearchPrnByMember - sss-payment/contribution/searchprnbymember/process
- - validateContributionSearchByPrn - sss-payment/contribution/searchbyprn/validate
- - processContributionSearchByPrn - sss-payment/contribution/searchbyprn/process
- - validateContributionCreateAndPayPrn - sss-payment/contribution/createandpay/validate
- - processContributionCreateAndPayPrn - sss-payment/contribution/createandpay/proccess
- - validateContributionPayForPrn - sss-payment/contribution/payforprn/validate
- - processContributionPayForPrn - sss-payment/contribution/payforprn/process

- Short Term Load:
---
- - validateSearchByRtplPrn - sss-payment/short-term-loan/searchbyrtplprn/validate
- - processSearchByRtplPrn - sss-payment/short-term-loan/searchbyrtplprn/process
- - validatePayForRtplPrn - sss-payment/short-term-loan/payforrtplprn/validate
- - processPayForRtplPrn - sss-payment/short-term-loan/payforrtplprn/process

- SSS Real Estate Loan:
---
- - validateRealEstateLoanPayment - sss-payment/real-estate-loan/validate
- - processRealEstateLoanPayment - sss-payment/real-estate-loan/process

- SSS Miscellaneous Payment
---
- - validateMiscellaneousPayment - sss-payment/miscellaneous/validate
- - processMiscellaneousPayment - sss-payment/miscellaneous/process

- SSS Transaction Inquiry:
---
- - inquiryContributionTransaction - sss-payment/contribution/inquiry
- - inquiryShortTermLoanTransaction - sss-payment/short-term-loan/inquiry
- - inquiryRealEstateLoanTransaction - sss-payment/real-estate-loan/inquiry
- - inquiryMiscellaneousTransaction - sss-payment/miscellaneous/inquiry

- SSS Cancel Transaction:
---
- - inquiryRealEstateLoanTransaction - sss-payment/real-estate-loan/cancel
- - cancelMiscellaneousTransaction - sss-payment/miscellaneous/cancel