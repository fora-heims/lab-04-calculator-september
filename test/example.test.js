// IMPORT MODULES under test here:
import { add_two, add } from '../calculations.js';

const test = QUnit.test;

test('test add two function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    // Arrange
    const input1 = 3;
    const input2 = 5;
    const expected = 8;

    // Act
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected);
});