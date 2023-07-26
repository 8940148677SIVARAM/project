let num=1;
function siva(){
	 document.getElementById("dommy").classList.toggle("siva");
	 if(window.innerWidth<=992){
	let wrap=document.getElementById("ok");
	wrap.classList.toggle("d-none");
	}
}

function ram(h=0){
	var m1=document.getElementById("one");
	var m2=document.getElementById("two");
	var m3=document.getElementById("th");
	if(num==1){
		m1.classList.remove("first");
		m1.classList.add("three");
		m2.classList.remove("second");
		m2.classList.add("first");
		m3.classList.remove("three");
		m3.classList.add("second");
		if(h==0){
			num+=1;
		}
		else{
			num=1;
		}
	}
	else if(num==2){
	    m2.classList.remove("first");
		m2.classList.add("three");
		m3.classList.remove("second");
		m3.classList.add("first");
		m1.classList.remove("three");
		m1.classList.add("second");
          if(h==0){
			num+=1;
		  }
		  else{
			  num=2;
		  }
	}
	else{
		m3.classList.remove("first");
		m3.classList.add("three");
		m1.classList.remove("second");
		m1.classList.add("first");
		m2.classList.remove("three");
		m2.classList.add("second");
		if(h==0){
			num=1;
		}
		else{
			num=3;
		}
	}
}
setInterval(()=>ram(),3700);
function left(){
	--num;
	if(num<=0){
        ram(2);
	}
	else if (num==1){
		ram(2)
	}
	else if(num==3){
		ram(2);
	}
	else if(num==2){
		ram(2);
	}
}
function right(){
	num=num+1;
	if(num<=3){
		ram();
	}
	else{
		num=1;
		ram();
	}
}
