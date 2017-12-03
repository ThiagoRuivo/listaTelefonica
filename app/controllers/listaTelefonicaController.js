(function(){
  'use script';
  
  angular
    .module('listaTelefonica')
    .controller('listaTelefonicaController', listaTelefonicaController);
    
  listaTelefonicaController.inject = ['$scope'];
  
  function listaTelefonicaController($scope, service){
    /* VARIÁVEIS */
    
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {
          nome: "Pedro",
          telefone: "99666-5050",
          cor: "blue"
        },
        {
          nome: "Ana",
          telefone: "99888-6060",
          cor: "green"
        },
        {
          nome: "Maria",
          telefone: "98663-6565",
          cor: "red"
        },
    ];
    $scope.operadoras = [
      {
        nome: "Oi",
        codigo: 14,
        categoria: "Celular"
      },
      {
        nome: "Vivo",
        codigo: 15,
        categoria: "Celular"
      },
      {
        nome: "Tim",
        codigo: 41,
        categoria: "Celular"
      },
      {
        nome: "GVT",
        codigo: 25,
        categoria: "Fixo"
      },
      {
        nome: "Embratel",
        codigo: 21,
        categoria: "Fixo"
      }
    ];
    $scope.classe = "selecionado";
    
    /* LÓGICA DE INICIALIZAÇÃO */
    
    // atribuição de funções ao $scope
    $scope.iniciar = _iniciar;
    $scope.exibirMensagem = _exibirMensagem;
    $scope.adicionarContato = _adicionarContato;
    $scope.validarCampos = _validarCampos;
    $scope.apagarContato = _apagarContato;
    $scope.isContatoSelecionado = _isContatoSelecionado;
    
    // chamar função para iniciar o controller
    $scope.iniciar();
    
    /* FUNÇÕES */
    
    function _iniciar () {
      // inserir toda a lógica de inicialização do controller
      console.log('Inicialização do controller completa.');
    }
    function _exibirMensagem () {
      console.log('Qualquer coisa');
    }
    function _adicionarContato (contato) {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
    }
    function _validarCampos (contato) {
      if (contato != null) {
        if (!contato.nome || !contato.telefone) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
    function _apagarContato (contatos) {
       $scope.contatos = contatos.filter(function (contato) {
        if (!contato.selecionado) {
          return contato;
        }
      });
    }
    function _isContatoSelecionado (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    }
  }
})();