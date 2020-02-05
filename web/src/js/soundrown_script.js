import $ from 'jquery';
import { soundManager } from 'soundmanager2';
import SC from 'soundcloud';

$(document).ready(function () {

	//SOUNDBAR GENERAL
	//SPLASH
	setTimeout(function () { $('.splash-container').hide(); }, 5000);

	$('.splash-container').click(function () {
		$(this).hide();
	});

	//ON READY HIDES
	$('.sound-volume').hide();
	// $('#mute').hide();

	//SOUNDS OBJECT
	function Sounds(sound) {
		this.sound = sound;
		this.soundID = "#" + sound;
		this.soundBG = "./bg/" + sound + "bg.jpg";

		this.soundTrigger = function () {
			if (!$(this.soundID).hasClass('iconactive')) {
				$('#bg').css('background-image', 'url("' + this.soundBG + '")');
				// _gaq.push(['_trackEvent', 'Sounds', 'Play', this.sound]);
				// $(this.soundID).find('.pauseicon').css('z-index', '1');
				$(this.soundID).find('.sound-volume').show();
			}
			else {
				// _gaq.push(['_trackEvent', 'Sounds', 'Pause', this.sound]);
				// $(this.soundID).find('.pauseicon').css('z-index', '-1');
				$(this.soundID).find('.sound-volume').hide();
			}
			return false;
		}
	};

	//COFFEE
	var coffee = new Sounds("coffee");
	$(coffee.soundID).click(function () {
		coffee.soundTrigger();
	});

	//RAIN
	var rain = new Sounds("rain");
	$(rain.soundID).click(function () {
		rain.soundTrigger();
	});

	//WAVES
	var waves = new Sounds("waves");
	$(waves.soundID).click(function () {
		waves.soundTrigger();
	});

	//FIRE
	var fire = new Sounds("fire");
	$(fire.soundID).click(function () {
		fire.soundTrigger();
	});

	//BIRDS
	var bird = new Sounds("bird");
	$(bird.soundID).click(function () {
		bird.soundTrigger();
	});

	//NIGHT
	var night = new Sounds("night");
	$(night.soundID).click(function () {
		night.soundTrigger();
	});

	//TRAIN
	var train = new Sounds("train");
	$(train.soundID).click(function () {
		train.soundTrigger();
	});

	//FOUNTAIN
	var fountain = new Sounds("fountain");
	$(fountain.soundID).click(function () {
		fountain.soundTrigger();
	});

	//WHITENOISE
	var whitenoise = new Sounds("whitenoise");
	$(whitenoise.soundID).click(function () {
		whitenoise.soundTrigger();
	});

	//PLAYGROUND
	var playground = new Sounds("playground");
	$(playground.soundID).click(function () {
		playground.soundTrigger();
	});


	//NAV
	/*$('nav ul ul').hide();*/

	$('#menu div').hide();

	//MENU DROP
	$('#menu > a').click(function () {
		$('#menu div').stop().slideToggle('fast');
		return false;
	});

	//MENU BUTTONS
	$('#aboutbut').click(function () {
		$('#aboutdesc').css({ 'opacity': '1', 'z-index': '1' });
		$('#knowledgedesc, #creditsdesc').css({ 'opacity': '0', 'z-index': '-1' });
	});

	$('#knowledgebut').click(function () {
		$('#knowledgedesc').css({ 'opacity': '1', 'z-index': '1' });
		$('#aboutdesc, #creditsdesc').css({ 'opacity': '0', 'z-index': '-1' });
	});

	$('#creditsbut').click(function () {
		$('#creditsdesc').css({ 'opacity': '1', 'z-index': '1' });
		$('#aboutdesc, #knowledgedesc').css({ 'opacity': '0', 'z-index': '-1' });
	});

	//NAV SUBMENU DROP
	/*$('nav ul li').hover(function() {
		$('ul', this).stop().slideToggle('fast');
	});*/

	//MUSIC DROP
	/*$('#music').hover(function() {
		$('#music div').stop().slideToggle('fast');
	});*/

	//IDLE FADE OUT
	var idleTimer = null;
	var idleState = false;
	var idleWait = 5000;

	$('*').bind('mousemove keydown scroll', function () {

		clearTimeout(idleTimer);

		if (idleState === true) {

			// Reactivated event
			$('.ocarousel, #navcontainer, #mute, #soundcloud-player').removeClass('idle');
		}

		if ($('.ocarousel_window_slides > div').hasClass('iconactive') && $('.ocarousel').is(':hover') === false && $('#navcontainer').is(':hover') === false && $('#mute').is(':hover') === false && $('#soundcloud-player').is(':hover') === false) {

			idleState = false;

			idleTimer = setTimeout(function () {

				// Idle Event
				$('.ocarousel, #navcontainer, #mute, #soundcloud-player').addClass('idle');

				idleState = true;
			}, idleWait);
		}
	});

	$("body").trigger("mousemove");

	//TIMER
	// var Example1 = new (function () {
	// 	var $stopwatch, // Stopwatch element on the page
	// 		incrementTime = 1000, // Timer speed in milliseconds
	// 		currentTime = 0, // Current time in hundredths of a second
	// 		updateTimer = function () {
	// 			$stopwatch.html(formatTime(currentTime));
	// 			currentTime += incrementTime / 1000;
	// 		},
	// 		init = function () {
	// 			$stopwatch = $('#stopwatch');
	// 			Example1.Timer = $.timer(updateTimer, incrementTime, true);
	// 		};

	// 	$(init);

	// });

	// Common functions
	function pad(number, length) {
		var str = '' + number;
		while (str.length < length) { str = '0' + str; }
		return str;
	}
	function formatTime(time) {
		var hoursDiv = time / 3600, hours = Math.floor(hoursDiv), minutesDiv = time % 3600 / 60, minutes = Math.floor(minutesDiv), seconds = Math.ceil(time % 3600 % 60);
		if (seconds > 59) { seconds = 0; minutes = Math.ceil(minutesDiv); }
		if (minutes > 59) { minutes = 0; hours = Math.ceil(hoursDiv); }
		return (hours.toString().length < 2 ? '0' + hours + 'h ' : hours + 'h ') + (minutes.toString().length < 2 ? '0' + minutes : minutes) + 'm ' + (seconds.toString().length < 2 ? '0' + seconds : seconds) + 's';
	}

	//MUTE ALL
	$('#mute').click(function () {
		if ($('.audioplayer').hasClass('audioplayer-mute')) {
			$('.audioplayer').removeClass('audioplayer-mute');
		}
		else {
			$('.audioplayer').addClass('audioplayer-mute');
		}
		return false;
	});

	//RANDOM BUTTON
	$('#random').click(function () {
		var links = $('.ocarousel_window_slides > div');
		var randomNum = Math.floor(Math.random() * links.length);
		if (randomNum > 4) {
			$('#soundscroll-right').click();
			links.get(randomNum).click();
		}
		else {
			$('#soundscroll-left').click();
			links.get(randomNum).click();
		}
		return false;
	});
});

