var num = 33721;
num1 = 3*3*7*2*1;
console.log(num1);
var num2 = Math.pow(num1, 3);
while(num2>99) {
	num2 = num2/10
};
num2 = Math.round(num2);
alert(num2)