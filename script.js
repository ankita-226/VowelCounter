 function countVowels(){
    event.preventDefault()
    const userName = document.getElementById("userName").value
    let vowelCount =0;
    for(let i=0;i<userName.length;i++){
        const char = userName.charAt(i)
        if(char === 'a'|| char ==='e'|| char ==="i"|| char ==="o" || char ==="u" ||char === 'A'|| char ==='E'|| char ==="I"|| char ==="O" || char ==="U" ){


            vowelCount++;
        }

    
    }
    const result = document.getElementById("blankContainer")
    result.innerText = `In your name vowel count : ${vowelCount}  `;

}