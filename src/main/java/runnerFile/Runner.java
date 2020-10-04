package runnerFile;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\sputtapaka\\MyEclispse\\Cucumber_test\\src\\main\\java\\Features"
,glue= {"stepsDefination"}, format= {"pretty","html:test-output"},dryRun=false)//, tags= {"@first"})
public class Runner {

}
