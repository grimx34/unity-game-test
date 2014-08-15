#pragma strict

var players = new GameObject[2];
var cameraBuffer : Vector2;

function Start () {
	players = GameObject.FindGameObjectsWithTag("Player");
}

function Update () { 
	var player1 = players[0];
	var player2 = players[1];
	transform.position.x = (player1.transform.position.x + player2.transform.position.x)/2;
	transform.position.y = (player1.transform.position.y + player2.transform.position.y)/2;
	
	var dx = player1.transform.position.x - player2.transform.position.x;
	var dy = player1.transform.position.y - player2.transform.position.y;
	
	var positiveDX = Mathf.Sqrt(dx*dx);
	var positiveDY = Mathf.Sqrt(dy*dy);
	
	camera.orthographicSize = (positiveDX/3.5) + 0.5+ 3.5;
	
	if (camera.orthographicSize < positiveDY)
	camera.orthographicSize = positiveDY + 1.75 + 1;
	
	
	if (camera.orthographicSize < 5)
		camera.orthographicSize = 5;
		
	if (camera.orthographicSize > 10)
		camera.orthographicSize = 10;
	
	if(transform.position.y < camera.orthographicSize)
		transform.position.y = camera.orthographicSize;
}