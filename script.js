function getFormvalue() {
    //Write your code here
	let form = document.getElementById("form1")
	
	const firstName = form.fname.value
	const lastName = form.lname.value
	alert(`${firstName} ${lastName}`)
}

// document.getElementById("form1").addEventListner("submit", function(event){
// 	event.preventDefault();
// 	getFormvalue();
// })  