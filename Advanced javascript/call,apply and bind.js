//1

var obj
obj = {num:2};
var addToThis = function(a){
return this.num + a;
};
console.log(addToThis.call(obj, 3));


//2
var obj = {num:2};
var addToThis = function(a, b, c){
return this.num + a + b + c;
};
//console.log(addToThis.call(obj, 1, 2, 3));
//functionname.call(obj, functionargumentes);
var arr= [1,2,3];
console.log(addToThis.apply(obj, arr));


//3
var obj = {num:2};
var addToThis=function(a, b, c){
return this.num + a + b + c;
};
var arr = [1,2,3];
var bound = addToThis.bind(obj);
console.log(bound(1,2,3));

//4
var student={age:20};
var printAge=function(){
    console.log(this.age);
}

var newBound=printAge.bind(student);
newBound();
