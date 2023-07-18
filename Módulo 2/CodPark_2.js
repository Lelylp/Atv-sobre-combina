var Nome, Idade, Altura, Maior_de_idade, Pessoa, i;

Nome = 'Weslley';
Idade = 22;
Altura = 1.77;
Maior_de_idade = true;
Pessoa = [Nome, Idade, Altura, Maior_de_idade];
for (var i_index in Pessoa) {
  i = Pessoa[i_index];
  window.alert(i);
}