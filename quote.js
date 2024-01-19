let quoteText=document.querySelector('.quote')
        quoteBtn =document.querySelector('button') 
        //random quote function
        function randomQuote(){
            fetch('https://api.quotable.io/random').then(res=> res.json()).then(result=>{
                console.log()
                quoteText.innerText = result.content
            })
        }


        quoteBtn.addEventListener('click',randomQuote)

