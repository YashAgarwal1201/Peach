
// Some global declarations 

var infoVar = '<h2>How-to-Use</h2>\
		<li>Press <i class="material-icons-outlined">campaign</i> button to login and start this product\
		<li>For now only English language is supported\
		<li>Without Login you cannot use this product', // variable to store help/info about the product
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
					<p>Not a Registered User? <span onclick="displayInfo(userPrompt2)">Register here</span>.</p>\
					<p>Forgot Password? <span onclick="">Reset here</span>.</p>\
				</div>\
			</div>\
			<div class="action-btn">\
				<button type="submit" title="Click to send your feedback"><i class="material-icons">send</i></button>\
				<button type="reset" title="Click to reset this form"><i class="material-icons">delete</i></button>\
			</div>\
		</form>', // variable to store login form that has to be displayed on user prompt
	userPrompt2 = '<h2>User Prompt</h2>\
		<form type="POST" id="register-form-id" onsubmit="loginForm(event)">\
			<div class="fields">\
				<div class="c1">\
					<label for="Name">User Name</label><br>\
					<input type="text" name="Name" required title="Click to Enter your User Name" autocomplete="off">\
				</div>\
				<div class="c2">\
					<label for="E-mail">E-mail</label><br>\
					<input type="email" name="Email" required title="Click to Enter your User E-mail" autocomplete="off">\
				</div>\
				<div class="c3">\
					<label for="Dob">Date of Birth</label><br>\
					<input type="date" name="Dob" required title="Click to Enter your Birth Date" autocomplete="off">\
				</div>\
				<div class="c4">\
					<label for="Password">Password</label><br>\
					<input type="password" name="Password" id="p1" required title="Click to Enter your Password" autocomplete="off">\
				</div>\
				<div class="c5">\
					<label for="Password2">Confirm Password</label><br>\
					<input type="password" name="Password2" id="p2" required title="Click to Re-Enter your Password" autocomplete="off"><br>\
					<span id="a1"></span>\
				</div>\
				<div class="c6">\
					<p>Already have an account? <span onclick="displayInfo(userPrompt)">Login here</span>.</p>\
				</div>\
			</div>\
			<div class="action">\
				<button type="submit" title="Click to send your feedback"><i class="material-icons">send</i></button>\
				<button type="reset" title="Click to reset this form"><i class="material-icons">delete</i></button>\
			</div>\
		</form>'	// variable to store register form that has to be displayed on user prompt

const typeit = new TypeIt('#message-id', {
	strings: ['Hello there!', 'Want to know about me ?<br>Check this cool animation',
		'What\'s my name?', 'My name is Yash Agarwal', 'When was I born?', '12th of January, 2000', 
		'About my Graduation ?', 'Well I started my graduation at DIT University in year 2018.<br> \
		I started my Bachelor of Technology program in Civil Engineering but before the start of Year 2, I realised my \
		passion and interest for technology and then I switched to Computer Science & Engineering.', 
		'...During my graduation... to be continued'],
	speed: 150,
	deleteSpeed: 100,
	lifeLike: true,
	cursor: true,
	cursorSpeed: 1000,
	breakLines: true,
	startDelay: 250,
	loop: false,
	waitUntilVisible: true,
	nextStringDelay: 250,
	loopDelay: 100,
})	// typeit api variable

// function to display content on results section
function displayInfo(arg) {
	$('#results-id').slideDown()	
	$('#user-form-id').html(arg)	
}

// function to handle login form details
function loginForm (arg) {
	arg.preventDefault() // prevent default submit behaviour of form
	$.ajax({
		url: 'ajaxHandler.php',
		type: 'POST',
		dataType: 'json',
		data: { fData: $(arg.target).serialize() },
		success: (argument) => {
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
			let msg = '<p>Identity Not Verified</p>\
				<p>Not a Registered User? <span onclick="displayInfo(userPrompt2)">Register here</span>.</p>\
				<p>Try again to login? <span onclick="displayInfo(userPrompt)">Login here</span>.</p>'
			$(arg.target).append(msg)
			console.log(argument.responseText)
		}
	})
}
function registerForm(arg) {
	arg.preventDefault() // prevent default submit behaviour of form

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
	$('#p2').keyup(function () { // to check passwords' match in register form
		var val1 = $('#p2').val();
		var val2 = $('#p1').val();
		if (val1 !== '') 
		{
			if (val2 !== val1) 
				$('#a1').text('Not Matching');
			else
				$('#a1').text('');	
		}
		else
			$('#a1').text('');
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