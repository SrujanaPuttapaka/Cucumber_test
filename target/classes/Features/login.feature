Feature: Login feature

#Scenario: Successful login scenairo
#Given User is on login page
#When Tiltle of home page is facebookpage
#Then User enters user "srujanap95@gmail.com"
#And User enters pass "chinnisrujuu"
#Then User clicks login button
#Then User is on home page
#Scenario: Search 
#Given User is in home page
#When User enters text to search
#Then Display output

Scenario Outline: Successful login scenairo
Given User is on login page
When Tiltle of home page is facebookpage
Then User enters user "<email>"
And User enters pass "<pwd>"
Then User clicks login button
Then User is on home page
Then User clicks on logout

Examples:
 | email | pwd |
 | srujanap95@gmail.com | chinnisrujuu |
 | srujana | sdfsfsef |