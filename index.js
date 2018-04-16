const loop = (t, e) => {
	let a = [];
	for(i = 0; i < t; i++){
		a.push({n: i, t: null})
	}
	a.map(v => {
		let k = e.replace("N", )
	})
}
const calculate = () => {
	let v = document.getElementById("inputF").value
	let p = /(.+)=(.*\1.*)/.exec(v)
	if(p){
		let l = document.createElement("li");
		let e = document.createElement("span");
		e.innerHTML = p[0];
		console.log(e, p[0]);
		l.appendChild(e)
		document.getElementById("outputF").appendChild(l);
	}else{
		alert("Wrong Equation")
	}
}
let isBottom = false;
let isTop = false;
window.addEventListener("keydown", e => {
	// console.log(e.keyCode)
	document.getElementById("inputF").focus();
	if(isTop || isBottom){
		if(e.key == " "){
			event.preventDefault();
			isTop = isBottom = false;
			return;
		}else{
			switch(e.keyCode){
				case 18:
				case 17:
				case 16:
				case 20:
				case 9:
				case 37:
				case 38:
				case 39: 
				case 40:
				break;
				case 8:
					if(document.getElementById("inputF").value.length == 0){
						isTop = isBottom = false;
						return;
					}
				break;
				default:
				if(e.ctrlKey || e.altKey)return;
				event.preventDefault();
				if(k[e.key]){
					let v = k[e.key][isTop ? 0 : isBottom ? 1 : null];
					if(!v)return;
					let t = document.getElementById("inputF")
					let n = t.selectionStart;
					console.log(t.value, t.value.insert(v, t.selectionStart, t.selectionEnd))
					t.value = t.value.insert(v, t.selectionStart, t.selectionEnd)
					t.selectionStart = t.selectionEnd = ++n;
				}else if(e.key == "^"){
					event.preventDefault();
					isTop = true; isBottom = false;
				}else if(e.key == "_"){
					event.preventDefault();
					isBottom = true; isTop = false;
				}
			}
		}
	}else if(e.key == "^"){
		event.preventDefault();
		isTop = true;
	}else if(e.key == "_"){
		event.preventDefault();
		isBottom = true;
	}
	// console.log(e.key)
})
