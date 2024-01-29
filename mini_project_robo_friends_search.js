// What You Will Create
// A Robo-Friends Search with Advanced Javascript

// In this project you will have to create a robot website (you can use your own css to style your project):

// Instructions
// PART I : The Website
// 1. The webpage displays Cards of Robots with their respective image and information.

// 2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.

// PART II : The Filter
// 1. When you search for a specific name in the search box, the webpage filters the cards displayed. For example is you write “nic” in the search box, you will display the robot which name contains “nic”, which means only one robot: “Nicholas”.

// 2. Display the cards in the DOM, using DOM elements and selectors, and filter them with the search box.

// PART III : The Style
// 1. You can use your own images or use this website to generate a new Robot Image.

// 2. Check out those links to generate the correct font
// cdnfonts
// dafont

// 3. You can use those images for the background (click righ on the images below, and “Save image as…” )

// Assets
const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const postContainer = document.querySelector(".card-container");

const postMethods = () => {
  robots.map((robot) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card");

    const h2 = document.createElement("h2");
    h2.style.paddingTop = "20px";
    h2.innerText = robot.name;
    const p = document.createElement("p");
    p.innerText = robot.email;

    const img = document.createElement("img");
    img.setAttribute("src", robot.image);
    img.style.width = "200px";
    img.style.borderRadius = "50%";
    img.style.backgroundColor = "CornflowerBlue";

    postElement.append(img, h2, p);
    postContainer.appendChild(postElement);
  });
};

document.querySelector("#searchRobot");
addEventListener("input", filterList);

function filterList() {
  const searchInput = document.querySelector("#searchRobot");
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

postMethods();
