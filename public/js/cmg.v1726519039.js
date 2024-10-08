// $.cookie - moved to production.min.js
// TW-1494 - added back to cmg.js with a "if defined" check.
if (typeof $.cookie !== "function") {
(function($,document){var pluses=/\+/g;function raw(s){return s;}function decoded(s){return decodeURIComponent(s.replace(pluses,' '));}$.cookie=function(key,value,options){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(value))||value==null)){options=$.extend({},$.cookie.defaults,options);if(value==null){options.expires=-1;}if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}options=value||$.cookie.defaults||{};var decode=options.raw?raw:decoded;var cookies=document.cookie.split('; ');for(var i=0,parts;(parts=cookies[i]&&cookies[i].split('='));i++){if(decode(parts.shift())===key){return decode(parts.join('='));}}return null;};$.cookie.defaults={};})(jQuery,document);
}

window.name = "thomasnet";
var screenW = 640, screenH = 480;
if (parseInt(navigator.appVersion)>3) {
	screenW = screen.width;
	screenH = screen.height;
}

var coselect	= {};

var x	= location.hostname.split('.');
if(x[0].indexOf('-') > 0){
    x[0] = x[0].replace(/-account|-cad|-certifications|-orders|-news/g, '-www');
} else {
    x[0] = 'www';
}
var tnetRoot	= 'https://'+x.join('.');

function buttonSpinner(isActive, extraSpinnerWrapClass){
	const regButtonBlock = document.querySelector('.button-spinner-wrap');
    const regButtonText = document.querySelector('.button-spinner-wrap button span');
    const blockPosition = extraSpinnerWrapClass ? ' ' + extraSpinnerWrapClass : '';

	if(isActive){
		regButtonText.style.visibility = 'hidden';
		regButtonBlock.className = 'button-spinner-wrap horizontal-spinner spinning' + blockPosition;
	} else {
		regButtonText.style.visibility = 'visible';
		regButtonBlock.className = 'button-spinner-wrap' + blockPosition;
	}
}

function certErr(){
	errMsg	= 'CATEGORY / CERTIFICATION NOT FOUND\n\n';
	errMsg += 'The Product / Service category you provided was not found.\n';
	errMsg += 'Please verify the Category you provided and try again.\n\n';
	errMsg += 'If you provided a certification into the search box (e.g. ISO 9000),\n';
	errMsg += 'make sure you also entered a category for the product / service\n';
	errMsg += '(e.g. Valves) you are looking for certified suppliers for.';

	//Adding setTimeout to avoid the alert blocking other JS calls.
	//This can be removed if using alternate alert handling.
	setTimeout(function(){
		alert(errMsg);
	}, 150);
}

function compareSuppliers(qs, e){
	var selected = cntSelComps();
	// isRFIMaxOverride() is only true for tnetpro and Caterpillar at this time.
	var maxCompare = 5; //RM7208
	if (isRFIMaxOverride()) { maxCompare = 1000; } //RM7208
	if(selected > maxCompare){
		alert("You may not select more than " + maxCompare + " companies."); //RM7208
	} else if(selected < 2){
		alert($(e).data('content'));
	} else if(selected){
		window.open('/compare.html?'+qs, '_blank');
	}
	return false;
}

function compRfiInit(){
	$(".compbtn").click(function(){
		compareSuppliers(btnParams);
	});
}

function compRptProc(qs, e) {
	var rskCount	= rskelg.getCount();
	if (rskCount < 2 || rskCount > 5) {
		alert($(e).data('content'));
	} else {
		var crURL = ordersrv + '/dnb/cart.html?'+qs+'&accts='+rskelg.getAccts();
		var newwin = window.open(crURL);
		if(!newwin){
			location.href = crURL;
		}
	}
	return false;
}

function cntSelComps(){
	var count = 0;
	for (var key in coselect) {
		if (coselect.hasOwnProperty(key) && coselect[key]) {
			count++;
		}
	}
	return count;
}

function daFetch(type, params){
	var sda_host = 'https://sda.thomasnet.com';	// always use production
	// var sda_host = "https://sshilale-sda.thomasnet.com";
	/* Use test-sda for the test site. */
	if (location.hostname === "test-www.thomasnet.com" || location.hostname === "test-news.thomasnet.com"){
		sda_host = "https://test-sda.thomasnet.com";
	}
	var url = sda_host + "/customlib/"+type+".php";

	$.ajax({
		type: "GET",
		url: url,
		crossDomain: true,
		data: params,
		dataType: "jsonp",
		success: function (data) {
			$.each(data, function(key, value) {
				var $el = $('#' + key);

				if(!value) {
					$el.hide();
					return;
				}

				if($el.hasClass("da-hide-sm") && $el.is(':hidden')) {
					return;
				}

				$el.html(value).show();
			});
		}
	});
}

var getTlmTagsFromQS = function ( queryString, eventType ) {
	var tlmtags = {}, newtag, newval, i;

	var paramobj	= parseQueryString(queryString);

	for (var i in paramobj) {
		if (paramobj.hasOwnProperty(i)) {
			//newtag = irtags[i] ? irtags[i] : i.toLowerCase();
			newtag = i.toLowerCase();
			newval	= decodeURIComponent(paramobj[i].replace(/\+/g, ' ')).trim();
			if(newval > ''){
				tlmtags[newtag]	= decodeURIComponent(paramobj[i].replace(/\+/g, ' '));
			}
		}
	}

	if(!isEmpty(tlmtags)){
		tlmtags['event_type'] = !eventType ? 'link' : eventType;
	}
	return tlmtags;
}

function initSelComp(){
	$('.rfi-cart__supplier').click(function(e){

		e.preventDefault();
		var d	= $(this).data();
		delete coselect[d['searchpos']];
		$('#chk'+d['account']).prop('checked', false);
		removeDataInCookie(d['account']);
		showSelCookie();
		showSelectedSuppliers();
		compRfiInit();
	});
}

var irtags = {
	'act' : 'company_refinement',
	'ad_class' : 'ad_class',
	'alink' : 'advertiser_link',
	'category' : 'news_category',
	'categorylist' : 'categorylist',
	'ccpid' : 'ccp_company_id',
	'cert' : 'refinement_certificate',
	'channel' : 'channel',
	'cid' : 'company_id',
	'cidresultpos' : 'cid_results_position',
	'cov' : 'coverage_area',
	'etall' : 'et_all',
	'etbuy' : 'et_buy',
	'etother' : 'et_other',
	'etsell' : 'et_sell',
	'etunclass' : 'et_unclassified',
	'heading' : 'heading',
	'k' : 'search_within_results',
	'loc' : 'located_in_cov',
	'location' : 'search_city_state',
	'mctoken' : 'matchcraft_token',
	'navsec' : 'navigation_refinement',
	'own' : 'owner_refinement',
	'pdtl' : 'search_product_detail_refinement',
	'pg' : 'page_number',
	'PrdS_ITEM_ID' : 'item_id',
	'PrdS_ITEM_Name' : 'item_name',
	'PrdS_PROD_ID' : 'product_id',
	'prid' : 'press_release_id',
	'pslpid' : 'paid_search_landing_page_id',
	'radius' : 'search_radius',
	'searchpos' : 'search_position',
	'searchType' : 'search_type',
	'subcategory' : 'rfq_subcategory',
	'TINCATL1' : 'hierarchy_1',
	'TINCATL2' : 'hierarchy_2',
	'TINCATL3' : 'hierarchy_3',
	'TINCATL4' : 'hierarchy_4',
	'TINCATL5' : 'hierarchy_5',
	'TINCATL6' : 'hierarchy_6',
	'TINCATL7' : 'hierarchy_7',
	'tinid' : 'reg_user_id',
	'TN_cat' : 'product_category',
	'TN_family' : 'product_family',
	'TN_panel' : 'panel_option',
	'TN_prodid' : 'tn_product_id',
	'TN_prodsearch' : 'search_product',
	'TN_sc' : 'product_sourcing_indicator',
	'tnet_pop' : 'pop_points',
	'what' : 'internal_search_term',
	'which' : 'which_search_type',
	'WT_ac' : 'ad_click',
	'WT.ac' : 'ad_click',
	'WT_ad' : 'ad_impression',
	'WT.ad' : 'ad_impression',
	'WT_cc' : 'wt_cc',
	'WT.cc' : 'wt_cc',
	'WT_cd' : 'dom.color depth',
	'WT.cd' : 'dom.color depth',
	'WT_cg_n' : 'page_content_group',
	'WT.cg_n' : 'page_content_group',
	'WT_cg_s' : 'page_content_subgrouping',
	'WT.cg_s' : 'page_content_subgrouping',
	'WT_co' : 'cookies_enabled',
	'WT.co' : 'cookies_enabled',
	'WT_dcsqry' : 'dom.querystring',
	'WT.dcsqry' : 'dom.querystring',
	'WT_dcsref' : 'dom.referrer',
	'WT.dcsref' : 'dom.referrer',
	'WT_dcsuri' : 'dom.pathname',
	'WT.dcsuri' : 'dom.pathname',
	'WT_dcsvid' : 'visitor_id',
	'WT.dcsvid' : 'visitor_id',
	'WT_em' : 'encoding_type',
	'WT.em' : 'encoding_type',
	'WT_fi' : 'flash_installed',
	'WT.fi' : 'flash_installed',
	'WT_hdr.Accept' : 'http_header',
	'WT.hdr.Accept' : 'http_header',
	'WT_hp' : 'page_type',
	'WT.hp' : 'page_type',
	'WT_le' : 'language_encoding',
	'WT.le' : 'language_encoding',
	'WT_loc' : 'location_city_state',
	'WT.loc' : 'location_city_state',
	'WT_mc_n' : 'campaign_name',
	'WT.mc_n' : 'campaign_name',
	'WT_mc_t' : 'campaign_type',
	'WT.mc_t' : 'campaign_type',
	'WT_mle' : 'meta_language_encoding',
	'WT.mle' : 'meta_language_encoding',
	'WT_pn' : 'conversion_action',
	'WT.pn' : 'conversion_action',
	'WT_sem_engine' : 'sem_engine',
	'WT.sem_engine' : 'sem_engine',
	'WT_sem_keyword' : 'sem_keyword',
	'WT.sem_keyword' : 'sem_keyword',
	'WT_si_n' : 'scenario_name',
	'WT.si_n' : 'scenario_name',
	'WT_si_p' : 'scenario_step',
	'WT.si_p' : 'scenario_step',
	'WT_si_x' : 'scenario_order',
	'WT.si_x' : 'scenario_order',
	'WT_srch' : 'search_engine_type',
	'WT.srch' : 'search_engine_type',
	'WT_ti' : 'page_name',
	'WT.ti' : 'page_name',
	'WT_ul' : 'site_language',
	'WT.ul' : 'site_language',
	'WT_z_noadlist' : 'no_ad_list',
	'WT.z_noadlist' : 'no_ad_list',
	'WT_z_ORIGIN' : 'click_origin',
	'WT.z_ORIGIN' : 'click_origin',
	'WTZO' : 'click_origin',
	'WT_z_sem_account' : 'sem_account',
	'WT.z_sem_account' : 'sem_account',
	'WT_z_testgroup' : 'test_group',
	'WT.z_testgroup' : 'test_group',
	'zip' : 'zip_code'
}

