const search_form = document.getElementById("search");
const search = document.querySelector('#search input[type="text"]');
const searchButton = search_form.querySelector("button");
const schedule_button = document.getElementById("schedule");

const COLORS = {
    youtube: "#FF0000",
    google: "#4285F4",
    naver: "#1EC800"
};

function handleSearch(event){
    event.preventDefault();
    
    const query = search.value.trim(); // 앞뒤 공백 제거
    const engine = search_form.querySelector('input[name="engine"]:checked').value;

    if(query){
        let url = "";

        switch(engine){
            case "google":
                url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
            case "naver":
                url = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(query)}`;
                break;
            case "youtube":
                url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                break;
        }
        
        window.open(url, "_blank");
        // window.location.href = url;
    }
}

function updateButtonColor(){
    const engine = search_form.querySelector('input[name="engine"]:checked').value;

    // 선택한 검색 엔진 색에 맞춰 검색 창 테두리와 버튼의 색 변경

    if (engine === "youtube"){
        searchButton.style.backgroundColor = COLORS.youtube;
        search.style.borderColor = COLORS.youtube;
        searchButton.style.color = 'white';
    }
    else if (engine === "google"){
        searchButton.style.backgroundColor = COLORS.google;
        search.style.borderColor = COLORS.google;
        searchButton.style.color = 'white';
    }
    else if (engine === "naver"){
        searchButton.style.backgroundColor = COLORS.naver;
        search.style.borderColor = COLORS.naver;
        searchButton.style.color = 'white';
    }
}

function handleButton(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    console.log(year, month, day);
    const url = `https://m.sports.naver.com/wfootball/schedule/index?date=${year}-${month}-${day}`;

    window.open(url, "_blank");
}

updateButtonColor();

const radioButtons = document.querySelectorAll('input[name="engine"]');
radioButtons.forEach(button => {
    button.addEventListener("change", updateButtonColor);
});

search_form.addEventListener("submit", handleSearch);
schedule_button.addEventListener("click", handleButton);