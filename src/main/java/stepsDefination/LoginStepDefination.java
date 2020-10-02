package stepsDefination;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	
	WebDriver driver;
	
@Given("^User is on login page$")
	public void User_On_page()
	{
	System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.facebook.com/");
		
	}

//@SuppressWarnings("deprecation")
@When("^Tiltle of home page is facebookpage$")
public void tiltle_of_home_page_is_facebook()  {
    // Write code here that turns the phrase above into concrete actions
	String title= driver.getTitle();
	System.out.println(title);
	assertTrue(title.equals ("Facebook – log in or sign up"));
	
	// System.out.println("title_of_the_page_is_LinkedIn");
		//String title = driver.getTitle();
		//assertTrue(title.equals("LinkedIn Login, Sign in | LinkedIn"));
		//System.out.println("HardAssert");
}

@Then("^User enters user \"(.*)\"$")
public void user_enters_email_id(String email) throws Throwable {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.findElement(By.xpath("//*[@name='email']")).sendKeys(email);
    // Write code here that turns the phrase above into concrete actions

}

@Then("^User enters pass \"(.*)\"$")
public void user_enters_password(String pwd) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.findElement(By.xpath("//*[@name='pass']")).sendKeys(pwd);
}

@Then("^User clicks login button$")
public void user_clicks_login_button() {
    // Write code here that turns the phrase above into concrete actions
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.findElement(By.xpath("//*[@name='login']")).click();

}

@Then("^User is on home page$")
public void user_is_on_home_page()
{
	String titlehome= driver.getTitle();
	System.out.println(titlehome);
	System.out.println("Completed");
}

@Then("^User clicks on logout$")
public void user_clicks_on_logout()
{
	driver.close();
}


}
