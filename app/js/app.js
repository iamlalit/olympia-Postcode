$(document).ready(function(){
	var listOfPostCodes = ['1000AA','1099ZZ','1100AA','1199ZZ','1200AA','1299ZZ','1300AA','1399ZZ','1400AA','1499ZZ','1500AA','1599ZZ','1600AA','1699ZZ','1700AA','1799ZZ','1800AA','1899ZZ','1900AA','1999ZZ','2000AA','2099ZZ','2100AA','2199ZZ','2200AA','2299ZZ','2300AA','2399ZZ','2400AA','2499ZZ','2500AA','2599ZZ','2600AA','2699ZZ','2700AA','2799ZZ','2800AA','2899ZZ','2900AA','2999ZZ','3000AA','3099ZZ','3100AA','3199ZZ','3200AA','3299ZZ','3300AA','3399ZZ','3400AA','3499ZZ','3500AA','3599ZZ','3600AA','3699ZZ','3700AA','3799ZZ','3800AA','3899ZZ','3900AA','3999ZZ','4000AA','4099ZZ','4100AA','4199ZZ','4200AA','4299ZZ','4300AA','4399ZZ','4400AA','4499ZZ','4500AA','4599ZZ','4600AA','4699ZZ','4700AA','4799ZZ','4800AA','4899ZZ','4900AA','4999ZZ','5000AA','5099ZZ','5100AA','5199ZZ','5200AA','5299ZZ','5300AA','5399ZZ','5400AA','5499ZZ','5500AA','5599ZZ','5600AA','5699ZZ','5700AA','5799ZZ','5800AA','5899ZZ','5900AA','5999ZZ','6000AA','6099ZZ','6100AA','6199ZZ','6200AA','6299ZZ','6300AA','6399ZZ','6400AA','6499ZZ','6500AA','6599ZZ','6600AA','6699ZZ','6700AA','6799ZZ','6800AA','6899ZZ','6900AA','6999ZZ','7000AA','7099ZZ','7100AA','7199ZZ','7200AA','7299ZZ','7300AA','7399ZZ','7400AA','7499ZZ','7500AA','7599ZZ','7600AA','7699ZZ','7700AA','7799ZZ','7800AA','7899ZZ','7900AA','7999ZZ'];
	console.log(listOfPostCodes.length)
	$('#postcode').submit(function(e) {
		e.preventDefault();
		//postalcode
		var postalcode = $('input[name="postalcode"]');
		var errorList	=	$('#errorList');
		if(postalcode.val() == '' || postalcode.val() == null)
		{
			if(errorList.find('.errormessage-postalcode').length == 0){
				$('<li />', {html: 'Vul postalcode in', class : 'col-sm-12 errormessage-postalcode'})
				.appendTo(errorList)
				.click(function(){
					$('html, body').animate({
						scrollTop: postalcode.offset().top - 100
					}, 500);
					postalcode.focus();
				})
				$('#errorMsg').show();
				postalcode.parent().addClass('has-error');
			}
		}else{
			if(postalcode.parent().hasClass('has-error')){
				postalcode.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-postalcode').length > 0){
				errorList.find('.errormessage-postalcode').remove();
				$('#errorMsg').hide();
			}
		}

		if(postalcode.val().length != 6 && postalcode.val() != ''){
			if(errorList.find('.errormessage-postalcode').length == 0){
				$('<li />', {html: 'Postcode lengte moet worden 6', class : 'col-sm-12 errormessage-postalcode'})
				.appendTo(errorList)
				.click(function(){
					$('html, body').animate({
						scrollTop: postalcode.offset().top - 100
					}, 500);
					postalcode.focus();
				})
				$('#errorMsg').show();
				postalcode.parent().addClass('has-error');
			}
		}
		var check = false;
		if(postalcode.val().length == 6 && postalcode.val() != ''){
			var re = /^\d{4}[a-z A-Z]{2}/g;
			var value = postalcode.val();
			var myArray = value.match(re);
			if(myArray == null){
				if(errorList.find('.errormessage-postalcode').length == 0){
					$('<li />', {html: 'This is not valid postalcode', class : 'col-sm-12 errormessage-postalcode'})
					.appendTo(errorList)
					.click(function(){
						$('html, body').animate({
							scrollTop: postalcode.offset().top - 100
						}, 500);
						postalcode.focus();
					})
					$('#errorMsg').show();
					postalcode.parent().addClass('has-error');
				}
			}else{
				console.log(myArray);
			
				var strshortened = value.slice(0,4);
				
				for(var i = 0 ; i < listOfPostCodes.length; i++){
					if(listOfPostCodes[i].slice(0,4) === strshortened){
						console.log('match occur');
						check = true;
					}else{
						console.log('match not occur');
					}

					if(check == true){
						window.location.href = "confirmationpage1.html"
					}else{
						window.location.href = "confirmationpage2.html"
					}
				}
			}
			
		}
	});
	$('#errorMsg').hide();

})
	