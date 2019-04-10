function printdiv(printpage){
	// 要印的內容
	let newstr = printpage.innerHTML; 
	// 完整的內容
	let oldstr = document.body.innerHTML; 
	document.body.innerHTML = newstr; 
	window.print(); 
	document.body.innerHTML= oldstr; 
	return false; 
} 
window.onload=function(){
	let bt=document.getElementById("print_btn");
	let div_print=document.getElementById("div_print");
	bt.onclick=function(){
		printdiv(div_print);
	}
}