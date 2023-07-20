function getFormvalue() {
    //Write your code here
	const firstName = document.getElementByTagName("input")[0].value
	const lastName = document.getElementByTagName("input")[1].value

	alert(`${firstName} ${lastName}`)
}

document.getElementById("form1").addEventListner("submit", function(event){
	event.preventDefault();
	getFormvalue();
})