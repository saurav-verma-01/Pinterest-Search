/*

var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();

*/

// const homeLink = document.querySelector("#home");

// homeLink.style.color = "indigo";
// homeLink.style.padding = "4px";
// homeLink.style.fontFamily = "Arial";
// // homeLink.style.background = "indigo";

// homeLink.style.borderBottom = "2px solid dodgerblue";

// homeLink.textContent = "Welcome";

// homeLink.addEventListener("mouseover", () => {
//   homeLink.style.color = "dodgerblue";
// });
// homeLink.addEventListener("mouseleave", () => {
//   homeLink.style.color = "pink";
// });

/* ========================================================
 ============= To Generate 50 Images Object =============
 ======================================================== */

/* ============ Generating Unique ID ===============*/

// const generateUniqueId = () => {
//   const generatedUID = "_" + Math.random().toString(36).substring(2, 14);
//   return generatedUID;
// };

/* ============ For storing objects ===============*/
let pinterestImages = [
  {
    id: "_xy7ft5fgg",
    name: "City",
    imageUrl: "https://source.unsplash.com/featured/?city",
  },
  {
    id: "_ak2g43sh5",
    name: "Travel",
    imageUrl: "https://source.unsplash.com/featured/?travel",
  },
  {
    id: "_a1h3kj4h5",
    name: "Landscape",
    imageUrl: "https://source.unsplash.com/featured/?landscape",
  },
  {
    id: "_da5g7j2ki",
    name: "Nature",
    imageUrl: "https://source.unsplash.com/featured/?nature",
  },
  {
    id: "_y87h2f5j3",
    name: "City",
    imageUrl: "https://source.unsplash.com/featured/?city",
  },
  {
    id: "_o9u3jg4k8",
    name: "Landscape",
    imageUrl: "https://source.unsplash.com/featured/?landscape",
  },
  {
    id: "_p0oi98u7h",
    name: "Nature",
    imageUrl: "https://source.unsplash.com/featured/?nature",
  },
  {
    id: "_j65h2gfdg",
    name: "Travel",
    imageUrl: "https://source.unsplash.com/featured/?travel",
  },
  {
    id: "_m0k3j8uih",
    name: "Landscape",
    imageUrl: "https://source.unsplash.com/featured/?landscape",
  },
  {
    id: "_u9h2g1df5",
    name: "Nature",
    imageUrl: "https://source.unsplash.com/featured/?nature",
  },
  {
    id: "_g4d8f1h2j",
    name: "City",
    imageUrl: "https://source.unsplash.com/featured/?city",
  },
  {
    id: "_k7h2f5g1j",
    name: "Travel",
    imageUrl: "https://source.unsplash.com/featured/?travel",
  },
  {
    id: "_j6h2g1f3d",
    name: "Nature",
    imageUrl: "https://source.unsplash.com/featured/?nature",
  },
  {
    id: "_f1d7h3k5g",
    name: "Landscape",
    imageUrl: "https://source.unsplash.com/featured/?landscape",
  },
  {
    id: "_g2h3f5d6j",
    name: "City",
    imageUrl: "https://source.unsplash.com/featured/?city",
  },
  {
    id: "_i8j2f3d4g",
    name: "Travel",
    imageUrl: "https://source.unsplash.com/featured/?travel",
  },
  {
    id: "_h1j5g2f3d",
    name: "Nature",
    imageUrl: "https://source.unsplash.com/featured/?nature",
  },
  {
    id: "_o0i4h3j5k",
    name: "City",
    imageUrl: "https://source.unsplash.com/featured/?city",
  },
  {
    id: "_u9h2g4d5f",
    name: "Landscape",
    imageUrl: "https://source.unsplash.com/featured/?landscape",
  },
  {
    id: "_j5f1d2h3g",
    name: "Travel",
    imageUrl: "https://source.unsplash.com/featured/?travel",
  },
];

// /*
// /* ====== Sample image keywords for Unsplash search ======== */

// const imageKeywords = [
//   "nature",
//   "landscape",
//   "travel",
//   "city",
//   "architecture",
//   "food",
//   "animals",
//   "art",
//   "people",
// ];

// /* === Function to generate a random image URL from Unsplash === */

// function getRandomImageUrl(keyword) {
//   const randomIndex = Math.floor(Math.random() * 30); // Change 10 to the number of images you want to choose from
//   return `https://source.unsplash.com/featured/?${keyword}&${randomIndex}`;
// }

// // Function to generate objects with title, image src, and unique ID
// function generateObject(title, keyword) {
//   return {
//     id: generateUniqueId(),
//     title: title,
//     imageUrl: getRandomImageUrl(keyword),
//   };
// }

// // Generate 30 objects
// for (let i = 0; i < 30; i++) {
//   const randomKeywordIndex = Math.floor(Math.random() * imageKeywords.length);
//   const randomKeyword = imageKeywords[randomKeywordIndex];
//   pinterestImages.push(generateObject(`Image ${i + 1}`, randomKeyword));
// }

console.log(pinterestImages);

const showTheCards = () => {
  let clutter = "";
  pinterestImages.forEach(
    (obj) =>
      (clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.imageUrl}" alt=${obj.title}>
        <div class="caption">Lorem ipsum </div>
    </div>`)
  );

  const container = document.querySelector(".container");
  container.innerHTML = clutter;
};

showTheCards();

const handleSearchFunctionality = () => {
  const overlay = document.querySelector(".overlay");

  const searchInput = document.getElementById("searchinput");

  searchInput.addEventListener("focus", () => {
    overlay.style.display = "block";
    // overlay.classList.toggle("hidden");
  });

  searchInput.addEventListener("blur", () => {
    overlay.style.display = "none";
    // overlay.classList.toggle("hidden");
  });

  searchInput.addEventListener("input", (e) => console.log(e.target.value));
};

handleSearchFunctionality();
