let funcionario = [
    {
      nome: 'Euclides',
      idade: 21,
      cargo: 'Analista de sistemas',
      tecnoglogia: 'Node'
    },
    {
      nome: 'Linton',
      idade: 30,
      cargo: 'Analista de sistemas',
      tecnoglogia: 'Tudo',
    },
    {
        nome: 'Livia',
        idade: 20,
        cargo: 'Analista de sistemas',
        tecnoglogia: 'Tudo',
      },
  ];

  let livia = funcionario.map((param) => {
    if(param.nome == "Euclides"){
        param.tecnoglogia = [param.tecnoglogia]
        param.tecnoglogia.push("react", "java")
        
    }
    return param
  })

  //console.log(funcionario);
  console.log(livia);

