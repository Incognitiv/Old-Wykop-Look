// ==UserScript== 
// @name            Old Look Wykop
// @description     Skrypt przywraca stary wygląd portalu Wykop.pl z lat 2007-2008.
// @author          Patryk "Linux__Shines" N.
// @version         0.0.3.1
// @include         http://www.wykop.pl/*
// @include         https://www.wykop.pl/*
// @updateURL       https://openuserjs.org/install/The_Shiny/Wykop_-_Fullscreen_Mikro.user.js
// @grant           none
// @license         BSD
// ==/UserScript==

/*** TODO: 
// * Zamienić kolory belki z "Wykopalisko", "Hity", "Mikroblog", "Mój Wykop"
// * Zamienić kolory nagłówków na głównej
// * Zamienić kolor przycisku "Szukaj" oraz reszty
// * Zamienić kolory linków na głównej
****/

/*** Kolory: ***/
var orange      = "#FF5917 !important;";
var lightblue   = "#4383AF !important;";
var white_un    = "#FFFFFF;";
var white       = "#FFFFFF !important;";
var black       = "#000000 !important;";
var gray        = "#555555 !important;";
var teal        = "#CFE0E8 !important;";
var darkteal    = "#A2C4D4 !important;";
var nav_focus   = "#DEEBF1 !important;";
var navfocus_un = "#DEEBF1;";
var blue_link_h	= "#4B6A7C !important;";
var black_text	= "#333333 !important;";
var diggbox_blu	= "#3B708A !important;";

/*** Obrazki: ***/
var background  = "http://i.imgur.com/Y9zPxy7.png";
var logo_normal = "http://i.imgur.com/Tyinjgx.png";
var logo_hover  = "http://i.imgur.com/RhpC99v.png";
var digg_button = "http://i.imgur.com/exsoZ0K.png";

