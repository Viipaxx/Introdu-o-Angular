# Angular

- Frameork baseado em Javascript
- Typescript como linguagem principal
- SPAs são o seu foco
- Componentes são a base da arquitetura
- Estrutura organizada e bem definida
- Sistema de Tooling muito rico: CLI, HTTP, Router...

## Camadas de responsabilidade de uma Web App

- Componentes
- Gerenciamento de estado
- Roteamento
- Renderização

<hr>

### Componentes

#### Componente é um elemento visual, customizável e reutilizável
#### Ex.: um card na tela, botão...

#### Ao invés de você trabalhar na página como um todo, você vai trabalhar de maneira isolada

#### Vantagem: isolar cada coisa, para diminuir a complexidade e reaproveitar

<hr>

### Gerenciamento de estado

#### states responsável por garantir que as informações dos componentes não estão dessincronizadas e facilitar a comunicação de um componente com outro

#### Ex.: Atualizar carrinho de comprpas ao clicar no botão de comprar um produto

<hr>

### Roteamento

#### Responsável pela forma de navegar fazendo a troca de URL sem Recarregar a página, mudando somente os componentes que são mostrados 
#### meuapp/login -> meuapp/home

<hr>

### Renderização

#### Responsável por decidir a melhor maneira de aceesar e entregar para o browser o componente pronto para que ele seja desenhado na janela sem complicações

#### 100% Server // Parte Server e Parte Client // 100% Client

<hr>