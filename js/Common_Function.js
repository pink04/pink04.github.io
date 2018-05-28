function View_Opt(val, c){
	for (var i = 0; i <= document.TheForm.ItemOpt.length - 1; i++){
		if (val.indexOf(document.TheForm.ItemOpt[i].value) >= 0){
			if (c == "View"){
				document.TheForm.ItemOpt[i].src = "../JS/img/option_on.gif";
			}else{
				document.TheForm.ItemOpt[i].checked = true;
			}
		}
	}
}

function Edit_Opt(val){
	for (var i = 0; i <= form1.TempOpt.length - 1; i++){
		if (val.indexOf(form1.TempOpt[i].value) >= 0){
			form1.TempOpt[i].checked = true;
		}
	}
}

function Edit_ImageYn(val){
	if (val.indexOf(form1.ImageYn.value) >= 0){
		form1.ImageYn.checked = true;
	}
}

function MM_openBrWindow(theURL,winName,features) {
	window.open(theURL,winName,features);
}
 
function mouseOnTD(seq, bool){
	var oTD = eval("document.all.listXP" + seq);
	var len = oTD.length;
	var borderStyle = "0 solid #f9f6f2";
		
	if (bool){
		for(var i =0; i < len ; i++){
			oTD[i].style.borderTop = borderStyle;
			oTD[i].style.borderBottom = borderStyle;
			oTD[i].style.cursor = "default";
			oTD[i].style.borderLeft = borderStyle;
			oTD[i].style.backgroundColor = "#f9f6f2";
		}
		oTD[len-1].style.borderRight = borderStyle;
	}else{
		for(var i =0; i < len; i++){
			oTD[i].style.border = "";
			oTD[i].style.backgroundColor = "";
		}
	}
}
	
function mouseOnTD2(seq, bool){
	var oTD = eval("document.all.listXP_recommend" + seq);
	var len = oTD.length;
	var borderStyle = "0 solid red";
		
	if (bool){
		for(var i =0; i < len ; i++){
			oTD[i].style.borderTop = borderStyle;
			oTD[i].style.borderBottom = borderStyle;
			oTD[i].style.cursor = "default";
			oTD[i].style.borderLeft = borderStyle;
			oTD[i].style.backgroundColor = "#CF1F2C";
		}
		oTD[len-1].style.borderRight = borderStyle;
	}else{
		for(var i =0; i < len; i++){
			oTD[i].style.border = "";
			oTD[i].style.backgroundColor = "";
		}
	}
}
	
function mouseOnTD3(seq, bool){
	var oTD = eval("document.all.listXP_support" + seq);
	var len = oTD.length;
	var borderStyle = "0 solid #f9f6f2";
		
	if (bool){
		for(var i =0; i < len ; i++){
			oTD[i].style.borderTop = borderStyle;
			oTD[i].style.borderBottom = borderStyle;
			oTD[i].style.cursor = "default";
			oTD[i].style.borderLeft = borderStyle;
			oTD[i].style.backgroundColor = "#f9f6f2";
		}
		oTD[len-1].style.borderRight = borderStyle;
	}else{
		for(var i =0; i < len; i++){
			oTD[i].style.border = "";
			oTD[i].style.backgroundColor = "";
		}
	}
}

function ComparePopup_Submit(){
	window.open("","2","width=716,height=540");
	document.TheCompareForm.target="2";
	document.TheCompareForm.action="../model/pop_compare.asp";
	document.TheCompareForm.submit();
	document.TheCompareForm.target="";
}

function Recommend_Submit(){
	document.TheForm.action = "../Shop/Recommend_Car_List.asp";
	document.TheForm.submit();
}

function MM_preloadImages(){ //v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore(){ //v3.0
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d){ //v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length){
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage(){ //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}