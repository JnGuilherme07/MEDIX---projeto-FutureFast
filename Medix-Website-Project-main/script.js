// Referências para as ondas
var onda1 = document.getElementById('onda1');
var onda2 = document.getElementById('onda2');
var onda3 = document.getElementById('onda3');
var onda4 = document.getElementById('onda4');

// Função de movimentação das ondas
function movimentarOndas() {
    var rolagemPos = window.scrollY;

    // Ajustando a posição X de cada onda com base na rolagem
    onda1.style.backgroundPositionX = `${400 + rolagemPos * 4}px`;
    onda2.style.backgroundPositionX = `${300 - rolagemPos * 4}px`;
    onda3.style.backgroundPositionX = `${200 + rolagemPos * 2}px`;
    onda4.style.backgroundPositionX = `${100 - rolagemPos * 2}px`;
}

// Monitorando o scroll e aplicando movimentação
window.addEventListener('scroll', movimentarOndas);




// Array para armazenar os produtos
let produtos = [];

// Elementos do DOM
const form = document.getElementById('formProduto');
const inputProduto = document.getElementById('produto');
const listaSupermercado = document.getElementById('listaSupermercado');

// Função para renderizar a lista na tela
function renderizarLista() {
    listaSupermercado.innerHTML = '';
    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = produto;

        // Container de botões
        const containerBotoes = document.createElement('div');

        // Botão de edição
        const btnEditar = document.createElement('button');
        btnEditar.style.backgroundColor = '#387977';
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarProduto(index);

        // Botão de remoção
        const btnRemover = document.createElement('button');
        btnRemover.style.backgroundColor = '#4f5261';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerProduto(index);

        // Adiciona elementos à lista
        li.appendChild(span);
        containerBotoes.appendChild(btnEditar);
        containerBotoes.appendChild(btnRemover);
        li.appendChild(containerBotoes);
        listaSupermercado.appendChild(li);
    });
}

// Função para adicionar produto
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const produto = inputProduto.value.trim();
    if (produto !== '') {
        produtos.push(produto);
        inputProduto.value = '';
        renderizarLista();
    }
});

// Função para remover produto
function removerProduto(index) {
    produtos.splice(index, 1);
    renderizarLista();
}

// Função para editar produto
function editarProduto(index) {
    const novoProduto = prompt("Editar produto:", produtos[index]);
    if (novoProduto !== null && novoProduto.trim() !== '') {
        produtos[index] = novoProduto.trim();
        renderizarLista();
    }
}






/**class ColoredContainer extends React.Component {
    render () {
      let containerStyle = {
        backgroundColor: this.props.color
      }
      return <div className="container" style={containerStyle}></div>
    }
  }
  
  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className='scroll' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
                </button>;
     }
  } 
  
  class ScrollApp extends React.Component {
    constructor() {
      super();
      
      this.state = {
        colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
      }
    }
    
    render () {
      return <div className="long">
                {
                  this.state.colors.map(function(color) {
                      return <ColoredContainer color={color}/>
                  })
                }
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
             </div>
    }
  }
  /*
   * Render the ScrollApp component into the div with the id 'app'
   
  React.render(<ScrollApp/>, document.getElementById('app'));*/


  $(document).ready(function() {	
    var offset = 300;
    var duration = 400;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.scroll-to-top').addClass('active-arrow');
        } else {
            jQuery('.scroll-to-top').removeClass('active-arrow');
        }
    });				
    jQuery('.scroll-to-top').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
})