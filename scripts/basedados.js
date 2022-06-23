var numQuestao = 0

function popularSelect() {
  const modulosLista = [
    {
      idModulo: '1',
      nomeModulo: 'Introdução a Lógica de Programação'
    },
    {
      idModulo: '2',
      nomeModulo: 'Lógica de Programação e Algoritimos I'
    },
    {
      idModulo: '3',
      nomeModulo: 'Lógica de Programação e Algoritimos II'
    },
    {
      idModulo: '4',
      nomeModulo: 'Lógica de Programação e Algoritimos  III'
    },
    {
      idModulo: '5',
      nomeModulo: 'Fundamentos de HTML5 I'
    },
    {
      idModulo: '6',
      nomeModulo: 'Fundamentos de HTML5 II'
    },
    {
      idModulo: '7',
      nomeModulo: 'Fundamentos de HTML5 III'
    },
    {
      idModulo: '8',
      nomeModulo: 'Fundamentos em CSS'
    },
    {
      idModulo: '9',
      nomeModulo: 'JavaScrip e Jquery'
    },
    {
      idModulo: '10',
      nomeModulo: 'Angular'
    },
    {
      idModulo: '11',
      nomeModulo: 'APIs com Angular'
    },
    {
      idModulo: '12',
      nomeModulo: 'Java Fundamentos'
    },
    {
      idModulo: '13',
      nomeModulo: 'Linguagem de Programação em Java'
    },
    {
      idModulo: '14',
      nomeModulo: 'Java Web'
    },
    {
      idModulo: '15',
      nomeModulo: 'HTML Avançado'
    },
    {
      idModulo: '16',
      nomeModulo: 'CSS Avançado'
    }
  ]

  var select = document.getElementById('selectModulos')

  for (var i = 0; i < modulosLista.length; i++) {
    //populando o select com o json
    select.innerHTML =
      select.innerHTML +
      '<option value="' +
      modulosLista[i]['idModulo'] +
      '">' +
      modulosLista[i]['nomeModulo'] +
      '</option>'
  }
}

function show(select) {
  // Obtém o valor Selecionado a partir do elemento <select> e exibe
  var msg = document.getElementById('moduloSelecionado')
  msg.innerHTML = select.options[select.selectedIndex].text
}

