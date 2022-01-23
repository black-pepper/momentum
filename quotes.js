const quotes = [
    {
        quote: "말은 망령되게 하지 말아야 한다. ​기품을 지키되 사치하지 말 것이고, 지성을 갖추되 자랑하지 말라.",
        author: "신사임당",
    },
    {
        quote:"배우는 사람은 모름지기 심신을 수련해야 한다",
        author:"퇴계 이황",
    },
    {
        quote:"진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다",
        author:"도산 안창호",
    },
    {
        quote:"혁신적인 것을 시도할 때 모든 사람들이 당신을 미쳤다고 할 테니 그 말에 준비가 되어 있어야 한다",
        author:"래리 엘리슨(오라클)",
    },
    {
        quote:"세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다.",
        author:"데일 카네기",
    },
    {
        quote:"바람이 불지 않을때 바람개비를 돌리는 방법은 앞으로 달려나가는것이다.",
        author:"데일 카네기",
    },
    {
        quote:"우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다",
        author:"존 F.케네디",
    },
    {
        quote:"절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라.",
        author:"헬렌 켈러",
    },
    {
        quote:"날개가 없기에 인간은 날아오를 방법을 찾는다",
        author:"하이큐",
    },
    {
        quote:"그 일을 일어나게 하라. 그리고 모두를 충격에 빠뜨려라",
        author:"익명",
    },
    {
        quote:"손이 타버릴듯 뜨거울지라도, 담고싶은 태양이 있다면 죽어도 놓지말것",
        author:"익명",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;