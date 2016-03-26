//ES2015
const obj = {first: 'jane', last: 'Doe'};
let {first: f, last: l} = obj;
// f = 'jane'; l = 'Doe'

// ES5 examples
var obj2 = {
  first: 'jane',
   last: 'Doe'
 };
let f = obj2.first;
let l = obj.last;

// ES2015
//{prop} is short for {prop: prop}
let {first, last} = obj;
  //first = 'Jane', last = 'Doe'

// ES5
const f2 = obj2.first;
const l2 = obj.last;





function initializeES2015({controls = {}, models = {}, reducers = {}, actors = []}) {

}

function initializeES5 (options) {
  var controls = options.controls || {};
  var models = options.models || {};
  var reducers = options.reducers || {};
  var actors = options.actors || {};
}
