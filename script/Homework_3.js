function squareNumber(num) {
	var squaredNumber = num * num;
	console.log('The result of squaring' + " " + num + " "+ 'is' + " " + squaredNumber);
	return squaredNumber
}

squareNumber(4)

function halfNumber(num){
	var halfedNumber= num/2;
	console.log('Half of'+ " " + num + " " + 'is' + " " + halfedNumber)
	return halfedNumber
}

halfNumber(4)

function percentOf(num1, num2){
	var percentOf = num1/num2 *100
	console.log(num1 + " " + 'is' + " " + percentOf+ '%'+ " " + 'of' + " "+ num2)
	return percentOf
}

percentOf(2, 4)
percentOf(1, 5)

function areaofCircle(num){
	var area = num*num*Math.PI
	console.log('The area for a circle with radius' + " " + num + " " + 'is' + " " + area)
	return area
}


areaofCircle(4)


function MathOperation(num){
	var halfedNumber = halfNumber(num);
	var squaredNumber = squareNumber(halfedNumber);
	var area = areaofCircle(squaredNumber);
	var result = percentOf(squaredNumber, area);
	
}

MathOperation(4)
MathOperation(60)