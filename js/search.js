const search_form = document.getElementById("search");
const search = document.querySelector('#search input[type="text"]');
const schedule_button = document.getElementById("schedule");

function handleSearch(event){
    event.preventDefault();
    
    const query = search.value.trim();
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

function handleButton(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    console.log(year, month, day);
    const url = `https://m.sports.naver.com/wfootball/schedule/index?date=${year}-${month}-${day}`;

    window.open(url, "_blank");
}

search_form.addEventListener("submit", handleSearch);
schedule_button.addEventListener("click", handleButton);