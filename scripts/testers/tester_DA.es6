import * as DA from '../modules/DA.es6';
import * as PD from '../modules/PD.es6';


var word = new PD.Word('ss', 2);
var str = JSON.stringify(word);
console.log(str)
var wordTree = new PD.WordTree();
wordTree.importDB([word]);
console.log(wordTree);