function preencherQuiz() {
  const questoesLista = [
    {
      idQuestao: '1',
      idModulo: '10',
      pergunta: 'O que são diretivas?',
      alternativaA:
        'São containers que reservam blocos de código de um domínio da aplicação.',
      alternativaB:
        'Diretivas são classes que adicionam comportamento adicional aos elementos HTML.',
      alternativaC:
        'São serviços ou objetos que uma classe precisa para exercer a sua função.',
      alternativaD:
        'Diretivas são uma forma de definir os valores das propriedades do HTML dinâmicamente.',
      resposta: 'B'
    },
    {
      idQuestao: '2',
      idModulo: '10',
      pergunta: 'O que são Pipes em Angular?',
      alternativaA:
        'Pipes são funções que fazem a ligação entre componentes e os seus templates.',
      alternativaB:
        'Pipes são funções que transformam um valor númerico para moeda.',
      alternativaC:
        '\r\nPipes servem para repetir o mesmo trecho de HTML em um componente.',
      alternativaD:
        'Pipes são funções que aceitam valores, os processam e retornam o valor transformado. ',
      resposta: 'D'
    },
    {
      idQuestao: '3',
      idModulo: '10',
      pergunta: 'O que é o Angular?',
      alternativaA: '\r\nÉ uma biblioteca utilizada para criar componentes.',
      alternativaB:
        '\r\nÉ um framework e plataforma de desenvolvimento escrito em TypeScript que serve para criar Single Page Applications',
      alternativaC:
        '\r\nÉ uma biblioteca escrita em JavaScript que serve para criar o back-end de aplicações WEB.',
      alternativaD:
        'É um framework escrito em JavaScript que serve para criar páginas em HTML.',
      resposta: 'B'
    },
    {
      idQuestao: '4',
      idModulo: '10',
      pergunta: 'O que são decorators em Angular?',
      alternativaA:
        'São funções que adicionam funcionalidades adicionais a um componente.',
      alternativaB:
        '\r\nSão classes que servem para modificar o CSS dos componentes.',
      alternativaC:
        'Decoradores são um padrão de projetos ou funções que definem como os recursos do Angular funcionam.',
      alternativaD:
        '\r\nSão estilos CSS reutilizáveis que podem ser aplicados aos componentes.',
      resposta: 'C'
    },
    {
      idQuestao: '5',
      idModulo: '10',
      pergunta: 'O que é Interpolação de Strings em Angular?',
      alternativaA:
        'Interpolação de strings é uma técnica de vinculação de dados unidirecional que mostra os dados da classe no template.',
      alternativaB:
        '\r\nInterpolação de strings é o nome dado aos filtros que podem ser aplicados a uma string.',
      alternativaC:
        '\r\nInterpolação de strings são funções utilizadas para formatar uma string.',
      alternativaD:
        'Interpolação de strings é a técnica de juntar duas strings no template.',
      resposta: 'A'
    },
    {
      idQuestao: '6',
      idModulo: '10',
      pergunta: 'O que são os Templates em Angular?',
      alternativaA:
        'Templates são uma forma de definir os valores das propriedades do HTML dinâmicamente.',
      alternativaB:
        'São classes que adicionam comportamentos adicionais aos elementos da sua aplicação.',
      alternativaC:
        'Um template é um pedaço de HTML que podem conter elementos e atributos do Angular.',
      alternativaD: 'São funções utilizadas para formatar strings.',
      resposta: 'C'
    },
    {
      idQuestao: '7',
      idModulo: '10',
      pergunta:
        'Qual é o primeiro hook do ciclo de vida dos componentes que é disparado quando um componente é criado e não possui nenhuma Input property?',
      alternativaA: 'ngOnInit',
      alternativaB: 'ngOnChanges',
      alternativaC: 'ngDoCheck',
      alternativaD: 'ngAfterContentInit',
      resposta: 'A'
    },
    {
      idQuestao: '8',
      idModulo: '10',
      pergunta: 'O que são serviços?',
      alternativaA:
        'Serviços são funcionalidades adicionais que podem ser adicionados a uma classe através da injeção de dependência.',
      alternativaB:
        'Serviços são uma forma de definir o comportamento de um componente dinâmicamente.',
      alternativaC: 'Serviços são os métodos da classe de um componente.',
      alternativaD:
        'Serviços são um conjunto de classes que tratam da mesma regra de negócio.',
      resposta: 'A'
    },
    {
      idQuestao: '9',
      idModulo: '10',
      pergunta: 'O que são módulos?',
      alternativaA:
        '\r\nSão um conjunto de classes que tratam da mesma regra de negócio.',
      alternativaB:
        'São containers que reservam blocos de código de um domínio da aplicação.',
      alternativaC:
        'Módulos são mecanismos que servem para agrupar componentes, diretivas, pipes e serviços relacionados.',
      alternativaD:
        '\r\nSão grupos de componentes que juntos formam uma aplicação.',
      resposta: 'C'
    },
    {
      idQuestao: '10',
      idModulo: '10',
      pergunta: 'O que são componentes?',
      alternativaA:
        'Componentes são uma forma de definir os valores das propriedades do HTML dinâmicamente.',
      alternativaB:
        'São serviços ou objetos que uma classe precisa para exercer a sua função.',
      alternativaC:
        'Componentes são os principais blocos de construção de uma aplicação em Angular. Consistem de um template HTML, uma classe em TypeScript e um seletor de CSS.',
      alternativaD: 'São funções utilizadas para formatar strings.',
      resposta: 'C'
    }
  ]

  var questao = document.getElementById('questao')
  var A = document.getElementById('A')
  var B = document.getElementById('B')
  var C = document.getElementById('C')
  var D = document.getElementById('D')

  if (numQuestao < 10) {
    document.getElementById('questao').innerHTML =
      questoesLista[numQuestao].pergunta.toString()

    document.getElementById('A').innerHTML =
      questoesLista[numQuestao].alternativaA

    document.getElementById('B').innerHTML =
      questoesLista[numQuestao].alternativaB

    document.getElementById('C').innerHTML =
      questoesLista[numQuestao].alternativaC

    document.getElementById('D').innerHTML =
      questoesLista[numQuestao].alternativaD

    document.getElementById('numQuestao').innerHTML = numQuestao + 1
  }
  if (numQuestao >= 10) {
    alert('sua nota:' + 10)
    window.location.href = '../index.html'
  }
}

function confirmarResposta() {
  numQuestao = numQuestao + 1

  eval(preencherQuiz)()
}
