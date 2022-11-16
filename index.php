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
	<!--script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script-->
	<link rel="stylesheet" type="text/css" href="index.css">
	<script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
</head>

<body id="body-id">
	<h1 style="text-align: center;">Peach</h1>
	<div class="landing-class1" id="landing-id2">
		<section class="message" id="message-id"></section>
		<section class="command-btns" id="command-btns-id">
			<button id='speak-btn'><i class="material-icons-outlined">campaign</i></button>
			<button id='info-btn' title="click to view 'how to use' info"><i class="material-icons-outlined">info</i></button>
		</section>
	</div>
	<div class="results" id="results-id">
		<button onclick="$('#results-id').hide()"><i class="material-icons-outlined">close</i></button>
		<section class="user-form" id="user-form-id"></section>
	</div>
	<div class="landing-class2" id="landing-id2">
		<p class="a2a_kit a2a_kit_size_32 a2a_default_style">
			<!--a class="a2a_dd" href="https://www.addtoany.com/share"></a-->
			<a class="a2a_button_email" title="Click to share through E-mail"></a>
			<a class="a2a_button_whatsapp" title="Click to share through WhatsApp"></a>
			<a class="a2a_button_linkedin" title="Click to share through LinkedIn"></a>
			<a class="a2a_button_telegram" title="Click to share through Telegram"></a>
			<a class="a2a_button_google_gmail" title="Click to share through GMail"></a>
			<a class="a2a_button_reddit" title="Click to share through Reddit"></a>
		</p>
	</div>
<?php
//print_r($_SESSION);
?>
</body>
<script src="index.js"></script>
<script async src="https://static.addtoany.com/menu/page.js"></script>
</html>
