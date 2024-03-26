let num = document.querySelector("#First_num");

const first_numbers = [
  {
    number: "10k",
    title: "Artwork",
  },
  {
    number: "32k",
    title: "Auction",
  },
  {
    number: "42k",
    title: "Artist",
  },
];

// this is for the first number and there titles on section 1

for (let i = 0; i < first_numbers.length; i++) {
  let fistData = first_numbers[i];

  console.log("thies +> ", fistData.number);
  console.log("thies +> ", fistData.title);

  num.innerHTML += `
    <div class="for-num">
    <span class="spanNum-btn">
     <h2>${fistData.number}</h2>
     <p>${fistData.title}</p>
    </span>
    
    ${
      i !== first_numbers.length - 1
        ? '<div class="line" id="one-line"></div>'
        : ""
    } 
</div>`;
}

// section 2 data from here

const tBody = document.querySelector(".tbody");

const tables_data = [
  {
    id: 1,
    Image: "./images/table icons/1.png",
    collection: "MutantApeYachtClub",
    floor_name: 4.31,
    floor_nameB: "ETH",
    floor_change: "-2.6%",
    Volume: "1,181",
    volumneB: "ETH",
    volumne_change: "-12.3%",
    items: "19.5K",
    Owners: "11.6K",
  },
  {
    id: 2,
    Image: "./images/table icons/2.png",
    collection: "Azuki",
    floor_name: 6.99,
    floor_nameB: "ETH",
    floor_change: "+0.1%",
    Volume: "820.2",
    volumneB: "ETH",
    volumne_change: "+614%",
    items: "10K",
    Owners: "4.4K",
  },
  {
    id: 3,
    Image: "./images/table icons/3.png",
    collection: "Nobody",
    floor_name: 0.605,
    floor_nameB: "ETH",
    floor_change: "-7.4%",
    Volume: "645.2",
    volumneB: "ETH",
    volumne_change: "-65.9%",
    items: "10K",
    Owners: "4.7K",
  },
  {
    id: 4,
    Image: "./images/table icons/4.png",
    collection: "Pudgy Penguins",
    floor_name: 18.5,
    floor_nameB: "ETH",
    floor_change: "+8.9%",
    Volume: "563",
    volumneB: "ETH",
    volumne_change: "+39.9%",
    items: "8.9K",
    Owners: "4.6K",
  },
  {
    id: 5,
    Image: "./images/table icons/5.png",
    collection: "Farm Land by Pixels",
    floor_name: 1.2,
    floor_nameB: "ETH",
    floor_change: "-36%",
    Volume: "496.6",
    volumneB: "ETH",
    volumne_change: "+297.7%",
    items: "5K",
    Owners: "2.1K",
  },
  {
    id: 6,
    Image: "./images/table icons/6.png",
    collection: "TENJIN",
    floor_name: 0.541,
    floor_nameB: "ETH",
    floor_change: "+11.5%",
    Volume: "489.4",
    volumneB: "ETH",
    volumne_change: "+126.5%",
    items: "8K",
    Owners: "4.2K",
  },
  {
    id: 7,
    Image: "./images/table icons/7.png",
    collection: "DeGods",
    floor_name: 2.999,
    floor_nameB: "ETH",
    floor_change: "-5.3%",
    Volume: "437",
    volumneB: "ETH",
    volumne_change: "-47.2%",
    items: "9K",
    Owners: "2.8K",
  },
  {
    id: 8,
    Image: "./images/table icons/8.png",
    collection: "Pillheads NFT",
    floor_name: 0.145,
    floor_nameB: "ETH",
    floor_change: "+107.4%",
    Volume: "220.1",
    volumneB: "ETH",
    volumne_change: "+438.7%",
    items: "6.7K",
    Owners: "2K",
  },
  {
    id: 9,
    Image: "./images/table icons/9.png",
    collection: "Lil Pudgys",
    floor_name: 1.739,
    floor_nameB: "ETH",
    floor_change: "+3%",
    Volume: "201.7",
    volumneB: "ETH",
    volumne_change: "-52.5%",
    items: "21.5K",
    Owners: "8K",
  },
  {
    id: 10,
    Image: "./images/table icons/10.png",
    collection: "Bored Ape Yacht Club",
    floor_name: 24.29,
    floor_nameB: "ETH",
    floor_change: "-2.8%",
    Volume: "142.3",
    volumneB: "ETH",
    volumne_change: "-7.1%",
    items: "10K",
    Owners: "5.7K",
  },
  {
    id: 11,
    Image: "./images/table icons/11.png",
    collection: "BoredApekennelClub",
    floor_name: 1.28,
    floor_nameB: "ETH",
    floor_change: "-3%",
    Volume: "122.9",
    volumneB: "ETH",
    volumne_change: "+265.1%",
    items: "9.6K",
    Owners: "5.2K",
  },
];

