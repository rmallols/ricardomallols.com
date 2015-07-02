angular.module('templates-main', ['menu.html', 'what.html', 'where.html', 'who.html']);

angular.module("menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu.html",
    "<div class=\"menu\">\n" +
    "    <div class=\"header\"></div>\n" +
    "    <ul class=\"navigation\">\n" +
    "        <li ng-repeat=\"link in links\" class=\"link link-{{link.id}}\"\n" +
    "            ng-class=\"{'link-current': link.id === currentState}\">\n" +
    "            <icon class=\"link-icon link-icon-{{link.id}}\"></icon>\n" +
    "            <a ui-sref=\"{{link.id}}\" class=\"link-text link-text-{{link.id}}\">\n" +
    "                {{link.text}}\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("what.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("what.html",
    "<p>\n" +
    "    I have 11 years of experience in the scope of the Information Technologies. I’m specialist in the areas of frontend development, usability, user interface, user experience and automated testing.\n" +
    "    <br/><br/>\n" +
    "    I’m a very organized, responsible and committed person. I consider communication, respect and teamwork as the key to personal and professional success.\n" +
    "    <br/><br/>\n" +
    "    Technology enthusiast, my aspirations are related to face new and motivating challenges where I can work as part of a team, contributing with my knowledge and continuously learning from my environment.\n" +
    "    <br/><br/>\n" +
    "    I feel really comfortable working with user interfaces, creating user experience and designing usability stories. Additionally, I really like to interact with OOP Javascript, specially with an MVC framework such as AngularJs in order to be able to build high quality, scalable web applications.\n" +
    "    <br/><br/>\n" +
    "    I have, moreover, experience in the back-end side with Node.js + Express, GruntJs and MongoDb for the persistence topic.\n" +
    "    <br/><br/>\n" +
    "    My favourite tech books are: Javascript: The Good Parts, Mastering Web Application Development with AngularJS and SMACSS (Scalable and Modular Architecture for CSS).\n" +
    "</p>");
}]);

angular.module("where.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("where.html",
    "<div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"mailto:hi@ricardomallols.com\">\n" +
    "            <img src=\"img/mail.svg\"/>\n" +
    "            hi@ricardomallols.com\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"http://www.linkedin.com/pub/ricardo-mallols-olmos/20/6a/708\">\n" +
    "            <img src=\"img/linkedin.svg\"/>\n" +
    "            Ricardo Mallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"https://twitter.com/#!/RicardoMallols\">\n" +
    "            <img src=\"img/twitter.svg\"/>\n" +
    "            @RicardoMallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"https://github.com/rmallols\">\n" +
    "            <img src=\"img/github.svg\"/>\n" +
    "            Rmallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("who.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("who.html",
    "<p>I'm Ricardo Mallols, a computer engineer born in Valencia (Spain) in 1984.\n" +
    "    Here you will find both personal and professional information about me.</p>\n" +
    "<p>Well, I would like to start talking about my hobbies:</p>\n" +
    "<p>\n" +
    "    <div class=\"col-2\">\n" +
    "        <p>\n" +
    "            <img src=\"img/whoCoding.svg\" class=\"who-coding-img\"/>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <h2 class=\"title title-section\">Coding</h2>\n" +
    "            I'm a technology enthusiast who enjoys running any kind of experimental\n" +
    "            stuff on the browser, specially with Javascript, AngularJs, HTML5 and CSS3.\n" +
    "        <p>\n" +
    "    </div>\n" +
    "    <div class=\"col-2\">\n" +
    "        <img src=\"img/whoSports.svg\" class=\"who-sports-img\"/>\n" +
    "        <h2 class=\"title title-section\">(Motor)Sports</h2>\n" +
    "        I practice beach volleyball and tennis. I like motor racing,\n" +
    "        particularly F1, DTM, MotoGP and digital Slot. Anki Drive is the future!\n" +
    "    </div>\n" +
    "</p>");
}]);
