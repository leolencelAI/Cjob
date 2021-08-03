//Partie Menu click span
function open_menu(){
    document.getElementById("item_CB").style.display = "flex";
}

function close_Menu(){
    document.getElementById("item_CB").style.display = "none";
}

//si clic extérieur on ferme la div
var mouse_is_inside = false;

$(document).ready(function()
{
    $('.item_CB').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside){
            $('.item_CB').hide();
        }
    });
});

//Interaction menu
function print_tech() {
    document.getElementById("div_tech").style.display = "inline-block";
}

function erase_tech(){
    document.getElementById("div_tech").style.display = "none";
}

function print_cyb() {
    document.getElementById("div_cyb").style.display = "inline-block";
}

function erase_cyb(){
    document.getElementById("div_cyb").style.display = "none";
}

function print_data() {
    document.getElementById("div_data").style.display = "inline-block";
}

function erase_data(){
    document.getElementById("div_data").style.display = "none";
}

function print_res() {
    document.getElementById("div_res").style.display = "inline-block";
}

function erase_res(){
    document.getElementById("div_res").style.display = "none";
}

function print_mar() {
    document.getElementById("div_mar").style.display = "inline-block";
}

function erase_mar(){
    document.getElementById("div_mar").style.display = "none";
}

function print_sa() {
    document.getElementById("div_sa").style.display = "inline-block";
}

function erase_sa(){
    document.getElementById("div_sa").style.display = "none";
}

function print_jur() {
    document.getElementById("div_jur").style.display = "inline-block";
}

function erase_jur(){
    document.getElementById("div_jur").style.display = "none";
}

function print_rh() {
    document.getElementById("div_rh").style.display = "inline-block";
}

function erase_rh(){
    document.getElementById("div_rh").style.display = "none";
}

function print_au() {
    document.getElementById("div_au").style.display = "inline-block";
}

function erase_au(){
    document.getElementById("div_au").style.display = "none";
}

function print_progr() {
    document.getElementById("div_progr").style.display = "inline-block";
    document.getElementById("div_au").style.display = "inline-block";
}

function erase_progr(){
    document.getElementById("div_progr").style.display = "none";
    document.getElementById("div_au").style.display = "none";
}

function print_st() {
    document.getElementById("div_st").style.display = "inline-block";
    document.getElementById("div_au").style.display = "inline-block";
}

function erase_st(){
    document.getElementById("div_st").style.display = "none";
    document.getElementById("div_au").style.display = "none";
}

function print_pt() {
    document.getElementById("div_pt").style.display = "inline-block";
    document.getElementById("div_au").style.display = "inline-block";
}

function erase_pt(){
    document.getElementById("div_pt").style.display = "none";
    document.getElementById("div_au").style.display = "none";
}
