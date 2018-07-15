This document describes how we will make sure our code is readable, reuseble, and uniform.
It will also explain the use of es6 concepts

**Table of Contents**
<!-- TOC -->

- [code style](#code-style)
  - [general](#general)
  - [react](#react)
  - [node](#node)
  - [scss](#scss)
- [Git Rules](#git-rules)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
  - [issues](#issues)
  - [Don't](#dont)
- [es6 => beyond](#es6--beyond)
  - [Variables](#variables)
    - [let](#let)
    - [const](#const)
  - [object destructuring](#object-destructuring)
    - [Getting all values from an object](#getting-all-values-from-an-object)
    - [Getting specific values from an object](#getting-specific-values-from-an-object)
  - [Arrow functions](#arrow-functions)
    - [basics](#basics)
    - [Lexical scope and closures](#lexical-scope-and-closures)
    - [Single line Implied return Arrow Functions](#single-line-implied-return-arrow-functions)
    - [multi-line implied return arrow functions](#multi-line-implied-return-arrow-functions)
    - [when are arrow function returns non-implicit?](#when-are-arrow-function-returns-non-implicit)
  - [ternary expressions](#ternary-expressions)
    - [How they work](#how-they-work)
    - [How to not get in trouble](#how-to-not-get-in-trouble)
  - [Default and Rest parameters](#default-and-rest-parameters)
    - [Default parameters](#default-parameters)
    - [Rest operator](#rest-operator)

<!-- /TOC -->
# code style
**use eslint**

## general
- always prefer es6, when applicable.
- use arrow functions unless react lifecycle method.
- use single quoted strings, unless inside of JSX tags*
- use template literal strings over string addition
- max line length of 80 characters, preferably less than 72
- spaces between single line curly braces, ie `{ name: david }`
- variable names must be `camelCase`
- class names must be `TitleCase`
- private methods and variables on classes (methods/variables that should only be used by the object instantiated from the class itself) should start with an underscore `_methodName`
- use += and -= instead of ++ or --
- production app should not contain any console.log statements
- use if/else instead of switch statements.
- strongly prefer css animations

## react
- use es6 import/export syntax
- single line tags must have a space at the end, ie `<Component />`
- use propTypes
- use lifecycle methods to prevent unnecessary rerendering of components.
- don't forceUpdate components
- any component connected to the redux store should have a `shouldComponentUpdate` method.
- all iterable children components must have a unique key prop
- stateless components that don't require lifecycle methods should be written as functions
- any component with an interval or independent continuos element on it should have a `componentWillUnmount` method to remove it and prevent memory leaks
- all inputs should be controlled
- avoid importing entire libraries where only specific modules are required
- JSX tags should be properly indented, as well as their props*
- all components should be separated into separate files
- all stateful components go into /containers
- all functional components go into /presentational
- do not use alerts, confirms, or prompts.
- avoid styling in components
- redux action types should be all caps and _ separated ie `FETCH_FILE_SUCCESS`

## node
- use require, es6 import/export not yet supported
- separate logic into modules as much as possible
- keep entry express file as dry as possible
- keep all business logic and scripts separate from mvc structure.
- controllers should contain as little logic as possible
- use an index.js file to export directory contents where applicable

## scss
- class names and ids are - separated, ie `page-wrapper`
- use rem units, vh, vw, and percents whenever possible
- use css grid and flexbox for layout
- design mobile first
- stick to agreed upon color scheme
- use ids for unique selectors, the lookup is much faster
- use scss partials for component specific styles

```javascript
// *
render() {
  return (
    <div
      style={{height: "17rem"}}
      onClick={this.click}
    > 
      <p>
        hello
      </p>
    </div>
  )
}
```
# Git Rules

## Commits

Please Commit frequently, It helps uss track down bugs and resolve merge requests if something goes wrong. If you can, I would recommend committing and pushing to your branch every time you add a small piece to your code. Try to resolve breaking errors before you commit, so we can track down where they came from. Your commit message should be specific to what you added, no matter how small. If you accidentally stage a commit and then realize you are on the wrong branch, you can run git stash to get rid of it. If you accidentally commit to master, avoid from doing anything else, switch to the correct branch, and notify me so i can revert. No harm no foul.

## Pull Requests

Submit pull requests in feature related increments. The pull request can be as small as you would like it to be, but please refrain from making pull requests that encompass large amounts of code that is spread across the project. Each pull request should have a short descriptive message that outlines the changes made. Nobody should be merging their own pull requests unless making changes to their own document materials.

## issues

If you notice a bug that you are not confident in your ability to fix immediately, Feel free to submit an issue on github that contains specific relevant information regarding. Please comment on the issue you plan on fixing and submit a pull request dedicated only to the fix.

## Don't

- push to master.
- push to master.
- work on branches you don't own without communicating.
- merge your own pull requests (unless docs)
- push to master
- not ask for help if you need it.
- write commit and pull request messages that make no sense.
- design entire features in one commit.
- psh 2 mstr.
- not inform your team of what you're doing, especially when starting a new feature.
- work on features that belong to other team members without communicating intention.
- presionar para dominar (~push to master~)
- merge other's pull requests without actually reviewing them.
- make jokes about how many times i reiterated the need not to push to master.

As long as we communicate the amount of issues we may run into regarding version control should be limited.

# es6 => beyond

All es6 paradigms are preferred over their older counterparts.

## Variables

Use let and const instead of var in all situations.

### let

**let and const declarations do not hoist, ie they do not exist period until the line they are declared on is read**

Use let in situations where the variable may be reassigned, where the variable will be initialized with no value, and generally where you are unsure.
Let declarations are the same as var, except they respect block scoping.
This means that if they are declared in if, for, while, try, catch, or function blocks, their scope is limited to those blocks and any nested blocks that come after the 'let' variable's declaration;

```javascript
// let
// variable is declared without an initial value, so cannot be declared using const
let counter;
let counter = 0;

while (counter < 20) {
  // variable is reassigned, so cannot be declared using const
  console.log('counter: ' counter);
  counter += 1;
}

let obj = {};
obj.color = 'green';
obj.size = [11, 44];
// at this point the object could have been declared using const.
obj = {};
// but now we are emptying the object by reassigning it as an empty object, so it must be declared using let.
// this also applies to arrays and any other mutable object

let str = 'im outside the block'
if (true) {
  let str = 'hello';
  if (true) {
    let str = 'goodbye';
    console.log(str);
    // this will log out goodbye
    // this is confusing though, don't write code like this
  }
  console.log(str);
  // this will log out hello
}
console.log(str);
// this will log out 'im outside the block
// Note: don't write code like this, it's confusing.
```

### const

**const(constant) cannot be reassigned, although mutable objects can be changed**

use **const:**
- whenever a variable will be defined during declaration and will **not** be reassigned
- whenever a variable will be an object or array that may be mutated, but **not** reassigned
- wherever possible following the preceding rules to help prevent bugs.

**mutability** is the ability for an object to be changed(mutated) in place.
 For instance, arrays and objects in js are mutable.
 even if declared with **const**, you can still add/remove/change properties/elements in an object or array;
  However, you can not reassign the variable pointing to the object reference to something else. 

 `const obj = {}; obj = [];` => will throw an error.
 
 `const obj;` => will throw an error (must be initialized with a value).

 `const obj = {}; obj.name = 'david';` =>  is fine

 `const obj = []; obj.push('david');` =>  is fine

 **const** follows the same scoping rules as let.

## object destructuring
Object destructuring is the best way to pull multiple key-value pairs out of objects or arrays in javascript;

### Getting all values from an object

lets say you have js objects that looks like this:
```javascript
const david = {
  name: 'david',
  profession: 'programming guru',
  spiritAnimal: 'golangMascot',
}

const hacker  = {
  girlFriend: null,
  physicalFitness: 0,
  worldView: 'pseudoAnarchist',
}
```
now lets say that you wanted to combine these objects into a new object containing all key-value pairs of both previous objects.
we will use the **...** operator in this case.
```javascript
const hackerDavid = { ...david, ...hacker };
console.log(hackerDavid);
/* output:
{
  name: 'david',
  profession: 'programming guru',
  spiritAnimal: 'golangMascot',
  girlFriend: null,
  physicalFitness: 0,
  worldView: 'pseudoAnarchist',
}
*/
```
It works by basically dumping all keys and values into whatever scope the operator is used in. In the example I used it to create an object, but it does more or less the same thing anywhere else. 
```javascript
// we will use the previous objects to save time.
...david
console.log(name);
// will output david

const copyDavid = {...david};
/* what this actually does is:

let david = 'david'
let profession = 'programming guru'
let spiritAnimal = 'golangMascot'

const copyDavid = {
  david,
  profession,
  spiritAnimal,
}
```
One thing to note is that using **...** is a good way to make a real copy of an object. if you were to simply type `const copyDavid = david`,  you are actually just copying the reference to that object. when you use destructuring, you are telling the program, 'hey man, copy all of the keys and values of this object into a new object named copyDavid'. It is important to make the distinction or else you may introduce sneaky bugs into your code.

Destructuring in this way can also be used with arrays: 
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8,];
const combined = [...arr1, ...arr2];
console.log(combined);
// will log an array with numbers 1-8
```

You can use destructuring and override values that come out of the destructured object in the same statement.
```javascript
// remember good old david?
const copyCopyDavid = { ...david, spiritAnimal: 'platypus' }
console.log(copyCopydavid);
/*
{
  name: 'david',
  profession: 'programming guru',
  spiritAnimal: 'platypus',
}
IN ORDER FOR THIS TO WORK, THE DESTRUCTURED OBJECT MUST COME FIRST
*/
```

This can also be done inside function parameters, and where you would traditionally put your props in the children of a react component 
```javascript
function foo(arg1, arg2, arg3) {
  return null;
}
const obj = {
  hello: 'hello',
  goodbye: 'goodbye',
}
//sice obj has two properties and foo takes three we can do this:
foo(...obj, 'im the third arg!')
// or this:
foo('im the first arg!', ...obj);
```
```javascript
// ...some other code goes here
render(){
  const props = {
    style: {{color: green}},
    clickHandler: () => console.log('clicked');,
    }
  return(
    <div>
      <MyComponent { ...props } />
    </div>
  )
}

// doing it this way is the same as style={val} clickHandler={val}
// and so on
```

### Getting specific values from an object

You can pull specific named properties out of an object using destructuring as well. The syntax is as follows:
```javascript
const obj = {
  name: 'david',
  profession: 'programmer',
  hobby: 'drink',
};

const { name, hobby } = obj;

console.log(name);
// david
console.log(hobby);
// drink
```
Theres not much to this one, but a few notes:
- this only works on one level of an object, you cant access nested objects in this manner.
- this is very useful in react for pulling values out of props and state.

This syntax can also be used as function parameters:
```javascript
const obj = {
  name: 'david',
  profession: 'programmer',
  hobby: 'drink',
};

function bar({ name, profession }) {
  // you can put any object with the keys above into this function
  return `${name}, the ${programmer}`;
}

console.log(bar(obj));
// output: david, the programmer
```

## Arrow functions

### basics

Arrow functions are identical to normal function besides syntax and scoping.
```javascript
function normalFunc (str) {
  return str;
}

const arrowFunc = (str) => {
  return str;
}

// these functions do the same exact thing
console.log(normalFunc('hello'));
console.log(arrowFunc('hello'));
```
Arrow functions can be written in a couple different ways, some not requiring the use of a return statement to return values. Non anonymous arrow functions must be declared like variables as seen above. Note that this means they do not hoist like normal functions do. Arrow functions that are class or object methods do hoist like normal methods, but retain their parent object's scope no matter where they are called.

### Lexical scope and closures

When we talk about lexical scope pertaining to arrow functions, we're mostly just talking about where the function was defined. This is different than normal js functions, as their scope refers to where they are called (unless they are bound to something else using.bind).

**Closures** in simple terms are functions that return functions for the purpose of the returned function being able to access a specific (sometimes private) scope.
```javascript
const david = 'david';

const foo = () => {
  const cat = 'cat';
  
  return bar = () => {
    console.log(david);
    console.log(cat);
  }
}

function baz() {
  return function biz() {
    foo()()
  }
}

const fizz = () => {
  return buzz = () => {
    foo()()
  }
}

foo()();
//this will work
baz()();
//this will throw an error
fizz()();
//this will work

/*
the closure foo => bar works because:
scope for foo: global
scope for bar: foo: global

foo and bar's scope will always be global in this manner
baz and biz, however will not.

biz will only look to baz's functional scope, will not find foo, and throw an error

therefore closure bar's scope is also global, whilst also being able to access variables defined in foo;

that all being said, the this keyword in all cases refers to the scope that a function has access to in the same manner.

side note: window and global are more or less the same thing, global is just the node version.

side side note: functions that return a function in situations where the second function is immediately called ie: ()() are called thunks.
In this case foo/bar are a closure, with cat being the variable specific to bar's scope. it and foo are the only functions with access to that variable.
*/
```
I realize this example is a little convoluted, so please discuss this with me if it makes no sense. I know you were interested in closures Anna, we can talk about it.

Arrow functions are especially useful in react since they can be passed to any component and still have access to the scope of the component where they originated. This is how we make changes in the state of a container component triggered by events that occur in a child component.

### Single line Implied return Arrow Functions

Arrow functions can be used in single line statements that return a single value. This is done by omitting the curly braces from the body of the function.

`const arrow = (num1, num2) => num1 + num2;`

The preceding statement will return num1 + num2 with no return statement required. My favorite use case for this is in conjunction with the array iteration methods .map and .filter.
```javascript
const array = [...someStrings];

//parentheses around parameters is not required for single line implicit retern arrows

const addCat = array.map(str => str + 'cat');
// addCat is now array with each element concatinated with the word 'cat'

const noG = array.map(str => !(str.includes('g') || str.includes('G')));
//noG is now array sans any string containing 'g' or 'G'
```

### multi-line implied return arrow functions

Implied return arrow functions can be used over multiple lines as well to increase readability, but can only execute one statement. This is the ideal way to write stateless react components when possible. It is convention to use parentheses to surround arrow function parameters if the arrow function spans more than one line, or if the arrow function has more than one parameter.
```javascript
const helloComponent = (props) => (
  <div id={props.divId}>
    <p id={props.pId}>
      {props.message}
    </p>
  </div>
)
```

### when are arrow function returns non-implicit?
As seen before, the return statement is unneccisary in these types of arrow functions. The return statement is required in normal arrow functions, ie those that have curly braces around their body.
```javascript

const implicit = () => (
  'hi there'
)

// is the same as...

const explicit = () => {
  return 'hi there'
}

//return statment required in curly brace block
```

Use implicit return arrow functions where more than one statement is not necessary:
- promise based statements, .then counts as part of the original statement.
- map functions that return JSX or only require one statement.
- functions that return ternary statements.

Use explicit return arrow functions where more than one statement is necessary.

## ternary expressions

### How they work
Ternary expressions are those that implicitly return a variable or reference based on the evaluation of a boolean expression.
Ternary expressions in javascript make use of the ? symbol, with return values separated by a colon.

`const canMath = 1 === 1 ? 'you can math' : 'despair';`

This statement assigns the string `'you can math'` to the variable `canMath` because the expression preceding the question mark was evaluated as true. This statement is in some ways equivalent to the snippet below.

```javascript
let canMath;
if (1 === 1) { canMath = 'you can math'; }
else { canMath = 'despair'; }

// as you can see, there are obvious advantages to using the ternary expression in this case
// using this syntax it would be impossible to assign canMath as a constant.
// using the shortened if/else statements like this will not allow you to declare variables.
// this syntax has it's purpose, but for simple cases like this the ternary is superior.
```
The ternary expression will always return the value to the left of the colon if true, and the right if false. Ternary expressions are the ideal way to conditionally render react components in 'simple' cases.
```javascript
render() {
  return (
    {
      booleanVariable ? 
        <p>booleanVariable is true</p>
        :
        <p>booleanVariable is false</p>
    }
  )
}
```
### How to not get in trouble
This works well, but if the logic behind the conditional rendering of the components is more complex, needs to evaluate more than one expression (if/if else/esle/switch/etc...), then you should move this logic into a method that will return the desired component instead. Generally speaking, nested ternary statements work, but should not be used because they become very hard to read.
```javascript
// don't do this
const bool1 = true;
const bool2 = false;
const bool3 = false;

const whatEvenIsThis = bool1 : (bool2 ? 'huh?' : (bool3 ? 'idek' : 'ugh...')) : '=('

// use if else statements, or if else statements combined with ternaries for this kind of thing.

// i'd advise against doing these as well:

// this doesn't read well:

const num = if (false) 5 else if (false) 7 else 6;

// neither does this:

const num = if (true) 5 > 4 ? 5 : 4 else 'i give up';


// in the face of complicated boolean logic, don't be afraid to use normal if else statments.
```
As you've likely noticed above, we can now use implicit return if else statements! While this is cool, it tends to make longer lines than ternary statements do. 
The ideal use cases for these i've found are usually function and constructor calls.

`if (err) throw error`

The above does not work within a ternary, so this is ideal. 

`if (true) callFunction() else callOtherFunction()`

There is nothing alarmingly wrong with this one, but look what we can do with ternaries!

`(true ? callFunction : callOtherFunction)()`

The parentheses at the end are necessary, as it would immediately invoke the functions if they were inside of the ternary, and if they were absent the ternary would only return a reference to the function. (note that returning the reference may be useful in some cases).
Im not sure which is considered to be good practice so I would implore you to use the ternary version for the project if you need to just to keep things consistent. DO, however, use the if (err) syntax for calling constructors and throwing errors, as that will not work withing the ternary. Unless..

`cons obj = new (bool ? Class1 : Class2)()`

But i would avoid that as it may lead someone to believe the conditional statement is a constructor, and it would be impossible to pass different arguments conditionally to the constructors. You should probably do this:

`const obj = if(bool) new Class1(args1) else new Class2(args2)`

...or just use normal if/else blocks. that's usually ok UNLESS you are making the statement within an implicit return function/return, ie in implicit return arrow functions or an implicit return statement.

## Default and Rest parameters

### Default parameters
You can declare defualt function parameters now

`const func = (param = 'defaultParam') => ...`

The parameter 'param' will be the string 'defaultParam' if the function is called and the argument for param is not provided.

### Rest operator

The rest operator is essentially the same as the spead parameter, except it refers to an undetermined amount of arguments that may be passed into a function.

`const func = (param, ...otherParams) => ...`

otherParams will be an array of all arguments coming after the firs argument.

`const func = (param, ...otherParams) => console.log(otherParams[1])`