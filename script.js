//your JS code here. If required.

let ele=document.getElementById("level");


let value=getDom(ele);

alert(value);


function getDom(ele) {
	if(ele==null) return 0;
	
	return 1+getDom(ele.parentElement);
}