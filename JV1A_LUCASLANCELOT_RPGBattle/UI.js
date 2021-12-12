// function stuff 
var Turn;
var CAPTAINhealth;
var CAPTAINPA;
var CAPTAINAttack;
var STANDARDhealth;
var STANDARDPA;
var STANDARDAttack;
var HEAVYhealth;
var HEAVYPA;
var LIGHThealth;
var LIGHTPA;
var Shiphealth;
var Shipattack;
var LEV501health;
var LEV501attack;
var LEV502health;
var LEV502attack
var TargetedEnemy
var TargetedPlayer

function FIGHT() {
    CAPTAINhealth = 50;
    CAPTAINPA = 30;
    CAPTAINAttack = 8;
    STANDARDhealth = 40;
    STANDARDPA = 20;
    STANDARDAttack = 5;
    HEAVYhealth = 50;
    HEAVYPA = 10;
    HEAVYAttack = 8;
    LIGHThealth = 30;
    LIGHTPA = 30;
    LIGHTAttack = 3;
    Shiphealth = 80;
    Shipattack = 2;
    LEV501health = 30;
    LEV501attack = 4;
    LEV502health = 30;
    LEV502attack = 4;
    turn = 0;
    TargetedEnemy = 0;
    NameOfTarget = 0;
}

function Enemydamage(OFName, damage) {
    if (TargetedEnemy == 0) {
        Shiphealth = Shiphealth - OFAttack;
        updateAllhealth();
        document.getElementById("fightinformations").innerHTML = "L'OF " + OFName + " inflige " + damage + "dégâts !<br>  LEV50-2 est encore en vie " + Shiphealth + " PV !<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
    }
    else if (TargetedEnemy == 1) {
        LEV501health = LEV501health - damage;
        updateAllhealth();
        document.getElementById("fightinformations").innerHTML = "L'OF " + OFName + " inflige " + damage + "dégâts !<br>  Transport Ship est encore en vie" + LEV501health + " PV !<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
    }
    else {
        LEV502health = LEV502health - damage;
        updateAllhealth();
        document.getElementById("fightinformations").innerHTML = "L'OF " + OFName + " inflige " + damage + "dégâts !<br> Transport Ship est encore en vie " + LEV502health + " PV !<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
    }
}

function turn() {
    if (turn == 0) {

        if (CAPTAINhealth > 0) {
            turnOF("CAPTAIN",CAPTAINAttack, CAPTAINPA);    
        }
        else if (CAPTAINhealth <= 0) {
            document.getElementById("fightinformations").innerHTML = "<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
        }
        else {
            document.getElementById("fightinformations").innerHTML = "<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
        }
    }
    else if (turn == 1) {
        if (! STANDARDhealth > 0) {
            turnOF("STANDARD", STANDARDAttack, STANDARDPA);
        }
        else if (STANDARDhealth <= 0) {
            document.getElementById("fightinformations").innerHTML = "L'OF STANDARD est vaincus.<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
        }
        
    }
    else if (turn == 2) {
        if (! HEAVYhealth > 0) {
            turnOF("HEAVY", HEAVYAttack, HEAVYPA);
        }
        else if (HEAVYhealth <= 0) {
            document.getElementById("fightinformations").innerHTML = "L'OF HEAVY est vaincus.<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
        }
    }
    else if (turn == 3) {
        if (!LIGHT && LIGHThealth > 0) {
            turnOF("LIGHT", LIGHTAttack, LIGHTPA);
        }
        else if (LIGHThealth <= 0) {
            document.getElementById("fightinformations").innerHTML = "L'OF LIGHT est vaincus.<br> <input type='button' onclick='AddCounter()' value='NEXT'>";
        }
    
    }
}

function turnOF(OFName, OFAttack, OFPA) {
    document.getElementById("fightinformations").innerHTML = "L'OF " + OFName + " va Attaquer. <br> <input type='button' onclick='Enemydamage(\""+OFName+"\","+OFAttack+")' value='Attack'>";
}


function CycleRestart() {
    if (turn == 4) {
        nbturn++;
        turn == 0;
    }
    document.getElementById("fightinformations").innerHTML = "C'est au tour de "+ nbturn + " !<br> <input type='button' onclick='turn()' value='NEXT'>";
}

function ModificaitonAllhealth() {
    document.getElementById("CAPTAINhealth").innerHTML = "PV : " + CAPTAINhealth + "/50<br>PA : " + CAPTAINPA + "/30";
    document.getElementById("STANDARDhealth").innerHTML = "PV : " + STANDARDhealth + "/40 <br>PA : " + STANDARDPA + "/20";
    document.getElementById("HEAVYhealth").innerHTML = "PV : " + HEAVYhealth + "/50<br>PA : " + HEAVYPA + "/10";
    document.getElementById("LIGHThealth").innerHTML = "PV : " + LIGHThealth + "/30<br>PA : " + LIGHTPA + "/30";
    document.getElementById("Shiphealth").innerHTML = "PV : " + Shiphealth + "/80";
    document.getElementById("LEV501health").innerHTML = "PV : " + LEV501health + "/30";
    document.getElementById("LEV502health").innerHTML = "PV : " + LEV502health + "/30";
}

function Showhealth(id) {
    document.getElementById(id).style.visibility='visible'
}

function Hidehealth(id) {
    document.getElementById(id).style.visibility='hidden'
}

