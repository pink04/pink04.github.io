/*********************************
 * Jquery Ready 공통
 *********************************/
$(document).ready(function(){
	// ajax 공통
	$.ajaxSetup({cache:true,dataType:'json',type:'post',timeout:60000,error:function(){}});
});

/*********************************
 * 제조사 공통
 *********************************/
function fn_Maker(Nation) {
	try {
		$.ajax({
			url: '../JSON/AllCarName.asp', data: {MGbn: 'Maker', Nation: Nation},
			success: function(data) {
				var html = '';
				if (data.length > 0) {
					html += '<option value="">::::제조사선택::::</option>';
					$.each(data, function(i) {
						html += '<option value="'+data[i].Maker+'">'+data[i].ItemsName+'</option>';
					});
				} else {
					html += '<option value="">::::제조사::::</option>';
				}
				$('select[name=Maker]').empty().append(html);
				$('select[name=Maker] option[value="'+$('#data .data-Maker').text()+'"]').attr('selected','selected');
			}
		});

		if ($('#data .data-Maker').text() != '') {
			fn_Model($('#data .data-Maker').text());
		}

	}
	catch (e) {
		//alert(e);
		alert('fn_Maker : '+e);
	}	
}

/*********************************
 * 모델명 공통
 *********************************/
function fn_Model(Maker) {
	try {
		$.ajax({
			url: '../JSON/AllCarName.asp', data: {MGbn: 'Model', Maker: Maker},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0) {
						html += '<option value="">::::: 차명 선택 :::::</option>';
						$.each(data, function(i) {
							html += '<option value="'+data[i].Model+'">'+data[i].ItemsName+'</option>';
						});
					} else {
						html += '<option value="">::::: 차명 선택 :::::</option>';
					}
				} else {
						html += '<option value="">::::: 차명 선택 :::::</option>';

				}

				$('select[name=Model]').empty().append(html);
				$('select[name=Model] option[value="'+$('#data .data-Model').text()+'"]').attr('selected','selected');
			}
		});

		if ($('#data .data-Model').text() != '') {
			fn_Grade($('#data .data-Model').text());
		}
	}
	catch (e) {
		//alert(e);
		alert('fn_Model : '+e);
	}
}

/*********************************
 * 세부모델명 공통
 *********************************/
function fn_Grade(Model) {
	try {
		var Maker = '';

		if ($('select[name=Maker]').val() == '') {
			Maker = $('#data .data-maker').text(); 
		} else {
			Maker = $('select[name=Maker]').val();
		}

		$.ajax({
			url: '../JSON/AllCarName.asp', data: {MGbn: 'Grade',Model: Model},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0) {
						html += '<option value="">::::: 모델명 선택 :::::</option>';
						$.each(data, function(i) {
							html += '<option value="' + data[i].Grade + '">' + data[i].ModelsName + '</option>';
						});
					} else {
						html += '<option value="">::::: 모델명 선택 :::::</option>';
					}
				} else {
						html += '<option value="">::::: 모델명 선택 :::::</option>';

				}

				$('select[name=Grade]').empty().append(html);
				$('select[name=Grade] option[value="'+$('#data .data-Grade').text()+'"]').attr('selected','selected');
			}
		});

		if ($('#data .data-Grade').text() != '') {
			fn_OneCf($('#data .data-Grade').text());
		}
	}
	catch (e) {
		//alert(e);
		alert('fn_Grade : '+e);
	}
}

/*********************************
 * 등급 공통
 *********************************/
function fn_OneCf(Grade) {
	try {
		$.ajax({
			url: '../JSON/AllCarName.asp', data: {MGbn: 'OneCf', Grade: Grade},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0){
						html += '<option value="">::::: 세부모델 선택 :::::</option>';
						$.each(data, function(i) {
							html += '<option value="'+data[i].OneCf+'">'+data[i].ModelName+'</option>';
						});
					} else {
						html += '<option value="">::::: 세부모델 선택 :::::</option>';
					}
				} else {
						html += '<option value="">::::: 세부모델 선택 :::::</option>';

				}

				$('select[name=OneCf]').empty().append(html);
				$('select[name=OneCf] option[value="'+$('#data .data-OneCf').text()+'"]').attr('selected','selected');
			}
		});
	}
	catch (e) {
		//alert(e);
		alert('fn_OneCf : '+e);
	}
}

