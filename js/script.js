$(document).ready(function(){
console.log("this is an open source code, don't hesitate to take it XD ");


if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi) || navigator.userAgent.match(/ipad/gi)) {
  $("html").addClass("mobile");
}


$("#right").click(function(e) {
  var dir = "right";
  var action = $("body").attr("class");
  detectionDeOuf(dir, action);
  e.preventDefault();
});
$("#left").click(function(e) {
  var dir = "left";
  var action = $("body").attr("class");
  detectionDeOuf(dir, action);
  e.preventDefault();
});

delay=true;
window.setTimeout(function(){delay=false;}, 3000);
$(document).keydown(function (event){
  if(event.which == 39){ // Arrow right
    var dir = "right";
    var action = $("body").attr("class");
    detectionDeOuf(dir, action);
  }
  
  if(event.which == 37){ // Arrow left
    var dir = "left";
    var action = $("body").attr("class");
    detectionDeOuf(dir, action);
  }
  event.preventDefault();
});


$(window).mousewheel(function(event, delta) {
  if (delta > 0) {
    var dir = "left";
    var action = $("body").attr("class");
    detectionDeOuf(dir, action);
  } else {
    var dir = "right";
    var action = $("body").attr("class");
    detectionDeOuf(dir, action);
  }
  event.preventDefault();
});

function detectionDeOuf(dir, action) {

  if(dir == "right" && action == "home devant" && !delay){
    delay=true;
    homeToProfile();
    window.setTimeout(function(){delay=false;}, 2000);
  }

  if(dir == "left" && action.indexOf("profile") == 0 && !delay){
    delay=true;
    profileToHome();
    window.setTimeout(function(){delay=false;}, 2000);
  }

  if(dir == "right" && action.indexOf("profile") == 0 && !delay){
    delay=true;
    profileToSkills();
    window.setTimeout(function(){delay=false;}, 2000);
  }

  if(dir == "left" && action == "skills devant" && !delay){
    delay=true;
    SkillsToProfile();
    window.setTimeout(function(){delay=false;}, 2500);
  }

  if(dir == "right" && action == "skills devant" && !delay){
    delay=true;
    SkillsToEducation();
    window.setTimeout(function(){delay=false;}, 3500);
  }

  if(dir == "left" && action == "education" && !delay){
    delay=true;
    EducationToSkills();
    window.setTimeout(function(){delay=false;}, 3500);
  }

  if(dir == "right" && action == "education" && !delay){
    delay=true;
    EducationToProjects();
    window.setTimeout(function(){delay=false;}, 3500);
  }

  if(dir == "left" && action.indexOf("projects item-catdone") == 0 && !delay){
    delay=true;
    ProjectsToEducation();
    window.setTimeout(function(){delay=false;}, 3500);
  }
}



  
  
  
// --------------------------------------
//             Load Buttons
// --------------------------------------  
  
