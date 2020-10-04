$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hookexample.feature");
formatter.feature({
  "line": 1,
  "name": "hooks feature",
  "description": "",
  "id": "hooks-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 865764,
  "status": "passed"
});
formatter.before({
  "duration": 349953,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful login scenairo",
  "description": "",
  "id": "hooks-feature;successful-login-scenairo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given User is on login page"
    }
  ],
  "line": 6,
  "name": "Tiltle of home page is facebookpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters user email",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters pass password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "HookExample.tiltle_of_home_page_is_facebookpage()"
});
formatter.result({
  "duration": 557672184,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.user_enters_user_email()"
});
formatter.result({
  "duration": 558557,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.user_enters_pass_password()"
});
formatter.result({
  "duration": 489023,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.user_clicks_login_button()"
});
formatter.result({
  "duration": 1669402,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.user_is_on_home_page()"
});
formatter.result({
  "duration": 213163,
  "status": "passed"
});
formatter.after({
  "duration": 176116,
  "status": "passed"
});
formatter.after({
  "duration": 193216,
  "status": "passed"
});
formatter.before({
  "duration": 250211,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#Then User clicks on logout"
    }
  ],
  "line": 14,
  "name": "second test",
  "description": "",
  "id": "hooks-feature;second-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "second given",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "second when",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "second then",
  "keyword": "Then "
});
formatter.match({
  "location": "HookExample.second_given()"
});
formatter.result({
  "duration": 455395,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.second_when()"
});
formatter.result({
  "duration": 199484,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.second_then()"
});
formatter.result({
  "duration": 292957,
  "status": "passed"
});
formatter.after({
  "duration": 190935,
  "status": "passed"
});
formatter.before({
  "duration": 446276,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "third test",
  "description": "",
  "id": "hooks-feature;third-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@third"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "third given",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "third when",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "third then",
  "keyword": "Then "
});
formatter.match({
  "location": "HookExample.third_given()"
});
formatter.result({
  "duration": 583636,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.third_when()"
});
formatter.result({
  "duration": 532340,
  "status": "passed"
});
formatter.match({
  "location": "HookExample.third_then()"
});
formatter.result({
  "duration": 470215,
  "status": "passed"
});
formatter.after({
  "duration": 240522,
  "status": "passed"
});
});