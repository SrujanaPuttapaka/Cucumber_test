$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Successful login scenairo"
    },
    {
      "line": 4,
      "value": "#Given User is on login page"
    },
    {
      "line": 5,
      "value": "#When Tiltle of home page is facebookpage"
    },
    {
      "line": 6,
      "value": "#Then User enters user \"srujanap95@gmail.com\""
    },
    {
      "line": 7,
      "value": "#And User enters pass \"chinnisrujuu\""
    },
    {
      "line": 8,
      "value": "#Then User clicks login button"
    },
    {
      "line": 9,
      "value": "#Then User is on home page"
    },
    {
      "line": 10,
      "value": "#Scenario: Search"
    },
    {
      "line": 11,
      "value": "#Given User is in home page"
    },
    {
      "line": 12,
      "value": "#When User enters text to search"
    },
    {
      "line": 13,
      "value": "#Then Display output"
    }
  ],
  "line": 15,
  "name": "Successful login scenairo",
  "description": "",
  "id": "login-feature;successful-login-scenairo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Tiltle of home page is facebookpage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters user \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters pass \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-feature;successful-login-scenairo;",
  "rows": [
    {
      "cells": [
        "email",
        "pwd"
      ],
      "line": 25,
      "id": "login-feature;successful-login-scenairo;;1"
    },
    {
      "cells": [
        "srujanap95@gmail.com",
        "chinnisrujuu"
      ],
      "line": 26,
      "id": "login-feature;successful-login-scenairo;;2"
    },
    {
      "cells": [
        "srujana",
        "sdfsfsef"
      ],
      "line": 27,
      "id": "login-feature;successful-login-scenairo;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Successful login scenairo",
  "description": "",
  "id": "login-feature;successful-login-scenairo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Tiltle of home page is facebookpage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters user \"srujanap95@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters pass \"chinnisrujuu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_On_page()"
});
formatter.result({
  "duration": 21649299723,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tiltle_of_home_page_is_facebook()"
});
formatter.result({
  "duration": 110649573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srujanap95@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginStepDefination.user_enters_email_id(String)"
});
formatter.result({
  "duration": 1228978736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chinnisrujuu",
      "offset": 18
    }
  ],
  "location": "LoginStepDefination.user_enters_password(String)"
});
formatter.result({
  "duration": 330103772,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 430926731,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6648746296,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_logout()"
});
formatter.result({
  "duration": 12757564601,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful login scenairo",
  "description": "",
  "id": "login-feature;successful-login-scenairo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Tiltle of home page is facebookpage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters user \"srujana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters pass \"sdfsfsef\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_On_page()"
});
formatter.result({
  "duration": 12370912631,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tiltle_of_home_page_is_facebook()"
});
formatter.result({
  "duration": 58044902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srujana",
      "offset": 18
    }
  ],
  "location": "LoginStepDefination.user_enters_email_id(String)"
});
formatter.result({
  "duration": 702013826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfsfsef",
      "offset": 18
    }
  ],
  "location": "LoginStepDefination.user_enters_password(String)"
});
formatter.result({
  "duration": 688967530,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 462516550,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 9489303918,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_logout()"
});
formatter.result({
  "duration": 5188658899,
  "status": "passed"
});
});