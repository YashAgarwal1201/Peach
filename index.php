<?php 

//session_start();

/*if ($_SESSION['userName'] == 'alpha') {
	// code...
	echo "current User";
}*/

?>

<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Peach</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
	<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>

<body id="body-id">
	<h1 title="Speech Recognition mini project">Peach</h1>

	<div class="speech-class" id="speech-id">
		<section id="output-id"></section>
		<section class="message" id="message-id"></section>
		<section class="command-btns" id="command-btns-id">
			<button id="start-btn" onclick="" title="click to start speech recognition">
				<i class="material-icons-outlined">mic</i>
			</button>
			<button id="stop-btn" onclick="" title="click to stop speech recognition">
				<i class="material-icons-outlined">stop</i>
			</button>
			<button id='speak-btn'><i class="material-icons-outlined">campaign</i></button>
			<button id='info-btn' title="click to view 'how to use' info"><i class="material-icons-outlined">info</i></button>
		</section>
	</div>
	<div class="results" id="results-id">
		<button onclick="$('#results-id').hide()"><i class="material-icons-outlined">close</i></button>
		<section class="user-form" id="user-form-id"></section>
	</div>
	<?php
//print_r($_SESSION);
?>
</body>
<script src="index.js"></script>
</html>