function isEmail(str) {
	// 10-21-2015 (RM 7594)
	str	= str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	var pattern = /.+@.+\..+/i;
	return pattern.test(str);
}

function isEmpty(obj) {
	for(var prop in obj) {
		if(obj.hasOwnProperty(prop))
			return false;
	}
	return true;
}

function isNumber(InString){
	if(InString.length==0)
		return (false);
	var RefString="1234567890";
	for (var Count=0; Count < InString.length; Count++)  {
		TempChar= InString.substring (Count, Count+1);
		if (RefString.indexOf (TempChar, 0)==-1)
			return (false);
		}
	return (true);
}

function isPDF(filename){
	var file_ext = filename.split('.').pop().toLowerCase();
	file_ext	= file_ext.split('\?').shift();
	file_ext	= file_ext.split('\#').shift();
	return file_ext == 'pdf';
}

function isRFIMaxOverride() {	//RMCaterpillar //RM6917
	return typeof rfiMaxOverride === 'undefined' ? 0 : 1;
}

function isValidPword(InString){
	var hasnum	= 0;
	if(InString.length < 6 || InString.length > 20)	{ return (false); }	// Password must be at least 6 and not longer than 20 chars

	var pwRefString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	for (var Count=0; Count < InString.length; Count++)  {
		TempChar= InString.substring (Count, Count+1);
		if(pwRefString.indexOf(TempChar)==-1) { return (false); }
		if(isNumber(TempChar))	{ hasnum++; }
	}
	if(hasnum < 1)	{ return (false); }	// Password must contain a number
	return (true);
}

function regForgot(){
    var $form   = $('#form_regForgot');
    var $uname  = $('#form_regForgot').find('input[name="uname"]');

	buttonSpinner(true);
    $uname.val($uname.val().trim());

    if($uname.val() === ''){
        $('body').removeClass('loading');
        $('html').removeClass('wait');
        $('#errMsg').html('Email is required').show();
        buttonSpinner(false);
        $uname.focus();
        return false;
    }

    $.ajax({
        url: tnetRoot+'/scripts/account-forgot-password.php',
        dataType: 'jsonp',
        method: 'POST',
        data: { uname:$uname.val() },
        success: function (results) {
            estatus	= results.response;
            if(estatus=='success'){
                top.location.href	= 'foundpw.html' + location.search;
            } else {
                buttonSpinner(false);
                $('#errMsg').html('The Email you provided is not associated with a Thomas account').show();
                return false;
            }
        }
    });

    return false;
}

function regLogIn(){
    var $form   = $('#form_regLogIn');
    var $uname  = $form.find('input[name="uname"]');
    var $pword  = $form.find('input[name="pword"]');
    var $url    = $form.find('input[name="url"]');

	buttonSpinner(true);
	$uname.val($uname.val().trim());
    $pword.val($pword.val().trim());

    if(!$uname.val() || !$pword.val()){
        $uname.focus();
        $('#errMsg').show();
        buttonSpinner(false);
        return false;
    }

    $.ajax({
        url: tnetRoot+'/scripts/account-login.php',
        dataType: 'jsonp',
        method: 'POST',
        data: { uname:$uname.val(), pword:$pword.val() },
        success: function (results) {
            tinid	= results.response;
            if(tinid=='Failed'){
                $('#errMsg').show();
                buttonSpinner(false);
            } else if($url.val()) {
                var tlmTags	= {
                    'hierarchy_1' : 'TNET',
                    'hierarchy_2' : 'MYTHOMAS',
                    'hierarchy_3' : 'SA_LOGIN',	// 2017-11-15 (TW-34)
                    'hierarchy_4' : 'SUBMIT',
                    'reg_user_id' : tinid,
                    'scenario_name' : 'MyThomasReg',
                    'scenario_step' : 'SASignUpSubmit',
                    'signedin' : 'yes'
                }

                if(typeof rwUser != 'undefined'){	// regwall overrides
                    document.cookie = 'rwUser='+JSON.stringify(rwUser)+'; domain=.thomasnet.com' + '; path=/';
                    if(typeof rwUser.tags != 'undefined'){
                        tlmTags = Object.assign({}, tlmTags, rwUser.tags);
                    }
                }
                if(typeof utag_data['client_ip']!="undefined" && typeof tlmTags['client_ip']=="undefined"){
                    tlmTags['client_ip']	= utag_data['client_ip'];
                }
                if(typeof utag_data['servercallhost']!="undefined" && typeof tlmTags['servercallhost']=="undefined"){
                    tlmTags['servercallhost']	= utag_data['servercallhost'];
                }
                tlmTags['scenario_step']	= tlmTags['scenario_step'].replace('Forgot', 'LogIn');	// 2018-2-8 (TW-788)
                utag.link(tlmTags);

                setTimeout(function() { window.open($url.val(), '_self'); }, 250);
                return false;
            }
        }
    });
}

