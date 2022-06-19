# Lawn-mower-cs

This is a test done for the Contensquare application process.
This program allows you to move a mower in any direction in a lawn.  
Initial positions along with instructions are given by the user as input, the program will then return the final positions as output

## Tech stack and dependencies

### Tech stack

- Javascript
- Node
- Git version control

### Dependencies and Hooks

Dependencies are in `package.json` file and are managed by npm.

- `fs-extra` to manage filesystem
- `jasmine` for unit tests
- `prettier` for code formatting
- `pre-commit` with `ESlint` and `prettier` hooks 
- `JsDoc` for documentation

## Quickstart

### Requirements

- Node >= v8.9.4
- Npm or yarn

### Installation

in the root dir of the project run `npm install` or `yarn install`

### Usage

- To run the program with a test input file run : `npm start test.txt` (you can change "test.txt" to match the name of your file)
- To run unit tests do `npm test`

## Project

### index

Point of entry of the program. Loads file as an argument processes it.

### inputParser

Checks if the inputs respect the rules and returns the respective arrays.

### engine

The core logic of the program.

### model

Contains the program's classes.

### utils

Utility functions.
