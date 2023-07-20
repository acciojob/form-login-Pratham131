function getFormvalue() {
    //Write your code here
	const firstName = document.getElementByTagName("input")[0]
	const lastName = document.getElementByTagName("input")[1]

	alert(`${firstName} ${lastName}`)
}

document.getElementById("form1").addEventListner("submit", function(event){
	event.preventDefault();
	getFormvalue();
})