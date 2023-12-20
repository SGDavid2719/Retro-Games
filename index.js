const main = document.getElementById("main");

function createGameCard(sectionName) {
    const div = document.createElement("div");
    div.classList.add("game_div");

    const a = document.createElement("a");
    a.textContent = sectionName;
    a.href = "./Pacman/index.html";

    div.appendChild(a);

    return div;
}

function init() {
    const article = document.createElement("article");
    const header = document.createElement("header");
    const section = document.createElement("section");

    const h1 = document.createElement("h1");
    h1.textContent = "RETRO GAMES";
    const p = document.createElement("p");
    p.textContent = "COMPILATION";

    header.appendChild(h1);
    header.appendChild(p);
    header.classList.add("home_header");

    section.classList.add("home_section");

    section.appendChild(createGameCard("PACMAN"));
    section.appendChild(createGameCard("TETRIS"));
    section.appendChild(createGameCard("TODO"));
    section.appendChild(createGameCard("TODO"));

    article.appendChild(header);
    article.appendChild(section);
    article.classList.add("home_article");

    main.appendChild(article);
}

init();
