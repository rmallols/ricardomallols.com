angular.module('templates-main', ['menu.html', 'what.html', 'where.html', 'who.html']);

angular.module("menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu.html",
    "<div class=\"menu\">\n" +
    "    <a ui-sref=\"who\">\n" +
    "        <div class=\"header\"></div>\n" +
    "    </a>\n" +
    "    <ul class=\"navigation\" ng-class=\"{'navigation-toggled': toggledMenu}\">\n" +
    "        <li ng-repeat=\"link in links\" class=\"link link-{{link.id}}\"\n" +
    "            ng-class=\"{'link-current': link.id === currentState.name}\">\n" +
    "            <icon class=\"link-icon link-icon-{{link.id}}\"></icon>\n" +
    "            <a ui-sref=\"{{link.id}}\" class=\"link-text link-text-{{link.id}}\">\n" +
    "                {{link.text}}\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"current-page\">{{currentState.linkText}}</div>\n" +
    "    <div class=\"menu-toggle\" ng-click=\"toggleMenu()\"></div>\n" +
    "    <a href=\"http://angularconnect.com/speakers#ricardo-mallols\"\n" +
    "       target=\"_blank\" class=\"angular-connect\">\n" +
    "        <img src=\"img/common/angularConnect.svg\" />\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("what.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("what.html",
    "<div class=\"what-section what-section-javascript\">\n" +
    "    <h2 class=\"title title-section\">Javascript & AngularJs</h2>\n" +
    "    <div class=\"what-section-description\">\n" +
    "        I've working with plain Javascript since 2005. <br/>\n" +
    "        Paralelly, I started to work with AngularJs since 2011 (v0.6),\n" +
    "        and I've been using it in a daily basis both on a commercial an personal\n" +
    "        perspective since then.\n" +
    "        Testing is a must for me (unit + functional + integration).\n" +
    "    </div>\n" +
    "    <img class=\"what-section-image\" src=\"img/what/angularJs.svg\"/>\n" +
    "</div>\n" +
    "<div class=\"what-section what-section-html\">\n" +
    "    <h2 class=\"title title-section\">HTML(5) & CSS(3)</h2>\n" +
    "    <div class=\"what-section-description\">\n" +
    "        I'm building HTML & CSS based webapps since 2002. On the recent years,\n" +
    "        I've embraced the capabilities of HTML5 and CSS3 (including LESS & SASS) in order\n" +
    "        to build solutions that\n" +
    "        not only have to work fine, but also have to look really well.\n" +
    "        I really like to work on UI / UX topics, and I build my apps based on the\n" +
    "        mobile-first principle.\n" +
    "    </div>\n" +
    "    <img class=\"what-section-image\" src=\"img/what/html5.svg\"/>\n" +
    "</div>\n" +
    "<div class=\"what-section what-section-others\">\n" +
    "    <h2 class=\"title title-section\">HTML(5) & CSS(3)</h2>\n" +
    "    <div class=\"what-section-description\">\n" +
    "        I've experience working with a different range of technologies, frameworks and tools\n" +
    "        such as\n" +
    "        NodeJs, Express, GruntJs, Bower and MongoDB\n" +
    "        Talking about deployment, I've been working with TeamCity, Jenkins and Heroku.\n" +
    "    </div>\n" +
    "    <img class=\"what-section-image\" src=\"img/what/nodeJs.svg\"/>\n" +
    "</div>");
}]);

angular.module("where.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("where.html",
    "<div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"mailto:hi@ricardomallols.com\">\n" +
    "            <img src=\"img/where/mail.svg\"/>\n" +
    "            hi@ricardomallols.com\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"http://www.linkedin.com/pub/ricardo-mallols-olmos/20/6a/708\">\n" +
    "            <img src=\"img/where/linkedin.svg\"/>\n" +
    "            Ricardo Mallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"https://twitter.com/#!/RicardoMallols\">\n" +
    "            <img src=\"img/where/twitter.svg\"/>\n" +
    "            @RicardoMallols\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-2 contact-method\">\n" +
    "        <a href=\"https://github.com/rmallols\">\n" +
    "            <img src=\"img/where/github.svg\"/>\n" +
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
    "        <h2 class=\"title title-section\">Coding</h2>\n" +
    "        <p class=\"img-wrapper img-wrapper-coding\">\n" +
    "            <img src=\"img/who/coding.svg\" class=\"img img-coding\"/>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "        I'm a technology enthusiast who enjoys running any kind of experimental\n" +
    "        stuff on the browser, specially with Javascript, AngularJs, HTML5 and CSS3.\n" +
    "    </div>\n" +
    "    <div class=\"col-2\">\n" +
    "        <h2 class=\"title title-section\">(Motor)Sports</h2>\n" +
    "        <p class=\"img-wrapper img-wrapper-sports\">\n" +
    "            <img src=\"img/who/sports.svg\" class=\"img img-sports\"/>\n" +
    "        </p>\n" +
    "        I practice beach volleyball and tennis. I like motor racing,\n" +
    "        particularly F1, DTM, MotoGP and digital Slot. Anki Drive is the future!\n" +
    "    </div>\n" +
    "</p>");
}]);
