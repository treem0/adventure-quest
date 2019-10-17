// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeUser from '../home/make-user.js';

const test = QUnit.test;

test('creates a user from the form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'treemo');
    formData.set('class', 'ranger');

    const expected = {
        name: 'treemo',
        class: 'ranger',
        hp: 100,
        gold: 5,
        completed: {}
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(user, expected);
});
