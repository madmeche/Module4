let news = [
  { id: 1, title: "News1", content: "bla" },
  { id: 2, title: "News2", content: "ble" },
  { id: 3, title: "News3", content: "blu" },
];

// // var news_id=1;
// // var news_title=news[news_id-1].title;
// // var news_content=news[news_id-1].content;
let newsInput = document.getElementById("newsInfo");
// // var news_title_input=document.getElementById("news_title");
// // var news_content_input=document.getElementById("news_content");

let display = setInterval(function () {
  // Iterate through the array using forEach method
  news.forEach((newsInput) => {
    console.log("Element:", newsInput);
  });
}, 5000);

console.log(display)

//     let newsInfo = document.getElementById('newsInfo');
//     newsInfo.innerHTML ='';

//     news.forEach(item => {
//         let newsItem = document.createElement('div');
//         newsItem.className='newsItem';

//         let newsTitle = document.createElement('hs');
//         newsTitle.className = 'newsTitle';
//         newsTitle.textContent = item.title;

//         let newsContent = document.createElement('p');
//         newsContent.className = 'newsContent';
//         newsContent.textContent=item.content;

//         newsItem.appendChild(newsTitle);
//         newsItem.appendChild(newsContent);

//         newsInfo.appendChild(newsItem);
//     });
// }

// setInterval(showNews, 5000)
