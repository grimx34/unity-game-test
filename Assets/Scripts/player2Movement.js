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
		if ( Input.GetKeyDown (KeyCode.K)) {
				rigidbody2D.AddForce(transform.up* jumpForce);
		}
	}
	
	if( Input.GetKey (KeyCode.LeftArrow)) {
		moveLeft = true;
	}
	if ( Input.GetKey (KeyCode.RightArrow)) {
		moveRight = true;
	}
	
}

function FixedUpdate () {
	grounded = Physics2D.OverlapCircle(ground.position, groundRadius, whatIsGround);
	anim.SetFloat("speed",0);
	transform.localScale = Vector3(width, 1, 1);
	if(moveLeft) {
		if(transform.position.x > -mapLimits)
			transform.position.x -= speed;
		anim.SetFloat("speed",1);
		transform.localScale = Vector3(-width, 1, 1);
		moveLeft = false;
	}
	if (moveRight) {
		if(transform.position.x < mapLimits)
			transform.position.x += speed;
		anim.SetFloat("speed",1);
		transform.localScale = Vector3(width, 1, 1);
		moveRight = false;
	}
	
	transform.rotation.z = 0;
	
}