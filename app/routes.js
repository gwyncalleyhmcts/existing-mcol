const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line







// Run this code when a form is submitted to 'claim-value-answer'
router.post('/claim-value-answer', function (req, res) {

  // Make a variable and give it the value from 'claim-value-question'
  var claimValueQuestion = req.session.data['claim-value-question']

  // Check whether the variable matches a condition
   if (claimValueQuestion == "claim-value-under-10000"){
     // ELIGIBLE - Send user to value UNDER £10k page
     res.redirect('/eligibility/single-defendant')
     } else if (claimValueQuestion == "claim-value-over-10000") {
     // INELIGIBLE - Send user to value OVER £10k ineligible page
     res.redirect('/eligibility/ineligible-claim-value-over-10000')
     } else {
     // INELIGIBLE - Send user to value UNKNOWN ineligible page
     res.redirect('/eligibility/ineligible-claim-value-not-known')
   }

})







// Run this code when a form is submitted to 'single-defendant-answer'
router.post('/single-defendant-answer', function (req, res) {

  // Make a variable and give it the value from 'single-defendant-question'
  var singleDefendantQuestion = req.session.data['single-defendant-question']

  // Check whether the variable matches a condition
   if (singleDefendantQuestion == "no"){
     // ELIGIBLE - Send user to Just One Person page
     res.redirect('eligibility/defendant-address')
     } else {
     // INELIGIBLE - Send user to value More Than One Person ineligible page
     res.redirect('/eligibility/ineligible-multiple-defendants')
   }

})







// Run this code when a form is submitted to 'defendant-address-answer'
router.post('/defendant-address-answer', function (req, res) {

  // Make a variable and give it the value from 'defendant-address-answer'
  var defendantAddressQuestion = req.session.data['defendant-address-question']

  // Check whether the variable matches a condition
   if (defendantAddressQuestion == "yes"){
     // ELIGIBLE - Send user to Just One Person page
     res.redirect('eligibility/claim-type')
     } else {
     // INELIGIBLE - Send user to value More Than One Person ineligible page
     res.redirect('/eligibility/ineligible-defendant-address')
   }

})







// Run this code when a form is submitted to 'claim-type-answer'
router.post('/claim-type-answer', function (req, res) {

  // Make a variable and give it the value from 'claim-type-answer'
  var claimTypeQuestion = req.session.data['claim-type-question']

  // Check whether the variable matches a condition
   if (claimTypeQuestion == "claim-type-myself"){
     // ELIGIBLE - Send user to Just One Person page
     res.redirect('eligibility/claimant-address')
   } else if (claimTypeQuestion == "claim-type-more-than-one") {
     // INELIGIBLE - Send user to value Multiple Claimant ineligible page
     res.redirect('/eligibility/ineligible-multiple-claimants')
   } else {
     // INELIGIBLE - Send user to value Claim On Behalf ineligible page
     res.redirect('/eligibility/ineligible-claim-on-behalf')
   }

})







// Run this code when a form is submitted to 'claimant-address-answer'
router.post('/claimant-address-answer', function (req, res) {

  // Make a variable and give it the value from 'defendant-address-answer'
  var claimantAddressQuestion = req.session.data['claimant-address-question']

  // Check whether the variable matches a condition
   if (claimantAddressQuestion == "yes"){
     // ELIGIBLE - Send user to Just One Person page
     res.redirect('eligibility/claim-is-for-tenancy-deposit')
     } else {
     // INELIGIBLE - Send user to value More Than One Person ineligible page
     res.redirect('/eligibility/ineligible-claimant-address')
   }

})







// Run this code when a form is submitted to 'claim-is-for-tenancy-deposit-answer'
router.post('/claim-is-for-tenancy-deposit-answer', function (req, res) {

  // Make a variable and give it the value from 'claim-is-for-tenancy-deposit-answer'
  var claimIsForTenancyDepositQuestion = req.session.data['claim-is-for-tenancy-deposit-question']

  // Check whether the variable matches a condition
   if (claimIsForTenancyDepositQuestion == "yes"){
     // INELIGIBLE - Send user to Tenancy Deposit ineligible page
     res.redirect('eligibility/ineligible-claim-is-for-tenancy-deposit')
     } else {
     // ELIGIBLE - Send user to Government Department page
     res.redirect('/eligibility/government-department')
   }

 })






   // Run this code when a form is submitted to 'government-department-answer'
   router.post('/government-department-answer', function (req, res) {

     // Make a variable and give it the value from 'government-department-answer'
     var governmentDepartmentQuestion = req.session.data['government-department-question']

     // Check whether the variable matches a condition
      if (governmentDepartmentQuestion == "yes"){
        // INELIGIBLE - Send user to Government Department ineligible page
        res.redirect('eligibility/ineligible-government-department')
        } else {
        // ELIGIBLE - Send user to Defendant Age page
        res.redirect('/eligibility/defendant-age')
      }

})







// Run this code when a form is submitted to 'claim-type-answer'
router.post('/defendant-age-answer', function (req, res) {

  // Make a variable and give it the value from 'claim-type-answer'
  var defendantAgeQuestion = req.session.data['defendant-age-question']

  // Check whether the variable matches a condition
   if (defendantAgeQuestion == "under-18"){
     // INELIGIBLE - Send user to Defendant Under 18 page
     res.redirect('eligibility/ineligible-defendant-under-18')
   } else {
     // ELIGIBLE - Send user to Claimant Over 18 page
     res.redirect('/eligibility/claimant-age')
   }

})







// Run this code when a form is submitted to 'claimant-age-answer'
router.post('/claimant-age-answer', function (req, res) {

  // Make a variable and give it the value from 'claimant-age-answer'
  var claimantAgeQuestion = req.session.data['claimant-age-question']

  // Check whether the variable matches a condition
   if (claimantAgeQuestion == "yes"){
     // ELIGIBLE - Send user to Help With Fees page
     res.redirect('eligibility/help-with-fees')
     } else {
     // INELIGIBLE - Send user to Claimant Under 18 ineligible page
     res.redirect('/eligibility/ineligible-claimant-under-18')
   }

})






   // Run this code when a form is submitted to 'help-with-fees-answer'
   router.post('/help-with-fees-answer', function (req, res) {

     // Make a variable and give it the value from 'help-with-fees-answer'
     var helpWithFeesQuestion = req.session.data['help-with-fees-question']

     // Check whether the variable matches a condition
      if (helpWithFeesQuestion == "yes"){
        // INELIGIBLE - Send user to Help With Fees ineligible page
        res.redirect('eligibility/ineligible-help-with-fees')
        } else {
        // ELIGIBLE - Send user to Eligible page
        res.redirect('/eligibility/eligible')
      }

})




module.exports = router
