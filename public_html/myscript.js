       var cats = ["images/cat11", "images/cat22", "images/cat33", 
            "images/cat44", "images/cat55", "images/cat666", "images/cat66",
            "images/cat77", "images/cat88", "images/cat99"];
        
            function randomCat () {
                
                var rand = Math.floor(Math.random() * cats.length );
                
                document.getElementById("cat").src = cats[rand] + ".png";
            }
                             
             var startTime = new Date().getTime();
             
            function makeCatAppear() {
                
               var top = Math.random() * 400;
                
                var left = Math.random() * 400;
             
                document.getElementById("cat").style.top = top+"px";
                
                document.getElementById("cat").style.left = left+"px"; 
                
                document.getElementById("cat").style.display = "block";
                
                startTime = new Date().getTime();
       
            }
            
            function appearAfterDelay () {
                
                setTimeout(makeCatAppear, Math.random() * 1200);
               
            }
            
            appearAfterDelay();
            
             document.addEventListener("click", addUp, false);
                
                function addUp() {
                    
                    var x = document.getElementById("counter");
                    
                    x.innerHTML = parseInt(x.innerHTML) + 1;
                }
                
            document.getElementById("cat").onclick = function() {
                
                document.getElementById("cat").style.display = "none";
                
                randomCat();
                
                var endTime = new Date().getTime();
                
                var timeTaken = (endTime - startTime) / 1000;
                              
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
                
            }

