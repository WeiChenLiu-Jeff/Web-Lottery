//產生完整員工清單
function createList(allStafff = 200) {
    var s = '';
    for (var e = 1; e < allStafff + 1; e++) {
        s = s + e + '\n';
    }
    document.getElementById("staffList").value = s;
}


//取range內一個亂數
function getRandom(range) {
    return Math.floor((Math.random() * range));
}


//取range內n個亂數
function getRandomArray(range, n) {
    var rdmArray = [n];
    for (var i = 0; i < n; i++) {
        var rdm = 0;
        do {
            var exist = false;
            rdm = getRandom(range);
            if (rdmArray.indexOf(rdm) != -1) exist = true;
            //檢查是否有重複
        } while (exist);
        rdmArray[i] = rdm;
    }
    return rdmArray;
}

//取得當下textarea內的清單
function getStaffList() {
    var rawText = document.getElementById("staffList").value;
    var tempfList = new Array();
    tempfList = rawText.split('\n');
    tempfList = tempfList.filter(function (e) {
        return e
    });
    return tempfList;
}

function getAmount() {
    //取得label上的人數
    return parseInt(document.getElementById('prizeAmount').textContent);
}

//按下抽獎按鈕要執行的部分
function getWinner() {
    //改modal內的標題
    document.getElementById('lotteryModalLabel').textContent = document.getElementById('prizeName').textContent;

    //取清單
    var staffList = getStaffList();

    //取要抽幾人
    var amount = getAmount();

    //取亂數陣列作索引
    var indexArray = getRandomArray(staffList.length, amount);

    //對照索引，取中獎號，將中獎者從清單刪除
    var targetArray = [];
    indexArray.forEach(function (e) {
        targetArray.push(staffList[e]);
        staffList[e] = '';
    })

    //濾掉空白的
    staffList = staffList.filter(function (g) {
        return g
    });

    //重新laod清單
    var str = '';
    for (var i = 0; i < staffList.length; i++) {
        str = str + staffList[i] + '\n';
    }
    document.getElementById("staffList").value = str;


    //這邊的數據到時候拿到modal顯示
    console.log('============================');
    // console.log('抽出的位置(index)為：' + indexArray);
    console.log('得獎的為：' + targetArray);
    console.log('剩下的名單為：' + staffList);
    console.log('剩下的人數為：' + staffList.length);
    console.log('============================');

    //先整理過成string再bind
    var winnerStr = '';
    targetArray.forEach(function (t) {
        winnerStr = winnerStr + t + '號' + '<br/>';
    });
    $('#lotteryWinner').html(winnerStr);
}


createList();