/* regwall popup */
var regWall = {
	debug : 0,
	rwDiv	: $('#regWall'),
	rwBody	: $('#regWall').find('.modal-body'),
	rwCloseBtn	: $('#regWall').find('button.close'),
	rwTitleDiv	: $('#regWall').find('.modal-title'),
	rwMode : '',
	rwRedirect : '',
	rwParams : '',
	rwSaveList : '',
	rwTarget : '',
	rwTitle : '',
	rwPage : window.location.href,
	rwUri	: window.location.pathname+window.location.search,
	rwRef	: $.cookie('rwRef'),
	rwSuccess : 0,

	init : function (args) {
		// Form field Values
		if ('debug' in args)	{ this.debug = args.mode; }
		if ('mode' in args)	{ this.rwMode = args.mode; }
		if ('redirect' in args)	{ this.rwRedirect = args.redirect; }
		if ('params' in args)	{ this.rwParams = args.params; }
		if ('savelist' in args)	{ this.rwSaveList = args.savelist; }
		if ('target' in args)	{ this.rwTarget = args.target; }
		if ('title' in args)	{ this.rwTitle = args.title; }
		if (this.rwUri==this.rwRef)	{ this.rwRef=''; }
		regWall.debugLog('regWall.init()');
	},
	launch : function(args, callback){
		this.init(args);
		regWall.debugLog('regWall.launch()');

		if(typeof loggedin !== 'undefined' && loggedin){
			regWall.debugLog('user already logged in');
			// user already logged in - should be very rare use case
			// just let them through without executing tags again
			if(this.rwRedirect && this.rwTarget=='ext'){
				window.location.href=this.rwRedirect;
			} else if(this.rwRedirect){
				top.location.href=this.rwRedirect;
			} else if(typeof rwGoto !== 'undefined') {
				top.location.href=rwGoto;
			}
			return false;
		}

		if(regWall.rwMode === 'savesupp' && typeof regWall.rwParams !== 'undefined'){
			regWall.rwParams += "&scenario_name=RegWallLogIn&scenario_step=LogInSubmit";
			setTlmUtagLink(regWall.rwParams);
			regWall.saveSupp();
			$(document).trigger("rw5-modal-save-supplier");
		} else {
			$(document).trigger("rw5-modal");
		}
	},
	checkEmail : function($emailField){
        regWall.debugLog('regWall.checkEmail()');
        var $email = ($emailField) ? $emailField : $('#rwEmail');
        var email = $email.val();

		if(email==''){
			this.showError('Please enter your email address');
			$email.focus();
			return false;
        }

		$.ajax({
			url: tnetRoot+'/scripts/regwall-check-email.php',
			dataType: "jsonp",
			data: { uname:email },
			success: function (results) {
				estatus	= results.response;

				regWall.debugLog('regwall-check-email (email): '+email+'\nregwall-check-email (status): '+estatus);

				if(estatus=='newuser' || estatus=='lite'){
					regWall.setTags('SignUp','Form');
					$.ajax({
						url: tnetRoot+'/scripts/regwall-register.php',
						dataType: "jsonp",
						data: { uname:email, origin:'regwall-'+regWall.rwMode },
						success: function (response) {
							// display password screen
							regWall.rwBody.html(response.body);
							regWall.rwTitleDiv.html('Please complete the form below to create your account');
						}
					});
				} else {
					regWall.setTags('LogIn','Password', '5');	// 6-26-2017 (RM 9469)
					$.ajax({
						url: tnetRoot+'/scripts/regwall-password.php',
						dataType: "jsonp",
						data: { uname:email },
						success: function (response) {
							// display password screen
                            regWall.rwBody.html(response.body);
                            if (typeof regWall.rwTitle !== 'undefined' && regWall.rwTitle !== '') {
                                regWall.rwTitleDiv.html(regWall.rwTitle);
                            }
						}
					});
				}
			}
		});
		return false;
	},
	checkPassword : function(){
		regWall.debugLog('regWall.checkPassword()');
		var pword = $('#rwPword').val();

		if(pword==''){
			this.showError('Please enter your password');
			$('#rwPword').focus();
			return false;
        }

        buttonSpinner(true, 'float-right');

		$.ajax({
			url: tnetRoot+'/scripts/regwall-check-password.php',
			dataType: "jsonp",
			data: { uname:$('#rwUname').val(), pword:pword },
			success: function (results) {
                buttonSpinner(false, 'float-right');

				estatus	= results.response;
				regWall.debugLog('regwall-check-password (status): '+estatus);
				if(estatus=='invalid'){
					regWall.setTags('LogIn','WrongPassword', '6');	// 6-26-2017 (RM 9469)
					regWall.showError('The password that you entered is incorrect. Please try again or click "Forgot your password?" below.');
					$('#rwPword').val('');
				} else {
					regWall.rwSuccess	= 1;
					loggedin = '1';
					document.querySelector('body').classList.add('rw-signin-success');	// TW-1341
					if(regWall.rwMode=='savesupp' && typeof regWall.rwParams !== 'undefined'){
						regWall.rwParams += "&scenario_name=RegWallLogIn&scenario_step=LogInSubmit";
						setTlmUtagLink(regWall.rwParams);
						regWall.saveSupp();
					} else if(regWall.rwRedirect && regWall.rwTarget=='ext'){	// RM 8592
						var tinid	= $.cookie('tinid');
						regWall.rwParams += "&scenario_name=RegWallLogIn&scenario_step=LogInSubmit";
						if(isPDF(regWall.rwRedirect)){
							viewContent(regWall.rwRedirect, '', '', regWall.rwParams, '', '1');
						} else {
							regWall.rwParams += "&signedin=yes&tinid="+tinid+"&client_ip="+utag_data.client_ip+"&servercallhost="+utag_data.servercallhost;
							setTlmUtagLink(regWall.rwParams);
							window.location.href=regWall.rwRedirect;
						}
						regWall.close();

						return false;
					} else {
						regWall.setTags('LogIn','Submit');
					}
					if(regWall.rwRedirect.substr(0, 4)=='http')	{
						var hash = window.location.hash;
						if(hash){
							var new_url = window.location.href.replace(new RegExp(hash,'g'), '');
							top.location.href = new_url;
						} else {
							window.location.reload();
						}

						return false;
					}
					else if(typeof rwGoto !== 'undefined') {
						top.location.href=rwGoto; return false; }
					regWall.close();
				}
			}
		});
	},
	forgotPassword : function(){
		regWall.debugLog('regWall.forgotPassword()');

		$.ajax({
			url: tnetRoot+'/scripts/account-forgot-password.php',
			dataType: "jsonp",
			data: { uname:$('#rwUname').val() },
			success: function (results) {
				estatus	= results.response;
				regWall.debugLog('account-forgot-password (status): '+estatus);
				if(estatus=='invalid'){
					regWall.showError('We\'re sorry. We were unable to process your request.');
				} else {
					regWall.showConfirmation('We have located your Thomasnet account info. Please check your e-mail for a message from UserServices@Thomasnet.com which will contain instructions for logging in to Thomasnet.');
					regWall.setTags('Forgot','Submit');
				}
			}
		});
	},
	submitReg : function(){
		regWall.debugLog('regWall.submitReg()');
		this.hideMessage();

        buttonSpinner(true);

		$.ajax({
			url: tnetRoot+'/scripts/account-register.php',
			dataType: "jsonp",
			data: $('#rwregform').serialize(),
			method: 'POST',
			success: function (result) {
				var regstat	= result.response;
				regWall.debugLog('account-register (status): '+regstat);
				var error;

                buttonSpinner(false);

				if(regstat=='Success'){
					document.querySelector('body').classList.add('rw-signup-success');	// TW-1341
					regWall.setTags('SignUp','Submit');
					regWall.rwSuccess	= 1;
					loggedin = '1';

					if(regWall.rwMode=='savesupp' && typeof regWall.rwParams !== 'undefined'){
						regWall.saveSupp();
					} else if(regWall.rwRedirect && regWall.rwTarget=='ext'){	// RM 8592
						var tinid	= $.cookie('tinid');
						if(isPDF(regWall.rwRedirect)){
							regWall.rwParams += "&scenario_name=RegWallSignUp&scenario_step=SignUpSubmit";
							viewContent(regWall.rwRedirect, '', '', regWall.rwParams, '', '1');
						} else {
							window.location.href=regWall.rwRedirect;
                        }
						regWall.close();
						return false;
					}

					if(regWall.rwRedirect > '')	{
						var hash = window.location.hash;
      					var new_url = window.location.href.replace(new RegExp(hash,'g'), '');
						top.location.href=new_url;
					}
					else if(typeof rwGoto !== 'undefined') { top.location.href=rwGoto; }
					regWall.close();

				} else if(regstat=='Already registered'){
					error	= "<b>Duplicate Registration</b><br>There is already an account associated with the email address you entered. Please close this window and \"Sign In\" or choose a different email address.";
				} else if(regstat=='Error creating new record'){
					error	= "<b>Error</b><br>We were unable to complete your request at this time. Please try again later.";
				} else if(regstat=='Missing required fields'){
					error	= "<b>Missing Required Fields:</b></br>Please complete the form below. All fields are required.";
				} else {
					error = regstat;
				}
				if(error){
					regWall.showError(error);
                }
			}
		});
	},
	saveSupp : function (){
		regWall.debugLog('regWall.saveSupp()');
		$.cookie('savelist', regWall.rwSaveList, { path: '/', domain: '.thomasnet.com' });
	},
	debugLog : function(logMsg){
		if (regWall.debug == 1) { console.log(logMsg); }
	},
	showError : function(errMsg){
		regWall.hideMessage();
		$('#rwMsg').html(errMsg).show().addClass('alert-danger');
		$('#rwMsg').removeClass('hide');
	},
	showConfirmation : function(errMsg){
		regWall.hideMessage();
		$('#rwMsg').html(errMsg).show().addClass('alert-success');
		$('#rwMsg').removeClass('hide');
	},
	hideMessage : function(){
		$('#rwMsg').html('').hide().removeClass('alert-danger').removeClass('alert-success');
	},
	setTags : function(pagetype, pageaction, scenario_order){
		/** RM 6200#31 **/
		var rwPre	= "RegWall";
		var rwSip	= pagetype+pageaction;
		var rwTinid	= $.cookie('tinid');

		if (typeof scenario_order === 'undefined') { scenario_order=''; }

		if(this.rwMode.substr(0, 4)=='cert')	{ rwPre = "Cert"+rwPre; }
		else if(this.rwMode=='page2' || this.rwMode=='freeprofile' || this.rwMode=='map')	{ rwPre = this.rwMode+rwPre; }	// RM 8717 - RM 9469 (added map)
		var rwSin	= rwPre;
		rwSin += pagetype=='Forgot' ? 'LogIn' : pagetype;

		//alert(pagetype+'\n'+pageaction+'\nscenario_name: '+rwSin+'\nscenario_step: '+rwSip);

		var rwTags = ["scenario_name", rwSin, "scenario_step", rwSip];

		if(scenario_order)	{ rwTags.push("scenario_order", scenario_order); }	// RM 9469

		if(pageaction=='Submit' && pagetype!='Forgot') {
			rwTags.push("signedin", "yes");
			rwTags.push("reg_user_id", rwTinid);

			if(this.rwTarget=='ext' && typeof this.rwParams !== 'undefined'){	// RM 8592
				var paramobj	= parseQueryString(this.rwParams);
				for (var i in paramobj) {
					if (paramobj.hasOwnProperty(i)) {
						newtag = i;
						rwTags.push(newtag, decodeURIComponent(paramobj[i].replace(/\+/g, ' ')));
					}
				}
				//alert(rwP+'\n\n'+JSON.stringify(rwTags, null, 2));
			}
		}

		var tlmTags = {}, i, key, val;

		for (i = 0; i < rwTags.length; i++) {
			tag = rwTags[i].replace(/DCSext\./g, '');
			newtag = irtags[tag] ? irtags[tag] : tag.toLowerCase();
			i++;
			tlmTags[newtag] = rwTags[i];
		}

		if(pageaction=='Form' && pagetype=='LogIn' && this.rwMode=='certoverview'){
			$.extend(tlmTags, utag_data);	/* RM 9429#34 */
		}

		tlmTags['client_ip']	= utag_data['client_ip'];
		tlmTags['servercallhost']	= utag_data['servercallhost'];

		if(typeof utag_data!="undefined" && typeof utag_data.noview_flag!="undefined"){	// first time in, submit all page tags
			delete utag_data.noview_flag;
			$.extend(tlmTags, utag_data);
		}

		// 6-27-2017 (RM 9469#16)
		if(typeof tlmTags.ad_impression=="undefined"){
			tlmTags.ad_impression	= [];
		}
		tlmTags.ad_impression.push('close');

		//added setTimeout here to ensure that utag is defined before utag.view is called. This was due to a ReferenceError. This was affecting the regwall modal popup in windows 10 Chrome and FF. - YY-TW2547
		if(typeof utag !== "undefined"){utag.view(tlmTags);}
		//alert(JSON.stringify(tlmTags, null, 2));

		regWall.debugLog('regWall.setTags (rwTags): '+ JSON.stringify(rwTags, null, 2));
	},
	close : function(){
		regWall.rwDiv.modal('hide');
	},
	redirect : function(){
		// List of reg wall types that redirect user to previous page when they opt out
		var modeOpts = ['cert', 'certsupp', 'cotype', 'zipcode', 'page2', 'freeprofile', 'city'];
		if(modeOpts.indexOf(regWall.rwMode) >= 0 && regWall.rwSuccess==0){
			if(regWall.rwRef > '') {
				top.location.href=regWall.rwRef;
			}
			else {
				if(document.referrer.match(/thomasnet\.com/)){
					// window.history.go(-3);
					window.location.href = document.referrer;
				}else {
					window.location.href = "https://www.thomasnet.com"
				}
			}
			return false;
		}
	}
}

/* end regwall popup scripts */

