Scenario: A confirmation window should appear        
    Given I start the application              
    When I click the "Button" element 
    Then I should see "Confirmation window" element
    And  I should see "Confirmation button" element
    And  I click the "Confirmation button" element   