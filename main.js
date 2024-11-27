function showMore() {
    const moreCards = document.querySelectorAll('.more');
    moreCards.forEach(card => {
        card.style.display = 'block';  
    });

    const showMoreBtn = document.querySelector('.button button:nth-child(1)');
    const showLessBtn = document.querySelector('.button button:nth-child(2)');
    console.log(showMoreBtn);  
    console.log(showLessBtn);  

    if (showMoreBtn && showLessBtn) {
        showMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'inline';
    } else {
        console.log("الأزرار غير موجودة في الصفحة");
    }
}
function showLess() {
    const moreCards = document.querySelectorAll('.more');
    moreCards.forEach(card => {
        card.style.display = 'none';  
    });

    const showMoreBtn = document.querySelector('.button button:nth-child(1)');
    const showLessBtn = document.querySelector('.button button:nth-child(2)');
    console.log(showMoreBtn); 
    console.log(showLessBtn);  

    if (showMoreBtn && showLessBtn) {
        showMoreBtn.style.display = 'inline';  
        showLessBtn.style.display = 'none';  
    } else {
        console.log("الأزرار غير موجودة في الصفحة");
    }
}
    function toggleAnswer(button) {
        var answer = button.previousElementSibling; 
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
            button.textContent = "-"; 
        } else {
            answer.style.display = "none"; 
            button.textContent = "+"; 
        }
    }