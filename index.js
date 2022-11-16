
// Some global declarations 

var infoVar = '<h2>How-to-Use</h2>\
		<li>Press <i class="material-icons-outlined">campaign</i> button to login and start this Blueberry bot\
		<li>Press <i class="material-icons-outlined">mic</i> button to start speech recording\
		<li>Press <i class="material-icons-outlined">stop</i> button to stop recording speech\
		<li>For now only English language is supported\
		<li>Without Login you cannot use this bot', // variable to store help/info about the product
	userLogin = null,	// variable to store whether the user is logged in or not
	userPrompt = '<h2>User Prompt</h2>\
		<form type="POST" id="login-form-id" onsubmit="loginForm(event)">\
			<div class="fields">\
				<div class="c1">\
					<label>User Name</label><br>\
					<input type="text" name="Name" title="Click to Enter your User Name" autocomplete="off">\
				</div>\
				<div class="c2">\
					<label>Password</label><br>\
					<input type="password" name="Password" title="Click to Enter your Password" autocomplete="off">\
				</div>\
				<div class="c3">\
					<p>Not a Registered User? <a href="#">Register here</a>.</p>\
					<p>Forgot Password? <a href="#">Reset here</a>.</p>\
				</div>\
			</div>\
			<div class="action-btn">\
				<button type="submit" title="Click to send your feedback"><i class="material-icons">send</i></button>\
				<button type="reset" title="Click to reset this form"><i class="material-icons">delete</i></button>\
			</div>\
		</form>' // variable to store login and register form that has to be displayed on user prompt

// function to display content on results section
function displayInfo(arg) {
	$('#results-id').slideDown()	
	$('#user-form-id').html(arg)	
}

// function to handle login form details
function loginForm (arg) {
	arg.preventDefault()
	$.ajax({
		url: 'ajaxHandler.php',
		type: 'POST',
		dataType: 'json',
		data: { fData: $(arg.target).serialize() },
		success: function (argument) {
			userLogin = true
			console.log(argument)
			if (argument) {
				userPrompt = '<h2>User Prompt</h2>\
					<p>You are a logged in User. Choose your Profile</p>' + argument.profiles	
				$(arg.target)[0].reset()
				displayInfo(userPrompt)
			}
		},
		error: (argument) => {
			userLogin = false
			$(arg.target).append('<p>Not Verified</p>')
			console.log(argument.responseText)
		}
	})
}

// main function
function mainFunction() {
	$('#command-btns-id button').click(function (event) {
		$('#results-id').hide();
		if (event.target.matches('#speak-btn, #speak-btn i')) {
			displayInfo(userPrompt)
		}
		else if (event.target.matches('#info-btn, #info-btn i')) {
			displayInfo(infoVar)
		}
		else {

		}
	})
}

// after the document is ready mainFunction() will be called
$(document).ready(function () {
	mainFunction()
})


/*
function Component() {
			return (
				<>
					<p>Hello</p>
				</>
			)
		}

		const root = ReactDOM.createRoot(document.getElementById('body-id'))
		root.render(<Component/>)*/