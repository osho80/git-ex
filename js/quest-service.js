var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const KEY = 'questsTree'

function createQuestsTree() {
    gQuestsTree = loadFromStorage(KEY)
    
    if (!gQuestsTree) {

        gQuestsTree = createQuest('Male?');
    
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    
    }
    
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;

}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: - Done - update the gPrevQuest, gCurrQuest global vars  
    // console.log('res: ', res);
    gPrevQuest = gCurrQuest;
    // console.log('prevQ:', gPrevQuest);
    gCurrQuest = (res === 'yes') ? gCurrQuest.yes : gCurrQuest.no;
    // gCurrQuest = gCurrQuest[res]
    // console.log('currQ: ', gCurrQuest);
    

}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    var newQuest = {
        txt: newQuestTxt,
        yes: createQuest(newGuessTxt),
        no: gCurrQuest
    }

    gPrevQuest[lastRes] = newQuest;
    console.log('prevQ', gPrevQuest);
    
    saveToStorage(KEY, gQuestsTree)     //saves questsTree to Storage
    //console.log(newQuest);
    // debugger
    // lastRes = gCurrQuest.txt;
    // gPrevQuest.yes.txt = newQuestTxt;
    // gCurrQuest.txt = newGuessTxt;
    // gCurrQuest.no.txt = lastRes;
    // console.log(gPrevQuest);
    // console.log(gCurrQuest);
    // createQuest(newQuestTxt);
}

function getCurrQuest(){
    return gCurrQuest
}


