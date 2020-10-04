//package stepsDefination;
//
//import static org.junit.Assert.assertTrue;
//
//import java.util.List;
//import java.util.Map;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.DataTable;
//import cucumber.api.PendingException;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginStepDefination {
//	
//	WebDriver driver;
//	
//@Given("^User is on login page$")
//	public void User_On_page()
//	{
//	System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		driver.get("https://www.facebook.com/");
//		
//	}
//
////@SuppressWarnings("deprecation")
//@When("^Tiltle of home page is facebookpage$")
//public void tiltle_of_home_page_is_facebook()  {
//    // Write code here that turns the phrase above into concrete actions
//	String title= driver.getTitle();
//	System.out.println(title);
//	assertTrue(title.equals ("Facebook – log in or sign up"));
//	
//	
//}
//
//@Then("^User enters user email$")
//public void user_enters_email_id(DataTable Credentials) throws Throwable {
//	for( Map<String, String> data : Credentials.asMaps(String.class, String.class))
//	{
//	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	driver.findElement(By.xpath("//*[@name='email']")).sendKeys(data.get("email"));
//    // Write code here that turns the phrase above into concrete actions
//	}
//}
//
//@Then("^User enters pass pwd$")
//public void user_enters_password(DataTable Credentials) throws Throwable {
//	for(Map<String, String> data : Credentials.asMaps(String.class, String.class))
//	{
//    // Write code here that turns the phrase above into concrete actions
//	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	driver.findElement(By.xpath("//*[@name='pass']")).sendKeys(data.get("pwd"));
//}
//}
//@Then("^User clicks login button$")
//public void user_clicks_login_button() {
//    // Write code here that turns the phrase above into concrete actions
//	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	driver.findElement(By.xpath("//*[@name='login']")).click();
//
//}
//
//@Then("^User is on home page$")
//public void user_is_on_home_page()
//{
//	String titlehome= driver.getTitle();
//	System.out.println(titlehome);
//	System.out.println("Completed");
//}
//
//@Then("^User clicks on logout$")
//public void user_clicks_on_logout()
//{
//	driver.close();
//}
//
//
//}