/*********************************
 * 시도 공통
 *********************************/
function fn_Sido() {
	try {
		$.ajax({
			url: '../JSON/AllCommon.asp', data: {wGbn: 'Sido'},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0) {
						html += '<option value="">::시도::</option>';
						$.each(data, function(i) {
							html += '<option value="'+data[i].Sido+'">'+data[i].Sido+'</option>';
						});
					} else {
						html += '<option value="">::시도::</option>';
					}
				} else {
						html += '<option value="">::시도::</option>';

				}
				$('select[name=Sido]').empty().append(html);
				$('select[name=Sido] option[value="'+$('#data .data-Sido').text()+'"]').attr('selected','selected');
			}
		});

		if ($('#data .data-Sido').text() != '') {
			fn_City($('#data .data-Sido').text());
		}
	}
	catch (e) {
		//alert(e);
		alert('fn_Sido : '+e);
	}
}

/*********************************
 * 지역 공통
 *********************************/
function fn_City(Sido) {
	try {
		$.ajax({
			url: '../JSON/AllCommon.asp', data: {wGbn: 'City', Sido: Sido},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0) {
						html += '<option value="">::지역::</option>';
						$.each(data, function(i) {
							html += '<option value="'+data[i].City+'">'+data[i].City+'</option>';
						});
					} else {
						html += '<option value="">::지역::</option>';
					}
				} else {
						html += '<option value="">::지역::</option>';

				}

				$('select[name=City]').empty().append(html);
				$('select[name=City] option[value="'+$('#data .data-City').text()+'"]').attr('selected','selected');
			}
		});

		if ($('#data .data-City').text() != '') {
			fn_DanjiName(Sido,$('#data .data-City').text());
		}
	}
	catch (e) {
		//alert(e);
		alert('fn_City : '+e);
	}
}

/*********************************
 * 단지명 공통
 *********************************/
function fn_DanjiName(Sido,City) {
	try {
		$.ajax({
			url: '../JSON/AllCommon.asp', data: {wGbn: 'DanjiNo', Sido: Sido, City: City},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0) {
						html += '<option value="">:::::단지선택:::::</option>';
						$.each(data, function(i) {
							html += '<option value="'+data[i].DanjiNo+'">'+data[i].DanjiName+'</option>';
						});
					} else {
						html += '<option value="">:::::단지선택:::::</option>';
					}
				} else {
						html += '<option value="">:::::단지선택:::::</option>';

				}

				$('select[name=DanjiNo]').empty().append(html);
				$('select[name=DanjiNo] option[value="'+$('#data .data-DanjiNo').text()+'"]').attr('selected','selected');
			}
		});
		if ($('#data .data-DanjiNo').text() != '') {
			fn_ShopName($('#data .data-DanjiNo').text());
		}

	}
	catch (e) {
		//alert(e);
		alert('fn_DanjiName : '+e);
	}
}

/*********************************
 * 상사명 공통
 *********************************/
function fn_ShopName(DanjiNo) {
	try {
		$.ajax({
			url: '../JSON/AllCommon.asp', data: {wGbn: 'SShopNo', DanjiNo: DanjiNo},
			success: function(data) {
				var html = '';
				if (data !== null){
					if (data.length > 0) {
						html += '<option value="">::::: 상사명선택 :::::</option>';
						$.each(data, function(i) {
							html += '<option value="'+data[i].SShopNo+'">'+data[i].Shopfullname+'</option>';
						});
					} else {
						html += '<option value="">::::: 상사명선택 :::::</option>';
					}
				} else {
						html += '<option value="">::::: 상사명선택 :::::</option>';

				}

				$('select[name=SShopNo]').empty().append(html);
				$('select[name=SShopNo] option[value="'+$('#data .data-SShopNo').text()+'"]').attr('selected','selected');
			}
		});
	}
	catch (e) {
		//alert(e);
		alert('fn_ShopName : '+e);
	}
}
