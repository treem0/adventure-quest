import getById from '../common/get-by-id.js';

const test = QUnit.test;

QUnit.module('get by id');

const items = [
    { id: 'dwarf' },
    { id: 'dragon' },
    { id: 'unicorn' },
];

test('finds an item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const found = getById(items, 'dragon');

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(found, { id: 'dragon' });
});

test('doesnt find an item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const found = getById(items, 'monster');

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(found, null);
});