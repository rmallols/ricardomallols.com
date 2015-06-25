angular.module('templates-main', ['menu.html', 'home.html', 'skills.html', 'where.html']);

angular.module("menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu.html",
    "<div class=\"menu\">\n" +
    "    <div class=\"header\"></div>\n" +
    "    <ul class=\"navigation\">\n" +
    "        <li>\n" +
    "            <icon>X</icon>\n" +
    "            <a ui-sref=\"home\">Who I am</a>\n" +
    "        </li>\n" +
    "        <li><a ui-sref=\"skills\">What I do</a></li>\n" +
    "        <li><a ui-sref=\"where\">Where I am</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "</div>");
}]);

angular.module("home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home.html",
    "<p>I'm Ricardo Mallols, a computer engineer born in Valencia (Spain) in 1984.\n" +
    "    Here you will find both personal and professional information about me.</p>\n" +
    "<p>Well, I would like to start talking about my hobbies:</p>\n" +
    "<p>\n" +
    "    <div class=\"col-2\">\n" +
    "        Interfaces: I love exploring new ways to make the relationship between people\n" +
    "        and machines more human, intuitive, easy and fun.\n" +
    "    </div>\n" +
    "    <div class=\"col-2\">\n" +
    "        (Motor)Sports: I practice beach volleyball and table tennis. I like motor racing,\n" +
    "        particularly F1, DTM, MotoGP and Slot.\n" +
    "    </div>\n" +
    "</p>\n" +
    "");
}]);

angular.module("skills.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("skills.html",
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
    "<p>\n" +
    "    <div class=\"col-3 contact-method\">\n" +
    "        <a href=\"mailto:hi@ricardomallols.com\">\n" +
    "            <img src=\"img/mail.svg\"/>\n" +
    "            hi@ricardomallols.com\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-3 contact-method\">\n" +
    "        <a href=\"http://www.linkedin.com/pub/ricardo-mallols-olmos/20/6a/708\">\n" +
    "            <img src=\"img/linkedin.svg\"/>\n" +
    "            Ricardo Mallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-3 contact-method\">\n" +
    "        <a href=\"https://twitter.com/#!/RicardoMallols\">\n" +
    "            <img src=\"img/twitter.svg\"/>\n" +
    "            @RicardoMallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</p>");
}]);