var liteReg = {
	checkForRegScript : tnetRoot+'/scripts/account-tinid.php',
	createLiteRegScript : tnetRoot+'/scripts/account-register.php',
	flds : { fname : '', lname : '', email : '' },
	debug : 0,
	cmg : '',
	/* 5-24-2017 extralite was added to allow litereg to work when only an email address was provided (RM 9552) */
	extralite : '',
	rsp : { err : {}, tinid : '' },
	/* A fldxref entry here is only needed for those field names that don't match the external field
	names. For instance, if the external field id is 'fname' (matches property in this class) then no
	entry is needed, but if the external name field has an id of 'firstName' then the following entry
	should be added to fldxref: "fname" : "firstName". */
    fldxref : {},
    isRegistered: null,

	init : function (args) {
		if (args.debug == 1) { console.log('liteReg.init()'); }
		// Form field Values
		if ('fname' in args)	{ this.flds.fname = args.fname; }
		if ('lname' in args)	{ this.flds.lname = args.lname; }
		if ('email' in args)	{ this.flds.email = args.email; }
		if ('zip' in args)	{ this.flds.zip = args.zip; }
		if ('country' in args)	{ this.flds.country = args.country; }
		if ('company' in args)	{ this.flds.company = args.company; }
		if ('phone' in args)	{ this.flds.phone = args.phone; }
		if ('job_function' in args)	{ this.flds.job_function = args.job_function; }
		if ('job_discipline' in args)	{ this.flds.job_discipline = args.job_discipline; }
		if ('job_level' in args)	{ this.flds.job_level = args.job_level; }
		if ('industry' in args)	{ this.flds.industry = args.industry; }
		if ('origin' in args)	{ this.flds.origin = args.origin; }
		if ('origin_2' in args)	{ this.flds.origin_2 = args.origin_2; }
		// Settings (Non-form fields)
		if ('cmg' in args)	{ this.cmg = args.cmg; }
		if ('debug' in args)	{ this.debug = args.debug; }
		if ('fldxref' in args)	{ this.fldxref = args.fldxref; }
		if ('extralite' in args)	{ this.extralite = args.extralite; }
	},

	run : function(args) {
		if (args.debug == 1) { console.log('liteReg.run()'); }
		liteReg.init(args);

		var dfd = new $.Deferred();

		liteReg.checkForReg().done(function(checkForRegData) {
            liteReg.isRegistered = checkForRegData.isregistered;
			if (liteReg.debug == 1) { console.log('checkForReg done'); }
			if (checkForRegData.err.hasOwnProperty("msg")) {
				liteReg.setErr({ 'type': 'f', 'fld': checkForRegData.err.fld, 'msg': checkForRegData.err.msg });
				dfd.reject(liteReg.rsp);
			} else if (checkForRegData.isregistered) {
				/* If we find a registration in the lookup using the email address then we'll use the associated
				tinid. The lookup process sets the tinid cookie to match the record found. */
				dfd.resolve(liteReg.rsp);
			} else {
				/* If an existing account associated with the email doesn't exist then a lite registration will
				be created and we'll use the tinid from that. The lite registration process automatically sets
				a tinid cookie. */
				// Collect fields to be used in the liteReg process
				var liteRegFlds = liteReg.getLiteRegFlds();
				if (liteReg.debug == 1) { console.log(liteRegFlds); }
				// Validate fields
				var liteRegValErr = liteReg.liteRegValidate(liteRegFlds);
				if (liteRegValErr.hasOwnProperty("msg")) {
					/* A message property indicates an object full of error info was returned. */
					liteReg.setErr(liteRegValErr);
					dfd.reject(liteReg.rsp);
				} else {
					// Create LiteReg
					liteReg.createLiteReg(liteRegFlds).done(function(createLiteRegData) {
						if (liteReg.debug == 1) { console.log('createLiteReg done'); }
						if (createLiteRegData.response == 'Success') {
							if (liteReg.debug == 1) { console.log('createLiteReg SUCCESS'); }
							dfd.resolve(liteReg.rsp);
						} else {
							liteReg.setErr({ 'type' : 'i', 'fld' : '', 'msg' : 'liteReg.createLiteReg failed: ' + JSON.stringify(createLiteRegData) });
							dfd.reject(liteReg.rsp);
						}
					}).fail(function(createLiteRegData, exception) {
						if (liteReg.debug == 1) { console.log('createLiteReg fail'); }
						liteReg.setErr({ 'type' : 'i', 'fld': '', 'msg': 'Error (2): Status: ' + createLiteRegData.status + ' Exception: ' + exception });
						dfd.reject(liteReg.rsp);
					});
				}
			}
		}).fail(function(createLiteRegData, exception) {
			if (liteReg.debug == 1) { console.log('checkForReg fail'); }
			liteReg.setErr({ 'type' : 'i', 'fld': '', 'msg': 'Error (1): Status: ' + createLiteRegData.status + ' Exception: ' + exception });
			dfd.reject(liteReg.rsp);
		});

		return dfd.promise();
	},

	setErr : function (errArgs) {
		if (errArgs.type == 'f' && errArgs.fld.length > 0) {
			// Convert the error field id to the corresponding external field id.
			if (liteReg.fldxref.hasOwnProperty(errArgs.fld)) {
				errArgs.fld = liteReg.fldxref[errArgs.fld];
			}
		}
		liteReg.rsp.err = errArgs;
	},

	checkForReg : function () {
		if (liteReg.debug == 1) { console.log('liteReg.checkForReg()'); }
		var prm = $.ajax({
			url: liteReg.checkForRegScript,
			dataType: 'jsonp',
			data: { email : liteReg.flds.email, setcookies : 1, cmg : liteReg.cmg },
			type: 'GET',
			complete: function (jqXHR, textStatus) {
				if (liteReg.debug == 1) { console.log('checkForReg complete'); }
				if (liteReg.debug == 1 && textStatus != 'error' && jqXHR.hasOwnProperty('responseText')) {
					var d = $.parseJSON(jqXHR.responseText);
					if (d.hasOwnProperty('debug')) {
						liteReg.showDebug(d.debug,lbl='====== LITEREG AJAX SSO-GET-ACCT-TINID DEBUG ======');
					}
				}
			}
		});
		return prm;
	},

	getLiteRegFlds : function() {
		var liteRegFlds = {
			fname : liteReg.flds.fname,
			lname : liteReg.flds.lname,
			email : liteReg.flds.email,
			email2 : liteReg.flds.email,
			registration_type : 'lite'
		};
		// Optional fields:
		if ('zip' in this.flds && this.flds.zip.length) { liteRegFlds.zip = this.flds.zip; }
		if ('company' in this.flds && this.flds.company.length) { liteRegFlds.company = this.flds.company; }
		if ('country' in this.flds && this.flds.country.length) { liteRegFlds.country = this.flds.country; }
		if ('phone' in this.flds && this.flds.phone.length) { liteRegFlds.phone = this.flds.phone; }
		if ('origin' in this.flds && this.flds.origin.length) { liteRegFlds.origin = this.flds.origin; }
		if ('origin_2' in this.flds && this.flds.origin_2.length) { liteRegFlds.origin_2 = this.flds.origin_2; }
		if ('job_function' in this.flds && this.flds.job_function.length) { liteRegFlds.job_function = this.flds.job_function; }
		if ('job_discipline' in this.flds && this.flds.job_discipline.length) { liteRegFlds.job_discipline = this.flds.job_discipline; }
		if ('job_level' in this.flds && this.flds.job_level.length) { liteRegFlds.job_level = this.flds.job_level; }
		if ('industry' in this.flds && this.flds.industry.length) { liteRegFlds.industry = this.flds.industry; }
		if(this.extralite) { liteRegFlds.extralite = this.extralite; }
		return liteRegFlds;
	},

	liteRegValidate : function(liteRegFlds) {
		var err = {}
		// Validation - These fields are required for Lite Registration.
		if (!this.extralite) {	// 'extralite' only requires email address
			if (!liteRegFlds.fname.length) {
				err = { 'type': 'f', 'fld': 'fname', 'msg': '"First Name" is required' };
			}
			if (!liteRegFlds.lname.length) {
				err = { 'type': 'f', 'fld': 'lname', 'msg': '"Last Name" is required' };
			}
		}
		if (!liteRegFlds.email.length) {
			err = { 'type': 'f', 'fld': 'email', 'msg': '"Email" is required' };
		} else if (!isEmail(liteRegFlds.email)) {
			err = { 'type': 'f', 'fld': 'email', 'msg': '"Email" is not formatted properly' };
		}
		return err;
	},

	createLiteReg : function(liteRegFlds) {
		var prm = $.ajax({
			url: liteReg.createLiteRegScript,
			dataType: 'jsonp',
			data: liteRegFlds,
			type: 'POST'
		});
		return prm;
	},

	showDebug : function (d,lbl) {
		// d (the debug info) must be passed in an array or a JSON stringified array.
		if(typeof lbl === "undefined") { lbl='====== DEBUG ======'; }
		if (d!='') {
			if (!$.isArray(d)) { d = $.parseJSON(d); }
			try { console.groupCollapsed(lbl) } catch(e){}
			$.each(d,function(idx,val){ console.log(val + '\n'); });
			try { console.groupEnd() } catch(e){ }
		}
	},

	showTinidFld : function (elm, tinid) {
		/* This method is just for debugging.
		The elm param is the page element to which the tinid debug block should be appended. */
		var html = $("<div id=\"tind_dev_debug\"></div>").css({ 'clear': 'left','float': 'left', 'display': 'inline-block', 'padding': '10px', 'background-color': '#ebedf6' });
		html.append("<b>Current Tinid:</b>").css({ 'font-size': '12px' }).append("<br>");
		html.append("<div id=\"tind_dev_debug_tinid\" class=\"clearfix\">");
		html.find("#tind_dev_debug_tinid").css({ 'border': '1px solid black', 'width': '180px', 'position': 'relative', 'padding': '0 0 0 5px' }).append("<span id=\"dispTinid\">" + tinid + "</span><a href=\"#\" id=\"RemoveTinidCookie\">Delete Tinid</a>");
		html.find("#RemoveTinidCookie").css({ 'border-left': '1px solid black', 'font-size': '12px', 'padding': '1px 5px', 'margin': '0 auto', 'float': 'right', 'color': '#ffffff', 'background-color': '#b05f00' });
		elm.append(html);

		$("#RemoveTinidCookie").click(function() {
			$.cookie('tinid', '', { expires: -1, path: '/', domain: 'thomasnet.com' });
			$.cookie('UUID', '', { expires: -1, path: '/', domain: 'thomasnet.com' });
			$("#dispTinid").html(($.cookie('tinid') || ''));
			return false;
		});
	},

	fillTinid : function() {
		$("#dispTinid").html(($.cookie('tinid') || ''));
	}
}

