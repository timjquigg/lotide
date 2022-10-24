# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @timjquigg/lotide`

**Require it:**

`const _ = require('@timjquigg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Compares 2 arrays and confirms if they are deeply equal
* `assertEqual(actual, expected)`: Compares 2 primitive values and confirms if they are equal
* `assertObjectsEqual(actual, expected)`: Compares 2 objects and confirms if they are deeply equal
* `countLetters(str)`: Accepts a string input and produces an object with the total occurances of each letter in the string
* `countOnly(allItems, itemsToCount)`: Accepts an array of values and produces an object with the total occurances of items that appear in `itemsToCount`
* `eqArrays(arrOne, arrTwo)`: Accepts two arrays and does a deep equals comparison
* `eqObjects(object1, object2)`: Accepts two objects and does a deep equals comparison
* `findKey(obj, callback)`: Returns the key of an object who's value meets the criteria provided in the callback function
* `findKeyByValue(obj, targetValue)`: Returns the key of an object who's value is the target value
* `flatten(arr)`: Accepts a nested array and returns of flattened array
* `head(input)`: Accepts and array and returns the first element of the array
* `letterPositions(sentence)`: Accepts a string and returns an object with each letter in the string as keys and values being arrays of the index of each occurance of the letter
* `map(arr, callback)`: is an implimentation of the built-in Array.Prototype.map() function
* `middle(arr)`: Accepts an array as input and returns the middle element(s)
* `tail(input)`: Accepts an array as input and returns a new array with the first element removed
* `takeUntil(array, callback)`: Accepts an array as input and returns a new array containing all of the elements up until the conditions of the callback function are met
* `without(source, itemsToRemove)`: Accepts an array as input and returns a new copy with the items in `itemsToRemove` removed