// END MAIN JQEURY

// SOUNDCLOUD
// SOUNDCLOUD INITIALIZE
SC.initialize({
	client_id: '3c1222aaa64b9dc73bc257260a5497cb'
});

// $(document).ready(function () {
// 	// SOUNDCLOUD PLAYER UI
// 	var iframeElement = document.querySelector('iframe');
// 	var iframeElementID = iframeElement.id;
// 	var widget1 = SC.Widget(iframeElement);
// 	var widget2 = SC.Widget(iframeElementID);
// 	// widget1 === widget2

// 	// PLAY/PAUSE BUTTON
// 	$('#scPause').hide();
// 	$('#sc-playpause img').click(function () {
// 		widget1.toggle();
// 	});
// 	widget1.bind(SC.Widget.Events.PLAY, function () {
// 		$('#scPlay').hide();
// 		$('#scPause').show();
// 	});
// 	widget1.bind(SC.Widget.Events.PAUSE, function () {
// 		$('#scPause').hide();
// 		$('#scPlay').show();
// 	});

// 	// TRACK INFO ON READY
// 	widget1.bind(SC.Widget.Events.READY, function () {
// 		// TRACK TITLE
// 		widget1.getCurrentSound(function (currentSound) {
// 			$('#sc-title').html(currentSound.title);
// 		});
// 		// TRACK DURATION
// 		widget1.getDuration(function (timeTotal) {
// 			$('#sc-time_total').html(formatTime(timeTotal / 1000));
// 		});
// 		// TRACK PROGRESS
// 		widget1.bind(SC.Widget.Events.PLAY_PROGRESS, function (e) {
// 			var scProgress = e.currentPosition;
// 			$('#sc-time_elapsed').html(formatTime(scProgress / 1000));
// 			// TRACK DURATION
// 			widget1.getDuration(function (timeTotal) {
// 				var scTotal = timeTotal;
// 				// TRACK PROGRESS BAR
// 				$("#sc-progress_bar").slider({
// 					min: 0,
// 					max: scTotal,
// 					value: scProgress,
// 					range: "min",
// 					slide: function (event, ui) {
// 						widget1.seekTo(ui.value);
// 					}
// 				});
// 			});
// 		});
// 	});
// 	// VOLUME CONTROLS
// 	$("#sc-volume_slider").slider({
// 		min: 0,
// 		max: 100,
// 		value: 100,
// 		range: "min",
// 		slide: function (event, ui) {
// 			widget1.setVolume(ui.value);
// 			var scVol = ui.value;
// 		}
// 	});

