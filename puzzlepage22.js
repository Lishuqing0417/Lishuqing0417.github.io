function start(){
  document.getElementById('puzzleOne').style.display="block";
  document.getElementById('start').style.display="none";
}

var answers = ["西湖","云冈石窟","橘子洲","黄鹤楼","泰山","故宫"]
var score = 0


function enterAnswer1(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[0]){
    alert("You're right!");
    score++
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
  }
  else{
    alert("Sorry, you still need to see more scenery！");
  }
}

function enterAnswer2(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[1]){
    alert("You're right!");
    score++
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
  }
  else{
    alert("Sorry, you still need to see more scenery！");
  }
}

function enterAnswer3(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[2]){
    alert("You're right!");
    score++
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
  }
  else{
    alert("Sorry, you still need to see more scenery！");
  }
}

function enterAnswer4(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[3]){
    alert("You're right!");
    score++
  document.getElementById('puzzleFive').style.display="block";
  document.getElementById('puzzleFour').style.display="none";
  }
  else{
    alert("Sorry, you still need to see more scenery！");
  }
}

function enterAnswer5(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[4]){
    alert("You're right!");
    score++
  }
  else{
    alert("Sorry, you still need to see more scenery！");
  }
};

function enterAnswer6(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[5]){
    alert("You're right!");
    score++
  }
  else{
    alert("Sorry, you still need to see more scenery！");
  }
};

function help1(){
  alert("水光潋滟晴方好，山色空蒙雨亦奇。
欲把西湖比西子，淡妆浓抹总相宜。
《饮湖上初晴后雨》");
}

function help2(){
  alert("探秘孰云远，忘怀复尔同。日寻高深意，宛是神仙中。
跻险构灵室，诡制非人功。潜洞黝无底，殊庭忽似梦。
岂如武安凿，自若茅山通。造物良有寄，嬉游乃惬衷。
犹希咽玉液，从此升云空。咄咄共携手，泠然且驭风。
《与生公游石窟山》");
}

function help3(){
  alert("独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？携来百侣曾游。忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。指点江山，激扬文字，粪土当年万户侯。曾记否，到中流击水，浪遏飞舟？
  《沁园春·长沙》");
}

function help4(){
  alert("昔人已乘黄鹤去，此地空余黄鹤楼。
黄鹤一去不复返，白云千载空悠悠。
晴川历历汉阳树，芳草萋萋鹦鹉洲。
日暮乡关何处是？烟波江上使人愁。
《黄鹤楼》");
}

function help5(){
  alert("岱宗夫如何？齐鲁青未了。
造化钟神秀，阴阳割昏晓。
荡胸生曾云，决眦入归鸟。
会当凌绝顶，一览众山小。
《忘岳》");
};

function help6(){
  alert("长安回望绣成堆，山顶千门次第开。
一骑红尘妃子笑，无人知是荔枝来。
《过华清宫》");
};

function correctAnswer1(){
  alert("西湖");
}

function correctAnswer2(){
  alert("云冈石窟");
}

function correctAnswer3(){
  alert("橘子洲");
}

function correctAnswer4(){
  alert("黄鹤楼");
}

function correctAnswer5(){
  alert("泰山");
};

function correctAnswer6(){
  alert("故宫");
};

function getScore(){
  alert("Your score is " + score +" , don't forget to enjoy the beautiful scenery at any time ^v^")
}

function pass1(){
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
}

function pass2(){
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
}

function pass3(){
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
}

function pass4(){
  document.getElementById('puzzleFive').style.display="block";
  document.getElementById('puzzleFour').style.display="none";
}

function pass5(){
  document.getElementById('puzzleSix').style.display="block";
  document.getElementById('puzzleFive').style.display="none";
}
