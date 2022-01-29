var songs = [
  {
    "lines" : "测试测试测试",
    "song":"遇见",
    "singer": "孙燕姿"
  },
  {
    "lines" : "假装了解是怕真相太赤裸裸，狼狈比失去难受。",
    "song" : "我怀念的",
    "singer": "孙燕姿"
  },
  {
    "lines" : "我怀念的是无话不说，我怀念的是一起做梦。",
    "song" : "我怀念的",
    "singer": "孙燕姿"
  },
  {
    "lines" : "我们一个像夏天，一个像秋天 却总能把冬天变成了春天。",
    "song" : "一个像夏天，一个像秋天",
    "singer": "范玮琪"
  },
  {
    "lines" : "再多的风景也从不停靠 只一心寻找我遗失的美好 有的人说不清哪里好 但就是谁都替代不了。",
    "song" : "遗失的美好",
    "singer": "张韶涵"
  },
  {
    "lines" : "每个人都会缺乏什么，我们才会瞬间就不快乐。",
    "song" : "想自由",
    "singer": "林宥嘉"
  }
];
var colors = [
  "#7ECDB6",
  "#EB7FAF",
  "#986C85",
  "#CE3B3B",
  "#597E82",
  "#015F5A"
]
$(document).ready(function(){
  $("#next").on("click",function(){
    var html_lines = "";
    var html_by = "- ";
    var index = Math.floor( Math.random() * 6 );
    var one = songs[index];
    html_lines += one.lines;
    html_by += one.singer;
    $("#text #lines").html(html_lines);
    $("#by").html(html_by);
    
    $("body, .btn").css("background",colors[index]);
    $("#text, #by").css("color",colors[index]);
  });
});