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

## Data biding

#### data biding quando você passa uma parte da sua aplicação para a parte visual

## Tipos de biding

- Interpolação -> {{valor}}: quando o componente emite algo que vai ser renderizado no HTML
- Property biding -> [propriedade]="valor": quando o componente emite algo que vai ser renderizado no HTML
- Event bidnding -> (evento)="Handler": quando manda algum evento que dispara e realiza algo que vem da aplicação
- two way data biding -> [(ngModel)]="propriedade": ida e volta (a aplicação e o HTML se comunica) 

## Event biding

#### Associação de dados

#### Para usar o event biding você deve criar uma função no component quer você que realize

    no button.component.ts:
        getAlert(){ (função)
            alert(this.label)
        }
    no button.component.html:
        <button (click)="getAlert()">{{label}}</button> (evento de click)


## Two Way data biding

#### Quando você tem uma comunicação (associação) dos dois lados

    no *.component.html
    <input type="password"
    placeholder="{{placeHolder}}"
    (input)="placeHolder = $any($event.target).value">

    <p>{{placeHolder}}</p>

    <input
    type="text"
    [(ngModel)] = "senha"
    >
    <p>{{senha}}</p>

## Style biding

  <p [style.color]="color">{{senha}}</p>
 
<hr>

# Ciclo de vida de um componente

## OnInit (interface/contrato)

#### É basicamente a ação que será executada pelp componente quando ele for iniciado (quando ele for criado)

    ngOnInit(): void{
        console.log('Olá eu sou o nascimento de um componente')
    }

## OnChanges (interface/contrato)

#### É a ação que será executada quando algum valor do componente for modificado

    ngOnChanges(): void {
        console.log('OnChanges')
    }

#### OnChange é executado primeiro que o OnInit
#### O Onchange está atrelado a qualquer mudança que ocorra via @Input

## DoCheck

- checked -> content -> view
    ngDoCheck(): void {
        console.log('DoCheck')
    }

## OnDestroy

#### Evento que é executado assim que o componente é destruido
#### ver ngIf

<hr>

# Diretivas estruturais

#### alteram ou remodelam a estrutura da DOM de como as coisas estão sendo desenhadas

## NgIf

#### o ngIf é uma função que determina se o elemento vai ser mostrado ou não
#### Recebe parametros em boolean (true/false)
    <p *ngIf="true">vou aparecer</p>
    <p *ngIf="false">não vou aparecer</p>

#### obs.: O ngIf pode ser tanto a nivel de elemento quanto a nivel de componente

## NgIf com Data Biding

#### Quando você define no arquivo app.component.ts

## NgIf com NgTemplate

#### é um bloco que fica escondido até ser chamado

## NgFor

#### O ngFor é uma função que vai percorrer determinado valor e retornar com todos os valores dentro dele (caso seja mais de 1)
    <li *ngFor="let p of produtos">{{ p }}</li>

## Conceito de reatividade

#### Torna reativo a função que esteja ligada a algo

## ngFor com index
    <li *ngFor="let p of produtos; let i = index">{{ p }}</li>

#### faz com que posse ser pego a posição do elemento

## Switch e Switch Case

#### é a função de amostrar componentes de acordo com a instrução passada, se for um usuario mostra as funções de tal... é usado para criar blocos condicionais
    <div [ngSwitch]="menuType">
    <div *ngSwitchCase="'user'">
        <h1>espaço do usuario</h1>
        <ul>
        <li> editar perfil</li>
        <li> adicionar cartao</li>
        </ul>
    </div>

    <div *ngSwitchCase="'admin'">
        <h1>espaço do admin</h1>
        <ul>
        <li> editar perfil</li>
        <li> adicionar cartao</li>
        <li> gerenciar usuarios</li>
        </ul>
    </div>

    <div *ngSwitchCase="'superuser'">
        <h1>espaço do superuser</h1>
        <ul>
        <li> editar perfil</li>
        <li> adicionar cartao</li>
        <li> gerenciar usuarios</li>
        <li> gerenciar admins</li>
        </ul>
    </div>
    </div>

<hr>
<hr>

# Diretivas de atributos 

#### alteram o comportamento de um elemento em especifico ou de outra diretiva

<hr>

# Modulos

#### Guarda componentes, diretivas, pipes e services