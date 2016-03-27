// Ignore the types of variable declarations under sectiosn of ES5. My linter is making me do frustrating workarounds.


// ES2015
let obj = {
  first: 'jane',
  last: 'Doe'};

let {first: f, last: l} = obj;
// f = 'jane'; l = 'Doe'

// ES5 examples
let obj2 = {
  first: 'jane',
   last: 'Doe'
 };
 f = obj2.first;
 l = obj.last;

// ES2015
// {prop} is short for {prop: prop}
let {first, last} = obj;
  // first = 'Jane', last = 'Doe'

// ES5
const f2 = obj2.first;
const l2 = obj.last;


// ES 2015
const iterable = ['a', 'b'];
let [x, y] = iterable;
// ES5
x = iterable[0];
y = iterable[1];



function initializeES2015({controls = {}, models = {}, reducers = {}, actors = []}) {

}

function initializeES5 (options) {
  let controls = options.controls || {};
  let models = options.models || {};
  let reducers = options.reducers || {};
  let actors = options.actors || {};
}


/*
Destructuring in ECMAScript 6 enables the same syntax for extracting data, where it is called an object pattern:

const { first: f, last: l } = obj;
Just as the object literal lets us create multiple properties at the same time, the object pattern lets us extract multiple properties at the same time.

You can also destructure Arrays via patterns:

const [x, y] = ['a', 'b']; // x = 'a'; y = 'b'

*/
