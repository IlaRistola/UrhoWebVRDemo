view1 = document.querySelector("#stillView");
        view2 = document.querySelector("#stillView2");
        view3 = document.querySelector("#stillView3");
        view4 = document.querySelector("#stillView4");
        sp = document.querySelector("#imgSphere");
        hs2_2 = document.querySelector("#hotspot2_2");
        hs2_4 = document.querySelector("#hotspot2_4");
        hs2_4_1 = document.querySelector("#hotspot2_4_1");
        layer2_2 = document.querySelector("#dancingQueen");
        layer2_2_1 = document.querySelector("#dancingQueen_1"); //off??
        layer2_4_1 = document.querySelector("#guard");
        mBut = document.querySelector("#mechButton"); 
        meterBar = document.querySelector("#myBar");
        meterBase = document.querySelector("#myProgress");
        q1 = document.querySelector("#queenCloseUp");
        q2 = document.querySelector("#queenCloseUp2");
        q3 = document.querySelector("#queenCloseUp3");
        queenVid = document.querySelector("#dancerVideo");
        queenVid2 = document.querySelector("#dancerVideo2");
        queenVid3 = document.querySelector("#dancerVideo3");
        queenLayer = document.querySelector("#queenVideo");
        queenLayer2 = document.querySelector("#queenVideo2");
        queenLayer3 = document.querySelector("#queenVideo3");
        bg = document.querySelector("#background");
        slp = document.querySelector("#sleep");
        bg2 = document.querySelector("#background2");
        happyf = document.querySelector("#happyfeet");
        da = document.querySelector("#danceAnim");
        timeB = 75;
        nx = document.querySelector("#next");
        rm = document.getElementById("Room");
        ht = document.getElementById("hint");
        sbubble = document.getElementById("speechBubble");
        btext = document.getElementById("bubbleText");
        key2_4 = false;
        a = 0;
        danceScene = false;
        var touchElement = document.getElementById('as');
        var mc = new Hammer.Manager(touchElement);
        mc.add( new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL, velocity: 0.1 }) );
        textArea = "eheheehehehe";
        rm.innerHTML = textArea;
        ht.innerHTML = "Start Demo";
        /*document.body.addEventListener("click", function (evt) {
        console.log("Hit");
        });*/
        // To check that is vibration API supported 
        if (window.navigator && window.navigator.vibrate) {
          // Vibration supported
          vib = true;
        } else {
        // Vibration not supported
        vib = false;
        }
        
          document.querySelector("#startImg").addEventListener('mousedown', function (e) {
          bg.play();
          hs2_4.setAttribute('visible', true),
          layer2_2.setAttribute('visible', true),
          hs2_2.setAttribute('visible', true);
          if(document.querySelector("#hotspot2_4").matches('.not-touchable')) { 
          $("#hotspot2_4").toggleClass("not-touchable touchable");
          $("#hotspot2_2").toggleClass("not-touchable touchable");
          $("#startImg").toggleClass("touchable not-touchable");
          }
          sp.setAttribute("visible", true);
          document.querySelector("#startImg").setAttribute('visible', false);
          ht.innerHTML = "Find President Kekkonen, history depends on it!";
          document.getElementById("item1").style.display = "block";
          bg.play();
        });
       

        mBut.addEventListener('mousedown', function (e) {
            if(vib){
            /*window.navigator.vibrate(50);*/
            } 
            timeB += 20;
            BalanceMeter();
        });
        

