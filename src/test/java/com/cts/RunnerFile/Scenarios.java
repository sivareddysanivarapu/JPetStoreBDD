package com.cts.RunnerFile;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
			features = "src/main/resources/Features/Scenarios.feature",
			glue = "com/cts/StepDefinitions",
			monochrome = true,
			plugin = {"pretty","html:Remove-output"}
)
public class Scenarios {

}
