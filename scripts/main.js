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
    return Math.floor((Math.random() * range) + 1);
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

//按下抽獎按鈕要執行的部分
function getWinner() {
    var staffList = getStaffList();
    // TODO:取得要抽的人數
    // TODO:判斷人數和獎項數量是否可抽
    var indexArray = getRandomArray(staffList.length, 3);
    var targetArray = [];
    indexArray.forEach(function (e) {
        targetArray.push(staffList[e]);

        //把中獎者從清單移除
        staffList[e] = "";
        staffList = staffList.filter(function (g) {
            return g
        });
    })

    //重新laod清單
    var str = '';
    for (var i = 0; i < staffList.length; i++) {
        str = str + staffList[i] + '\n';
    }
    document.getElementById("staffList").value = str;

    // console.log('抽出的位置(index)為：' + indexArray);
    console.log('============================');
    console.log('得獎的為：' + targetArray);
    console.log('剩下的名單為：' + staffList);
    console.log('剩下的人數為：' + staffList.length);
    console.log('Textarea已重新load');
    console.log('============================');
}


createList();