// MUTE BUTTON
/*$('#sc-volume img').click(function() {
	if ($('#sc-volume img').hasClass('sc-mute')) {
		$(this).removeClass('sc-mute');
		widget1.setVolume(100);
	}
	else {
		$(this).addClass('sc-mute');
		widget1.setVolume(0);
	}
});
*/

// TIME CONVERSION METHOD
function formatTime(time) {
	var hoursDiv = time / 3600, hours = Math.floor(hoursDiv), minutesDiv = time % 3600 / 60, minutes = Math.floor(minutesDiv), seconds = Math.ceil(time % 3600 % 60);
	if (seconds > 59) { seconds = 0; minutes = Math.ceil(minutesDiv); }
	if (minutes > 59) { minutes = 0; hours = Math.ceil(hoursDiv); }
	return (hours === 0 ? '' : + hours + ':') + (minutes.toString().length < 2 && hours !== 0 ? '0' + minutes : minutes) + ':' + (seconds.toString().length < 2 ? '0' + seconds : seconds);
}

// SEARCH
// $('#search-button').click(function () {
// 	var searchInput = document.getElementById("search").value;
// 	// GET API AND SEARCH INPUT AND APPEND TO TRACK LIST
// 	SC.get('http://api.soundcloud.com/tracks', { q: searchInput }, function (tracks) {
// 		// REMOVES RESULTS LIST ITEMS
// 		$('#results li').remove();
// 		// ITERATES ON EACH TRACK OBJECT
// 		$(tracks).each(function (index, track) {
// 			// IF STATEMENT TO USE MUSIC ICON FOR EMPTY ARTWORK -> CREATES RESULTS LIST ITEMS FROM NEW SEARCH VALUE
// 			if (track.artwork_url === null) {
// 				$('#results').append($('<li class=' + index + '></li>').html('<a href="#"><img src="icon/icon_music.svg" />' + track.title + '</a>' + '<p>' + formatTime(track.duration / 1000) + '</p>'));
// 			}
// 			else {
// 				$('#results').append($('<li class=' + index + '></li>').html('<a href="#"><img src="' + track.artwork_url + '" />' + track.title + '</a>' + '<p>' + formatTime(track.duration / 1000) + '</p>'));
// 			}
// 			// ADDS ALL SEARCH RESULTS INTO ARRAY
// 			var scTracks = new Array();
// 			scTracks[index] = track;

// 			// ON CLICK PUSHES NEW TRACK LINK TO SOUNDCLOUD PLAYER
// 			$('#results li').click(function () {
// 				var trackClass = $(this).attr('class');
// 				widget1.load(scTracks[trackClass].uri, {
// 					auto_play: true
// 				});
// 				// UPDATE PLAYER READ OUT
// 				$('#sc-title').html(scTracks[trackClass].title);
// 				$('#sc-time_total').html(formatTime(scTracks[trackClass].duration / 1000));
// 			});
// 		});
// 	});
// });

// FORM SUBMIT ON KEYUP
// function searchSubmit() {
// 	$("#search-button").click();
// }
// // LIVE SEARCH DELAY WHILE TYPING
// var timer = null;
// $('#search').keyup(function () {
// 	clearTimeout(timer);
// 	timer = setTimeout(searchSubmit, 200);
// });

// // SOUNDCLOUD STREAM
// soundManager.setup({
// 	url: '../swf/',
// 	useHTML5Audio: true,
// 	onready: function () {
// 		// COFFEE SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634507", function (sound) {
// 			$('#coffee').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#coffee-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// RAIN SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634506", function (sound) {
// 			$('#rain').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#rain-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// WAVES SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634513", function (sound) {
// 			$('#waves').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#waves-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// FIRE SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634510", function (sound) {
// 			$('#fire').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#fire-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// BIRDS SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634508", function (sound) {
// 			$('#bird').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#bird-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// NIGHT SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634511", function (sound) {
// 			$('#night').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#night-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// TRAIN SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634506", function (sound) {
// 			$('#train').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#train-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// FOUNTAIN SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634506", function (sound) {
// 			$('#fountain').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#fountain-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// WHITENOISE SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634509", function (sound) {
// 			$('#whitenoise').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#whitenoise-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});

// 		// PLAYGROUND SOUNDCLOUD STREAM
// 		SC.stream("http://api.soundcloud.com/tracks/133634506", function (sound) {
// 			$('#playground').click(function () {
// 				sound.togglePause();
// 				$(this).toggleClass('iconactive');
// 				$('.sound-card', this).toggleClass('iconactive');
// 			});

// 			$("#playground-volume").slider({
// 				orientation: "vertical",
// 				min: 0,
// 				max: 100,
// 				value: 100,
// 				range: "min",
// 				slide: function (event, ui) {
// 					sound.setVolume(ui.value);
// 				}
// 			});
// 		});
// 	},

// 	ontimeout: function () {
// 		console.log("ERROR ERROR ERROR");
// 	}
// });