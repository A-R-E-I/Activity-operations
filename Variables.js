window.addEventListener("load",addListener);
var firstname, lastname, fullname;
function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",fullname);
}

function fullname()
{
	firstname = document.getElementById("txtfirstname").value;
	lastname = document.getElementById("txtlastname").value;
	if (firstname == "" || lastname == "")
	{
		alert("Either the first name and/or last name is missing!");
		Checkfocus();
	}
	else
	{
		fullname = firstname + " " + lastname;
		document.getElementById("lblmessage").textContent = "Hello " + fullname;
	}
}

function CheckFocus()
{
	if (firstname == "")
	{
		document.getElementById("txtfirstname").focus();
	}
	else
	{
		document.getElementById("txtlastname").focus();
	}
}