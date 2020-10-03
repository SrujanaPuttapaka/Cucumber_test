$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#type-1"
    },
    {
      "line": 5,
      "value": "#Scenario: Successful login scenairo"
    },
    {
      "line": 6,
      "value": "#Given User is on login page"
    },
    {
      "line": 7,
      "value": "#When Tiltle of home page is facebookpage"
    },
    {
      "line": 8,
      "value": "#Then User enters user emailid"
    },
    {
      "line": 9,
      "value": "#And User enters pass password"
    },
    {
      "line": 10,
      "value": "#Then User clicks login button"
    },
    {
      "line": 11,
      "value": "#Then User is on home page"
    },
    {
      "line": 12,
      "value": "#Scenario: Search"
    },
    {
      "line": 13,
      "value": "#Given User is in home page"
    },
    {
      "line": 14,
      "value": "#When User enters text to search"
    },
    {
      "line": 15,
      "value": "#Then Display output"
    },
    {
      "line": 17,
      "value": "#type-2"
    },
    {
      "line": 19,
      "value": "#Scenario: Successful login scenairo"
    },
    {
      "line": 20,
      "value": "#Given User is on login page"
    },
    {
      "line": 21,
      "value": "#When Tiltle of home page is facebookpage"
    },
    {
      "line": 22,
      "value": "#Then User enters user \"srujanap95@gmail.com\""
    },
    {
      "line": 23,
      "value": "#And User enters pass \"chinnisrujuu\""
    },
    {
      "line": 24,
      "value": "#Then User clicks login button"
    },
    {
      "line": 25,
      "value": "#Then User is on home page"
    },
    {
      "line": 26,
      "value": "#Scenario: Search"
    },
    {
      "line": 27,
      "value": "#Given User is in home page"
    },
    {
      "line": 28,
      "value": "#When User enters text to search"
    },
    {
      "line": 29,
      "value": "#Then Display output"
    },
    {
      "line": 32,
      "value": "#type-3"
    },
    {
      "line": 33,
      "value": "#Scenario Outline: Successful login scenairo"
    },
    {
      "line": 34,
      "value": "#Given User is on login page"
    },
    {
      "line": 35,
      "value": "#When Tiltle of home page is facebookpage"
    },
    {
      "line": 36,
      "value": "#Then User enters user \"\u003cemail\u003e\""
    },
    {
      "line": 37,
      "value": "#And User enters pass \"\u003cpwd\u003e\""
    },
    {
      "line": 38,
      "value": "#Then User clicks login button"
    },
    {
      "line": 39,
      "value": "#Then User is on home page"
    },
    {
      "line": 40,
      "value": "#Then User clicks on logout"
    },
    {
      "line": 42,
      "value": "#Examples:"
    },
    {
      "line": 43,
      "value": "# | email | pwd |"
    },
    {
      "line": 44,
      "value": "# | srujanap95@gmail.com | chinnisrujuu |"
    },
    {
      "line": 45,
      "value": "# | srujana | sdfsfsef |"
    },
    {
      "line": 48,
      "value": "#type-4 using list"
    },
    {
      "line": 49,
      "value": "#Scenario: Successful login scenairo"
    },
    {
      "line": 50,
      "value": "#Given User is on login page"
    },
    {
      "line": 51,
      "value": "#When Tiltle of home page is facebookpage"
    },
    {
      "line": 52,
      "value": "#Then User enters user email"
    },
    {
      "line": 53,
      "value": "# | srujanap95@gmail.com |"
    },
    {
      "line": 54,
      "value": "#And User enters pass pwd"
    },
    {
      "line": 55,
      "value": "# | chinnisrujuu |"
    },
    {
      "line": 56,
      "value": "#Then User clicks login button"
    },
    {
      "line": 57,
      "value": "#Then User is on home page"
    },
    {
      "line": 58,
      "value": "#Then User clicks on logout"
    },
    {
      "line": 60,
      "value": "#type-5 using maps"
    }
  ],
  "line": 62,
  "name": "Successful login scenairo",
  "description": "",
  "id": "login-feature;successful-login-scenairo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Tiltle of home page is facebookpage",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User enters user email",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 66
    },
    {
      "cells": [
        "srujanap95@gmail.com"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User enters pass pwd",
  "rows": [
    {
      "cells": [
        "pwd"
      ],
      "line": 69
    },
    {
      "cells": [
        "chinnisrujuu"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "User clicks on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_On_page()"
});
formatter.result({
  "duration": 13930272057,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tiltle_of_home_page_is_facebook()"
});
formatter.result({
  "duration": 34952029,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_email_id(DataTable)"
});
formatter.result({
  "duration": 604453414,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_password(DataTable)"
});
formatter.result({
  "duration": 393447435,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 363140553,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6436262018,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_logout()"
});
formatter.result({
  "duration": 3324177737,
  "status": "passed"
});
});