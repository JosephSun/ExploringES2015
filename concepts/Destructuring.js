//ES2015
const obj = {first: 'jane', last: 'Doe'};
const {first: f, last: l} = obj;
// f = 'jane'; l = 'Doe'

//{prop} is short for {prop: prop}
const {first, last} = obj;
  //first = 'Jane', last = 'Doe'





function initializeES2015({controls = {}, models = {}, reducers = {}, actors = []}) {

}

function initializeES5 (options) {
  var controls = options.controls || {};
  var models = options.models || {};
  var reducers = options.reducers || {};
  var actors = options.actors || {};
}
