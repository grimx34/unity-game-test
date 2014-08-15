#pragma strict

var speed : float;
var grounded : boolean = false;
var ground : Transform;
var groundRadius : float = 0.2;
var whatIsGround : LayerMask;
var jumpForce : float;
var moveLeft : boolean = false;
var moveRight : boolean = false;
var mapLimits : float = 49.23505;
var anim : Animator;
var width = 0.75;

function Start () {
	anim = GetComponent("Animator");
}

function Update () {
	if (grounded) {
		if ( Input.GetKeyDown (KeyCode.Space)) {
				rigidbody2D.AddForce(transform.up* jumpForce);
		}
	}
	
	if( Input.GetKey (KeyCode.A)) {
		moveLeft = true;
	}
	if ( Input.GetKey (KeyCode.D)) {
		moveRight = true;
	}
	
}

function FixedUpdate () {
	grounded = Physics2D.OverlapCircle(ground.position, groundRadius, whatIsGround);
	
	if(moveLeft) {
		if(transform.position.x > -mapLimits)
			transform.position.x -= speed;
		
		moveLeft = false;
	}
	if (moveRight) {
		if(transform.position.x < mapLimits)
			transform.position.x += speed;
		
		moveRight = false;
	}
	
	transform.rotation.z = 0;
	
}