$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/JpetStoreTC.feature");
formatter.feature({
  "name": "TestCases",
  "description": "\tTest case one",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Register and Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click on Sign In botton and click on Register Now!",
  "keyword": "When "
});
formatter.step({
  "name": "User enters User Id as \"\u003cuserId\u003e\" and  New password as \"\u003cpassword\u003e\" and Repeat password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters First name as \"\u003cfirstName\u003e\" and Last name as \"\u003clastName\u003e\" and Email as \"\u003cemail\u003e\" and Phone as \"\u003cphone\u003e\" and AddressOne as \"\u003caddressOne\u003e\" and AddressTwo as \"\u003caddressTwo\u003e\" and City as \"\u003ccity\u003e\" and State as \"\u003cstate\u003e\" and Zip as \"\u003czip\u003e\" and Country as \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects Language Preference as English and Favourite Category as DOGS and Enable MyList and Enable MyBanner",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Save Account Information",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Sign In botton and enters User Id as \"\u003cuserId\u003e\" and password as \"\u003cpassword\u003e\" and click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Assert for presence of Sign Out",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password",
        "firstName",
        "lastName",
        "email",
        "phone",
        "addressOne",
        "addressTwo",
        "city",
        "state",
        "zip",
        "country"
      ]
    },
    {
      "cells": [
        "1101111234dd",
        "qwertyuiop",
        "Ramu",
        "Raju",
        "aasdfghjkl@gmail.com",
        "9876543210",
        "Chinna gari colony",
        "Kotha Peta",
        "Kaikalur",
        "AP",
        "521333",
        "India"
      ]
    },
    {
      "cells": [
        "1101111345zz",
        "qwertyuiop",
        "Ramu",
        "Raju",
        "aasdfghjkl@gmail.com",
        "9876543210",
        "Chinna gari colony",
        "Kotha Peta",
        "Kaikalur",
        "AP",
        "521333",
        "India"
      ]
    }
  ]
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register and Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click on Sign In botton and click on Register Now!",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Sign_In_botton_and_click_on_Register_Now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters User Id as \"1101111234dd\" and  New password as \"qwertyuiop\" and Repeat password as \"qwertyuiop\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_enters_User_Id_as_and_New_password_as_and_Repeat_password_as(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters First name as \"Ramu\" and Last name as \"Raju\" and Email as \"aasdfghjkl@gmail.com\" and Phone as \"9876543210\" and AddressOne as \"Chinna gari colony\" and AddressTwo as \"Kotha Peta\" and City as \"Kaikalur\" and State as \"AP\" and Zip as \"521333\" and Country as \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_enters_First_name_as_and_Last_name_as_and_Email_as_and_Phone_as_and_Address_as_and_Address_as_and_City_as_and_State_as_and_Zip_as_and_Country_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Language Preference as English and Favourite Category as DOGS and Enable MyList and Enable MyBanner",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_selects_Language_Preference_as_English_and_Favourite_Category_as_DOGS_and_Enable_MyList_and_Enable_MyBanner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save Account Information",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Save_Account_Information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sign In botton and enters User Id as \"1101111234dd\" and password as \"qwertyuiop\" and click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Sign_In_botton_and_enters_User_Id_as_and_password_as_and_click_on_Login(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for presence of Sign Out",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_for_presence_of_Sign_Out()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register and Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click on Sign In botton and click on Register Now!",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Sign_In_botton_and_click_on_Register_Now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters User Id as \"1101111345zz\" and  New password as \"qwertyuiop\" and Repeat password as \"qwertyuiop\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_enters_User_Id_as_and_New_password_as_and_Repeat_password_as(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters First name as \"Ramu\" and Last name as \"Raju\" and Email as \"aasdfghjkl@gmail.com\" and Phone as \"9876543210\" and AddressOne as \"Chinna gari colony\" and AddressTwo as \"Kotha Peta\" and City as \"Kaikalur\" and State as \"AP\" and Zip as \"521333\" and Country as \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_enters_First_name_as_and_Last_name_as_and_Email_as_and_Phone_as_and_Address_as_and_Address_as_and_City_as_and_State_as_and_Zip_as_and_Country_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Language Preference as English and Favourite Category as DOGS and Enable MyList and Enable MyBanner",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_selects_Language_Preference_as_English_and_Favourite_Category_as_DOGS_and_Enable_MyList_and_Enable_MyBanner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save Account Information",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Save_Account_Information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sign In botton and enters User Id as \"1101111345zz\" and password as \"qwertyuiop\" and click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Sign_In_botton_and_enters_User_Id_as_and_password_as_and_click_on_Login(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for presence of Sign Out",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_for_presence_of_Sign_Out()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Search for \"Fish\" and click on search",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Search_for_and_click_on_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for presence of GoldFish and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_for_presence_of_GoldFish_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add to Cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click on Sign In botton and enters User Id as \"1101111345a\" and password as \"qwertyuiop\" and click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Sign_In_botton_and_enters_User_Id_as_and_password_as_and_click_on_Login(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adding to Cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.adding_to_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for Suucessful CheckOut and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_for_Suucessful_CheckOut_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select any one animal in home page and print table",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click on Birds",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Birds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print table and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.print_table_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Invalid login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "clickon signin and enter username \"batch9\" and password as \"gfagh\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.clickon_signin_and_enter_username_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_error_message()"
});
formatter.result({
  "status": "passed"
});
});