$(window).load(function() {
  window.setTimeout(function(){
    home();

    var right = Snap("#right");
    var rightCircle = right.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var rightArrow = right.path("M16.07,14.475 c-1.638-1.551-2.66-2.467-4.15-4.07c-1.491-1.603,0.559-4.789,2.953-2.713c2.953,2.474,7.022,6.305,7.022,6.305s2.154,1.597,0,3.672 c-2.154,2.074-5.263,5.026-6.704,6.623c-1.44,1.596-5.107,0.319-3.271-2.474c4.479-4.7,4.479-4.7,4.479-4.7 S17.707,16.026,16.07,14.475z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var bottom = Snap("#bottom");
    var bottomCircle = bottom.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var bottomArrow = bottom.path("M17.526,15.937 c1.551-1.638,2.467-2.661,4.07-4.151c1.603-1.491,4.788,0.559,2.713,2.953c-2.474,2.954-6.305,7.023-6.305,7.023 s-1.596,2.154-3.671,0c-2.074-2.154-5.026-5.263-6.623-6.704c-1.596-1.441-0.319-5.108,2.474-3.272c4.7,4.479,4.7,4.479,4.7,4.479 S15.976,17.573,17.526,15.937z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var left = Snap("#left");
    var leftCircle = left.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var leftArrow = left.path("M16.063,17.524 c1.638,1.551,2.661,2.467,4.151,4.07c1.491,1.603-0.559,4.788-2.953,2.713c-2.954-2.474-7.023-6.305-7.023-6.305 s-2.154-1.596,0-3.671c2.154-2.074,5.263-5.026,6.704-6.623c1.441-1.596,5.108-0.319,3.272,2.474c-4.479,4.7-4.479,4.7-4.479,4.7 S14.426,15.974,16.063,17.524z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var top = Snap("#top");
    var topCircle = top.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var topArrow = top.path("M14.476,16.062 c-1.551,1.639-2.467,2.661-4.07,4.151c-1.603,1.491-4.788-0.559-2.713-2.953c2.474-2.954,6.305-7.023,6.305-7.023 s1.596-2.154,3.671,0c2.074,2.154,5.026,5.263,6.623,6.704c1.596,1.441,0.319,5.108-2.474,3.272c-4.7-4.479-4.7-4.479-4.7-4.479 S16.026,14.425,14.476,16.062z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    rightCircle.animate({
      r: 15
    }, 500, mina.easeinout,  function() {
      bottomCircle.animate({
        r: 15
      }, 500, mina.easeinout,  function() {
        leftCircle.animate({
          r: 15
        }, 500, mina.easeinout,  function() {
          topCircle.animate({
            r: 15
          }, 500, mina.easeinout);
        });
      });
    });

    window.setTimeout(function(){
      $("#right").attr("class", "nav done enable");
    }, 500);
    window.setTimeout(function(){
      $("#bottom").attr("class", "nav done");
    }, 1000);
    window.setTimeout(function(){
      $("#left").attr("class", "nav done");
    }, 1500);
    window.setTimeout(function(){
      $("#top").attr("class", "nav done");
    }, 2000);
  }, 1000);
})
// --------------------------------------
//               Home
// --------------------------------------  
  
function home () {
  
var t1 = Snap("#home_animation");
var homeCircle1 = t1.circle("30%", "50%", 0);
var homeCircle2 = t1.circle("60%", "45%", 0);
var homeCircle3 = t1.circle("70%", "55%", 0);
var homeCircle4 = t1.circle("53%", "52%", 0);
var homeCircle5 = t1.circle("43%", "51%", 0);
$( "<div id='main'>Check Portfolio</div><div id='scroll' class='demo'<a><span></span><span></span><span></span></div>").appendTo( "nav" );

$("#scroll").click(function() {
  homeToProfile();
});

} // END home()
  




function homeToProfile() {
   $( "#main" ).remove();
   $( "#scroll" ).remove();
  var width = $(window).width();
  var t2 = Snap("#home_to_profile");
  var homeToProfileCircle1 = t2.circle("50%", "50%", 0).attr({
    fill: "none",
    stroke: "#e8e8e0",
    strokeWidth: 150
  });
  var homeToProfileCircle2 = t2.circle("50%", "50%", 0).attr({
    fill: "none",
    stroke: "#e8e8e0",
    strokeWidth: 150
  });
  var homeToProfileCircle3 = t2.circle("50%", "50%", 0).attr({
    fill: "#e8e8e0"
  });
  homeToProfileCircle1.animate({
    r: width
  }, 600, mina.easeout);
  window.setTimeout(function(){
    homeToProfileCircle2.animate({
      r: width
    }, 600, mina.easeout);
  }, 100);
  window.setTimeout(function(){
    homeToProfileCircle3.animate({
      r: width
    }, 600, mina.easeout);
    window.setTimeout(function(){
      $("nav").attr("id", "profile_nav");
      $("#left, #top").attr("class", "nav done enable");
    }, 200);
    profile()
  }, 200);
}// END homeToProfile()

  

  

  
// --------------------------------------
//                Profile
// --------------------------------------
  
  
  
function profileToHome() {
  var width = $(window).width();
  var PtHSnap = Snap("#profile_to_home");
  var profileToHomeCircle = PtHSnap.circle("50%", "50%", width).attr({
    fill: "none",
    stroke: "#353d48",
    strokeWidth: width
  });
  $("nav").attr("id", "");
  $("#left, #top, #bottom").attr("class", "nav done");
  

  profileToHomeCircle.animate({
    r: width/2
  }, 700, mina.easout, function() {
    $("body").removeClass().addClass("home devant");
    $("#profile").removeClass();
    
    $("html").removeClass();
    PtHSnap.clear();
    var exp = Snap("#experiment");
    exp.clear();
    var profile = Snap("#profile_img");
    profile.clear();
    $(".sub_profile.experiment .svg").removeClass("fait");
    window.setTimeout(function(){
      $("#home").addClass("done");
    
      home();
    }, 700);
  });
}// END profileToHome()
  
  
  
  
  
function profile() {
  $("body").removeClass("devant");
  
   // $("a").removeClass(""); 
  var profile = Snap("#profile_img");
  var tete = profile.circle(60, 60, 0).attr({
    fill: "#F9D87C"
  });
  var masque = profile.rect(60, 0, 60, 120).attr({
    fill: "#EECF75"
  });
  var tete2 = profile.circle(60, 60, 0).attr({
    fill: "#EECF75",
    mask: masque
  });
  var oeil = profile.circle(40, 45, 0).attr({
    fill: "#675744"
  });
  var oeil2 = profile.circle(80, 45, 0).attr({
    fill: "#675744"
  });  
  var sourir = profile.path("M101.975,61.02c0,18.922-18.645,34.261-41.645,34.261 c-23,0-41.645-15.339-41.645-34.261").attr({
    fill: "none",
    strokeWidth: "8",
    stroke: "#fff",
    strokeDasharray: "18 18",
  });var lenB = sourir.getTotalLength();
  sourir.attr({
    "stroke-dasharray": lenB + " " + lenB,
    "stroke-dashoffset": lenB
  });
  tete.animate({
    r: 60
  }, 700, mina.easeinout);
  tete2.animate({
    r: 60
  }, 700, mina.easeinout, function() {
    $("body").removeClass().addClass("profile");
    $("#home").removeClass();
    $("#skill_to_profile").attr("class", "");
    var t2 = Snap("#home_to_profile");
    t2.clear();
    var t1 = Snap("#home_animation");
    t1.clear();
    sourir.animate({
      "stroke-dashoffset": 0
    }, 350, function() {
      oeil.animate({
        r: 6
      }, 1200, mina.elastic);
      oeil2.animate({
        r: 6
      }, 1200, mina.elastic);
      window.setTimeout(function(){
        $("#profile").addClass("done");
      }, 300);
      window.setTimeout(function(){
        $("#profile").addClass("done2");
        profileKey();
      }, 400);
    });
  });

}// END profile()    
function profileKey() {

$("#top").click(function(e) {
  var dir = "top";
  var action = $("body").attr("class");
  detectionProfileDeOuf(dir, action);
  e.preventDefault();
});
$("#bottom").click(function(e) {
  var dir = "bottom";
  var action = $("body").attr("class");
  detectionProfileDeOuf(dir, action);
  e.preventDefault();
});

$(document).keydown(function (event){
  if(event.which == 38){ // Arrow top
    var dir = "top";
    var action = $("body").attr("class");
    detectionProfileDeOuf(dir, action);
  }
  
  if(event.which == 40){ // Arrow bottom
    var dir = "bottom";
    var action = $("body").attr("class");
    detectionProfileDeOuf(dir, action);
  }
  event.preventDefault();
});

} // END profileKey()


function detectionProfileDeOuf(dir, action) {

  if(dir == "top" && action == "profile" && !delay){
    delay=true;
    $("#profile").addClass("out");
    $("html").addClass("profileimgout");
    $("body").addClass("read");
    $("#bottom").attr("class", "nav done enable");
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(dir == "top" && action == "profile read" && !delay){
    delay=true;
    $("body").removeClass("read").addClass("experiment");
    window.setTimeout(function(){
      expAnim()
    }, 1800);
    if (!$(".sub_profile.experiment .svg").hasClass("fait")) {
      var exp = Snap("#experiment");
      var fiole = exp.path("M124.837,115.088c0-0.459-0.009-0.914-0.022-1.369c-0.003-0.098-0.006-0.195-0.01-0.293 c-0.017-0.452-0.038-0.904-0.067-1.354c-0.003-0.035-0.006-0.069-0.008-0.104c-0.031-0.444-0.068-0.887-0.112-1.328 c-0.005-0.051-0.009-0.102-0.015-0.152c-0.048-0.477-0.104-0.95-0.167-1.421c-0.001-0.01-0.002-0.02-0.004-0.029 c-2.341-17.411-14.642-31.658-30.972-36.8c-0.04-0.013-0.081-0.025-0.121-0.038c-0.446-0.139-0.896-0.273-1.349-0.398 c-0.017-0.004-0.033-0.009-0.051-0.014c-0.243-0.067-0.486-0.133-0.73-0.196V5.614h2.803c1.547,0,2.803-1.257,2.803-2.807 C96.814,1.256,95.559,0,94.012,0H65.988c-1.548,0-2.802,1.256-2.802,2.807c0,1.55,1.254,2.807,2.802,2.807h2.802v65.977 c-0.248,0.064-0.495,0.131-0.741,0.199c-0.012,0.003-0.023,0.006-0.035,0.01c-0.457,0.126-0.909,0.261-1.36,0.401 c-0.036,0.011-0.071,0.022-0.107,0.034c-16.791,5.283-29.323,20.192-31.152,38.27c-0.003,0.034-0.007,0.069-0.01,0.104 c-0.046,0.463-0.085,0.929-0.117,1.396c-0.001,0.019-0.003,0.036-0.004,0.054c-0.031,0.46-0.053,0.922-0.07,1.385 c-0.003,0.085-0.005,0.17-0.008,0.255c-0.014,0.462-0.024,0.924-0.024,1.39c0,6.544,1.399,12.761,3.911,18.369 c6.266,13.984,19.465,24.177,35.216,26.182C76.159,159.877,78.065,160,80,160c1.935,0,3.84-0.123,5.711-0.361 C107.777,156.829,124.837,137.954,124.837,115.088z M48.3,146.841l0.001-0.002l0.001,0.002h0c0.088,0.088,0.173,0.178,0.262,0.266 L48.3,146.841z M80,157.193c-23.178,0-42.035-18.889-42.035-42.105c0-8.174,2.344-15.902,6.465-22.456h71.141 c4.121,6.554,6.465,14.282,6.465,22.456C122.035,138.305,103.178,157.193,80,157.193z").attr({
        fill: "#fff"
      });
      var fond_fiole_masque1 = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#999"
      });
      var fond_fiole_masque2 = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#999"
      });
      var fond_fiole_masque3 = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#999"
      });
      var fond_fiole = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#6EBEC4"
      }); 
      var bulle1 = exp.circle(70, 160, 3).attr({
        fill: "#fff",
        mask: fond_fiole_masque1
      });
      var bulle2 = exp.circle(85, 190, 0).attr({
        fill: "#fff",
        mask: fond_fiole_masque2
      });
      var bulle3 = exp.circle(85, 190, 0).attr({
        fill: "#fff",
        mask: fond_fiole_masque3
      });
      $(".sub_profile.experiment .svg").addClass("fait");
    }
    function expAnim() {
      bulle1.attr({r: 0,cy: 160})
      bulle2.attr({r: 0,cy: 190})
      bulle3.attr({r: 0,cy: 190})
      bulle1.animate({
        r: 10,
        cy: 70
      }, 4000, mina.easeout);
      bulle2.animate({
        r: 8,
        cy: 70
      }, 4400, mina.easeout);
      window.setTimeout(function(){
        bulle3.animate({
          r: 7,
          cy: 70
        }, 5000, mina.easeout, function(){
          window.setTimeout(function(){
            expAnim()
          }, 4000);
        });
      }, 3300); 
    }
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(dir == "top" && action == "profile experiment" && !delay){
    delay=true;
    $("body").removeClass("experiment").addClass("sketch");
    window.setTimeout(function(){delay=false;}, 1500);
  }



  if(dir == "bottom" && action == "profile read" && !delay){
    delay=true;
    $("#bottom").attr("class", "nav done");
    $("html").removeClass("profileimgout");
    $("body").removeClass("read");
    window.setTimeout(function(){
      $("#profile").removeClass("out");
    }, 500);
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(dir == "bottom" && action == "profile experiment" && !delay){
    delay=true;
    $("body").removeClass("experiment").addClass("read");
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(dir == "bottom" && action == "profile sketch" && !delay){
    delay=true;
    $("body").removeClass("sketch").addClass("experiment");
    window.setTimeout(function(){delay=false;}, 1500);
  }
}
  
  

  
  
  
  

  
  
  
  
  
  
  
  
  
  

  
  
    
// --------------------------------------
//            Skill
// --------------------------------------
  
function SkillsToProfile () {
  var cut = ($(window).width()+$(window).height())/2;
  var SFtP = Snap("#skill_to_profile");
  $("#skill_to_profile").attr("class", "here");
  var SkillsToProfileCircle = SFtP.circle("50%", "50%", 0).attr({
    fill: "#e8e8e0",
  });
  SkillsToProfileCircle.animate({
    r: cut
  }, 1100, mina.easeinout, function() {
    SFtP.clear();
    var c1 = Snap("#big_circle");
    c1.clear();
    var PtSFSnap = Snap("#profile_to_skill");
    PtSFSnap.clear();
    SFtP.clear();
    Snap("#all").clear();
    Snap("#front").clear();
    Snap("#back").clear();
    Snap("#os").clear();
    Snap("#software").clear();
  });
  window.setTimeout(function(){
    $("body").removeClass().addClass("profile");
    profile();
  }, 900);
  window.setTimeout(function(){
    $("nav").attr("id", "profile_nav");
    $("#top").attr("class", "nav done enable");
  }, 600);
} // END profileToSkills()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
function profileToSkills() {
  
  var PtSFSnap = Snap("#profile_to_skill");
  var cx= $(window).width()/2,
      cy= $(window).height()/2,
      width= $(window).width(),
      r= width/2;
  var profileToSkillsCircle = PtSFSnap.path("M "+cx+" "+cy+" m "+ (-r) +", 0 a "+r+","+r+" 0 1,0 "+ r*2 +",0 a "+r+","+r+" 0 1,0 "+ (-r*2) +",0").attr({
    fill: "none",
    strokeWidth: width,
    stroke: "#ea9a9d",
    strokeDasharray: "18 18",
  });
  var cut = profileToSkillsCircle.getTotalLength();
  profileToSkillsCircle.attr({
    strokeDasharray: cut + " " + cut,
    strokeDashoffset: cut
  });
  profileToSkillsCircle.animate({
    strokeDashoffset: 0
  }, 1400, mina.easeinout);
  profileToSkillsCircle.animate( { transform: "r -90, "+cx+", "+cy}, 1 );
  profileToSkillsCircle.animate( { transform: "r -180, "+cx+", "+cy}, 1400, function() {
    $("body").removeClass().addClass("skills devant");
    $("#profile").removeClass();
    $("html").removeClass();
    var profile = Snap("#profile_img");
    profile.clear();
    var exp = Snap("#experiment");
    exp.clear();
    $(".sub_profile.experiment .svg").removeClass("fait");
  });
  window.setTimeout(function(){
    $("nav").attr("id", "skills_nav");
    $("#bottom, #top").attr("class", "nav done");
  }, 800);
  skills(1200);

} // END profileToSkills()







function skills(delay) {  
  var c1 = Snap("#big_circle");
  var bigCircle = c1.circle(300, 300, 0).attr({
    cx: "50%",
    cy: "50%",
    fill: "#ea9a9d",
    stroke: "#e8e8e0",
    strokeWidth: 7
  });
  var bigCircle2 = c1.circle(300, 300, 0).attr({
    cx: "50%",
    cy: "50%",
    fill: "#e8e8e0"
  });

  bigCircle.animate({r: 110}, 2300, mina.elastic);
  bigCircle2.animate({r: 92}, 800, mina.easeout);

  //  Lines & Circles
  var all = Snap("#all");
  var front = Snap("#front");
  var back = Snap("#back");
  var os = Snap("#os");
  var softwares = Snap("#software");

  function skill_circles(name, cut, x, y, number) {
    var all = Snap("#all");
    var height0 = $(window).height()/2;
    var width0 = $(window).width()/2;
    var height = $(window).height();
    var width = $(window).width();
    var xp = (x*width)/100;
    var yp = (y*height)/100;
    var x = x + "%";
    var y = y + "%";
    var y1 = "50%"; 
    var x1 = "50%";
    var color = "#e8e8e0"
    if (number) {var color="#e7c7c2"}
    if (number == 2) {
      var all = front;
      var height0 = (30*height)/100;
      var width0 = (25*width)/100;
      var y1 = "30%";
      var x1 = "25%";
    } else if (number == 3) {
      var all = back;
      var height0 = (25*height)/100;
      var width0 = (72*width)/100;
      var y1 = "25%"; 
      var x1 = "72%";
    } else if (number == 4) {
      var all = os;
      var height0 = (75*height)/100;
      var width0 = (30*width)/100;
      var y1 = "75%"; 
      var x1 = "30%";
    } else if (number == 5) {
      var all = softwares;
      var height0 = (70*height)/100;
      var width0 = (75*width)/100;
      var y1 = "70%"; 
      var x1 = "75%";
    }

    var real = name;
    var nameline = name + "Line";
    var namesmall = name + "Small";  

    var nameline = all.line(width0, height0, width0, height0);
    nameline.attr({
      "stroke-linecap": "round",
      stroke: color,
      strokeWidth: 7
    });

    nameline.animate({
        x2: xp,
        y2: yp
    }, 300, mina.easeout, function () {
      var name = all.circle(300, 300, 0);
      name.attr({
        cx: x,
        cy: y,
        fill: "#ea9a9d",
        stroke: color,
        strokeWidth: 7
      });
      name.animate({r: cut}, 700, mina.elastic);

      var namesmall = all.circle(300, 300, 0);
      namesmall.attr({
        cx: x,
        cy: y,
        fill: "#e8e8e0"
      });
      namesmall.animate({r: cut*0.8}, 300, mina.easeout);
      if (!number) {
        window.setTimeout(function(){
          moveYourBody()
        }, 1000);
        function moveYourBody() {
        var temps= Math.random()*4000+2000;
          window.setTimeout(function(){
            name.animate({r: cut*1.08}, 200, mina.easeout, function() {
              name.animate({r: cut}, 200, mina.easeout, function() {
                moveYourBody()
              });
            });
          }, temps);
        }
      }
      nameline.attr({
        x1: x1,
        y1: y1,
        x2: x,
        y2: y
      });

    });

  }



  //Animations
  window.setTimeout(function(){

    window.setTimeout(function(){
      skill_circles("FrontEnd", 85, 25, 30);
    }, 300);

    window.setTimeout(function(){
      skill_circles("BackEnd", 85, 72, 25);
    }, 900);

    window.setTimeout(function(){
      skill_circles("OS", 60, 30, 75);
    }, 700);

    window.setTimeout(function(){
      skill_circles("software", 70, 75, 70);
    }, 400);

  }, delay);





  //Animation Hover
  window.setTimeout(function(){
    front_end=true;
    $(".front-end").hover(FrontEnd_Hover, function(){return false;});

    function FrontEnd_Hover() {
      if (front_end) {
        window.setTimeout(function(){
          skill_circles("css", 60, 34, 15, 2);
        });

        window.setTimeout(function(){
          skill_circles("html", 60, 8, 22, 2);
        }, 100);

        window.setTimeout(function(){
          skill_circles("js", 45, 16, 42, 2);
        }, 200);
        window.setTimeout(function(){
          skill_circles("bootstrap", 60, 20, 8, 2);
        }, 100);
      }
      front_end=false;
    }




    back_end=true;
    $(".back-end").hover(BackEnd_Hover, function(){return false;});

    function BackEnd_Hover() {
      if (back_end) {
        window.setTimeout(function(){
          skill_circles("php", 50, 88, 32, 3);
        });

        window.setTimeout(function(){
          skill_circles("cms", 50, 82, 13, 3);
        }, 100);

        window.setTimeout(function(){
          skill_circles("Python", 70, 60, 13, 3);
        }, 100);
      }
      back_end=false;
    }

    Os=true;
    $(".os").hover(Os_Hover, function(){return false;});

    function Os_Hover() {
      if (Os) {
        window.setTimeout(function(){
          skill_circles("sql", 45, 32, 54, 4);
        });

        window.setTimeout(function(){
          skill_circles("vb", 45, 13, 86, 4);
        }, 100);

        window.setTimeout(function(){
          skill_circles("java", 45, 19, 68, 4);
        }, 100);

        window.setTimeout(function(){
          skill_circles("cpp", 45, 38, 89, 4);
        }, 100);
      }
      Os=false;
    }

    Logiciels=true;
    $(".software").hover(Logiciels_Hover, function(){return false;});

    function Logiciels_Hover() {
      if (Logiciels) {
        window.setTimeout(function(){
          skill_circles("Photoshop", 50, 72, 50, 5);
        });

        window.setTimeout(function(){
          skill_circles("adobexd", 50, 89, 66, 5);
        }, 100);

        window.setTimeout(function(){
          skill_circles("git", 50, 83, 86, 5);
        }, 100);

        window.setTimeout(function(){
          skill_circles("Lin", 50, 62, 79, 5);
        }, 100);

        window.setTimeout(function(){
          skill_circles("PSQL", 50, 72, 92, 5);
        }, 100);
        
        window.setTimeout(function(){
          skill_circles("Vagrant", 50, 83, 50, 5);
        }, 100);
      }
      Logiciels=false;
    }
  }, 2100);

  
} // END skills()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// --------------------------------------
//            Education
// --------------------------------------
  
function SkillsToEducation() {
  var width = $(window).width();
  $("#skill_to_education").attr("class", "here");
  var SFtE = Snap("#skill_to_education");
  var educationRect1 = SFtE.rect(0, 0, 0, "100%").attr({
    fill: "#b6e7e6"
  });
  var educationRect2 = SFtE.rect(0, 0, 0, "100%").attr({
    fill: "#b0dedb"
  });
  var educationRect3 = SFtE.rect(0, 0, 0, "100%").attr({
    fill: "#a2cecd"
  });
  
  educationRect1.animate({
    width: width
  }, 1500, mina.easeinout)
  
  
  window.setTimeout(function(){
    educationRect2.animate({
      width: width
    }, 1100, mina.easeinout)
  }, 400);
  window.setTimeout(function(){
    educationRect3.animate({
      width: width
    }, 800, mina.easeinout, function() {
      var c1 = Snap("#big_circle");
      c1.clear();
      var PtSFSnap = Snap("#profile_to_skill");
      PtSFSnap.clear();
      Snap("#all").clear();
      Snap("#front").clear();
      Snap("#back").clear();
      Snap("#os").clear();
      Snap("#software").clear();
      $("body").removeClass().addClass("education");
      SFtE.clear();
      education()
    })
  }, 700);
  window.setTimeout(function(){
    $("nav").attr("id", "education_nav");
  }, 100);
}
  
  
  
  
function education() {
  var education = Snap("#education_img");
  var CbottomMask = education.circle(80, 0, 50).attr({
    fill: "#fff",
  });
  var Cbottom = education.path("M114.311,101.769V75.173H45.725c0,0,0,23.007,0,26.595C44.177,114.858,109.691,121.193,114.311,101.769z").attr({
    fill: "#252C3C",
    mask: CbottomMask
  });

  var Cbottom2Mask = education.circle(80, 0, 50).attr({
    fill: "#fff",
  });
  var Cbottom2 = education.path("M114.311,96.601V70.005H45.725c0,0,0,23.007,0,26.595C44.177,109.691,109.691,116.025,114.311,96.601z").attr({
    fill: "#2F4351",
    mask: Cbottom2Mask
  });

  var CtopMask = education.circle(0, 0, 0).attr({
    fill: "#fff",
  });
  var Ctop = education.polygon("0,66.054 80.019,94.632 160.036,66.054 80.019,37.476").attr({
    fill: "#242c3c",
    mask: CtopMask
  });

  var CribbonMask = education.circle(40, 40, 0).attr({
    fill: "#fff",
  });
  var Cribbon = education.polygon("117.21,81.35 76.975,66.979 82.69,64.938 122.925,79.308").attr({
    fill: "#E36A5D",
    mask: CribbonMask
  });
  var Cribbon2Mask = education.circle(40, 40, 0).attr({
    fill: "#fff",
  });
  var Cribbon2 = education.polygon("117.21,81.35 117.21,117.422 120.067,113.542 122.925,115.381 122.925,79.308").attr({
    fill: "#E36A5D",
    mask: Cribbon2Mask
  });

  var CtopBoule = education.circle(80, 66, 0).attr({
    fill: "#2F4351",
  });

  Cbottom2Mask.animate({
    r: 150
  }, 700);
  CbottomMask.animate({
    r: 150
  }, 700);
  
  window.setTimeout(function(){
    CtopMask.animate({
      r: 200
    }, 1100, function() {
      CtopBoule.animate({
        r: 3,
      }, 100);
      CribbonMask.animate({
        r: 200
      }, 1800);
      Cribbon2Mask.animate({
        r: 200
      }, 1800);
      window.setTimeout(function(){
        $("#education").addClass("done");
      }, 1100);
      window.setTimeout(function(){
        $("#education").addClass("done2");
      }, 1200);
     
     


    });
  }, 200);
} // END education()
  
  
  
  
  
  
  
  
  
  
function EducationToSkills() {
  var width = $(window).width();
  var SFtE = Snap("#skill_to_education");
  $("#skill_to_education").attr("class", "here");
  var educationRect1 = SFtE.rect(width, 0, "100%", "100%").attr({
    fill: "#f1b8bb"
  });
  var educationRect2 = SFtE.rect(width, 0, "100%", "100%").attr({
    fill: "#efa7aa"
  });
  var educationRect3 = SFtE.rect(width, 0, "100%", "100%").attr({
    fill: "#ea9a9d"
  });
  
  educationRect1.animate({
    x: 0
  }, 1500, mina.easeinout)
  
  
  window.setTimeout(function(){
    educationRect2.animate({
      x: 0
    }, 1100, mina.easeinout)
  }, 400);
  window.setTimeout(function(){
    educationRect3.animate({
      x: 0
    }, 800, mina.easeinout, function() {
      $("body").removeClass().addClass("skills devant");
      SFtE.clear();
      skills(300);
      $("#education").removeClass();
      var education = Snap("#education_img");
      education.clear();
      $("#skill_to_education").attr("class", "");
    })
  }, 700);
  window.setTimeout(function(){
    $("nav").attr("id", "skills_nav");
  }, 1200);
}
  




































// --------------------------------------
//           Projects
// --------------------------------------


function EducationToProjects() {
  $("nav").append("<div id='btn'></div>");
  $("#skill_to_education").attr("class", "");
  var width = $(window).width();
  var EtR = Snap("200%", "600%");
  EtR.attr({id: "education_to_projects"});
  var realisationRect1 = EtR.rect(0, 0, 30, width*4).attr({
    fill: "#e8e8e0"
  });
  var realisationRect2 = EtR.rect(200, 0, 120, width*4).attr({
    fill: "#e8e8e0"
  });
  var realisationRect3 = EtR.rect(450, 0, 300, width*4).attr({
    fill: "#e8e8e0"
  });
  var realisationRect4 = EtR.rect(700, 0, width*2, width*4).attr({
    fill: "#e8e8e0"
  });

  window.setTimeout(function(){
    $("#education_to_projects").attr("class", "done");
  }, 10);

  window.setTimeout(function(){
    $("body").removeClass().addClass("projects");
    realisations()
    $("#education").removeClass();
    $("#education_to_projects").attr("class", "");
    EtR.clear();
    var education = Snap("#education_img");
    education.clear();
  }, 1000);
  window.setTimeout(function(){
    $("nav").attr("id", "realisation_nav");
    $("#top").attr("class", "nav done enable");
    $("#right").attr("class", "nav done");

  }, 700);
 

}







function ProjectsToEducation() {
  var width = $(window).width();
  $("#btn").remove();
  var RtE = Snap("#education_to_projects");
  var realisationRect1 = RtE.rect(0, 0, 30, width*4).attr({
    fill: "#a2cecd"
  });
  var realisationRect2 = RtE.rect(200, 0, 120, width*4).attr({
    fill: "#a2cecd"
  });
  var realisationRect3 = RtE.rect(450, 0, 300, width*4).attr({
    fill: "#a2cecd"
  });
  var realisationRect4 = RtE.rect(700, 0, width*2, width*4).attr({
    fill: "#a2cecd"
  });

  window.setTimeout(function(){
    $("#education_to_projects").attr("class", "done");
  }, 10);
  window.setTimeout(function(){
    $("body").removeClass().addClass("education");
    education()
    $(".site_imac.item-cat").removeClass("done");
    $("#macbook").removeClass();
    $("#education_to_projects").attr("class", "");
    $("#education_to_projects").remove();
    var imac = Snap("#imac");
    imac.clear();
  }, 1000);
  window.setTimeout(function(){
    $("nav").attr("id", "education_nav");
    $("#top, #bottom").attr("class", "nav done");
	$("#right").attr("class", "nav done enable");
  }, 700);

}
















function realisations () {
  var imac = Snap("#imac");
  var imactopMask = imac.rect(180, 0, 0, 300).attr({
    fill: "#fff"
  });
  var imactop = imac.path("M347.797,0H12.198C5.563,0,0,4.879,0,11.514V216h360V11.514C360,4.879,354.434,0,347.797,0z").attr({
    fill: "#454D59",
    mask: imactopMask
  });
  var imacMilieuMask = imac.rect(180, 0, 0, 300).attr({
    fill: "#fff"
  });
  var imacMilieu = imac.path("M0,243.484C0,250.12,5.563,256,12.198,256H134.4h91.195h122.201c6.637,0,12.203-5.88,12.203-12.516V216H0 V243.484z").attr({
    fill: "#E1E2E4",
    mask: imacMilieuMask
  });


  var imacbottomMask = imac.rect(0, 255, 360, 0).attr({
    fill: "#fff"
  });
  var imacbottom = imac.polygon("133.481,266 226.195,266 226.302,266 225.596,256 134.4,256").attr({
    fill: "#CACCCE",
    mask: imacbottomMask
  });
  var imacbottom2Mask = imac.rect(0, 255, 360, 0).attr({
    fill: "#fff"
  });
  var imacbottom2 = imac.path("M133.375,266l-1.483,21.699c0,0,0.213,4.892-5.721,5.527c-11.656,3.179-11.656,2.773-11.656,2.773h130.754 l-11.231-2.626c0,0-5.722,0.3-5.934-5.845c-1.908-21.828-1.908-21.529-1.908-21.529h-92.714H133.375z").attr({
    fill: "#E1E2E4",
    mask: imacbottom2Mask
  });
  var imacbottom3 = imac.rect(115, 296, 130, 0).attr({
    fill: "#ECEDEE"
  });

  window.setTimeout(function(){
    $(".site_imac.item-cat").addClass("done");
     $("#ic").remove();

     window.setTimeout(function(){
    $("#btn").removeClass("#ic").append("<a id='ic' href='https://github.com/ayseth/item-catalog' target='_blank'>Check source code</a>");
    {delay=false;}
    } ,800);
    //  window.setTimeout(function(){
    // $("#realisation_nav").append("<div id='btn'></div>");
    // }, 1500);
  }, 10);
  imactopMask.animate({
    width: 360,
    x: 0
  }, 1100);
  imacMilieuMask.animate({
    width: 360,
    x: 0
  }, 1100, function () {
    imacbottomMask.animate({
      height: 100
    }, 1100, mina.easeinout);
    imacbottom2Mask.animate({
      height: 100
    }, 1100, mina.easeinout);
    window.setTimeout(function(){
      imacbottom3.animate({
        height: 4
      }, 100, mina.easeinout);
    }, 500);
  });
    
  window.setTimeout(function(){
    $("#macbook").addClass("done");
    $("body").addClass("item-catdone");
    $("body").addClass("item-cat");
  }, 100);
  window.setTimeout(function(){
    realisationsKey();
  }, 1800);
}




function realisationsKey() {

  $("#top").click(function(e) {
    var dir = "top";
    var action = $("body").attr("class");
    detectionRealisationDeOuf(dir, action);
    e.preventDefault();
  });
  $("#bottom").click(function(e) {
    var dir = "bottom";
    var action = $("body").attr("class");
    detectionRealisationDeOuf(dir, action);
    e.preventDefault();
  });

  $(document).keydown(function (event){
    if(event.which == 38){ // Arrow top
      var dir = "top";
      var action = $("body").attr("class");
      detectionRealisationDeOuf(dir, action);
    }
    
    if(event.which == 40){ // Arrow bottom
      var dir = "bottom";
      var action = $("body").attr("class");
      detectionRealisationDeOuf(dir, action);
    }
    event.preventDefault();
  });
} // END realisationsKey()


function detectionRealisationDeOuf(dir, action) {

  if(dir == "top" && action == "projects item-catdone item-cat" && !delay){
    delay=true;
    $("#bottom").attr("class", "nav done enable");
    $("body").removeClass("item-cat").addClass("brilliant");
     $("#ic").remove();
     window.setTimeout(function(){
    $("#btn").removeClass("#ic").append("<a id='ic' href='https://github.com/ayseth/brilliant' target='_blank'>Check source code</a><a id='ic2' href='sites/101brilliant/brilliant.html' target='_blank'>View page</a>");
    // $("#btn").remove("button").append("{delay=false;}");
  {delay=false;}
  } ,800);
    //   window.setTimeout(function(){
    // $("#realisation_nav").append("<div id='btn'></div>");
    // $("#realisation_nav").append("<div id='btn'></div>");
    // }, 1300);
    window.setTimeout(function(){delay=false;}, 500);
  }

  if(dir == "top" && action == "projects item-catdone brilliant" && !delay){
    delay=true;
    $("#top").attr("class", "nav done");
    $("body").removeClass("brilliant").addClass("blog");
     $("#ic").remove();
     $("#ic2").remove();
     window.setTimeout(function(){
      // $("#ic").remove();
      $("#ic2").remove();
     $("#btn").removeClass("#ic #ic2").append("<a id='ic' href='https://github.com/ayseth/cms-blog' target='_blank'>Check source code</a>");
    {delay=false;}
    } ,800);

    //   window.setTimeout(function(){
    // $("#realisation_nav").append("<div id='btn'></div>");
    // }, 1300);
    $("#ic2").remove();
    $("#ic").remove();
    window.setTimeout(function(){delay=false;}, 500);
  }



  if(dir == "bottom" && action == "projects item-catdone brilliant" && !delay){
    delay=true;
    $("#bottom").attr("class", "nav done");
    $("body").removeClass("brilliant").addClass("item-cat");
    $("#ic").remove();
$("#ic2").remove();
    window.setTimeout(function(){
      $("#ic2").remove();
      // $("#ic").remove();
    $("#btn").removeClass("#ic #ic2").append("<a id='ic' href='https://github.com/ayseth/item-catalog' target='_blank'>Check source code</a>");
    {delay=false;}
    } ,800);
    
    // window.setTimeout(function(){
    // $("#realisation_nav").append("<div id='btn'></div>");
    // }, 1300);
    window.setTimeout(function(){delay=false;}, 500);
   
  }




  if(dir == "bottom" && action == "projects item-catdone blog" && !delay){
    delay=true;
    $("#top").attr("class", "nav done enable");
    $("body").removeClass("blog").addClass("brilliant");
    
    $("#ic").remove();
     $("#ic2").remove();

    window.setTimeout(function(){
     
    $("#btn").removeClass("#ic #ic2").append("<a id='ic' href='https://github.com/ayseth/brilliant' target='_blank'>Check source code</a><a id='ic2' href='sites/101brilliant/brilliant.html' target='_blank'>View page</a>");
        // $("#btn").remove("button").append("");
     {delay=false;}
      } ,800);
    // window.setTimeout(function(){
    // $("#realisation_nav").append("<div id='btn'></div>");
    // $("#realisation_nav").append("<div id='btn'></div>");
    // }, 1300);
    
    window.setTimeout(function(){delay=false;}, 500);
  }
}

});


