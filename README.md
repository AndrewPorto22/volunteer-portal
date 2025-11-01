# 🚀 Volunteer Portal - Plataforma de Voluntariado
> **Projeto Concluído:** Experiência Prática I, II, III e IV
> **Desenvolvedor:** Andrew Porto da Costa

## I. Arquitetura e Visão Geral (Compliance)

Este projeto simula uma aplicação moderna (SPA - Single Page Application) completa. Todo o código foi construído sob uma arquitetura de Design System, cumprindo rigorosamente os requisitos de acessibilidade e de processo:

* **Validação W3C:** O HTML está validado e livre de erros ou avisos (Requisito da Entrega I).
* **Acessibilidade WCAG AA:** O tema, formulários e componentes foram testados para contraste mínimo de 4.5:1.
* **Fluxo de Trabalho:** O projeto utilizou o GitFlow (branch principal `develop`) com *Pull Requests* e *Commits Semânticos* para documentar o processo de desenvolvimento (Requisito da Entrega IV).

## II. Features e Soluções de Engenharia

### 1. Roteamento e Estrutura (Entrega III - SPA)
* **SPA Funcional:** Implementado roteamento baseado no evento `window.onhashchange` (JavaScript puro), substituindo a navegação tradicional de múltiplas páginas (MPA).
* **Correção Crítica:** O *timing* de inicialização foi centralizado no `DOMContentLoaded` para garantir que os *listeners* funcionem mesmo com o carregamento assíncrono.

### 2. Design System e Tema (Entrega II & IV)
* **Design System Completo:** Uso exclusivo de Variáveis CSS (`:root`) para cores, tipografia e espaçamento, conforme solicitado.
* **Theming Desacoplado:** O tema usa a **Arquitetura Desacoplada** para o Dark Mode (V9), separando as variáveis do `Header` (`--cor-tema-*`) e do `Botão` (`--cor-botao-*`), garantindo que o contraste WCAG 4.5:1 seja mantido no botão, mesmo quando o `header` usa um azul mais escuro (sóbrio).

### 3. Formulários e Componentes (Entrega I & II)
* **Formulário Completo:** Validação JavaScript para 100% dos campos obrigatórios.
* **Máscaras em Tempo Real:** Implementadas máscaras para CPF, CEP e Telefone usando Vanilla JS (`slice()` e `replace()`).
* **Componente Modal:** Implementado modal de sucesso (feedback) com lógica de *auto-esconder* e botão de fecho manual (cumprindo o requisito de Componentes de Feedback).
* **Layout:** Layout responsivo implementado com **CSS Grid** (`.impact-cards`) e **5 Breakpoints** funcionais (`@media ...`).

## III. Instruções para o Revisor

1.  **Clone o repositório:** `git clone ...`
2.  **Execute:** Abra o arquivo `index.html` no seu navegador (Chrome/Firefox).
3.  **Teste o Dark Mode:** O botão 🌙 no canto superior esquerdo alterna o tema (que usa a paleta de cores acessível do Dark Mode).

***
*Entrega elaborada por Andrew Porto da Costa (01/11/2025).*