function makeFrag(str){
	return str.replace(/\//g, ' ').replace(/[^a-z0-9 ]/gmi, '').replace(/\s+/g, '-').toLowerCase();
}

function saveSeach(contentid, wtp){
	if(contentid && loggedin){
		$.ajax({
			url: tnetRoot+'/scripts/save-search.php',
			dataType: 'jsonp',
			data: { tinid:$.cookie('tinid'), url:location.pathname+location.search },
			success: function (results) {
				var response	= results.response;
				if(response=='Saved'){
					if(wtp) {	/** 10-26-2016 (RM 8984) **/
						setTlmUtagLink(wtp);
					}
					$('#'+contentid).attr('href','/mythomas/saved_searches.html').attr('onClick','').addClass('active');
					alert('This search has been saved to your account');
				}
			}
		});
	}
}

function mtSaveResults(contentid, wtp){
	if(contentid && loggedin){
		saveSeach(contentid, wtp);
	} else if(contentid && !loggedin){
		var rwUrl	= window.location.href;
		if(regWallDisplay=='modal'){
			// use pop up reg wall
			regWall.launch({'mode' : 'saveresults', 'title' : 'Sign In/Sign Up to save your search results'},
				function(){ saveSeach(contentid, wtp); }
			);
		} else {
			// use stand alone reg wall
			setRegWall('saveresults', 'to save your search results', rwUrl, rwUrl);
		}
	}
}

var parseQueryString = function ( queryString ) {
	var params = {}, queries, temp, i, l;
	//queryString	= decodeURIComponent(queryString);
	//queryString	= queryString.replace(/&amp;/g, '&');

	queries = queryString.split("&");

	for ( i = 0, l = queries.length; i < l; i++ ) {
		temp = queries[i].split('=');
		var fldname	= temp.shift();
		params[fldname] = temp.join('=');
	}
	return params;
}

function getCookies(){
	var pairs = document.cookie.split(";");
	var cookies = {};
	for (var i=0; i<pairs.length; i++){
	  var pair = pairs[i].split("=");
	  cookies[(pair[0]+'').trim()] = unescape(pair[1]);
	}
	return cookies;
}
function preSelComps(rank){
	//_supplier
	// shove all previously selected companies in array.
	var preselco	= !isEmpty($.cookie('_selco')) ? $.cookie('_selco') : '';
	var preseldata	= preselco.split("|");
	coselect	= [];
	var co_index_ids = [];

	for(x=0; x < preseldata.length; x++){
		var idpos	= preseldata[x].indexOf('-');
		var copos	= preseldata[x].indexOf('-', idpos+1);
		var rk	= preseldata[x].substring(0,idpos);
		var id	= preseldata[x].substring(idpos+1,copos);
		var nm	= preseldata[x].substring(copos+1);

		if(rk && id){
			coselect[rk]=(id+"-"+nm);
			co_index_ids.push(parseInt(id));
		}
	}
	// get all cookies, remove cookies that are left as error. this is only prevent bc it shouldn't happen
	let all_cookies = getCookies();
	for (var key in all_cookies) {
		if (all_cookies.hasOwnProperty(key)) {
		  if(key.indexOf("_supplier")!=-1){
			var idpos	= key.indexOf('-');
			var new_id = parseInt(key.substring(idpos+1));
			if(co_index_ids.indexOf(new_id) ===-1){
				removeDataInCookie(new_id);
			}
		  }
		}
	}
}

function qsFromObj(paramobj){
	var params = {};
	if(isEmpty(paramobj))	{ return; }
	keys = Object.keys(paramobj),
  	i, len = keys.length;

	keys.sort();

	for (i = 0; i < len; i++) {
		k = keys[i];
		if(!isEmpty(paramobj[k])){
			params[k] = decodeURIComponent(paramobj[k].replace(/\+/g, '%20'));
		}
	}
	return $.param(params);
}

function relatedEbooks(type, id){
	$.ajax({
		url: '/related-ebooks.php',
		dataType: "json",
		type: "POST",
		data: {type: type, id: id, limit: 3},
		success: function (results) {
			const html = results.html;
			//alert(html);
			if(html){
				const col = document.querySelector('.article-content__secondary');
				const div = document.createElement('div');
				div.innerHTML = html;
				col.appendChild(div);
			}
		}
	});
}

function resizeIframe(iframe) {
        iframe.height   = iframe.contentWindow.document.body.scrollHeight + "px";
}

function rfiMaxSelections() {	//RMCaterpillar //RM6917
	return typeof rfiMaxOverride === 'undefined' ? 5 : rfiMaxOverride;
}

function rfiMulti(qs, e) {
	// Get cids stored in the _selco cookie.
	var preselco = !isEmpty($.cookie('_selco')) ? $.cookie('_selco').split("|") : '';
	var isContactable = 0;
	preselco.map(function(co){
		var contact = co.split("-");
		var hasContactBtn = contact[contact.length-1];
		if(hasContactBtn === "1"){
			isContactable ++;
		}
	})
	// We want the middle of the three dash-delimited values in each array occurrence.
	var cids	= $(preselco).map(function() { if (this.length) { return this.match(/-(.*?)-/)[1]; }}).get(); //RM9263
	cids	= $.unique(cids); //RM9263
	if(cids.length < 1) {
		alert($(e).data('content'));
	} else {
		if(isContactable > 0){
			var url	= tnetRoot + "/rfi/rfi_main.html?WTZO=" + encodeURIComponent("Suppliers Search Results") + "&" + qs + "&cids=" + cids.join(',') + "&rfitype=contact";
		location.href	= url; //RM9792
		}
	}
	return false;
}

function multiShortList(qs, e) {
	// Get cids stored in the _selco cookie.
	var preselco = !isEmpty($.cookie('_selco')) ? $.cookie('_selco').split("|") : '';
	// We want the middle of the three dash-delimited values in each array occurrence.
	var cids	= $(preselco).map(function() { if (this.length) { return this.match(/-(.*?)-/)[1]; }}).get(); //RM9263
	cids	= $.unique(cids); //RM9263
	if(cids.length < 1) {
		alert($(e).data('content'));
	} else {

		// var saveBtn	= $('.ico-btn-save[data-company_id="'+cids[0]+'"]');
		// var listBtn	= $('.ico-btn-shortlist[data-company_id="'+cids[0]+'"]');

		 var linktype = 'list';

		if(!loggedin){
			var thisUrl	= window.location.href;
			if(regWallDisplay=='modal'){
				// pop up reg wall
				regWall.launch({'mode' : 'savesupp', 'title' : 'Sign In/Sign Up to save or shortlist suppliers', 'redirect' : thisUrl, 'savelist' : cids.join() + '|' + linktype});
			} else {
				// stand alone reg wall
				$.cookie('savelist', cids.join() + '|' + linktype, { path: '/', domain: '.thomasnet.com' });
				setRegWall('savesupp', 'to save or shortlist suppliers', thisUrl, thisUrl);
			}
			return false;
		}

			// var params	=  listBtn.data();

		$.cookie('savelist', null, {expires: -1, path: "/", domain: ".thomasnet.com"});
		$.ajax({
			url: tnetRoot+'/scripts/save-supplier.php',
			dataType: "jsonp",
			data: { cids:cids.join(), tinid:tinid, url:location.href },
			success: function (results) {
				console.log("function success");
				var response = results.response;

				if(response=='Success'){
					// execute reporting tags
					//alert(JSON.stringify(params, null, 2));


					try{__adroll.record_user({"adroll_segments": "e10c2e61"})} catch(err) {} /* RM 7327 */

					// // update button state/text
					// saveBtn.prop('href','/mythomas/saved_suppliers.html').text('Saved').addClass('ico-btn-active');
					// listBtn.attr('data-event_type','shortlistsupplier');
					var params	= {};

					cids.forEach(function(cid){
						var saveBtn	= $('.ico-btn-save[data-company_id="'+cid+'"]');
						var listBtn	= $('.ico-btn-shortlist[data-company_id="'+cid+'"]');

						var supplier_cookie = $.cookie('_supplier-' + cid);
						if (supplier_cookie){
							params = supplier_cookie;
							setTlmUtagLink($.param(params));
						}
						if( saveBtn.length> 0 && listBtn.length>0){

							params	=  listBtn.data();
							setTlmUtagLink($.param(params));
							saveBtn.prop('href','/mythomas/saved_suppliers.html').text('Saved').addClass('ico-btn-active');
							listBtn.attr('data-event_type','shortlistsupplier');
						}
					});


					// identify if this is a newly saved account - affects display on the shortlist form
					var newaccounts	= results.newaccounts > 0 ? 1 : 0;

					$.ajax({
						url: tnetRoot+'/scripts/shortlist-supplier-form.php',
						dataType: "jsonp",
						data: { cids:cids.join(), sc:newaccounts, tinid:tinid, tags:$.param(params)},
						success: function (slresults) {
							// launch shortlist modal
							modalDiv	= $('#saveSupplier');
							modalTitle	= modalDiv.find('.modal-title').text(slresults.title);
							modalBody	= modalDiv.find('.modal-body').html(slresults.body);
							shortListBody = $('.shortlist-display'); //
							$('.modal-header').hide();
						    $('.reg-wall__value-prop').hide();
							$('.reg-wall__logo').hide();
							$('.modal-footer').addClass('d-none');
							shortListBody.html("Add to your Shortlist<br>  (<a href=\"/mythomas/saved_suppliers.html\">Manage your saved suppliers</a>)")
							modalDiv.modal('show');
							initMultiShortlistForm();
						}
					});

				} else {
					alert('We were unable to save this supplier at this time');
				}

			}
		});
	}
	return false;
}

var rskelg = { //RM9377
	/* Handles everything related to the _rskelg cookie. This cookie holds an array of accounts
	that are eligible to have risk (D&B) reports generated for them. */
	eligible : [],
	inited : 0,
	init : function() {
		try {
			var rskelg = !isEmpty($.cookie('_rskelg')) ? $.cookie('_rskelg') : JSON.stringify([]);
			var rskelgdata = JSON.parse(rskelg);
			this.eligible = rskelgdata;
			this.inited = 1;
		} catch(err) {
			this.eligible = [];
			console.log('Error parsing _rskelg cookie.');
		}
	},
	findloc : function(ac) {
		if (!this.inited) { this.init(); }
		var loc = -1;
		$.each(this.eligible, function(idx, val) {
			if (ac == val.ac) { loc = idx; return false; }
		});
		return loc;
	},
	add : function(rk,ac) {
		if (!this.inited) { this.init(); }
		var loc = this.findloc(ac);
		if (loc > -1) { this.eligible.splice(loc,1); }
		this.eligible.push({'rk' : rk, 'ac' : ac});
		this.writeCookie();
	},
	remove : function(ac) {
		if (!this.inited) { this.init(); }
		var loc = this.findloc(ac);
		if (loc > -1) { this.eligible.splice(loc,1); }
		this.writeCookie();
	},
	getCount : function() {
		if (!this.inited) { this.init(); }
		return this.eligible.length;
	},
	getAccts : function() {
		if (!this.inited) { this.init(); }
		var rtn = [];
		$.each(this.eligible, function(idx, val) { rtn.push(val.ac) });
		rtn = rtn.join();
		return rtn;
	},
	writeCookie : function() {
		if (!this.inited) { this.init(); }
		$.cookie('_rskelg', JSON.stringify(this.eligible), { path: '/', domain: '.thomasnet.com' });
	},
	showval : function() {
		if (!this.inited) { this.init(); }
		$.each(
			this.eligible,
			function(idx,val){ console.log(idx + ') rk: ' + val.rk + ' ac: ' + val.ac); }
		);
	},
}


$('a[data-event_type="savesupplier"],a[data-event_type="shortlistsupplier"]').click(function(e){
	if($(this).attr('href')!='#')	{ return true; }
	  e.preventDefault();
  	const buttonData	= $(this).data();
  	const linktype	= buttonData.event_type.indexOf('shortlist') >= 0 ? 'shortlist' : 'save';
   	 saveSupplier(buttonData.company_id, linktype, buttonData);
});

function initShortlistForm(saveBtn,listBtn){
	$('#addToShortlist').submit(function(e){
		e.preventDefault();

		var listname	= $(this).find("input[name='listname']");
		var listids	= $(this).find("input[type='checkbox']");
		var company_id	= $(this).find("input[name='cids']");
		var tags	= $(this).find("input[name='tags']").val();

		if (listname.val() == '' && listids.filter(':checked').length == 0) {
			var msg	= 'Please enter a name for your new shortlist';
			if(listids.length > 0){
				msg += '\nor select an existing list';
			}
			alert(msg+'.');
			listname.focus();

		} else {

			var formParams	= $(this).serializeArray();
			//alert(JSON.stringify(formParams, null, 2));
			$.ajax({
				url: tnetRoot+'/scripts/save-shortlist.php',
				dataType: "jsonp",
				type: "POST",
				data: formParams,
				success: function (results) {
					var response = results.response;
					//alert(response);

					if(response=='Success'){
						// execute reporting tags
						setTlmUtagLink(tags);

						// update button state/text
						let d = listBtn.data()
						if(listBtn.length <= 0){
							d	= saveBtn.data()
						}

						saveBtn.prop('href','/mythomas/saved_suppliers.html').text('Saved').addClass('ico-btn-active');
						listBtn.prop('href','/account/shortlists').text('Shortlisted').addClass('ico-btn-active');

						// launch confirmation modal
						modalDiv	= $('#saveSupplier');
						modalTitle	= modalDiv.find('.modal-title').text(results.title);
						modalBody	= modalDiv.find('.modal-body').html(results.body);
						modalDiv.find('.modal-footer').removeClass('d-none');
						modalDiv.modal('show');
					} else {
						alert('We were unable to save this supplier at this time');
					}
				}
			});
		}
	});
}

function initMultiShortlistForm(){
	$('#addToShortlist').submit(function(e){
		e.preventDefault();

		var listname	= $(this).find("input[name='listname']");
		var listids	= $(this).find("input[type='checkbox']");
		var company_ids	= $(this).find("input[name='cids']").val();
		var tags	= $(this).find("input[name='tags']").val();
		if (listname.val() == '' && listids.filter(':checked').length == 0) {
			var msg	= 'Please enter a name for your new shortlist';
			if(listids.length > 0){
				msg += '\nor select an existing list';
			}
			alert(msg+'.');
			listname.focus();

		} else {

			var formParams	= $(this).serializeArray();
			//alert(JSON.stringify(formParams, null, 2));
			$.ajax({
				url: tnetRoot+'/scripts/save-shortlist.php',
				dataType: "jsonp",
				type: "POST",
				data: formParams,
				success: function (results) {
					var response = results.response;
					//alert(response);

					if(response=='Success'){
						// execute reporting tags
						setTlmUtagLink(tags);

						// update button state/text
						var cids = company_ids.split(" ");

						cids.forEach(function(cid){
							var saveBtn	= $('.ico-btn-save[data-company_id="'+cid+'"]');
							var listBtn	= $('.ico-btn-shortlist[data-company_id="'+cid+'"]');
							if( saveBtn.length> 0 && listBtn.length>0){
								saveBtn.prop('href','/mythomas/saved_suppliers.html').text('Saved').addClass('ico-btn-active');
								listBtn.prop('href','/account/shortlists').text('Shortlisted').addClass('ico-btn-active');
							}

						});

						// launch confirmation modal
						modalDiv	= $('#saveSupplier');
						modalTitle	= modalDiv.find('.modal-title').text(results.title);
						modalBody	= modalDiv.find('.modal-body').html(results.body);
						modalDiv.find('.modal-footer').removeClass('d-none');
						modalDiv.modal('show');
					} else {
						alert('We were unable to save this supplier at this time');
					}
				}
			});
		}
	});
}

function saveSupplier(cid, linktype, params){
	var saveBtn	= $('.ico-btn-save[data-company_id="'+cid+'"]');
	var listBtn	= $('.ico-btn-shortlist[data-company_id="'+cid+'"]');
	if(!saveBtn.length)	{
		alert('Invalid request');
		return false;
	}

	if(!linktype)	{ linktype = 'save'; }

	if(!loggedin){
		var thisUrl	= window.location.href;
		if(regWallDisplay=='modal'){
			// pop up reg wall
			regWall.launch({'mode' : 'savesupp', 'title' : 'Sign In/Sign Up to save or shortlist suppliers', 'redirect' : thisUrl, 'savelist' : cid + '|' + linktype});
		} else {
			// stand alone reg wall
			$.cookie('savelist', cid + '|' + linktype, { path: '/', domain: '.thomasnet.com' });
			setRegWall('savesupp', 'to save or shortlist suppliers', thisUrl, thisUrl);
		}
		return false;
	}
	if(!params){
		params	= linktype=='save' ? saveBtn.data() : listBtn.data();
	}
	$.cookie('savelist', null, {expires: -1, path: "/", domain: ".thomasnet.com"});
	$.ajax({
		url: tnetRoot+'/scripts/save-supplier.php',
		dataType: "jsonp",
		data: { cids: cid, tinid:tinid, url:location.href },
		success: function (results) {
			var response = results.response;

			if(response=='Success'){
				// execute reporting tags
				//alert(JSON.stringify(params, null, 2));
				setTlmUtagLink($.param(params));
				try{__adroll.record_user({"adroll_segments": "e10c2e61"})} catch(err) {} /* RM 7327 */

				// update button state/text
				saveBtn.prop('href','/mythomas/saved_suppliers.html').text('Saved').addClass('ico-btn-active');
				listBtn.attr('data-event_type','shortlistsupplier');

				// identify if this is a newly saved account - affects display on the shortlist form
				var newaccounts	= results.newaccounts > 0 ? 1 : 0;

				$.ajax({
					url: tnetRoot+'/scripts/shortlist-supplier-form.php',
					dataType: "jsonp",
					data: { cids:params.company_id, sc:newaccounts, tinid:tinid, tags:$.param(params)},
					success: function (slresults) {
						// launch shortlist modal
						modalDiv	= $('#saveSupplier');
						modalTitle	= modalDiv.find('.modal-title').text(slresults.title);
						modalBody	= modalDiv.find('.modal-body').html(slresults.body);
						modalDiv.modal('show');
						initShortlistForm(saveBtn,listBtn);
					}
				});

			} else {
				alert('We were unable to save this supplier at this time');
			}

		}
	});
}

$('.selectco').click(function(e){
	var acct	= $(this).val();
	var d	= $(this).data();
	var maxSelect	= rfiMaxSelections();	//RMCaterpillar //RM6917
	preSelComps(d['searchpos']);
	var selected	= cntSelComps();

	if($(this).prop('checked')){ selected++; }
	if(selected > maxSelect){	//RMCaterpillar //RM6917
		if(isRFIMaxOverride()) {
			var msg = "You can select a maximum of " + maxSelect + " companies to contact.\n";
		} else {
			var msg = "You can only select a maximum of up to 5 companies to compare.\n";
			msg += "To contact more than 5 companies, click Request a Quote to proceed, and then select Contact Additional Suppliers.";
		}
		alert(msg);

		$(this).prop('checked', false);
		return false;
	}

	if($(this).prop('checked')){ //RM9377
		if (d['rskelg']) { rskelg.add(d['searchpos'],acct); }
		if(coselect[d['searchpos']]){
			coselect.splice( 1, 0, acct+"-"+d['coname']+"-"+d['quotable']+"-"+d['contact']);
		}else{
			coselect[d['searchpos']]	= acct+"-"+d['coname']+"-"+d['quotable']+"-"+d['contact'];
		}

	} else {
		rskelg.remove(acct);
		delete coselect[d['searchpos']];
	}

	if(selected <= maxSelect){ // only added if there 5 or less
		saveDataInCookie(acct);
	}
	showSelCookie();
	showSelectedSuppliers();
	compRfiInit();
	//alert('acct: '+$(this).val()+'\ncompany: '+d['coname']+'\nsearchpos: '+d['searchpos']+'\nrskelg: '+d['rskelg']+'\nchecked: '+$(this).prop('checked'));
});

function saveDataInCookie(acct){
	var listBtn	= $('.ico-btn-shortlist[data-company_id="'+acct+'"]');
	if(listBtn.length >0){
		var params	=  listBtn.data();
		var data = JSON.stringify(params);
		$.cookie('_supplier-' + acct, data, { path: '/', domain: '.thomasnet.com' });
	}
}
function removeDataInCookie(acct){
	$.cookie('_supplier-' + acct, '', { expires: -1, path: '/', domain: 'thomasnet.com' });
}

var setTlmUtagLink = function ( queryString, eventType ) {
	var tlmTags	= getTlmTagsFromQS(queryString, eventType);
	if(!isEmpty(tlmTags))	{
		if(typeof utag_data['client_ip']!="undefined" && typeof tlmTags['client_ip']=="undefined"){
			tlmTags['client_ip']	= utag_data['client_ip'];
		}
		if(typeof utag_data['servercallhost']!="undefined" && typeof tlmTags['servercallhost']=="undefined"){
			tlmTags['servercallhost']	= utag_data['servercallhost'];
		}
		//alert(JSON.stringify(tlmTags, null, 2));
		if(typeof utag !== 'undefined'){utag.link(tlmTags)};
	}
}

function setRegWall(mode, message, origin, goto){
	$.ajax({
		url: tnetRoot+'/scripts/regwall.php',
		dataType: 'jsonp',
		data: { mode:mode, message:message, origin:origin, goto:goto },
		success: function (results) {
			if(results.status=='Success'){
				location.href	= results.rwurl;
			} else {
				alert('User must log in/register');
			}
		}
	});
}

function showAddlSupps(cov, heading, allaccts){
	// 4-18-2017 (RM 9638(
	$.ajax({
		url: tnetRoot+'/scripts/additional-suppliers.php',
		method: "get",
		dataType: "html",
		data: { cov:cov, heading:heading, allaccts:allaccts},
		success: function (results) {
			if(results){
				$('#xas').html(results);
				$('a[data-event_type="ilink"]').click(function(){
					var d	= $(this).data();
					document.cookie = "ad_click=" +escape(d['ad_click']) + '; domain=.thomasnet.com' + '; path=/';
				});
				jsDCS['ad_impression']	= utag_data['ad_impression'];
				jsDCS['ad_impression'].push('AS');
				utag.view(jsDCS);
			}
		}
	});
}

function showSelCookie(){
	var newselco = "";
	for (var key in coselect) {
		if (coselect.hasOwnProperty(key) && coselect[key]) {
			var data = coselect[key];
			if(newselco){ newselco += "|"; }
			newselco += key+"-"+data;
		}
	}
	$.cookie('_selco', newselco, { path: '/', domain: '.thomasnet.com' });
}

function showSelectedSuppliers(){	// formerly compareSupplierBox
	preSelComps('');
	var cohtml = '';
	var preselco	= !isEmpty($.cookie('_selco')) ? $.cookie('_selco') : '';
	var preseldata	= preselco.split("|");
	var supSelCt	= 0; //RM9377
	var isContactable = 0;
	var unQuotableNames = [];
	$('.profile-card').removeClass('active');
	for(x=0; x < preseldata.length; x++){
		var idpos	= preseldata[x].indexOf('-');
		var copos	= preseldata[x].indexOf('-', idpos+1);
		var contactpos	= preseldata[x].lastIndexOf('-');
		var rk	= preseldata[x].substring(0,idpos);
		var id	= preseldata[x].substring(idpos+1,copos);
		var nm	= preseldata[x].substring(copos+1,preseldata[x].length -4);
		var iscontact = preseldata[x].substring(contactpos+1);
		var isquotable = preseldata[x].substring(contactpos-1, contactpos);
		nm	= nm.replace(/\+/g, ' ');
		if (isquotable === "0") {
			unQuotableNames.push("<span class='unquotable'>"+nm+"</span>");
		}
		if(id && nm){
			var invalidSupplier = isquotable === "0" ? 'rfi-cart__supplier--invalid' : ''
			supSelCt++; //RM9377
			cohtml += "<a href=\"#\" class=\"rfi-cart__supplier " + invalidSupplier + "\" data-account=\"" + id + "\"" +
				" data-searchpos=\"" + rk + "\" " +
        "data-quotable=\"" + isquotable + "\">" + nm + "</a>\n";
			$('#pc'+id).addClass('active');
		}
		if(iscontact === "1"){
			isContactable++;
		}
	}
	const unQuotableNamesString = unQuotableNames.length < 3 ?
		unQuotableNames.join(' and ') :
		`${unQuotableNames.slice(0, -1).join(', ')}, and ${unQuotableNames[unQuotableNames.length - 1]}`;

	$('.rfi-cart__count').html(supSelCt);
	$('.rfi-cart__body').html(cohtml);

	const warningMessageElement = $('#rfi-cart--warning-message');
	if (unQuotableNames.length === 0) {
		$('.rfi-cart__body')[0].classList.remove('rfi-cart__body--show-invalid')
		if (warningMessageElement.hasClass("rfi-cart--warning-message--shown")) {
			warningMessageElement.removeClass("rfi-cart--warning-message--shown")
		}
	}

	var warningMessage = `Supplier${unQuotableNames.length > 1 ? "s" : ''} ${unQuotableNamesString} can’t be added to your Project. Please remove them or select different suppliers to continue.`;
	$(`.rfi-cart--warning-message`).html(warningMessage);

	if(supSelCt > 1){
		$('.btn-compare, .btn-dnb').removeClass('btn-disabled');
		$('.rfi-cart').show();
	} else if(supSelCt === 1){
		$('.btn-compare, .btn-dnb').addClass('btn-disabled');
		$('.rfi-cart').show();
	} else {
		$('.rfi-cart').hide();
		$('.btn-rfimulti, .btn-compare, .btn-dnb').addClass('btn-disabled');
	}

	if(supSelCt > 0 && isContactable > 0){
		$('.btn-rfimulti').removeClass('btn-disabled');
	} else {
		$('.btn-rfimulti').addClass('btn-disabled');
	}

	initSelComp();
}

function swapMenu(show, noshow) {
	$('#'+show).css("display","block");
	$('#'+noshow).css("display","none");
}

function display(show, noshow) {
	$('#'+show).removeClass("noshow");
	$('#'+noshow).addClass("noshow");
	$('.'+show).removeClass('noshow');

}

function hide(show, noshow){
	$('#'+show).removeClass("noshow");
	$('#'+noshow).addClass("noshow");
	$('.'+noshow).addClass('noshow');
}

function removeCognitoCookies() {
  for (var key in $.cookie()) {
    if (key.indexOf("CognitoIdentityServiceProvider") > -1 || key.indexOf("access_token_cookie") > -1) {
      $.removeCookie(key, { path: "/", domain: ".thomasnet.com" });
    }
  }
}

function userLogOut(goto){
	removeCognitoCookies();
	$.ajax({
		url: tnetRoot+"/scripts/account-logout.php",
		dataType: "json",
		success: function (wwwSubdom) {
			const isProd = wwwSubdom === "https://www.thomasnet.com";
			const logoutCallback = new URL(isProd ? "https://www.thomasnet.com/api/auth/logout/callback" : "https://test-www.thomasnet.com/api/auth/logout/callback");
			const logoutUrl = new URL(isProd ? "https://www.xometry.com/logout" : "https://www.stage.xometry.net/logout");
			logoutCallback.searchParams.set("destination", location.href);
			logoutUrl.searchParams.set("skipLoginDestination", logoutCallback.href);
			location.href = logoutUrl;

		}
	});
}

function validateZip(zipcode){	// 9-19-2017 (RM 10201)
	if(typeof(zipcode)===undefined)	{ zipcode = ''; }
	this.zip	= typeof(zipcode)===undefined ? '' : zipcode;

	this.formatClean = function(){
		// strip out non alphanumeric characters and change to uppercase
		return this.zip.replace(/[^a-z0-9+]+/gi, '').toUpperCase();
	}

	this.formatDisplay = function(){
		// reformat zip/postal code to #####, #####-####, XXX, or XXX XXX
		var zipcode	= this.formatClean();
		if(this.validUSA() && zipcode.length === 9){
			return zipcode.toString().slice(0, 5) + '-' + zipcode.toString().slice(5);
		//} else if(this.validCAN6()){	// should probably have the spave here, but db only stores 6 char in zip field
		//	return zipcode.toString().slice(0, 3) + ' ' + zipcode.toString().slice(3)
		} else if(this.valid()){
			return zipcode;
		} else {
			return this.zip;
		}
	}

	this.validCAN6 = function(){
		// check for properly formatted 6 character Canadian postal code
		chkZip	= new RegExp(/^([A-CEGHJ-NPRSTVXY]\d[A-CEGHJ-NPRSTV-Z]\d[A-CEGHJ-NPRSTV-Z]\d)$/);
		return chkZip.test(this.formatClean());
	}

	this.validCAN = function(){
		// check for properly formatted 3 or 6 character Canadian postal code
		chkZip	= new RegExp(/^([A-CEGHJ-NPRSTVXY]\d[A-CEGHJ-NPRSTV-Z])$/);
		return chkZip.test(this.formatClean()) || this.validCAN6();
	}

	this.validUSA5 = function(){
		// check for properly formatted 5 digit US zip code
		chkZip	= new RegExp(/^(\d{5}?)$/);
		return chkZip.test(this.formatClean());
	}

	this.validUSA = function(){
		// check for properly formatted 5 or 9 digit US zip code
		chkZip	= new RegExp(/^(\d{9}?)$/);
		return chkZip.test(this.formatClean()) || this.validUSA5();
	}

	this.valid = function(){
		// check for properly formatted 5/9 digit US zip code OR 3/6 character Canadian postal code
		return this.validUSA() || this.validCAN();
	}

	this.validLookup = function(){
		// check for properly formatted 5 digit US zip code OR 6 character Canadian postal code
		// used for db lookups such as autocomplete functions
		return this.validUSA5() || this.validCAN6();
	}
}

//TW-2298 add the search parameters
function  validKsearchWithSearchTerm(){
	var valid = validKwSearch();
	// way to prevent the submit to continue if the search value was not valid
	if(valid === false){
		return false;
	}
	$('#searchtermk').val($.trim($('#kwhat').val()));
}
function validZipSearchWithSearchTerm(){
	var valid = validZipSearch();
    // way to prevent the submit to continue if the zipcode is not valid
	if(valid === false){
		return false;
	}
	$('#searchtermz').val($.trim($('#postal').val()));
}

function validKwSearch(){
	var kwhat	= $.trim($('#kwhat').prop('value'));
	if(kwhat=='' || kwhat==$('#kwhat').attr('placeholder')){
		alert('Please enter a keyword');
		$('#kwhat').focus();
		return false;
	}
}

function validZipSearch(){/*RM 9512*/
	var ErrMsg	= "";
	var ErrField	= "";
	var postal	= $.trim($('#postal').prop('value'));
	var validzip	= new validateZip(postal);
	$('#postal').val(validzip.formatDisplay());
	if(postal=='' || postal==$('#postal').attr('placeholder') || (!validzip.validUSA5() && !validzip.validCAN6())){
		alert('\"Zip/Postal Code\" appears to be invalid:\n\nUS codes should contain 5 digits\nCanadian codes should contain 6 characters');
		$('#postal').focus();
		return false;
	}
}

function openProfileTab(evt, option, disable, tgrams) {
	var i, tabcontent, tablinks;

	//make the selected tab active and show the content
	$(`#${option}`).removeClass("d-none");
	evt.currentTarget.className += " active";
	//remove the active class from previously active content
	$(`#${disable}`).removeClass("active");

	var disableContent = disable.match(/btncatalog/g) ? `catalog__${tgrams}` : `video__${tgrams}`;

	$(`#${disableContent}`).addClass("d-none");
  }

$('#tnet_navsearch, #site-search').submit(function(){
	var what	= $(this).find('input:text');
	what.val($.trim(what.val()));
	var x	= /[0-9a-zA-Z]/;
	if(!what.val().match(x)){
		alert('Please enter a search term\n(Example: Valves)');
		what.focus();
		return false;
	}

	if(typeof $('#tns_which')!==undefined){
		var which	= $('#tns_which').val();
		if(tnsProp=='pcb' && which=='product'){
			location.href	= '/catalogs/results/product/?what=' + escape(val) + '&searchx=true';
			return false;
		} else if(tnsProp=='cad' && which=='product'){
			location.href	= '/cadmodels/results/product/?what=' + escape(val) + '&searchx=true';
			return false;
		}
	}
});

function viewContent(url, cid, origin, params, self, reload){
	var paramobj	= parseQueryString(params);

	paramobj['framesrc']	= escape(url);
	if(cid > '' && (isEmpty(paramobj['cid']) || paramobj['cid']!=cid))	{ paramobj['cid'] = cid; }

	if(document.location.protocol == 'https:' && url.indexOf('thomasnet.com') < 0 && url.indexOf('https:') < 0){	// 8-11-2015 (RM 7268 / 7574 / TW-50)
		if(isEmpty(paramobj['hierarchy_1'])){
			paramobj['hierarchy_1'] = 'TNET';
			paramobj['hierarchy_2'] = 'COMPANYINFO';
			paramobj['hierarchy_3'] = 'PDFCATALOG';
			paramobj['hierarchy_4'] = 'HOME';
		}
		if(isEmpty(paramobj['conversion_action']))	{ paramobj['conversion_action'] = 'Link to Website'; }
		if(isEmpty(paramobj['page_content_group'])){ paramobj['page_content_group'] = 'PDF Links'; }
		if(origin > '')	{ paramobj['WTZO'] = origin; }
		urlParams	= qsFromObj(paramobj);

		setTlmUtagLink(urlParams);
		if(self  > ''){
			location.href	= url;
		} else {
			newwin=window.open(url,'tnetview');
			if(!newwin){
				// alert('Your browser settings are preventing us from displaying the file');
				location.href	= url;
				return false;
			}
			if (window.focus) {newwin.focus()}
			return false;
		}
	}

	if(origin > '')	{ paramobj['WTZO'] = origin; delete paramobj['click_origin'];}
	urlParams	= qsFromObj(paramobj);
	var theURL	= tnetRoot + '/viewcontent.html?' + urlParams;

	if(self  > ''){
		location.href	= theURL;
		return false;
	} else {
		var features	= "height=600,width="+(screenW-50)+",RESIZABLE=1,TOOLBAR=0,MENUBAR=0,LOCATION=0,STATUS=0,DIRECTORIES=0,SCROLLBARS=0";
		var newwin = window.open(theURL,'tnetview',features);
		if(!newwin){
			// alert('Your browser settings are preventing us from displaying the file');
			location.href   = theURL;
			return false;
		}
		//newwin.creator  = self;
		if (window.focus) {newwin.focus()}
		newwin.focus();
		if(reload) { window.location.reload(true); }
		return true;
	}
}

$(document).ready(function(){
	$(document).on("rw5-redirect", function(){
		regWall.redirect();
	})


	$('a[data-ad_click="URMYSO"]').click(function(e){
		e.preventDefault();
		userLogOut();
	});


	$('.newslettersignup').submit(function(e){
		e.preventDefault();
		var f	= $(this);
		var v	= f.find('input[name=email]');
		v.val($.trim(v.val()));
		if(!isEmail(v.val())){
			alert('Please enter a valid email address');
			v.focus();
			return false;
		} else {
			liteReg.run({
				email : v.val(),
				origin : f.find('input[name=origin]').val(),
				extralite : '1'
			}).done(function(rslt) {
				if ($.cookie('tinid').length == 0) {
					alert('An error occurred during the submit process.');
				} else {
					f.find('input[name=tinid]').val($.cookie('tinid'));
					$.ajax({
						url: tnetRoot+'/scripts/subscribe-industrial-daily.php',
						method: 'post',
						dataType: 'jsonp',
						data: f.serialize()
					}).done(function (data) {
						var regstat	= data.response;
						if(regstat!='success'){
							alert('The following error occurred:\n' + regstat);
						} else {
							$.ajax({
								url: tnetRoot+'/scripts/newsletter-cta.php',
								method: 'get',
								dataType: 'jsonp'
							}).done(function (ctadata) {
								$('#newsletter-cta-container').html(ctadata.html);
							});
							alert('Thank you for subscribing');
						}
					}).fail(function(jqXHR, textStatus, errorThrown) {
						alert(JSON.stringify(jqXHR.responseText, null, 4));
					});
				}
			}).fail(function(rslt) {
				console.log('liteReg failed');
				if (rslt.err.type == 'f') {
					alert('The following information is missing or incomplete:\n' + rslt.err.msg);
				} else { // For types 'i' and 'g'
					alert('The following error occurred:\n' + rslt.err.msg);
				}
			});
		}
	});

	$('.subscribe-form').submit(function(e){	// similar to function - can be removed once they make final decision on form behavior
		e.preventDefault();
		var f	= $(this);
		var s	= f.find('input[type=submit]');
		var v	= f.find('input[name=email]');
		var m	= f.find('.form-error-msg');
		var w	= f.closest('.subscribe-form-wrap');
		var h	= w.find('.sf-header');
		var b	= w.find('.sf-body');
		//var d	= f.closest('.subscribe-form');

		s.val('Processing...').prop('disabled', true);
		//v.prop('disabled', true);
		v.val($.trim(v.val()));
		if(!isEmail(v.val())){
			f.addClass('has-error');
			m.show().html('Please enter a valid email address');
			s.val('Subscribe').prop('disabled', false);
			//v.prop('disabled', false);
			return false;
		} else {
			f.removeClass('has-error');
			m.hide();

			liteReg.run({
				email : v.val(),
				origin : f.find('input[name=origin]').val(),
				extralite : '1'
			}).done(function(rslt) {
				if ($.cookie('tinid').length == 0) {
					f.hide();
					w.addClass('has-error');
					b.html('An error occurred during the submit process.');
				} else {
					f.find('input[name=tinid]').val($.cookie('tinid'));
					$.ajax({
						url: tnetRoot+'/scripts/subscribe-industrial-daily.php',
						method: 'post',
						dataType: 'jsonp',
						data: f.serialize()
					}).done(function (data) {
						var regstat	= data.response;
						if(regstat!='success'){
							f.hide();
							w.addClass('has-error');
							b.html('The following error occurred:<br>' + regstat);
						} else {
							f.hide();
							h.html('Thank You!');
							b.html('Thank you for subscribing');
						}
						//$('.subscribe-form').not(d).slideUp();
					}).fail(function(jqXHR, textStatus, errorThrown) {
							f.hide();
							w.addClass('has-error');
							b.html(jqXHR.responseText+'<br><br>'+textStatus);
						alert(JSON.stringify(jqXHR.responseText, null, 4));
					});
				}
			}).fail(function(rslt) {
				console.log('liteReg failed');
				if (rslt.err.type == 'f') {
					f.addClass('has-error');
					m.show().html('The following information is missing or incomplete:<br>' + rslt.err.msg);
					s.val('Subscribe').prop('disabled', false);
					//v.prop('disabled', false);

				} else { // For types 'i' and 'g'
					f.hide();
					w.addClass('has-error');
					b.html('The following error occurred:<br>' + rslt.err.msg);
				}
			});
		}
	});

	// $('#article-register').click(function(){
	// 	regWall.launch({})
	// })

	// $('#article-signin').click(function(){
	// 	regWall.launch({})
	// })

});

// RM9792
/*********************************/
/*     HOMEPAGE AUTOCOMPLETE     */
/*********************************/
var reEscape	= new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'].join('|\\') + ')', 'g');
var hiddenID	= "";
var limit	= 10;
var domestic	= 0;

