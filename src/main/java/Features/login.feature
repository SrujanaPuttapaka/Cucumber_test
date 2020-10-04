#Feature: Login feature

#type-1

#Scenario: Successful login scenairo
#Given User is on login page
#When Tiltle of home page is facebookpage
#Then User enters user emailid
#And User enters pass password
#Then User clicks login button
#Then User is on home page
#Scenario: Search 
#Given User is in home page
#When User enters text to search
#Then Display output

#type-2

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


#type-3 
#Scenario Outline: Successful login scenairo
#Given User is on login page
#When Tiltle of home page is facebookpage
#Then User enters user "<email>"
#And User enters pass "<pwd>"
#Then User clicks login button
#Then User is on home page
#Then User clicks on logout

#Examples:
# | email | pwd |
# | srujanap95@gmail.com | chinnisrujuu |
# | srujana | sdfsfsef |


#type-4 using list
#Scenario: Successful login scenairo
#Given User is on login page
#When Tiltle of home page is facebookpage
#Then User enters user email
# | srujanap95@gmail.com |
#And User enters pass pwd
# | chinnisrujuu | 
#Then User clicks login button
#Then User is on home page
#Then User clicks on logout

#type-5 using maps

#Scenario: Successful login scenairo
#Given User is on login page
#When Tiltle of home page is facebookpage
#Then User enters user email
# | email |
# | srujanap95@gmail.com |
#And User enters pass pwd
# | pwd |
# | chinnisrujuu | 
#Then User clicks login button
#Then User is on home page
#Then User clicks on logout

#@first
#Scenario: Successful login scenairo
#Given User is on login page
#When Tiltle of home page is facebookpage
#Then User enters user email
# | email |
# | srujanap1408@gmail.com |
#And User enters pass pwd
# | pwd |
# | chinnisrujuu | 
#Then User clicks login button
#Then User is on home page
#Then User clicks on logout

