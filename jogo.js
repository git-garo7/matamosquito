/*definição da area randomica de onde o mosquito vai aparecer*/
 /*fazer fora da função pra evitar erro*/
 var altura = 0
 var largura = 0
 var vidas = 1
 var tempo = 15

 var tempom = 1500

 var nivel = window.location.search//search ajuda recuperar info após (?)//
 nivel = nivel.replace('?','')

 if (nivel === 'Normal') {
 	//1500
 	 tempom = 1500

 }else if (nivel === 'Dificil') { 	
 	//1000
 	tempom = 1000

 }else if (nivel === 'Hardcore') {
 	//500
    tempom = 500


 }//velocidades dos níveis(aparição das moscas)

function ajustaresolucaojogo(){
	 altura = window.innerHeight
	 largura = window.innerWidth
	 console.log(altura, largura)//pode ver no navegador!!!
	  }
/*caso usuario mude a resolução da tela ele não atualiza,então usarei function*/
ajustaresolucaojogo()
var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criamosquito)
    alert('vitoria')
    window.location.href = 'vitoria.html'
	}else {
		
    document.getElementById('cronometro').innerHTML = tempo
	}
},1000)



function posicaorandom() {
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
        //console.log('elemento selecionado foi: c'+ vidas)
        if (vidas >3 ) {
        	window.location.href = 'fim_de_jogo.html'
        	alert('interromper o jogo(game over)')
        }
		document.getElementById('c' + vidas).src = 'imagens/coracao_vazio.png'
		vidas++
	}//evita que as imagens de mosquito acumulem na tela,remove a anterior e gera uma nova//
 
	var posicaoX = Math.floor(Math.random() *largura) -90
	var posicaoY = Math.floor(Math.random() *altura) -90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//elemento html//
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png' 
	mosquito.className = tamanhorandom()+' '+ladorandom()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		alert('in time')
		this.remove()
	}

	document.body.appendChild(mosquito)


	}//cria-se a function posicaorandom pra evitar erro no body por ser lido antes do head//

	//caracteristicas de tamanhos diferentes//
	 function tamanhorandom(){
	 	var classe = Math.floor(Math.random()*3)
	 	console.log(classe)//ver no log do navegador//
	 	switch (classe) {
	 		case 0:
           		return 'mosquito1'//pequeno
	 		case 1:
             	return 'mosquito2'//medio
	 		case 2:
	 			return 'mosquito3'//grande
	 	}//vai diferenciar os tamanhos confotme a configuração de px no estilo.css//
	 }
	 function ladorandom(){
	 	var classe = Math.floor(Math.random()*2)
	 	
	 	switch (classe) {
	 		case 0:
           		return 'ladoA'
	 		case 1:
             	return 'ladoB'
	 		}

	 }		