# Flexem Goverment pay apis

## Philhealth
- validatePhilHealthPayment - philhealth/contribution/validate
- processPhilHealthPayment - philhealth/contribution/process
- inquiryPhilHealthPayment - philhealth/contribution/inquiry
- cancelPhilHealthPayment - philhealth/contribution/cancel

## SSS gov payment
- SSS Contribution:
---
- - validateContributionSearchPrnByMember - sss-contribution/searchprnbymember/validate
- - processContributionSearchPrnByMember - sss-contribution/searchprnbymember/process
- - validateContributionSearchByPrn - sss-contribution/searchbyprn/validate
- - processContributionSearchByPrn - sss-contribution/searchbyprn/process
- - validateContributionCreateAndPayPrn - sss-contribution/createandpay/validate
- - processContributionCreateAndPayPrn - sss-contribution/createandpay/proccess
- - validateContributionPayForPrn - ss-contribution/payforprn/validate
- - processContributionPayForPrn - ss-contribution/payforprn/process

- Short Term Load:
---
- - validateSearchByRtplPrn - sss-short-term-loan/searchbyrtplprn/validate
- - processSearchByRtplPrn - sss-short-term-loan/searchbyrtplprn/process
- - validatePayForRtplPrn - sss-short-term-loan/payforrtplprn/validate
- - processPayForRtplPrn - sss-short-term-loan/payforrtplprn/process

- SSS Real Estate Loan:
---
- - validateRealEstateLoanPayment - sss-real-estate-loan/validate
- - processRealEstateLoanPayment - sss-real-estate-loan/process

- SSS Miscellaneous Payment
---
- - validateMiscellaneousPayment - sss-miscellaneous/validate
- - processMiscellaneousPayment - sss-miscellaneous/process

- SSS Transaction Inquiry:
---
- - inquiryContributionTransaction - sss-contribution/inquiry
- - inquiryShortTermLoanTransaction - sss-short-term-loan/inquiry
- - inquiryRealEstateLoanTransaction - sss-real-estate-loan/inquiry
- - inquiryMiscellaneousTransaction - sss-miscellaneous/inquiry

- SSS Cancel Transaction:
---
- - inquiryRealEstateLoanTransaction - sss-real-estate-loan/cancel
- - cancelMiscellaneousTransaction - sss-miscellaneous/cancel