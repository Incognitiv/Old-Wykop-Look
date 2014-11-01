// ==UserScript== 
// @name            Old Look Wykop
// @description     Skrypt przywraca stary wygląd portalu Wykop.pl z lat 2007-2008.
// @author          Patryk "Linux__Shines" N.
// @version         0.0.0.2
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

/*** Obrazki: ***/
var background  = "http://i.imgur.com/Y9zPxy7.png";
var logo_normal = "http://i.imgur.com/Tyinjgx.png";
var logo_hover  = "http://i.imgur.com/RhpC99v.png";
var digg_button = "http://i.imgur.com/L6avdgg.png";

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
"       color: " + navfocus_un +
"   }" + 
"" +
// /*** Zmiana koloru wszystkich ikonek SVG na jasnoniebieskie, po najechaniu na nie: ***/
// "   svg:hover * {" +
// "       color: " + navfocus_un +
// "   }" +
// "" +
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
"   }" + 
"" + 
/*** Przycisk od wyszukiwania i zabawy z nim: ***/
"   #openNaturalSearch, #nav .nav li a#openNaturalSearch:hover {" + 
"       color: " + black +
"       bottom: 50px;" + 
"       position: absolute;" + 
"       right: 25px !important;" + 
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
"   ul:not(.mainnav).clearfix > li {" + 
"       height: auto;" + 
"   }" + 
"" + 
/*** Przeniesienie Wykopowych "doodli" o 50 pikseli w dół: ***/
"	.doodle {" +
"		margin-top: 50px !important;" +
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
"       color: #3B708A;" + 
"   }" + 
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
"   .diggbox span:first-child"+
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
"</style>"].join("\n");
document.head.insertAdjacentHTML("beforeend", style);