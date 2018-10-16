
window.onload = function(){
	document.querySelector('.btnStart').onclick = function(){
		training();
	}
}
function mathOp(a,b,op){
	var res;

	if(op == '+'){
		res = a+b;
	}

	else if(op == '-'){
		res = a-b;
	}

	else if(op == '*'){
		res = a*b;
	}

	else if (op == '/'){
		res = a/b;
	}
	else{

	}

	return res;
}
function randomInt(min,max){
	var length = max-min+1;
	var rand = Math.floor(Math.random() * length) + min;
	return rand;
}

function training(){
var x,y,code,op,res,answer,answerStr,good =0,error =0, errors=[];
var variants = ['+','-','*','/'];

for(var i = 0; i<5; i++){
	x = randomInt(3,15);
	y = randomInt(3,15);
	code = randomInt(0,3);
	op = variants[code];
	res = mathOp(x,y,op);

	do{
		answerStr = prompt(x+' '+op+' '+y+'=?');
		answer = +answerStr;
	}
	while(answerStr == ' ' || isNaN(answer));
	if(res.toFixed(2) == answer.toFixed(2)){
		good++;
	}
		else{
		error++;
		errors.push(x + ' ' +op+ ' '+y+ ' = '+ res.toFixed(2) + ' , а не ' + answer);

	}

}
document.querySelector('.good').innerHTML = good;
document.querySelector('.bad').innerHTML = error;

var divErrors = document.querySelector('.errors');
divErrors.innerHTML = ' ';

for(var i = 0; i<errors.length; i++){
	divErrors.innerHTML += ('<p>'+ errors[i] + '<p>');

}
}