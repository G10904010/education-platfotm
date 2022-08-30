$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $(function () {
        if ($(window).width() < 944) { //當視窗小於944時才運作
            $('.navbar a').on('click', function () {
                $('.menu-btn').click();
            });
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(".title").click(function () {
        var x = $(this).siblings("p")
        if (x.css("display") == "none") {
            x.slideDown();
        } else {
            x.slideUp();
        };
    });

})

const postData = [
    {
        name: "時空調查局",
        tag: "世界史X人物史X入門",
        words: ["影視中的歷史人物故事", "認識電影裡的背景故事", "不只有歷史劇裡有歷史"],
        age: "全年齡",
        photo: "https://i.imgur.com/Pu7Y1tX.png",
        url: "https://www.facebook.com/HistoryInvestigateAgency/?ref=page_internal"
    },
    {
        name: "國立歷史博物館",
        tag: "中國史X藝術史X專題講座",
        words: ["認識歷史文物", "歷史書籍介紹", "台灣當地歷史走讀活動消息", "透過遊戲認識歷史文物", "帶你認識台灣藝術史"],
        age: "全年齡",
        photo: "https://i.imgur.com/vfvfAr1.jpg",
        url: "https://www.nmh.gov.tw/"
    },
    {
        name: "國立歷史博物館",
        tag: "中國史X藝術史X專題講座",
        words: ["認識歷史文物", "歷史書籍介紹", "台灣當地歷史走讀活動消息", "透過遊戲認識歷史文物", "帶你認識台灣藝術史"],
        age: "全年齡",
        photo: "https://i.imgur.com/vfvfAr1.jpg",
        url: "https://www.nmh.gov.tw/"
    },
    {
        name: "國立歷史博物館",
        tag: "中國史X藝術史X專題講座",
        words: ["認識歷史文物", "歷史書籍介紹", "台灣當地歷史走讀活動消息", "透過遊戲認識歷史文物", "帶你認識台灣藝術史"],
        age: "全年齡",
        photo: "https://i.imgur.com/vfvfAr1.jpg",
        url: "https://www.nmh.gov.tw/"
    },
];

function words(words) {
    return `
  <ul class="words-list">
  ${words.map(words => `<li>${words}</li>`).join("")}
  </ul>
  `;
}

function history(history) {
    return `
      <div class="history-card" onclick="window.open(' ${history.url} ')">
        <img class="history-photo" src="${history.photo}"><p>${history.age}</p>
        <h2 class="name">${history.name}</h2>
        <h4 class="tag">${history.tag}</h4>
        ${history.words ? words(history.words) : ""}
      </div>
    `;
}

document.getElementById("app").innerHTML = `
  ${postData.map(history).join("")}
`;
