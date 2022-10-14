var FirsT = document.getElementById("name");
var LasT = document.getElementById("lname");
var AddrS = document.getElementById("adrs");
var DatE = document.getElementById("date");
var DroP = document.getElementById("dropdown");
var NotE = document.getElementById("notes");
var Btn = document.getElementById("btn");

const alertAlert =
  "სალამი, სახელი,გვარი და მისამართი აუცილებლად უნდა მიუთითო.სახელი უნდა იყოს მინ 3 და მაქს 15,გვარი უნდა იყოს მინ 3 და მაქს 30, მისამართი მინ 5 და მაქს 35.სახელისა და გვარის გრაფაში არ გამოიყენო ციფრები.წითელი ნაგვის ურნით შეგიძლია Id ნომრის მითითებით წაშალო ცხრილიდან მონაცემი ვიზუალურადაც და ლოკალშიც,იგივე პრინციპით ყვითელ icon-ზე Id-ის მითითებით გამოიტან Note-ის მნიშვნელობას, ხოლო თეთრი icon-ით სრულად წაშლი ლოკალში არსებულ მონაცემებს.";

alert(alertAlert);

function Call() {
  // FIRST NAME
  if (
    FirsT.value.trim() == "" ||
    FirsT.value.trim().length < 3 ||
    FirsT.value.trim().length > 15 ||
    LasT.value.trim() == "" ||
    LasT.value.trim().length < 3 ||
    LasT.value.trim().length > 30 ||
    AddrS.value.trim() == "" ||
    AddrS.value.trim().length < 5 ||
    AddrS.value.trim().length > 35
  ) {
    alert("please fill required ones");
  } else {
    wholeProc();
  }
  FirsT.value = "";
  LasT.value = "";
  AddrS.value = "";
  DatE.value = "mm/dd/yyyy";
  DroP.value = "Male";
  NotE.value = "";
}

function wholeProc() {
  var arr = JSON.parse(window.localStorage.getItem("Data"));
  if (Array.isArray(arr) == false) {
    if (arr == null) {
      localStorage.setItem(
        "Data",
        JSON.stringify({
          Fname: FirsT.value,
          lname: LasT.value,
          add: AddrS.value,
          date: DatE.value,
          drop: DroP.value,
          note: NotE.value,
        })
      );
    }
    if (arr != null) {
      var array = [];
      array.push(arr);
      array.push({
        Fname: FirsT.value,
        lname: LasT.value,
        add: AddrS.value,
        date: DatE.value,
        drop: DroP.value,
        note: NotE.value,
      });
      localStorage.setItem("Data", JSON.stringify(array));
    }
    AddRow();
  } else {
    var array = arr;
    array.push({
      Fname: FirsT.value,
      lname: LasT.value,
      add: AddrS.value,
      date: DatE.value,
      drop: DroP.value,
      note: NotE.value,
    });
    localStorage.setItem("Data", JSON.stringify(array));
    AddRow();
  }
}

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];

var ainc = 1;
var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow();

  list1[x] = document.getElementById("name").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("adrs").value;
  list4[x] = document.getElementById("date").value;
  list5[x] = document.getElementById("dropdown").value;
  list7[x] = ainc;

  var cel7 = NewRow.insertCell(0);
  var cel1 = NewRow.insertCell(1);
  var cel2 = NewRow.insertCell(2);
  var cel3 = NewRow.insertCell(3);
  var cel4 = NewRow.insertCell(4);
  var cel5 = NewRow.insertCell(5);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel7.innerHTML = list7[x];

  NewRow.id = ainc;
  ainc++;
  n++;
  x++;
}

cell1 = [];
cell2 = [];
cell3 = [];
cell4 = [];
cell5 = [];
cell6 = [];
z = 0;
ainc = 1;

function AddRow2() {
  var takeLstrg11 = JSON.parse(window.localStorage.getItem("Data"));
  var table = document.getElementById("show");
  var row = table.insertRow();
  cell1[z] = row.insertCell(0);
  cell2[z] = row.insertCell(1);
  cell3[z] = row.insertCell(2);
  cell4[z] = row.insertCell(3);
  cell5[z] = row.insertCell(4);
  cell6[z] = row.insertCell(5);

  tKFname = takeLstrg11[z].Fname;
  tKlname = takeLstrg11[z].lname;
  tKadd = takeLstrg11[z].add;
  tKdate = takeLstrg11[z].date;
  tKdrop = takeLstrg11[z].drop;

  cell1[z].innerHTML = ainc;
  cell2[z].innerHTML = tKFname;
  cell3[z].innerHTML = tKlname;
  cell4[z].innerHTML = tKadd;
  cell5[z].innerHTML = tKdate;
  cell6[z].innerHTML = tKdrop;
  row.id = ainc;
  z++;
  ainc++;
}

function looP1() {
  var arr = JSON.parse(window.localStorage.getItem("Data"));
  var xx = arr.length;
  for (let i = 0; i < xx; i++) {
    AddRow2();
  }
}

zz = 0;
ainc = 1;
function looP2() {
  var takeLstrg12 = JSON.parse(window.localStorage.getItem("Data"));
  var tablee = document.getElementById("show");
  var roww = tablee.insertRow();
  cell11 = roww.insertCell(0);
  cell22 = roww.insertCell(1);
  cell33 = roww.insertCell(2);
  cell44 = roww.insertCell(3);
  cell55 = roww.insertCell(4);
  cell66 = roww.insertCell(5);

  tKFnamee = takeLstrg12.Fname;
  tKlnamee = takeLstrg12.lname;
  tKaddd = takeLstrg12.add;
  tKdatee = takeLstrg12.date;
  tKdropp = takeLstrg12.drop;

  cell11.innerHTML = ainc;
  cell22.innerHTML = tKFnamee;
  cell33.innerHTML = tKlnamee;
  cell44.innerHTML = tKaddd;
  cell55.innerHTML = tKdatee;
  cell66.innerHTML = tKdropp;
  roww.id = ainc;
  zz++;
  ainc++;
}
looP1();
function doO() {
  var takeLstrg12 = JSON.parse(window.localStorage.getItem("Data"));
  if (Array.isArray(takeLstrg12) == false) {
    looP2();
  } else {
    console.log("hi,your pc hacked haha *-*");
  }
}
doO();

function Delete() {
  let whichid = prompt("choose id to be deleted");
  let x = document.getElementById(whichid).remove();

  let y = JSON.parse(window.localStorage.getItem("Data"));
  let w = whichid - 1;
  let z = y.splice(w, 1);
  localStorage.setItem("Data", JSON.stringify(y));
}

function Notewindow() {
  // let x = prompt("choose id for Note Value");
  // let y = "Data" + x;
  // let z = JSON.parse(window.localStorage.getItem(y));
  // let L = z.note;
  // chasma = document.getElementById("noteContent");
  // windows = document.getElementById("n0te");
  // chasma.innerHTML = L;
  let x = prompt("choose id for Note Value");
  let y = JSON.parse(window.localStorage.getItem("Data"));
  let w = x - 1;
  let z = y[w].note;
  chasma = document.getElementById("noteContent");
  windows = document.getElementById("n0te");
  chasma.innerHTML = z;

  windows.style.visibility = "visible";

  leftBlur = document.querySelector(".left");
  rightBlur = document.querySelector(".right");

  leftBlur.classList.add("blurstyle");
  rightBlur.classList.add("blurstyle");
}
function disNotewindow() {
  windows.style.visibility = "hidden";
  leftBlur.classList.remove("blurstyle");
  rightBlur.classList.remove("blurstyle");
}
function DeleteAlllcstrg() {
  localStorage.clear();
}
