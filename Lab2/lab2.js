const data = [
  {
    title: "Card Title",
    content: "Card Content",
    url: "http://via.placeholder.com/300x200",
    alt: "300 x 200 placeholder",
  },
  {
    title: "Card Title",
    content: "More Content",
    url: "http://via.placeholder.com/300x200",
    alt: "300 x 200 placeholder",
  },
];

const artists = [
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image", // image not being referenced
        alt: "Self Portrait of Van Gogh",
      },
      {
        title: "Garden with Flowers",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbI30Ru1BK2zIxeF6FWSyNYBGzJ9dKUIYjiRuopJor3wetCQlyFwpKBwPenreix61rNU&usqp=CAU", // image not being referenced
        alt: "Garden with Flowers by Van Gogh",
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg", // image not being referenced
        alt: "Sky Portrait by Van Gogh",
      },
      {
        title: "Shoes",
        url: "https://www.artyfactory.com/art_appreciation/great-artists/vincent-van-gogh/images/1%20-vincent-van-gogh-a-pair-of-shoes-Paris-September-November-1886.jpg", // image not being referenced
        alt: "Shoes by Van Gogh",
      },
      {
        title: "Prisoners",
        url: "https://www.artyfactory.com/art_appreciation/great-artists/vincent-van-gogh/images/van-gogh-prisoners-exercising-after-Dore.jpg", // image not being referenced
        alt: "Prisoners by Van Gogh",
      },
      {
        title: "Wheatfield and Crows",
        url: "https://www.artyfactory.com/art_appreciation/great-artists/vincent-van-gogh/images/van-gogh-wheatfield-and-crows-1890.jpg", // image not being referenced
        alt: "Wheatfield and Crows by Van Gogh",
      },


    ],
  },
];

function addCard(item) {
  const artist = document
    .getElementById("artist-portfolio")
    .content.cloneNode(true);
  console.log(artist);
  artist.querySelector(".artist-name").innerText = item.name;
  document.querySelector("#artist-list").appendChild(artist);

  item.portfolio.map((itemPortfolio) => {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    console.log(document.getElementById("card-list")); // go back and watch recording at 11:10, and experiment with this part
    template.querySelector(".card-title").innerText = itemPortfolio.title;
    template.querySelector(".card-img").src = itemPortfolio.url;
    template.querySelector(".card-img").alt = itemPortfolio.alt;
    document.querySelector("#card-list").appendChild(template);
  });
}

  // console.log(document.getElementById("card-list"))  // go back and watch recording at 11:10, and experiment with this part
//   template.querySelector(".card-title").innerText = item.title;
  // template.querySelector('.card-text').innerText = item.content;
  // template.querySelector('.card-img').src = card.url;
  // template.querySelector('.card-img').alt = card.alt;
  // template.querySelector('.artist').innerText = item.name;
//   document.querySelector("#card-list").appendChild(template);

if ("content" in document.createElement("template")) {
  // data.map((card)=>{  //map: loops over each object in array
  //     addCard(card);
  // })
  artists.map((item) => {
    addCard(item);
  });

  // } else {
  //     console.log('template not supported');
  //     }
}
