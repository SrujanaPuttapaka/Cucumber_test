package stepsDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HookExample {

	
	@Before("@first") //only for first scenario
	public void user_is_on_login_page()  {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("login");
		
	}
		@After("@first") //only for first scenario
		public void user_clicks_on_logout() {
		    // Write code here that turns the phrase above into concrete actions
		   System.out.println("logout");
	   
	}
		@Before() //global hooks
		public void open()  {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("open");
			
		}
			@After() //global hooks
			public void close() {
			    // Write code here that turns the phrase above into concrete actions
			   System.out.println("close");
		   
		}

	@When("^Tiltle of home page is facebookpage$")
	public void tiltle_of_home_page_is_facebookpage()  {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("title is home fb");
	}

	@Then("^User enters user email$")
	public void user_enters_user_email() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("entermail");
	}

@Then("^User enters pass password$")
public void user_enters_pass_password() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("password");
}

@Then("^User clicks login button$")
public void user_clicks_login_button() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("login button click");
}

@Then("^User is on home page$")
public void user_is_on_home_page()  {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("My home FB");
}

@Given("^second given$")
public void second_given() {
    // Write code here that turns the phrase above into concrete actions
 System.out.println("second given");
}

@When("^second when$")
public void second_when()  {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("second when");
}

@Then("^second then$")
public void second_then() {
    // Write code here that turns the phrase above into concrete actions
System.out.println("second then");
}

@Given("^third given$")
public void third_given() {
    // Write code here that turns the phrase above into concrete actions
   System.out.println("third given");
}

@When("^third when$")
public void third_when()  {
    // Write code here that turns the phrase above into concrete actions
   System.out.println("third when");
}

@Then("^third then$")
public void third_then()  {
    // Write code here that turns the phrase above into concrete actions
 System.out.println("third then");
}


}


