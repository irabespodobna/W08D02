// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function() {

// show the 1 tab
    $(".tab").eq(0).show();
    $(".tab").eq(1).hide();
    $(".tab").eq(2).hide();

// show when click 1 tab
	$(".cat-title button").eq(0).click(function() {
		$(".tab").eq(0).show();
		$(".tab").eq(1).hide();
		$(".tab").eq(2).hide();
	});

// show when click 2 tab
	$(".cat-title button").eq(1).click(function() {
		$(".tab").eq(0).hide();
		$(".tab").eq(1).show();
		$(".tab").eq(2).hide();
	});

// show when click 3 tab
	$(".cat-title button").eq(2).click(function() {
		$(".tab").eq(0).hide();
		$(".tab").eq(1).hide();
		$(".tab").eq(2).show();

	});

// hide by default the drop-down menu of the avatar
	$(".show_avatar").hide();

// montrer menu déroulant quand click on the avatar
	$(".rounded-circle").on("click", function(){
		$(".show_avatar").show();
	});

});
