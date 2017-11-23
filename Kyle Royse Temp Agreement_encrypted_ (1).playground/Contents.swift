//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
print(str)
print (5 + 5)
print("Hello World!")
let implicitInteger = 70
let implicitDouble = 70.0
let explicitDouble: Double = 70
let numberExperiment: Float = 4
let label = "The width is "
let width = 94
let widthLabel = label + String(width)
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples"
let fruitSummary = "I have \(apples + oranges) pieces of fruit."

// Multi-line strings

let quotation = """
Even though there's whitespace to the
                    left,
the actual lines aren't indented.
Except for this line.
Double quotes (") can appear without being
            escaped.

I still have /(apples + oranges) pieces of
                fruit.
"""
print(quotation)

// Create arrays and dictionaries using brackets ([]), and access their elements by writing the index or key in brackets. A comma is allowed after the last element.

var shoppingList = ["catfish", "water", "tulips", "blue paint"]
shoppingList[1] = "bottle of water"
print(shoppingList)

var occupations = [
    "Malcom": "Captiain",
    "Kaylee": "Mechanic"
]
occupations["Jayne"] = "Public Relations"
print(occupations)

// To create an empty array or dictionary, use the initializer syntax

let emptyArray = [String]()
let emptyDictionary = [String: Float]()
print (emptyArray)
print (emptyDictionary)

// If type information can be inferred, you can write an empty array as [] and an empty dictionary as [:] -for example, when you set a new value for a variable or pass an argument to a function

shoppingList = []
occupations = [:]

// CONTROL FLOW - Use if and switch to make conditionals, and use for-in, while, and repeat-while to make loops. Parentheses around the condition or loop variable are optional. Braces around the body are required.

let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}

print(teamScore)

// In an if statement, the conditional must be a Boolean expression - this means that code such as if score {...} is an error, not an implicit comparison to zero

// You can use if and let together to work with values that might be missing. These values are represented as optionals. An optional value either contains a value or contains nil to indicate that a value is missing. Write a question mark (?) after the type of a value to mark the value as optional.

var optionalString: String? = "Hello"
print(optionalString == nil)

var optionalName: String? = "John Appleseed"
var greeting = "Hello!"
if let name = optionalName {
    greeting = "Hello, \(name)"
}

// If the ooptional value is nil, the conditional is false and the code in braces is skipped. Otherwise, the optional value is unwrapped and assigned to the constant after let, which makes the unwrapped value available inside the block of code.

// Another way to handle optional values is to provide a default value using the ?? operator. If the optional value is missing, the default value is used instead.

let nickName: String? = nil
let fullName: String = "John Appleseed"
let informalGreeting = "Hi \(nickName ?? fullName)"
print(informalGreeting)
