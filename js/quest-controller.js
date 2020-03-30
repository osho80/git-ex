'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;


$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    // Done: hide the game-start section
    $('.game-start').hide();
    renderQuest();
    // Done: show the quest section
    $('.quest').attr('style', 'display: block');
}

function renderQuest() {
    // Done: select the <h2> inside quest and update
    // its text by the currQuest text
    $('.quest h2').text(getCurrQuest().txt);
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            //alert('Yes, I knew it!');
            // TODO: improve UX
            //debugger
            
            $('#end-game h5').text('Succes!!!');
            $('#end-game p').text('Yes, I knew it!');
            $('#end-game').attr('style', 'display: block');
        } else {
            $('#end-game h5').text('Ok, I give up...');
            $('#end-game p').text('Please teach me!');
            $('#end-game .btn-secondary').attr('style', 'display: block');
            $('#end-game').attr('style', 'display: block');

            // $('.new-quest').attr('style', 'display: block');
            // alert('I dont know...teach me!')
            // // TODO: -Done - hide and show new-quest section
        }
    } else {
        // Done: update the lastRes global var
        gLastRes = res;

        moveToNextQuest(res);
        renderQuest();

    }
}

function onAddGuess() {
    // TODO: - Done - Get the inputs' values
    var newQuestTxt = $('#newQuest').val();
    var newGuessTxt = $('#newGuess').val();
    console.log('newQ: ', newQuestTxt);
    console.log('newG: ', newGuessTxt);
    // console.log('last res: ', res);

    // TODO: Call the service addGuess
    addGuess(newQuestTxt, newGuessTxt, gLastRes)
    console.log(gLastRes);

    onRestartGame();
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.quest').hide();
    $('#end-game').hide();
    $('.game-start').show();
    gLastRes = null;
    init()

}

function openForm() {
    $('.new-quest').attr('style', 'display: block');
    $('#end-game').attr('style', 'display: none');
}
// function closeVictory() {
//     $('#victory-modal').attr('style', 'display: none');
// }