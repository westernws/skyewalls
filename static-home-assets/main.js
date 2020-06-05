// Google Tag Manager
(function (w, d, s, l, i) {
	w[l] = w[l] || [];
	w[l].push({
		'gtm.start':
			new Date().getTime(), event: 'gtm.js'
	});
	var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
	j.async = true;
	j.src =
		'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
	f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-KDGZ4T2');

// End Google Tag Manager

// Facebook Pixel Code

!function (f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function () {
		n.callMethod ?

			n.callMethod.apply(n, arguments) : n.queue.push(arguments)
	};

	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = '2.0';

	n.queue = [];
	t = b.createElement(e);
	t.async = !0;

	t.src = v;
	s = b.getElementsByTagName(e)[0];

	s.parentNode.insertBefore(t, s)
}(window, document, 'script',

	'https://connect.facebook.net/en_US/fbevents.js');


fbq('init', '291772365161169');

fbq('track', 'PageView');

// End Facebook Pixel Code

function setREVStartSize(e) {
	try {
		var pw = document.getElementById(e.c).parentNode.offsetWidth,
			newh;
		pw = pw === 0 || isNaN(pw) ? window.innerWidth : pw;
		e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
		e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
		e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
		e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
		e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
		e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
		e.mh = e.mh === undefined || e.mh == '' || e.mh === 'auto' ? 0 : parseInt(e.mh, 0);
		if (e.layout === 'fullscreen' || e.l === 'fullscreen')
			newh = Math.max(e.mh, window.innerHeight);
		else {
			e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
			for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
			e.gh = e.el === undefined || e.el === '' || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
			e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
			for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

			var nl = new Array(e.rl.length),
				ix = 0,
				sl;
			e.tabw = e.tabhide >= pw ? 0 : e.tabw;
			e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
			e.tabh = e.tabhide >= pw ? 0 : e.tabh;
			e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
			for (var i in e.rl) nl[i] = e.rl[i] < window.innerWidth ? 0 : e.rl[i];
			sl = nl[0];
			for (var i in nl) if (sl > nl[i] && nl[i] > 0) {
				sl = nl[i];
				ix = i;
			}
			var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);

			newh = (e.type === 'carousel' && e.justify === 'true' ? e.gh[ix] : (e.gh[ix] * m)) + (e.tabh + e.thumbh);
		}

		if (window.rs_init_css === undefined) window.rs_init_css = document.head.appendChild(document.createElement('style'));
		document.getElementById(e.c).height = newh;
		window.rs_init_css.innerHTML += '#' + e.c + '_wrapper { height: ' + newh + 'px }';
	} catch (e) {
		console.log('Failure at Presize of Slider:' + e)
	}
};

setREVStartSize({
	c: 'rev_slider_27_1',
	rl: [1240, 1024, 778, 480],
	el: [630, 768, 960, 720],
	gw: [1240, 1024, 778, 480],
	gh: [630, 570, 472, 352],
	type: 'hero',
	justify: '',
	layout: 'fullwidth',
	mh: '0'
});
var revapi27,
	tpj;
jQuery(function () {
	tpj = jQuery;
	if (tpj('#rev_slider_27_1').revolution == undefined) {
		revslider_showDoubleJqueryError('#rev_slider_27_1');
	} else {
		revapi27 = tpj('#rev_slider_27_1').show().revolution({
			sliderType: 'hero',
			jsFileLocation: '//skyewallsbywws.com/wp-content/plugins/revslider/public/assets/js/',
			sliderLayout: 'fullwidth',
			visibilityLevels: '1240,1024,778,480',
			gridwidth: '1240,1024,778,480',
			gridheight: '630,570,472,352',
			lazyType: 'all',
			spinner: 'spinner7',
			keepBPHeight: true,
			editorheight: '630,768,960,720',
			responsiveLevels: '1240,1024,778,480',
			disableProgressBar: 'on',
			navigation: {
				onHoverStop: false
			},
			parallax: {
				levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
				type: 'scroll',
				origo: 'slidercenter',
				speed: 0
			},
			fallbacks: {
				allowHTML5AutoPlayOnAndroid: true
			},
		});
	}

});

// BEGIN real stories

(function () {
	'use strict'

	var $ = window.jQuery;
	var $beforeAfter = $('#real-stories');

	if ($beforeAfter.find('.image-carousel .vc_item').length <= 3) {
		$beforeAfter.find('.vc_carousel-indicators').hide();
	}
	var onBeforeAfterOver = function (elem, attr) {
		if (/After_/.test(attr)) {
			return attr.replace(/After_/g, 'Before_');
		}
		return attr;
	};
	var onBeforeAfterOut = function (elem, attr) {
		if (/Before_/.test(attr)) {
			return attr.replace(/Before_/g, 'After_');
		}
		return attr;
	};
	$beforeAfter.find('.image-carousel .vc_item img').hover(
		function () {
			$(this).attr('src', onBeforeAfterOver);
			$(this).attr('srcset', onBeforeAfterOver);
		},
		function () {
			$(this).attr('src', onBeforeAfterOut);
			$(this).attr('srcset', onBeforeAfterOut);
		},
	);
}());

// END real stories

(function () {
	'use strict'

	var $ = window.jQuery;
	var $chooser = $('#chooser');
	var activatePanel = function (idx) {
		$chooser.find('.chooser-step, .chooser-panel').removeClass('is-active');
		$chooser.find('.chooser-steps .chooser-step:eq(' + idx + '), .chooser-panels .chooser-panel:eq(' + idx + ')').addClass('is-active');
	}

	activatePanel(0);
	$chooser.find('.chooser-step').on('click', function () {
		var idx = $(this).parent().find('.chooser-step').index($(this));

		activatePanel(idx);
	});
}());
setREVStartSize({
	c: 'rev_slider_16_2',
	rl: [1240, 1024, 778, 480],
	el: [250, 768, 960, 720],
	gw: [250, 250, 250, 250],
	gh: [250, 250, 250, 250],
	type: 'carousel',
	justify: '',
	layout: 'fullwidth',
	mh: '0'
});
var revapi16,
	tpj;
jQuery(function () {
	tpj = jQuery;
	if (tpj('#rev_slider_16_2').revolution == undefined) {
		revslider_showDoubleJqueryError('#rev_slider_16_2');
	} else {
		revapi16 = tpj('#rev_slider_16_2').show().revolution({
			sliderType: 'carousel',
			jsFileLocation: '//skyewallsbywws.com/wp-content/plugins/revslider/public/assets/js/',
			sliderLayout: 'fullwidth',
			visibilityLevels: '1240,1024,778,480',
			gridwidth: '250,250,250,250',
			gridheight: '250,250,250,250',
			spinner: 'spinner3',
			editorheight: '250,768,960,720',
			responsiveLevels: '1240,1024,778,480',
			disableProgressBar: 'on',
			carousel: {
				showLayersAllTime: 'all',
				infinity: true,
				maxVisibleItems: 15,
				border_radius: '2px',
				padding_top: '20px'
			},
			fallbacks: {
				allowHTML5AutoPlayOnAndroid: true
			},
		});
	}

});
var htmlDivCss = '	#rev_slider_16_2_wrapper rs-loader.spinner3 div { background-color: #4cd964 !important; } ';
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}