//DOM document ->html file deerh buh code 
/*console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// .innerText = "text bichne"; --> tag dotorh text uurchilnu
h1.innerText = " Sain uu";
// .style.stylename = " style utga" --> tag-d style uguh
h1.style.color="red";
var h2 = document.getElementsByTagName('h2')[0];
console.log(h2);
h2.innerText = "i need a car";
h2.style.color="cyan";
h2.style.backgroundColor="grey";*/
var inputAge= document.getElementsByTagName('input')[0];
console.log(inputAge);
var result = document.getElementsByTagName('p')[0];
console.log(result);
var currentYear=2023;
birthYear;
function convert(){
	if(inputAge.value>110){
		result.style.color="red";
		result.innerText="imposible";
	}
	else if (inputAge.value<0){
		result.style.color="red";
		result.innerText="imposible";
	}
	else if(inputAge.value==""){
		alert("check again");
	}
	else{
		birthYear= currentYear - inputAge.value
		result.innerText="төрсөн он: "+birthYear;
	}
}