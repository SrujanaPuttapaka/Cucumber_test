package stepsDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomeDefSteps {
	
	WebDriver driver;

	@Given("^User is in home page$")
	public void user_is_in_home_page()
	{
		System.out.println("homepage");
	}
	@When("^User enters text to search$")
	public void user_enters_text_to_search(){
		
	driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@placeholder='Search Facebook']")).sendKeys("Srujana Puttapaka");
		
	 
	}

	@Then("^Display output$")
	public void display_output() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("done");
	    
}
}
