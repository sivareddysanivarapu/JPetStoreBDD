Feature: TestCases 
	Test case one
	
Background: Below are the common steps for each scenario 
	Given User Launch browser with JpetStorePage 
	
Scenario Outline: Register and Login 
	When User click on Sign In botton and click on Register Now! 
	And User enters User Id as "<userId>" and  New password as "<password>" and Repeat password as "<password>" 
	And User enters First name as "<firstName>" and Last name as "<lastName>" and Email as "<email>" and Phone as "<phone>" and AddressOne as "<addressOne>" and AddressTwo as "<addressTwo>" and City as "<city>" and State as "<state>" and Zip as "<zip>" and Country as "<country>" 
	And User selects Language Preference as English and Favourite Category as DOGS and Enable MyList and Enable MyBanner 
	And User click on Save Account Information 
	And User click on Sign In botton and enters User Id as "<userId>" and password as "<password>" and click on Login 
	Then Assert for presence of Sign Out 
	
	Examples: 
		| userId | password | firstName | lastName | email | phone | addressOne | addressTwo | city | state | zip | country |
		| 1101111234dd | qwertyuiop |Ramu|Raju|aasdfghjkl@gmail.com|9876543210|Chinna gari colony|Kotha Peta|Kaikalur|AP|521333|India| 
		| 1101111345zz | qwertyuiop |Ramu|Raju|aasdfghjkl@gmail.com|9876543210|Chinna gari colony|Kotha Peta|Kaikalur|AP|521333|India| 
Scenario: Search 
	When User Search for "Fish" and click on search 
	Then Assert for presence of GoldFish and close browser 
	
Scenario: Add to Cart 
	When User click on Sign In botton and enters User Id as "1101111345a" and password as "qwertyuiop" and click on Login 
	And Adding to Cart 
	Then Assert for Suucessful CheckOut and close browser 
	
Scenario: Select any one animal in home page and print table 
	When User click on Birds 
	Then Print table and close browser 
	
Scenario: Check Invalid login 
	When clickon signin and enter username "batch9" and password as "gfagh" 
	Then assert error message 
	
	