/*** Styl: ***/
var style = ["<style>" +
/*** Kolorowanie całego tła wykopu na kolor biały: ***/
"   #site {" +
"       background-color: " + white +
"   }" +
"" +
/*** Zmiana tła paska nawigacji na taki "starego typu": ***/
"   #nav {" + 
"       background-image: url('" + background + "') !important;" + 
"       height: 100px !important;" + 
"   }" + 
"" + 
/*** Zamiana koloru liter paska nawigacyjnego na białe, bez !important: ***/
"   #nav .nav li a {" +
"       color: " + white_un +
"   }" + 
"" +
/*** Zamiana koloru liter paska nawigacyjnego na jasnoniebieski po najechaniu a także przy aktywnym przycisku na pasku nawigacyjnym, z wyłączeniem openNaturalSearch: ***/
"   #nav .nav li a:not(#openNaturalSearch):hover, #nav .nav li.active a {" +
"       background-color: transparent !important;" + 
"		border-color: transparent !important;" +
"       color: " + navfocus_un +
"		opacity: 1 !important;" +
"   }" + 
"" +
// /*** Zmiana koloru wszystkich ikonek SVG na jasnoniebieskie, po najechaniu na nie: ***/
// "   svg:hover * {" +
// "       color: " + navfocus_un +
// "   }" +
// "" +
/*** Przeniesienie ikonki płomyka: ***/
"	.diggbox .hot {" +
"		right: -14px !important;" +
"	}" +
"" +
/*** Wymuszenie przeniesienia marginesu o 50 pikseli do góry: ***/
"   .clearfix.m-reset-position {" + 
"       margin-top: -50px !important;" + 
"   }" + 
"" + 
/*** Wymuszenie przeniesienia zawartości strony o 50 pikseli w dół: ***/
"   .m-reset-padding.m-reset-margin {" + 
"       margin-top: 50px !important;" + 
"   }" + 
"" + 
/*** Wymuszanie na wykopie tego, aby pasek nawigacji zawsze miał automatyczną wysokość: ***/
"   .clearfix.mainnav {" + 
"       height: auto !important;" + 
"   }" + 
"" + 
/*** Zmiana pozycji przycisków, które są PO przycisku przekierowującym na główną stronę portalu: ***/
"   .mainnav li:nth-child(2) {" + 
"       width: 100% !important;" + 
"		margin-left: 7px !important;" +
"   }" + 
"" + 
/*** Przycisk od wyszukiwania i zabawy z nim: ***/
"   #openNaturalSearch, #nav .nav li a#openNaturalSearch:hover {" + 
"       color: " + black +
"       bottom: 50px;" + 
"       position: absolute;" + 
"       right: 18px !important;" + 
"   }" + 
"" + 
/*** Zmiana szerokości pola od wyszukiwarki: ***/
"   input[name='nsQ'] {" + 
"       position: absolute;" + 
"       width: 130% !important;" + 
"   }" + 
"" + 
/*** Zmiana koloru mojego dodatku: ***/
"   #nav .nav li a:hover, .clearfix a:hover svg * { " +
"      fill: " + nav_focus +
"}" +
/*** Usuwanie belki wywołującej skalowanie na niezalogowanym: ***/
"	.rbl-block.overflow.m-reset-width.force-scalable.m-hide {" +
"		padding: 0px !important;" +
"	}" +
"" +
"   ul:not(.mainnav).clearfix > li {" + 
"       height: auto;" + 
"   }" + 
"" + 
/*** Przeniesienie Wykopowych "doodli" o 50 pikseli w dół: ***/
"	.doodle {" +
"		margin-top: 50px !important;" +
"	}" +
"" +
/*** Przestawienie loga oraz przycisku "Szukaj" zarówno dla zalogowanego, jak i niezalogowanego: ***/
"	ul.clearfix > li.login {" +
"		margin-right: -12px !important;" +
"	}" +
"" +
"	ul.clearfix > li.logged-user {" +
"		margin-right: -2px !important;" +
"	}" +
"" +
"	ul.clearfix {" +
"		margin-right: 13px !important;" +
"	}" +
"" +
/*** Zmiana koloru czcionki linków na głównej: ***/
"	.m-reset-margin h2 > a {" +
"		color: " + orange +
"	}" +
"" +
"	.m-reset-margin h2 > a:hover {" +
"		color: " + blue_link_h +
"	}" +
"" +
/*** Zmiana koloru czcionki tekstu linku na głównej: ***/
"	.description p.text a {" +
"		color: " + black_text +
"	}" +
"" +
"   .nav ul:not(.mainnav).clearfix {" + 
"       display: inline-flex;" + 
"       height: 100%;" + 
"       align-items: flex-end;" + 
"   }" + 
"" + 
"   .nav ul:not(.mainnav).clearfix:first-child {" + 
"       align-self: flex-start;" + 
"   }" + 
""+
"   ul.clearfix .logged-user {" + 
"       margin-bottom: 10px !important;" + 
"   } " + 
"" + 
"   em.mark-number {" + 
"       background-color: transparent !important;" + 
"       color: #FFFFFF !important;" + 
"   }" + 
"" + 
"   em.mark-number:before {" + 
"       content: '(';" + 
"   }" + 
"" +
"   em.mark-number:after {" + 
"       content: ')';" + 
"   }" + 
"" + 
"   .diggbox span:first-child {" + 
"       background: url('" + digg_button + "') no-repeat scroll 0 0 rgba(0, 0, 0, 0);" + 
"       color: " + diggbox_blu +
"		height: 53px !important;" +
"		width: 59px !important;" +
"		margin-top: -3px !important;" +
"		margin-left: 4px !important;" +
"   }" + 
"" +
"   .diggbox span:first-child:hover {" + 
"       background: url('" + digg_button + "') no-repeat scroll 0 0 rgba(0, 0, 0, 0);" + 
"       color: " + orange +
"   }" + 
"	.diggbox.digout span:first-child { " +
"		background-position: 0 -53px !important;" +
"		color: " + orange +
"		margin-top: -3px !important;" +
"	}"+
"" + 
"	.diggbox.digout.burried span:first-child {" +
"		background-position: 0 -53px !important;" +
"		margin-left: 4px !important;" +
"	}" +
"" +
"	.article.preview .media-content img {" +
"		margin-left: 18px !important;" +
"		margin-right: 19px !important;" +
"		margin-bottom: 3px !important;" +
"		margin-top: -2px !important;" +
"	}"+
"" +
// "	.lcontrast.m-reset-float.m-reset-margin {" +
// "		margin-left: 15px !important;" +
// "	}" +
// "" +
/*** Usunięcie tła z przycisku "wykop": ***/
"	.diggbox span.button.submit, .diggbox span.button.submit:hover {" +
"		background-color: initial !important;" +
"		border: medium none rgba(0, 0, 0, 0) !important;" +
"		color: " + orange +
"		margin-left: 8px !important;" +
"	}" +
"" +
"	.dropdown-show > span {" +
"		margin-left: 9px !important;" +
"	}" +
"" +
"   em.mark-number {" +
"       color: " + white + 
"   }" + 
"" +
"   em.mark-number:hover {" +
"       color: " + nav_focus + 
"   }" + 
"" +
"   .clearfix.mainnav > li "+
"       color: " + orange + 
"   }" + 
"" +
"   .clearfix a {" + 
"       color: " + orange + 
"   }" + 
"" +
// "    .diggbox span:first-child, .active > a, .lcontrast.m-reset-margin a {" +
// "        color: " + orange +
// "    }" +
// "" +
"   i.wykop-logo, i.microblog-logo {" + 
"       background-image: url('" + logo_normal + "') !important;" + 
"		margin-left: -11px !important;" +
"   }" + 
"" + 
"   i.wykop-logo:hover, i.microblog-logo:hover {" + 
"       background-image: url('" + logo_hover + "') !important;" + 
"   }" + 
"" + 
"   .active > a {" + 
"       background-color: transparent !important;" + 
"   }" + 
"" +
/*** Stopka i zabawa z kolorami: ***/
"   #footer {" +
"       background-color: #FFFFFF !important;" +
"       color: " + lightblue +
"   }" +
"" +
"   #footer a {" +
"       color: " + lightblue +
"   }" +
"" +
"   #footer a:hover, #footer .width-one-fourth a:hover {" +
"       color: " + orange +
"       opacity: 1.0;" +
"   }" +
"" +
"   #footer h4 {" +
"       color: " + gray +
"   }" +
"" +
"   #footer .wrapper {" +
"       background-color: " + teal +
"       border: 2px solid " + darkteal +
"       border-radius: 20px !important;" +
"       border-top-left-radius: 20px !important;" +
"      padding: 20px 10px;" +
"   }" +
"" +
/*** Usunięcie tła z tagów: ***/
"	#footer a.tag:hover {" +
"		background-color: initial !important;" +
"		border: 1px solid transparent !important;" +
"	}" +
"" +
/*** Usunięcie obramowania tagów wokół linku: ***/
"	div.lcontrast > div.fix-tagline > span.tag, div.lcontrast > div.fix-tagline > span.tag a, div.lcontrast > div.fix-tagline > span.tag:hover, div.lcontrast > div.fix-tagline > span.tag a:hover {" +
"		background-color: initial !important;" +
"		border: 0 none !important;" +
"		box-shadow: none;" +
"		color: " + lightblue +
"}" +
""+
"	div.lcontrast > div.fix-tagline > span.tag a:before {" +
"		content: '(' !important;" +
"		color: " + lightblue +
"}" +
"" +
"	div.lcontrast > div.fix-tagline > span.tag a:after {" +
"		content: ')' !important;" +
"		color: " + lightblue +
"}" +
/*** Przycisk 'cofnij zakop': ***/
"	.diggbox.digout a span.button {" +
"		background-color: initial !important;" +
"		border: medium none rgba(0, 0, 0, 0) !important;" +
"		margin-left: 8px !important;" +
"	}" +
"" +
/*** TEST: ***/
"	.lcontrast.m-reset-margin * + .article.preview .media-content img {" +
"		margin-left: 10px !important;" +
"	}" +
"" +

/*** Zmiana rozmiaru marginesu obok obrazka w znalezisku: ***/
"	.media-content img {" +
"		margin-left: 23px !important;" +
"		margin-top: -24px; !important" +
"}" +
"" +
"	.media-content.no-description {" +
"		margin-left: -5px;" +
"}" +
"" +
/*** Zmiana pozycji nagłówka w streamie: ***/
"	ul#itemsStream.comments-stream .small > .lcontrast.m-reset-margin {" +
"		margin-left: 20px !important;" +
"	}" +
"" +
/*** Zmiana pozycji napisu 'zakop' w Wykopalisku: ***/
"	.preview .diggbox > a.dropdown-show {" +
"		margin-left: 9px !important;" +
"	}"+
/*** Modyfikowanie linków sponsorowanych: ***/
"	#dyingLinksBox h2, #dyingLinksBox p.text.small {" +
"		margin-left: 20px !important;" +
"	}" +
"" +
"	#dyingLinksBox .diggbox span {" +
"		margin-top: -6.5px !important;" +
"}" +
"" +
"</style>"].join("\n");
document.head.insertAdjacentHTML("beforeend", style);