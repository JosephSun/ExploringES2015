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





function initializeES2015({controls = {}, models = {}, reducers = {}, actors = []}) {

}

function initializeES5 (options) {
  let controls = options.controls || {};
  let models = options.models || {};
  let reducers = options.reducers || {};
  let actors = options.actors || {};
}
