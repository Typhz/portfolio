---
title:  "Customizando PowerShell com Oh My Posh"
description: "Neste artigo fornecerei algumas orientações para lhe ajudar a personalizar sua linha de comando para PowerShell usando o Oh My Posh"
date: "Feb 15, 2022"
---

## Introdução  
Neste artigo fornecerei algumas orientações para lhe ajudar a personalizar sua linha de comando para PowerShell usando o **Oh My Posh**
Neste artigo veremos:
* [Instalar uma Nerd Font]()
* [Instalar Windows Terminal]()
* [Instalar o Oh My Posh]()
* [Configurar um tema]()


## Instalando Nerd Font
Para obtermos todos os ícones dos temas disponiveis também precisaremos usar Nerd Fonts, assim não teremos nenhum erro ao usar o Oh My Posh, recomendamos que baixe a [Hack Font](https://github.com/source-foundry/Hack) que tem todos os icones que os temas usam.

## Instalando Windows Terminal
Para iniciarmos deveremos instalar o [Windows Terminal](https://github.com/microsoft/terminal) que nos permitira customizar um pouco mais nosso Power Shell mudando a font, cor de fundo, transparencia, etc... [Clique aqui para Baixar](https://www.microsoft.com/pt-br/p/windows-terminal/9n0dx20hk701)


### Mudando font no Windows Terminal
Agora com seu Windows Terminal aberto mudaremos as fonts abrindo as configurações com o atalho **(CTRL + ,)** e abrirá a seguinte tela.

<img src="/assets/windows_terminal.png">

Então iremos em "Padrões" abaixo de perfil, logo depois clicando em aparencia e localizando o titulo "Texto", abaixo em "Tipo de Fonte" selecionaremos a Hack Font.


## Instalando Oh-My-Posh & Posh-Git
Agora instalaremos o Posh-Git que permitira lidar com repositorios git em seu Power Shell, e o Oh My Posh que fará o trabalho de customizar nosso terminal.

Insira o comando:

``Install-Module oh-my-posh -Scope CurrentUser``

``Install-Module posh-git -Scope CurrentUser``

### Modificando $Profile

No seu Windows Terminal rode:

``notepad $PROFILE``

e em seguida, copie e cole as seguintes linhas no arquivo que foi aberto.

```
  Import-Module posh-git
  Import-Module oh-my-posh
  Set-PoshPrompt -Theme hotstick.minimal
```
Em "hotstick.minimal" poderá trocar por um tema de sua preferencia. Todos os temas disponiveis estão em [Themes](https://ohmyposh.dev/docs/themes) 

Feito isso, é só reiniciar todas suas janelas do Windows Terminal que estiverem abertas.


