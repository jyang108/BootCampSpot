var folderPath = [{
    homework: 1,
    title: "Portfolio",
    description: "",
}, {
    homework: 2,
    title: "Bootstrap Portfolio",
    description: "",
}, {
    homework: 3,
    title: "Password Generator",
    description: "",
}, {
    homework: 4,
    title: "Trivia Game",
    description: "",
}, {
    homework: 5,
    title: "Work Day Planner",
    description: "",
},{
    homework: 6,
    title: "Weather App",
    description: "",
},{
    homework: 7,
    title: "",
    description: "",
},]

for (i = 0; i < folderPath.length; i++) {

    var divCard = $("<div class='card d-md-flex justify-content-start flex-wrap float-left p-2 m-3'>");
    var cardSubtitle = $("<h6 class='card-subtitle mb-2 text-muted'>");
    var cardBody = $("<div class='card-body'>");
    var cardTitle = $("<h4 class='card-title'>");
    var cardText = $("<p class='card-text'>");
    var cardBtn = $("<a class='btn btn-outline-info'>");

    cardTitle.text(folderPath[i].title);
    cardSubtitle.text("Homework " + folderPath[i].homework);
    cardText.text(folderPath[i].description);

    cardBtn.attr("href", "homework-" + folderPath[i].homework + "/index.html");
    cardBtn.attr("rel", "external");
    cardBtn.text("Go to Project");

    $("#projects").append(divCard);
    divCard.append(cardBody);
    cardBody.append(cardTitle);
    cardBody.append(cardSubtitle);
    cardBody.append(cardText);
    cardBody.append(cardBtn);

};