function fnFormatResult (value, currentValue) {
	var pattern = '(' + currentValue.replace(reEscape, '\\$1') + ')';
	return value.replace(new RegExp(pattern, "gi"), "<span class='achilite'>$1<\/span>");
}

function expandCategory (cat){
	var catLabel = {H:"Product / Service Categories", C:"Company Names", B:"Brand Names", P:"Product Catalogs"};
	return typeof catLabel[cat]!==undefined ? catLabel[cat] : cat;
}

function initAutocomplete(args) {
	var formfld = ('formfld' in args ? args.formfld : $('#homepagesearch'));
	var whatfld = ('whatfld' in args ? args.whatfld : $('#ss_what'));
	var wtzofld = ('wtzofld' in args ? args.wtzofld : $('#wtzo'));
	var customClass = ('customClass' in args ? args.customClass : '');

	// Initializing the 'what' field because browsers like to hold the last value even after reload.
	whatfld.val('');
	whatfld.blur();
	whatfld.focus();
	// Create new "catcomplete" widget that extends Autocomplete
	$.widget( "custom.catcomplete", $.ui.autocomplete, {
		_create: function() {
			$.ui.autocomplete.prototype._create.call(this);
			this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
		},
		_renderMenu: function (ul, items) {
			if (customClass.length) { ul.addClass(customClass); }
			var that = this, currentCategory = "";
			$.each(items, function(index, item) {
				var li;
				if (item.category != currentCategory) {
					if(item.category != 'S') { //Seeall
						ul.append("<li class='ui-autocomplete-category'>" + expandCategory(item.category) + "</li>");
					}
					currentCategory = item.category;
				}
				li = that._renderItem(ul, item).data('ui-autocomplete-item', item);
				if (item.category) { li.attr( "aria-label", item.category + " : " + item.value ); }
			});
		},
		_renderItem: function(ul, item) {
			if (item.hasOwnProperty('seeall')) {
				return $("<li class=\"ui-autocomplete-item seeall\"></li>")
					.data("item.autocomplete", item)
					.append("<a href=\"\">See all matching results</a>")
					.appendTo(ul);
			}
			var str = "<a class='ui-corner-all'>" + item.label;
			if (item.category=="H") {
				str += " <i class='hdcount'>(" + item.count + " " + (item.count==1 ? "supplier" : "suppliers") + ")</i>";
			}
			else if (item.category=="C") {
				 str += " <i class='hdcount'>(" + item.city + ", " + item.state + ")</i>";
			}
			else if (item.category=="P") {
				str += " <i class='hdcount'>(" + item.catalogs_count + " " + (item.catalogs_count==1 ? "catalog" : "catalogs");
				str += (item.catalogs_cad_count>0 ? ", "+item.catalogs_cad_count+" with CAD models" : "");
				str += ")</i>";
			}
			str += "</a>";
			return $("<li></li>")
				.data("item.autocomplete", item)
				.append(str)
				.appendTo(ul);
		}
	});

	// Attach catcomplete to whatfld input box
	whatfld.catcomplete({
		source: function (request, response) {
			$.ajax({
				url: tnetRoot+"/scripts/search-suggest.php",
				dataType: "jsonp",
				data: { term: request.term, mode: '', limit: limit, domestic: domestic },
				success: function (data) {
					response($.map(data, function(item) {
						return { label: fnFormatResult(item.description, request.term), typed: request.term, value: item.description, heading: item.heading, acct: item.acct, id: item.id, count: item.count, category:item.category, city:item.city, state:item.state, catalogs_count:item.catalogs_count, catalogs_cad_count:item.catalogs_cad_count }
					}));
				}
			});
		},
		minLength: 1,
		delay: 200,
		response: function (e, ui) {
			ui.content.push({seeall:1, category : 'S' });
		},
		select: function(event, ui) {
			if (ui.item.hasOwnProperty('seeall')) { //"See all..."
				event.preventDefault();
				formfld.find('input[name=hs]').val('');
				formfld.trigger('submit');
				return false;
			}
			setTimeout(function () {
				var rslturl;
				if(ui.item.category=='H'){
					rslturl = '/nsearch.html?heading='+ui.item.heading+'&cov=NA';
				} else if(ui.item.category=='C'){
					rslturl = '/profile/'+ui.item.acct+'/' + makeFrag(ui.item.value) + '.html?cov=NA';
					//alert(rslturl);
				} else if(ui.item.category=='B'){
					rslturl = '/bsearch.html?brandid='+ui.item.id+'&cov=NA';
				} else if(ui.item.category=='P'){
					rslturl = '/nsearch.html?heading='+ui.item.heading+'&cov=NA&pdtl=E'; /* RM 9725 */
				}
				if(rslturl){
					rslturl += '&what=' + encodeURIComponent(ui.item.value) + '&WTZO=' + wtzofld.val() + '&typed_term=' + encodeURIComponent(ui.item.typed);
					location.href = rslturl;
				}
				$(this).blur();
				$(this).val(ui.item.value);
				if (hiddenID) { $('#'+hiddenID).val(ui.item.heading); }
			}, 1);
		}
	});

	formfld.submit(function(e) {
		var letters = /[0-9a-zA-Z]/;
		if(whatfld.val().length == 0 || whatfld.val() == whatfld.prop('title') || !whatfld.val().match(letters)) {
			alert("Please enter a search term\n(Example: Valves)");
			e.preventDefault();
		}
	});
}
/****************************/
/*     END AUTOCOMPLETE     */
/****************************/

