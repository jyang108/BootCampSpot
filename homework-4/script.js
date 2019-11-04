var mainDiv = document.querySelector("#main");
var timer = document.querySelector("#timer")

// New Elements
var playDiv = document.createElement("div");
var h1 = document.createElement("h1");
var prompts = document.createElement("h4");
var p = document.createElement("p");
var startBtn = document.createElement("button");


playDiv.className = "col-md-12 bg-dark text-center";
playDiv.setAttribute("style", "margin: auto; text-align: center; padding: 4rem;");

   //startpage with intro text and title

startBtn.className = "btn btn-primary mb-3";
mainDiv.appendChild(playDiv);
playDiv.appendChild(h1);
playDiv.appendChild(p);
playDiv.appendChild(startBtn);
h1.innerHTML = "It's Trivia!<br>-Throwback Thursdays- <br>";
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
startBtn.textContent = "Start Trivia";

function questionSlide() {

   for (var i = 0; i < questions.length; i++) {

     
      var question = questions[i];
      prompts.innerHTML = questions[i].title + "<hr>";
      playDiv.appendChild(prompts);

      for (var i = 0; i < 4; i++){

         var questionBtn = document.createElement("button");
         questionBtn.className = "btn btn-primary mt-3 mx-4 mb-5";
         questionBtn.textContent = question.choices[i];
         questionBtn.setAttribute("id", i);
  
         playDiv.appendChild(questionBtn);


      };

    };

}; 

function remove(){
   h1.remove();
   p.remove();
   startBtn.remove();

};

startBtn.addEventListener("click", function(event){
   event.preventDefault();
   remove();
   questionSlide();
   
});

questionBtn.addEventListener("click", function(event){
   event.preventDefault();
   
   var response = document.createElement("div");
   playDiv.appendChild(response);
   
   if (event.target.matches(question.answer[i])){
      response.textContent = "Correct!";
   } else {
      response.textContent = "Wrong!";
   }
   
 
});

















// startSlide()