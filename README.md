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

## Criando um projeto

    ng new [nome-projeto]

## Scoped

##### o css de cada component tem o escopo local, a menos que voê passe uma URL global

## Contrato para criar um componente

##### o Component do angular/core é uma interface (contrato), Decorator '@Component'

#### Criando um component
    import { Component, Input } from "@angular/core";


    @Component({
    selector: 'hello', (selector, tag pela qual vai ser invocado)
    template: `<h1>Hello {{name}}</h1>`, (template, o que vai mostrar quando for chamado)
    styleUrls: ['./app.component.css'] (style, estilo que vai ser configurado quando for mostrado)
    })
    export class HelloComponent
    {
    @Input() name: string = '';
    }

## Registrando um componente

##### Os componentes precisam estar importados dentro de um Module
##### Module é um agregador de componentes

## Criando estrutura do componente

##### a estrutura do componente são os arquivos (.html e .css)

## Interpolação de dados

#### Você conseguir passar dados dinamicamente para o html

    no button.component.ts
    export class Button{
        buttonText: string = 'ACESSAR';
        buttonTexts: string[] = ['VENDER', 'COMPRAR'];
        buttonNumber: number = 1;
        buttonObject = {
            label: 'Adicionar ao carrinho',
        }
    }

    no button.component.html:
    <div>
        <button>{{buttonTexts[1]}}</button>
        <button>{{buttonTexts[0]}}</button>
        <button>{{buttonText}}</button>
        <button>{{buttonNumber}}</button>
        <button>{{buttonObject.label}}</button>
    </div>

## estilo Global vs Scoped

#### tudo que for aplicado no global será aplicado em todos os componentes

#### obs.: o estilo só não irá funcionar caso já tenha sido estilizado no scoped (ele dá preferencia para o css dele e depois olha o global)

## Fazendo os componentes conversarem

#### Usando o '@Input()'

    no button.component.ts:
        @Input() label: string = ''; (cria um button vazio e informa que ele pode receber algum valor dentro dele)
    no button.component.html:
        <button>{{label}}</button> (invoca o button e informa que ele vai receber o atributo label )


    no app.component.ts:
        buttonLabel: string = 'CARRINHO'; (cria uma variavel que será inputada dentro do button)
        buttonSecond: string = 'ADICIONAR A FAVORITOS'; (cria uma variavel que será inputada dentro do button)
    no app.component.html:
        <my-button [label]="buttonLabel"></my-button> (invoca o button e passa o valor para ele atraves do [label]="nome-variavel-no-app.component.ts")
        <my-button [label]="buttonSecond"></my-button> (invoca o button e passa o valor para ele atraves do [label]="nome-variavel-no-app.component.ts")

## Inputando valores no componente

    <my-button label="Noticia"></my-button>

    tipos:

        - [label]="variavel" -> passa o valor que esta declarado nessa variavel lá no app.component.ts
        - label="valor" -> cria o button com o valor passado
        - label="{{variavel}}" -> cria o button com o valor dentro da variavel passada pelo elemento pai

## As 4 maneiras de passar valores para os componetes

    - [label]="'buttonSecond'" -> passa de forma literal 
        [label]="'CARRINHO'"    
    - [label]="variavel" -> passa o valor que esta declarado nessa variavel lá no app.component.ts
    - label="valor" -> cria o button com o valor passado
    - label="{{variavel}}" -> cria o button com o valor dentro da variavel passada pelo elemento pai

##