for (let i = 0; i < tables_data.length; i++) {
  let tableData = tables_data[i];
  // console.log("rBLE", tableData.id)

  let flrChange = parseInt(tableData.floor_change);
  let volChange = parseInt(tableData.volumne_change);

  console.log("what 1", flrChange);
  console.log("what", volChange);

  tBody.innerHTML += `
   <tr class="table_div_2">
      <td class="ids">${tableData.id}</td>
      <td class="td_img_p"><img src="${
        tableData.Image
      }" alt="" id="T_img1" class="t_imges">
       <p>${tableData.collection}</p> </td>
      <td>${tableData.floor_name} <br> ${tableData.floor_nameB}</td>
      <td class="${flrChange > 0 ? "positive" : "negative"}">${
    tableData.floor_change
  }</td>
      <td>${tableData.Volume} <br> ${tableData.volumneB}</td>
      <td class="${volChange > 0 ? "positive" : "negative"}">${
    tableData.volumne_change
  }</td>
      <td>${tableData.items}</td>
      <td>${tableData.Owners}</td>
    </tr>

   `;
  // now i am working on a condition in which i can create a fucntion for positive and negative numbers

  // if(flrChange > 0 && volChange > 0 ){
  //     console.log("positive")
  //     console.log("positvive => ",tableData.floor_change);
  //     // flrChange.style.color = "green";

  // }else{
  //     console.log("negative")
  //     // volChange.style.color ="red";

  // }
}

// now working on section 3  cards part has start from here

const collections = [
  {
    nftImg: "./images/cards images/Image.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background.png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMG.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background (1).png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMG (1).png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background (2).png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/Image.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background.png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMG (1).png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background (2).png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/Image.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background.png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
];

const collections_2 = [
  {
    nftImg: "./images/cards images/ImageS2.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background.png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMGS2.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background (1).png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMG (1)S2.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background (2).png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMGS2.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background.png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/IMG (1)S2.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background (2).png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
  {
    nftImg: "./images/cards images/ImageS2.png",
    time: "05:12:07:45",
    title: "Hamlet Contemplates ...",
    coin: "BSC",
    pImg: "./images/cards images/Background.png",
    Creatior: "Creator",
    CurrentBid: "Current Bid",
    Name: "SalvadorDali",
    price: 4.89,
    curr: "ETH",
  },
];

function firstFunction(cardData, cards) {
  for (let i = 0; i < cardData.length; i++) {
    let collectionData = cardData[i];

    console.log("Working");

    cards.innerHTML += `
    <div class="cards">
                
            
    <div class="for_nft_img"><img src="${collectionData.nftImg}" alt="">
                    <div class="for_timer"><i class="fa-solid fa-fire" style="color: #f06f05;"></i><h2>${collectionData.time}</h2></div></div>
               
                <div class="for_title"><h2>"${collectionData.title}"</h2> <h3>BSC</h3></div>
                <div class="for_profile">
                    <div class="for_p_img"><img src="${collectionData.pImg}" alt=""></div>
                    <div class="for_p_Creator_name content">
                        <p>${collectionData.Creatior}</p>
                        <h4>${collectionData.Name}</h4>
                    </div>
                    <div class="for_p_currency content">
                        <p>${collectionData.CurrentBid}</p>
                        <h4>${collectionData.price}<span>${collectionData.curr}</span></h4>
                    </div>

                </div>

                </div>
    `;
  }
}
let cards = document.querySelector(".slider_1");

firstFunction(collections, cards);

// Select the buttons

// function firstSlides(cards){
let slides = document.querySelectorAll(".cards");


var count = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 33}%`;
});

let next = () => {
  if (count == 3) {
    count = -1;
  }
  count++;
  slideImage();
};

let back = () => {
  if (count == 2) {
    count = 4;
  }
  count--;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};
// //   }
// firstSlides(slides)





let cards2 = document.querySelector(".slider_2");
firstFunction(collections_2, cards2);



let slides2 = document.querySelectorAll(".slider_2 .cards");

var count2 = 0;
slides2.forEach((slide, index) => {
  slide.style.left = `${index * 33}%`;
});

let next2 = () => {
  if (count2 == 3) {
    count2 = -1;
  }
  count2++;
  slideImage2();
};

let back2 = () => {
  if (count2 == 2) {
    count2 = 4;
  }
  count2--;
  slideImage2();
};

const slideImage2 = () => {
  slides2.forEach((slide) => {
    slide.style.transform = `translateX(-${count2 * 100}%)`;
  });
};

// let cards2 = document.querySelector(".slider_2");
// firstFunction(collections_2, cards2);