/* authors page */
$(".imgrollover").hover(function(){ //TW-24
	$(this).attr("src", function(index, attr){return attr.replace("_off", "_on");});
}, function(){
	$(this).attr("src", function(index, attr){return attr.replace("_on", "_off");});
});

$('.siteFeedback').click(function(e){
	e.preventDefault();
	var crURL	= tnetRoot+'/scripts/feedback-form.php';
	if($(this).data('ad_click')){
		document.cookie = 'ad_click='+$(this).data('ad_click')+'; domain=.thomasnet.com; path=/';
	}
	$('#modalFeedback').on('show.bs.modal', function (e) {
		$(this).find('.modal-body').load(crURL);
	});
	$('#modalFeedback').modal();
});

$('.btn-rfimulti').click(function(e){
	e.preventDefault();
})
// submit press release begins
$('#prSubmitForm').on('submit.dolitereg', (function(e){
	const errMsgDiv = $('#errMsg');
	let errMsg	= [];
	let errReqFld	= [];
	let errFld;

	// make sure actual values are entered
	$(this).find('.form-control').each(function() {
		$(this).val($.trim($(this).val()));
	});

	const country = $('#companyCountry').val();
	let rx = /^(US|CA)$/;

	$(this).find('[data-validation="required"]').each(function() {
		if(
			(!$(this).val() && this.id!=='companyState') ||
			(!$(this).val() && this.id==='companyState' && rx.exec(country)) || // state only required if US/CA
			($(this).prop('type')==='email' && !isEmail($(this).val()))
		){
			if(!errFld)	{ errFld = $(this); }
			$(this).val('').addClass('is-invalid');
			var fldLabel = $("label[for='"+this.id+"']");
			errReqFld.push(fldLabel.text());
		} else {
			$(this).removeClass('is-invalid');
		}
	});

	let error	= errReqFld.join(', ');
	if(error){
		errMsg.push("<b>Missing Required Fields:</b><br>"+error);
	}

	// check file types
	let fileTypeErr = 0;
	let file1 = $('#AttachFile1').val();
	let fileTypes1 = ['doc', 'docx', 'pdf', 'rtf', 'txt'];
	if(file1){
		let ext = file1.split('.').pop().toLowerCase();
		if(fileTypes1.indexOf(ext) < 0){
			fileTypeErr++;
		}
	}

	let file2 = $('#AttachFile2').val();
	let fileTypes2 = ['jpg', 'jpeg', 'png', 'tiff', 'tif', 'gif'];
	if(file2){
		let ext = file2.split('.').pop().toLowerCase();
		if(fileTypes2.indexOf(ext) < 0){
			fileTypeErr++;
		}
	}
	if(fileTypeErr){
		errMsg.push("<b>Invalid file type:</b><br>See the list of accepted file types below");
	}

	// Remove error highlighting once they start changing the data in the field
	$('.form-group .is-invalid').bind('keyup change', function(e) {
		if($(this).val()){
			$(this).removeClass('is-invalid');
		}
	});

	if(errMsg.length > 0){
		errMsgDiv.html(errMsg.join('<br><br>')).show();
		errFld.focus();
		$('html, body').animate({scrollTop:errMsgDiv.position().top - 64}, 'slow');
		return false;
	}

	e.preventDefault();

	liteReg.run({
		fname: $('#contactFirstName').val(),
		lname: $('#contactLastName').val(),
		email: $('#contactEmail').val(),
		company: $('#contactOrg').val(),
		job_function: $('#job_function').val(),
		job_discipline: $('#job_discipline').val(),
		job_level: $('#job_level').val(),
		industry: $('#contactIndustry').val(),
		origin: 'LiteregSubmitPR'
	}).done(function(rslt) {
		// remove this submit handler, and then submit the form.
		$('#prSubmitForm').off('submit.dolitereg');
		$('#prSubmitForm').submit();
	});
}));

$('.custom-file-input').on('change', function() {
	let fileName = $(this).val().split('\\').pop();
	$(this).next('.custom-file-label').html(fileName);
});

// submit press release ends

$('#job_function').on('change', function(){
	const discipline = $('#job_discipline');
	if($(this).val()==='management'){
		$(discipline).attr('data-validation','required');
	} else {
		$(discipline).attr('data-validation','optional');
		$(discipline).removeClass('is-invalid');
	}
	$(discipline).html('<option value="">- Select -</option>').attr('disabled', true);
	if(typeof jobDisciplines[$(this).val()] !== 'undefined'){
		$.each(jobDisciplines[$(this).val()], function(k, v){
			$('<option></option>').val(k).text(v).appendTo($(discipline));
		});
		$(discipline).attr('disabled', false);
	}
});
