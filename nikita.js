const chosenOne = "b87";

function mkTable() {
    var target = document.getElementById("game");
    var table = document.createElement("table");
    for (let x = 0; x < 10; x++) {
        let tableRow = document.createElement("tr");
        for (let y = 0; y < 10; y++) {
            let tableCell = document.createElement("td");
            let button = document.createElement("button");
            let textContainer = document.createElement("span");
            let tt;
            if (x === 8 && y === 7) {
                tt = "pop??";
            } else {
                tt = "pop!";
            }
            tableText = document.createTextNode(tt);
            button.classList.add("table-content");
            textContainer.classList.add("table-content-text");
            button.id = `b${x}${y}`;
            button.type = "button";
            button.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                if (this.id === chosenOne) {
                    console.log("hehe");
                    document.getElementById("congrats").setAttribute("yippee", true);
                }
            });
            button.setAttribute("aria-expanded", "false");
            textContainer.id = `tc${x}${y}`;
            button.setAttribute("aria-controls", "textContainer");

            textContainer.appendChild(tableText);
            button.appendChild(textContainer);
            tableCell.appendChild(button);
            tableRow.appendChild(tableCell);
            console.log(x, y);
        }
        table.appendChild(tableRow);
    }
    target.appendChild(table);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random starting position around the edges
    const edge = Math.random();
    let x, y;
    
    if (edge < 0.25) {
        x = Math.random() * window.innerWidth;
        y = 0;
    } else if (edge < 0.5) {
        x = window.innerWidth;
        y = Math.random() * window.innerHeight;
    } else if (edge < 0.75) {
        x = Math.random() * window.innerWidth;
        y = window.innerHeight;
    } else { // left
        x = 0;
        y = Math.random() * window.innerHeight;
    }

    particle.style.setProperty('--start-x', `${x}px`);
    particle.style.setProperty('--start-y', `${y}px`);

    // Random color variation
    const hue = 180 + Math.random() * 20 - 10;
    particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    particle.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 50%)`;

    document.body.appendChild(particle);

    // Remove element after animation
    setTimeout(() => particle.remove(), 2000);
}

// Create particles periodically
setInterval(createParticle, 50);

mkTable();
