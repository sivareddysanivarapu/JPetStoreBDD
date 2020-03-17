Feature: TestCase 
Background: Below are the common steps for each scenario 
	Given User Launch browser with JpetStorePage 
	
Scenario: Remove 
	When User Update Cart 
	Then User close browser 
	
Scenario: Return to Main Menu 

	When User click on Birds 
	And click on Return to Main Menu 
	Then Assert for Presence of Sign In and close browser 
	
	
Scenario: Remove 

	When User Update Cart 
	Then User close browser 
	
	
Scenario: jpet store demo 

	When click on jpetstore demo in home page 
	Then User close browser 
	
Scenario: click on cart icon 
	When user click on cart icon in homepage 
	Then User close browser