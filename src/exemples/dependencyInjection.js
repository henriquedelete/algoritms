class Dog {
    constructor(soundsHelper) {
      this.soundsHelper = soundsHelper;
    }
  
    makeSound() {
      return this.soundsHelper.getSound();
    }
  }
  
  class SoundsHelper {
    constructor(sound) {
      this.sound = sound;
    }
  
    getSound() {
      return this.sound;
    }
  }
  
  // Exemplo de uso
  const mySoundsHelper = new SoundsHelper("Woof!"); // Você pode passar um arquivo de áudio, uma URL, ou qualquer outra coisa aqui
  const myDog = new Dog(mySoundsHelper);
  
  console.log(myDog.makeSound()); // Saída esperada: "Woof!"
  

  class Cachorro {
    constructor(ajudanteDeSons) {
      this.ajudanteDeSons = ajudanteDeSons;
    }
  
    fazerSom() {
      return this.ajudanteDeSons.obterSom();
    }
  }
  
  class AjudanteDeSons {
    constructor(som) {
      this.som = som;
    }
  
    obterSom() {
      return this.som;
    }
  }
  
  // Exemplo de uso
  const meuAjudanteDeSons = new AjudanteDeSons("Au!"); // Você pode passar um arquivo de áudio, uma URL, ou qualquer outra coisa aqui
  const meuCachorro = new Cachorro(meuAjudanteDeSons);
  
  console.log(meuCachorro.fazerSom()); // Saída esperada: "Au!"
  

  class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
    }
  }
  
  class ServicoDePersistencia {
    salvarUsuario(usuario) {
      // Aqui, você poderia ter a lógica para salvar o usuário em um banco de dados,
      // mas o serviço não precisa conhecer detalhes como se é SQL ou NoSQL.
  
      // Suponha que a persistência seja bem-sucedida neste exemplo.
      const sucesso = true;
  
      // Retorna um objeto contendo informações sobre o resultado da persistência.
      // Este objeto poderia incluir detalhes sobre o sucesso ou falha, mensagens de erro, etc.
      return {
        sucesso,
        mensagem: sucesso ? 'Usuário salvo com sucesso.' : 'Falha ao salvar o usuário.',
      };
    }
  }
  
  // Exemplo de uso no controller
  const usuarioASalvar = new Usuario('John Doe', 'john@example.com');
  const servicoDePersistencia = new ServicoDePersistencia();
  
  const resultadoPersistencia = servicoDePersistencia.salvarUsuario(usuarioASalvar);
  
  if (resultadoPersistencia.sucesso) {
    console.log(resultadoPersistencia.mensagem);
    // Lógica adicional para o caso de sucesso
  } else {
    console.error(resultadoPersistencia.mensagem);
    // Lógica adicional para o caso de falha
  }
  