//工厂模式
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	}
	return o;
}
function createPerson(name, age, job){
	return {
		name:name,
		age:age,
		job:job,
		sayName:function(){
			alert(this.name);
		}
	}
}

//构造函数模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	}
	//每个对象的sayName都是不同的函数  解决办法：sayName用一个全局函数赋值
}

//String.startsWith
String.prototype.startsWith = function(text){
	return this.indexOf(text) == 0;
}

//原型模式
function Person(){}
Person.prototype = {
	constructor:Person,
	name:"default",
	age:0,
	job:"coder",
	friends:["jim","jack"],//所有实例共享这个属性，修改一个对所有实例生效，如果其他实例没有覆盖这个属性的话
	sayName:function(){
		alert(this.name);
	}
}

//组合使用构造函数模式和原型模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}
Person.prototype = {
	constructor:Person,
	sayName:function(){
		alert(this.name);
	}
}

//动态原型模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	if(typeof this.sayName != "function"){
		Person.prototype.sayName = function(){
			alert(this.name);
		}
	}//不能使用字面量来重写原型，否则会切断现有实例与新原型的联系
}