mc.on("swipeleft swiperight", function(ev) {
    if(danceScene){
     if(vib){
            window.navigator.vibrate(50);
            } 
            timeB += 20;
            BalanceMeter();
    }
});

    
        function BalanceMeter() {
        
          if(timeB >= 100){
          timeB = 100
        }
          var elem = meterBar;
          var height = timeB;
        elem.style.height = height +"%";
        }
        
        function meterTimer() {
          face1 = true;
          face2 = false;
          face3 = false;
          danceTime = 12;
          dTime = setInterval(function() {
          if(danceTime == 10){
          btext.innerHTML = "Maybe you can help<br>me with something..";
          sbubble.style.display = "block";
          } else if(danceTime == 8){
          btext.innerHTML = "You want to hear a secret?";
          sbubble.style.display = "block";
          }  else if(danceTime == 5){
          btext.innerHTML = "I just can’t stop thinking about<br>the President’s bodyguard";
          sbubble.style.display = "block";
          }  else if(danceTime == 3){
          btext.innerHTML = "If only I could take<br>a moment with him";
          sbubble.style.display = "block";
          } else {
            sbubble.style.display = "none";
          }
          danceTime--;
          ModText = textArea.slice(0, -1);
          textArea = ModText
          rm.innerHTML = textArea;
          if(danceTime == 0){
            clearInterval(dTime); 
            clearInterval(takeTime); 
            danceFeedback();
          }
          }, 5000);
          takeTime = setInterval(function(){
         /* ModText = textArea.slice(0, -1);
          textArea = ModText
          rm.innerHTML = textArea;*/
          //console.log(danceTime);
          if(timeB > 90 && !face2){
          meterBar.style.backgroundColor = "#e20000";
          //q2.setAttribute("visible", true);
          viba = setTimeout(function(){
          if(vib){
            window.navigator.vibrate(1000);
            }
          }, 1000);
          q2.emit("opa");
          q1.emit("apo");
          face2 = true;
          face1 = false;
          fail = setTimeout(function(){ /*clearInterval(dTime); clearInterval(takeTime);*/ danceFeedback(); }, 3000);
        } else if(timeB < 23 && !face3){
          meterBar.style.backgroundColor = "#0080ff";
          //q3.setAttribute("visible", true);
          viba = setTimeout(function(){
          if(vib){
            window.navigator.vibrate(1000);
            }
          }, 1000);
          q3.emit("opa");
          q1.emit("apo");
          face3 = true;
          face1 = false;
          fail = setTimeout(function(){ /*clearInterval(dTime); clearInterval(takeTime);*/ danceFeedback(); }, 5000);
        } if((timeB < 80 && timeB > 23) && !face1){
          meterBar.style.backgroundColor = "#00ff00";
          if(face2){
          clearTimeout(fail);
          clearTimeout(viba);
          q2.emit("apo");
          face2 = false;
          } else if(face3){
          clearTimeout(fail);
          clearTimeout(viba);
          q3.emit("apo");
          face3 = false;
          }
          q1.emit("opa");
          face1 = true;
          //q2.setAttribute("visible", false),
          //q3.setAttribute("visible", false);
        }
            //console.log(timeB);
            BalanceMeter(); 
          if(timeB > 0){
            timeB -= 2;   ///Why this double next time?????????!!?!?!?!?!?!?!?!?!?!
          }
          //} else{
            //clearInterval(takeTime);
          //}
        }, 100);
        }

        function danceFeedback() {
          ht.style.display = "block";
          rm.style.display ="none";
          if(fail){
          clearTimeout(fail);
          }
          bg2.pause();
          bg.play();
          happyf.pause();
          da.emit("pos2");
          da.emit("rot2");
          clearInterval(takeTime);
          clearInterval(dTime);
          if(face2){
           //fail video
           //queenLayer.setAttribute("src", "#dancerVideo2");
           ht.innerHTML = "You clearly don’t know how to please a woman!<br>Try again.";
           queenVid2.play();
           queenLayer2.setAttribute("visible", true);
           sp.setAttribute("visible", false);
           btext.innerHTML = "Ouch! My feet!<br>You are an awful dancer!!!"
           sbubble.style.display = "block";
           queenVid2.addEventListener('ended', function(e) {
          queenLayer2.setAttribute("visible", false);
          hs2_4.setAttribute('visible', true),
          layer2_2.setAttribute('visible', true),
          hs2_2.setAttribute('visible', true);
          $("#hotspot2_4").toggleClass("not-touchable touchable");
          $("#hotspot2_2").toggleClass("not-touchable touchable");
          sbubble.style.display = "none";
          sp.setAttribute("visible", true);
          ht.innerHTML = "Find President Kekkonen, history depends on it!";
    });
          } else if(face3){ 
           // fail video
           //queenLayer.setAttribute("src", "#dancerVideo2");
           queenVid2.play();
           queenLayer2.setAttribute("visible", true);
           sp.setAttribute("visible", false);
           ht.innerHTML = "You clearly don’t know how to please a woman!<br>Try again.";
           btext.innerHTML = "You're such a bore!"
           sbubble.style.display = "block";
           queenVid2.addEventListener('ended', function(e) {
          queenLayer2.setAttribute("visible", false);
          hs2_4.setAttribute('visible', true),
          layer2_2.setAttribute('visible', true),
          hs2_2.setAttribute('visible', true);
          $("#hotspot2_4").toggleClass("not-touchable touchable");
          $("#hotspot2_2").toggleClass("not-touchable touchable");
          sbubble.style.display = "none";
          sp.setAttribute("visible", true);
          ht.innerHTML = "Find President Kekkonen, history depends on it!";
    });
          } else{
           // success video
           key2_4 = true;
           queenVid3.play();
           queenLayer3.setAttribute("visible", true);
           sp.setAttribute("visible", false);
          ht.innerHTML = "Well done!<br>Looks like you got a love note!";
          btext.innerHTML = "Here, give this to security<br>and tell him to meet<br>me in the sauna!"
          sbubble.style.display = "block";
          queenVid3.addEventListener('ended', function(e) {
            document.getElementById("item1").setAttribute("src", "content/loveOn.png");
          queenLayer3.setAttribute("visible", false);
          hs2_4.setAttribute('visible', true),
          layer2_2.setAttribute('visible', true),
          //hs2_2.setAttribute('visible', true);
          $("#hotspot2_4").toggleClass("not-touchable touchable");
          //$("#hotspot2_2").toggleClass("not-touchable touchable");
          sbubble.style.display = "none";
          sp.setAttribute("visible", true);
          ht.innerHTML = "Find President Kekkonen, history depends on it!";
    });
          }
          danceScene = false;
          q1.setAttribute("visible", false),
          q2.setAttribute("visible", false),
          q3.setAttribute("visible", false),
          mBut.setAttribute("visible", false);
          q1.setAttribute("opacity", 1);
          q2.setAttribute("opacity", 0);
          q3.setAttribute("opacity", 0);
          $("#mechButton").toggleClass("touchable not-touchable");
          document.getElementById("myProgress").style.display = "none";
          //time bar off.
          sp.setAttribute('src', '#stillView');
        }

        //Back
        /*
    nx.addEventListener('mousedown', function (e) {
      switch (a) {
  case 0:
    sp.setAttribute('src', '#stillView3');
    rm.innerHTML = "Stairs with guard";
    a = 1;
    break;
  case 1:
    sp.setAttribute('src', '#stillView4');
    rm.innerHTML = "Presidential bedroom";
    a = 2;
    break;
  case 2:
    sp.setAttribute('src', '#stillView');
    rm.innerHTML = "Cocktail party";
    a = 0;
    break;
}
    });
    */

    //Dancing Queen 2_2
    hs2_2.addEventListener('mousedown', function (e) {
      btext.innerHTML = "Would you be a gentlemen<br>and dance with me?"
      sbubble.style.display = "block";
      happyf.load();
      sp.setAttribute('src', '#stillView2');
      //rm.innerHTML = "Dancing action";
      hs2_4.setAttribute('visible', false);
      layer2_2.setAttribute('visible', false),
      hs2_2.setAttribute('visible', false);
      queenVid.play();
      queenLayer.setAttribute("visible", true);
      sp.setAttribute("visible", false);
      $("#hotspot2_4").toggleClass("touchable not-touchable");
      $("#hotspot2_2").toggleClass("touchable not-touchable");
      ht.innerHTML = "Maybe the lady can help - see what she wants.";
      document.querySelector("#dancerVideo").addEventListener('ended', function(e) {
          danceScene = true;
          if(mBut.matches('.not-touchable')) { 
            sbubble.style.display = "none";
            $("#mechButton").toggleClass("not-touchable touchable");
            ht.style.display = "none";
          rm.style.display ="block";
          sp.setAttribute("visible", true),
          q1.setAttribute("visible", true),
          q2.setAttribute("visible", true),
          q3.setAttribute("visible", true);
          queenLayer.setAttribute("visible", false);
          mBut.setAttribute("visible", true);
          document.getElementById("myProgress").style.display = "block";
          timeB = 75;
          meterTimer();
          da.emit("rot");
          da.emit("pos");
          bg2.play();
          bg.pause();
          happyf.volume = 0.5;
          happyf.play();
          }
    });
    });

    function queenFail() {
      ht.style.display = "block";
      rm.style.display ="none";
      clearTimeout(fail);
      clearInterval(takeTime);
      if(face2) {
        btext.innerHTML = "You dance too fast<br>Im too tired.."
        sbubble.style.display = "block";
        ht.innerHTML = "You should learn to dance..";
      } else if(face3){
        btext.innerHTML = "You are awful dancer!!!"
        sbubble.style.display = "block";
        ht.innerHTML = "You should learn to dance..";
      } else{
        btext.innerHTML = "You are true gentlemen!<br>Would you give this letter<br>to guard on stairs?"
        sbubble.style.display = "block";
        ht.innerHTML = "Well done you get some love letter from lady!!";
      }
    }

    //Upstairs
    hs2_4.addEventListener('mousedown', function (e) {
          hs2_4.setAttribute('visible', false),
          hs2_4_1.setAttribute('visible', true),
          layer2_2.setAttribute('visible', false),
          layer2_4_1.setAttribute('visible', true);
          $("#hotspot2_4").toggleClass("touchable not-touchable");
          if(hs2_2.matches('.touchable')) { 
          $("#hotspot2_2").toggleClass("touchable not-touchable");
          hs2_2.setAttribute('visible', false);
          }
          $("#hotspot2_4_1").toggleClass("not-touchable touchable");
          sp.setAttribute('src', '#stillView3');
          ht.innerHTML = "Get rid of the guard!";
          bg.volume = 0.4;
          //rm.innerHTML = "Stairs with guard";
          a = 1;
      });

      //Guard 2_4_1
    hs2_4_1.addEventListener('mousedown', function (e) {
          $("#hotspot2_4_1").toggleClass("touchable not-touchable");
          hs2_4_1.setAttribute('visible', false);
          layer2_4_1.setAttribute('visible', false);
          if(!key2_4){
          document.querySelector("#guardVideo").play();
          document.querySelector("#guardCloseUp").setAttribute("visible", true);
          btext.innerHTML = "The kitchen’s downstairs,<br>but I can offer you<br>a knuckle sandwich!";
          sbubble.style.display = "block";
          sp.setAttribute("visible", false);
          sp.setAttribute('src', '#stillView');
          document.querySelector("#guardVideo").addEventListener('ended', function(e) {
          if(hs2_2.matches('.not-touchable')) { 
          sbubble.style.display = "none";
          document.querySelector("#guardCloseUp").setAttribute("visible", false);
          hs2_4.setAttribute('visible', true),
          layer2_2.setAttribute('visible', true),
          hs2_2.setAttribute('visible', true);
          sp.setAttribute("visible", true);
          ht.innerHTML = "Find President Kekkonen, history depends on it!";
          $("#hotspot2_4").toggleClass("not-touchable touchable");
          $("#hotspot2_2").toggleClass("not-touchable touchable");
          bg.volume = 1;
          }
        });
  } else if(key2_4){
          document.getElementById("item1").style.display = "none";
          document.querySelector("#guardVideo2").play();
          document.querySelector("#guardCloseUp2").setAttribute("visible", true);
          sp.setAttribute("visible", false);
          btext.innerHTML = "Hmm, seems suspicious<br>- but I’m a man and I don’t-<br>say no to a woman’s advances."
          sbubble.style.display = "block";
          sp.setAttribute('src', '#stillView4');
          a = 2;
          document.querySelector("#guardVideo2").addEventListener('ended', function(e) {
          document.querySelector("#guardCloseUp2").setAttribute("visible", false);
          sbubble.style.display = "none";
          ht.innerHTML = "Swap the document! This should be like stealing candy from a baby!";
          sp.setAttribute("visible", true);
          if(document.querySelector("#hotspot3_1").matches('.not-touchable')) { 
          document.querySelector("#uFar").setAttribute("visible", true);
          document.querySelector("#hotspot3_1").setAttribute("visible", true);
          document.querySelector("#zzz").setAttribute("visible", true);
          document.querySelector("#zzz").emit("zpos");
          $("#hotspot3_1").toggleClass("not-touchable touchable");
          slp.play();
          bg.volume = 0.2;
          }
        });
  } 
        /*  setTimeout(function(){ 
          hs2_4.setAttribute('visible', true),
          layer2_2.setAttribute('visible', true),
          layer2_4_1.setAttribute('visible', false),
          hs2_2.setAttribute('visible', true);
          sp.setAttribute('src', '#stillView');
          rm.innerHTML = "Cocktail party";
          $("#hotspot2_4").toggleClass("not-touchable touchable");
          $("#hotspot2_2").toggleClass("not-touchable touchable");  //paty sounds!!?
        }, 3000);*/
      });

      document.querySelector("#hotspot3_1").addEventListener('mousedown', function (e) {
        ht.innerHTML = "To be continued...";
          sp.setAttribute("visible", false);
          if(document.querySelector("#hotspot3_1").matches('.touchable')) { 
          document.querySelector("#uFar").setAttribute("visible", false);
          document.querySelector("#hotspot3_1").setAttribute("visible", false);
          document.querySelector("#zzz").setAttribute("visible", false);
          document.querySelector("#zzz").emit("zsop");
          $("#hotspot3_1").toggleClass("touchable not-touchable");
          slp.pause();
          bg.pause();
          document.querySelector("#endImg").setAttribute("visible", true);
          $("#endImg").toggleClass("not-touchable touchable");
          }
      });

      document.querySelector("#endImg").addEventListener('mousedown', function (e) {
        location.reload();
      });