<?php 

$jsonFileName = 'userData2.json';
$jsonFileData = stripslashes(html_entity_decode(file_get_contents($jsonFileName))); // get the json file content
$jsonData = json_decode($jsonFileData, true); // decode the string format json file data in associative array format

// function to check user's identity
function check_user_identity($u_name, $u_password) {
	GLOBAL $jsonData;
	if (strtolower(gettype($jsonData)) == 'array') {
		if (in_array($u_name, array_keys($jsonData['allUsersDetails']))) {
			foreach ($jsonData['allUsersDetails'] as $key => $value) {
				foreach ($value as $key2 => $value2) {
					if ($u_password == $value2) {
						$i_result = true; // index 0
						$mainProfile = $jsonData['allUsersDetails'][$key]; // index 1
						return array($i_result, $mainProfile);
						//return array('i_result' => true, 'mainProfile' => $jsonData['allUsersDetails'][$key]);
					}
				}
			}
		}
		/*else {
			$newUser = array()
			array_push($jsonData['allUsersDetails'], $newUser);
		}*/
	}
}

function add_new_user($u_name, $u_password, $u_dob, $u_mname, $u_email) { // add new main user
	GLOBAL $jsonData, $jsonFileName;
	if (strtolower(gettype($jsonData)) == 'array') {
		if(!in_array($u_name, array_keys($jsonData['allUsersDetails']))) {
			/*$userObj = {
				"masterPassword": $u_password,
				"primaryUser": {
					"userName" : $u_name,
					"password" : $u_password,
					"name" : $u_mname,
					"isPrimary" : true,
					"userDetails" : {
						"age" : 22,
						"email" : $u_email
					}
				}
			};*/
			$newUser = array( 
				"masterPassword"=> $u_password,
				"primaryUser"=> array (
					"userName" => $u_name,
					"password" => $u_password,
					"name" => $u_mname,
					"isPrimary" => true,
					"userDetails" => array(
						"age" => 22,
						"email" => $u_email
					)
				),
				"user2" => array(
					"userName" => "",
					"password" => "",
					"name" => "", 
					"isPrimary" => false,
					"userDetails" => array( 
						"age" => null,
						"profileType" => "kids"
					)
				)
			);
			//$newUser = array($u_name => $userObj);
			//array_push($jsonData['allUsersDetails'][$u_name], $newUser);
			$jsonData['allUsersDetails'][$u_name] = $newUser;
			$jsonData2 = json_encode($jsonData);

			$fp = fopen( $jsonFileName, "w+");
			fwrite($fp, $jsonData2);
			fclose($fp);
			return true;
		}
	}
}

//check_user_identity('@main_userYash','@main_userYash');
/*
//echo $jsonFileData;

$jsonFileName = 'userData2.json';
$jsonFileData = file_get_contents($jsonFileName); // get the json file content
$jsonData = json_decode($jsonFileData, true); // decode the string format json file data in associative array format

if (strtolower(gettype($jsonData)) == "array" ) {
	passwordVerify($user_name, $input_password, $has_forgot);
}
$jsonData = json_decode($jsonFileData, true); // decode the string format json file data in associative array format

// if datatype of $jsonData is array then only do anything ahead
if (strtolower(gettype($jsonData)) == "array" ) {
	print_r($jsonData);
	$jsonData['allUsersDetails']["user2"] = array("name"=>"V", "isPrimary"=> False);
	print_r($jsonData);
	$jsonData2 = json_encode($jsonData);

	$fp = fopen($jsonFileName, "w+");
	fwrite($fp, $jsonData2);
	fclose($fp);
}*/

?>