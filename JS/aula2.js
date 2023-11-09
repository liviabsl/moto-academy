const eu = 
    {
        nome:'Lívia',
        idade: 20,
        hobbies: ['passear', 'lanchar'],
        acao: function(){
            console.log(this.hobbies[1])
        }
    }

eu["profissão"] = 'Desenvolvedora'


///06/11/23
let array = [
    {
      id: 1,
      name: 'John',
      age: 23,
    },
    {
      id: 2,
      name: 'Samuel',
      age: 21,
    },
    {
      id: 3,
      name: 'marvin',
      age: 26,
    },
    {
      id: 4,
      name: 'james',
      age: 28,
    },
  ];

  function funcaoTeste(valor){
    console.log(valor.name)
  }

  //funcaoTeste(array[0])

  const idade = (ano) => 2023-ano
  //console.log(idade(2003));

  const resultado = array.map((resposta) =>  {
    console.log(resposta);
  })