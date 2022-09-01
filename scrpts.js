const botaoseta = document.querySelector("#botaoseta")
        const combobox = document.querySelector("#meu")
        botaoseta.addEventListener("click", function(){
            const classe = combobox.className
            if(classe.indexOf("aparecer") != -1){
                combobox.classList.remove("aparecer")
                
            }
            else{
                combobox.classList.add("aparecer")

            }

            })
            
    
            document.body.addEventListener("click",function(e){
                const classe = combobox.className
                if(e.target != botaoseta){
                    if(classe.indexOf("aparecer") != -1){
                    combobox.classList.remove("aparecer")
                    }
                }
                
            })
            const dados = document.querySelectorAll(".invisivel")
            console.log(dados)
            window.addEventListener("scroll", function(){
                for(let c = 0; c < dados.length;c=c+1){
                    const distancia_scroll = window.pageYOffset + ((window.innerHeight *3)/4)
                    if(distancia_scroll > dados[c].offsetTop){
                    dados[c].classList.add("visivel")
                
            }

                }
             
            })