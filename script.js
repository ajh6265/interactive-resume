var bg = document.getElementById("test");
prevScrollPos = bg.scrollTop;

var character = document.getElementById("character");
var space_char = document.getElementById("space-annie");
var skater = document.getElementById("skater");
var sail_char = document.getElementById("sail-annie");
var winter_char = document.getElementById("winter-annie");
var surfer = document.getElementById("surfer");
var boat = document.getElementById("boat");

var content = document.getElementById("directions");
var content27 = document.getElementById("content-27");
var content28 = document.getElementById("content-28");
var content29 = document.getElementById("content-29");
var content30 = document.getElementById("content-30");
var content31 = document.getElementById("content-31");
var content32 = document.getElementById("content-32");
var content33 = document.getElementById("content-33");
var content34 = document.getElementById("content-34");
var content35 = document.getElementById("content-35");

function walk() {

     /* character evolution */
    if (bg.scrollTop < 4100) {
        boat.style.visibility = "visible";
        boat.style.left = "71.5%";

        character.style.visibility = "visible";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop >= 11400 && bg.scrollTop <= 12700){
        boat.style.visibility = "visible";
        boat.style.left = "71.5%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "visible";
    }
    else if (bg.scrollTop > 16500){
        boat.style.visibility = "visible";
        boat.style.left = "92%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "visible";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop > 12700) {
        boat.style.visibility = "hidden";
        boat.style.left = "71.5%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "visible";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop > 9000) {
        boat.style.visibility = "visible";
        boat.style.left = "71.5%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "visible";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop > 4100) {

        boat.style.visibility = "visible";
        boat.style.left = "71.5%";
        
        character.style.visibility = "hidden";
        space_char.style.visibility = "visible";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }

    /* content blocks */
    if (bg.scrollTop < 500) {
        content.style.visibility = "visible";
    }
    if (bg.scrollTop > 500) {
        content.style.visibility = "hidden";
    }
    if (bg.scrollTop < 4100){
        content27.style.visibility = "hidden";
        content28.style.visibility = "hidden";
        content29.style.visibility = "hidden";
        content30.style.visibility = "hidden";
        content31.style.visibility = "hidden";
        content32.style.visibility = "hidden";
        content33.style.visibility = "hidden";
        content34.style.visibility = "hidden";
        content35.style.visibility = "hidden";
        content27.classList.remove("animate_appear27");
        content28.classList.remove("animate_appear28");
        content29.classList.remove("animate_appear29");
        content30.classList.remove("animate_appear30");
        content31.classList.remove("animate_appear31");
        content32.classList.remove("animate_appear32");
        content33.classList.remove("animate_appear33");
        content34.classList.remove("animate_appear34");
        content35.classList.remove("animate_appear35");
    }
    if (bg.scrollTop > 5300) {
        content32.style.visibility = "visible";
        content32.classList.add("animate_appear32");
    }
    if (bg.scrollTop > 6500) {
        content30.style.visibility = "visible";
        content30.classList.add("animate_appear30");
    }
    if (bg.scrollTop > 7800) {
        content31.style.visibility = "visible";
        content31.classList.add("animate_appear31");
    }
    if (bg.scrollTop > 9300) {
        content27.style.visibility = "visible";
        content27.classList.add("animate_appear27");
    }
    if (bg.scrollTop > 9900) {
        content28.style.visibility = "visible";
        content28.classList.add("animate_appear28");
    }
    if (bg.scrollTop > 10600) {
        content29.style.visibility = "visible";
        content29.classList.add("animate_appear29");
    }
    if (bg.scrollTop > 13500) {
        content33.style.visibility = "visible";
        content33.classList.add("animate_appear33");
    }
    if (bg.scrollTop > 14500) {
        content34.style.visibility = "visible";
        content34.classList.add("animate_appear34");
    }
    if (bg.scrollTop > 15500) {
        content35.style.visibility = "visible";
        content35.classList.add("animate_appear35");
    }



    if (prevScrollPos > bg.scrollTop) {
        if (character.classList != "animate_walk_bw"){ /* too many clicks */
            character.classList.add("animate_walk_bw");
            surfer.classList.add("animate_surf_bw");
        }
        setTimeout(function(){
            character.classList.remove("animate_walk_bw");
            surfer.classList.remove("animate_surf_bw");
        },500);
        character.style.backgroundImage = "url('annie_stand_bw.png')";
        skater.style.backgroundImage = "url('skater_bw.png')";
        surfer.style.backgroundImage = "url('surfer_bw.png')";
    }
    else {
        if (character.classList != "animate_walk"){ /* too many clicks */
            character.classList.add("animate_walk");
            surfer.classList.add("animate_surf");
        }
        setTimeout(function(){
            character.classList.remove("animate_walk");
            surfer.classList.remove("animate_surf");
        },500);
        character.style.backgroundImage = "url('annie_stand.png')";
        skater.style.backgroundImage = "url('skater.png')";
        surfer.style.backgroundImage = "url('surfer.png')";
    }

    prevScrollPos = bg.scrollTop;
}
function jump(){
    if (character.classList != "animate_jump"){ /* too many clicks */
        character.classList.add("animate_jump");
    }
    setTimeout(function(){
        character.classList.remove("animate_jump");
    },500);
}
