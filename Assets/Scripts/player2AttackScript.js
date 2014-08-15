#pragma strict

var attack : boolean = false;
var anim : Animator;

function Start () {
	anim = GetComponent("Animator");
}

function Update () {
	if(Input.GetKeyDown (KeyCode.L)){
		attack = true;
	}
}

function FixedUpdate () {
	if(attack == true){
		anim.SetBool("attack", true);
	}
}