//========> 카매니저 내차량관리에서 사용 <=======//
function FuncCodeCommonS(codekind, objName, Style, gb, Empty){
	var Temp = "";

	if (gb == "select"){
		Temp += "<select name='" + objName + "' style='" + Style + "' class='tt_02'>";

		if (Empty != ""){
			Temp += "<option value=''>" + Empty + "</option>";
		}

		for (var i = 0; i <= BB_CodeCommon[codekind].length - 1; i++){
			Temp += "<option value='" + BB_CodeCommon[codekind][i][0] + "'>" + BB_CodeCommon[codekind][i][1] + "</option>";
		}

		Temp += "</select>";
	}

	document.write(Temp);
}
/*********************************
 * 문자 Length 체크 공통
 *********************************/
function checkLen(obj,val,len) {
	try {
		var objChar		= '';
		var objSize		= 0;
		var e = window.event;

		for (var i=0;i<val.length;i++) {
			objChar = val.charAt(i);

			if (escape(objChar).length > 4) {
				objSize += 2;
			} else {
				objSize++;
			}

			if (objSize <= len) {
				objBack = i + 1;
			}
		}

		if (objSize > len) {
			alert('80 Byte를 초과해서는 안됩니다.');
			obj.value = obj.value.substr(0,objBack);
			e.returnValue = false;

			$('.td-right').text('80 / 80 Byte');
		} else {
			$('.td-right').text(objSize+' / 80 Byte');
		}	
	}
	catch (e) {
		//alert(e);
		alert('checkLen : '+e);
	}
}

function checkLen1(obj,val,len) {
	try {
		var objChar		= '';
		var objSize		= 0;
		var e = window.event;

		for (var i=0;i<val.length;i++) {
			objChar = val.charAt(i);

			if (escape(objChar).length > 4) {
				objSize += 2;
			} else {
				objSize++;
			}

			if (objSize <= len) {
				objBack = i + 1;
			}
		}

		if (objSize > len) {
			alert('80 Byte를 초과해서는 안됩니다.');
			obj.value = obj.value.substr(0,objBack);
			e.returnValue = false;

			$('.td-right1').text('80 / 80 Byte');
		} else {
			$('.td-right1').text(objSize+' / 80 Byte');
		}	
	}
	catch (e) {
		//alert(e);
		alert('checkLen1 : '+e);
	}
}

function checkLen2(obj,val,len) {
	try {
		var objChar		= '';
		var objSize		= 0;
		var e = window.event;

		for (var i=0;i<val.length;i++) {
			objChar = val.charAt(i);

			if (escape(objChar).length > 4) {
				objSize += 2;
			} else {
				objSize++;
			}

			if (objSize <= len) {
				objBack = i + 1;
			}
		}

		if (objSize > len) {
			alert('80 Byte를 초과해서는 안됩니다.');
			obj.value = obj.value.substr(0,objBack);
			e.returnValue = false;

			$('.td-right2').text('80 / 80 Byte');
		} else {
			$('.td-right2').text(objSize+' / 80 Byte');
		}	
	}
	catch (e) {
		//alert(e);
		alert('checkLen2 : '+e);
	}
}


/*********************************
 * 플래쉬코드정의	 공통
 *********************************/
function flashWrite(url,w,h,id,bg,vars,win) {
	document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='"+w+"' height='"+h+"' id='"+id+"'>");
	document.write("<param name='allowScriptAccess' value='always'>");
	document.write("<param name='movie' value='"+url+"'>");
	document.write("<param name='FlashVars' value='"+vars+"'>");
	document.write("<param name='wmode' value='"+win+"'>");
	document.write("<param name='bgcolor' value='"+bg+"'>");
	document.write("<param name='menu' value='false'>");
	document.write("<param name='quality' value='high'>");
	document.write("<embed src='"+url+"' FlashVars='"+vars+"' wmode='"+win+"' menu='false'  bgcolor='"+bg+"' width='"+w+"' height='"+h+"' name='"+id+"' quality='high' allowScriptAccess='always' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'>");
	document.write("</object>");
}

/*********************************
 * 잘모르겠음	 공통
 *********************************/

	self.onError=null;
	currentX = currentY = 0;  
	whichIt = null;           
	lastScrollX = 0; lastScrollY = 0;
	NS = (document.layers) ? 1 : 0;
	IE = (document.all) ? 1: 0;
	<!-- STALKER CODE -->
	function heartBeat() {
		if(IE) { 
			  diffY = document.body.scrollTop; 
 			  diffX = 0; 
		       }
	    if(NS) { diffY = self.pageYOffset; diffX = self.pageXOffset; }
		if(diffY != lastScrollY) {
	                percent = .1 * (diffY - lastScrollY);
	                if(percent > 0) percent = Math.ceil(percent);
	                else percent = Math.floor(percent);
			if(IE) document.all.floater.style.pixelTop += percent;
			if(NS) document.floater.top += percent; 
	                lastScrollY = lastScrollY + percent;
	    }
		if(diffX != lastScrollX) {
			percent = .1 * (diffX - lastScrollX);
			if(percent > 0) percent = Math.ceil(percent);
			else percent = Math.floor(percent);
			if(IE) document.all.floater.style.pixelLeft += percent;
			if(NS) document.floater.top += percent;
			lastScrollY = lastScrollY + percent;
		}	
	}	
	if(NS || IE) action = window.setInterval("heartBeat()",1);

