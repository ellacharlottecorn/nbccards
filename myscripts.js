function search_cards() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let words = document.getElementsByClassName('words');
    if (input.length > 1) {
        for (i = 0; i < words.length; i++) {
            if (words[i].innerHTML.toLowerCase().includes(input)) {
                words[i].scrollIntoView()
                words[i].style.backgroundColor = "white";
                words[i].style.color = "black";
            }
            else {
                words[i].style.backgroundColor = "#400095";
                words[i].style.color = "white";
            }
        }
    }
    else {
        for (i = 0; i < words.length; i++) {
            words[i].style.backgroundColor = "#400095";
            words[i].style.color = "white";
            }
        }
    }
    