<<<<<<< HEAD
🚀 Front-End-Design-Engineering - TDS
=======
# 🚀 Front-End-Design-Engineering - TDS
>>>>>>> main

Este repositório centraliza os projetos e materiais de estudo da turma de Front-End. O foco é o desenvolvimento de interfaces modernas, acessíveis e performáticas, utilizando as melhores práticas do mercado.

## 📍 Roadmap de Aprendizado

Abaixo está o cronograma de competências da nossa jornada:

### ✅ Concluído (Fundamentos)
- **Versionamento:** Git e GitHub (Fluxo de trabalho e commits).
- **Estrutura:** HTML5 e Semântica voltada para SEO.
- **Estilização Base:** CSS3 (Inline, Interno e Externo).
- **Seleção e Reset:** Seletores genéricos e específicos, Reset CSS básico.
- **Tipografia:** Gerenciamento de fontes e unidades relativas (`rem`, `em`).
- **Configuração Global:** Variáveis CSS com `:root`.
- **Efeitos Visuais:** Overlays, Gradientes e Backgrounds avançados.

### 🚧 Em Andamento (Layout e Responsividade)
- [ ] **Flexbox:** Alinhamento dinâmico e distribuição de espaço.
- [ ] **CSS Grid Layout:** Estruturas de malhas bidimensionais complexas.
- [ ] **Responsividade:** Uso de `@media-queries` para adaptação de dispositivos.

### 🔮 Próximos Passos (Design e Lógica)
- [ ] **Figma:** Prototipagem e Design System.
- [ ] **JavaScript:** Lógica de programação e manipulação do DOM.
- [ ] **TypeScript:** Tipagem estática e escalabilidade no Front-End.

---

## 🛠️ Tecnologias Utilizadas
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

---

## 👨‍🏫 Instrutor
**Prof. Alexandre C. de Jesus**
*Front-End-Design-Engineering*

# 🚀 Atividade Prática: Refatoração e Responsividade

Este repositório contém as instruções e materiais para a evolução do nosso projeto de interface. O foco desta etapa é a consolidação de layouts modernos e a adaptabilidade para diferentes dispositivos.
<<<<<<< HEAD

## 🎯 Desafio para a Próxima Aula

A entrega principal consiste em finalizar a estrutura visual das seções que restam no elemento `<main>`. Para isso, é mandatório o uso combinado de **CSS Grid Layout** para a estrutura macro e **Flexbox** para o alinhamento dos componentes internos.

---

## 📝 Lista de Exercícios

### 1. Refatoração de Estrutura
- **Objetivo:** Padronizar a arquitetura das páginas secundárias.
- **Ação:** Refatore todas as páginas do projeto para que sigam fielmente a hierarquia de tags e a organização semântica estabelecida na `index.html`.

### 2. Implementação de Media Queries
- **Objetivo:** Tornar o projeto totalmente responsivo.
- **Ação:** Aplicar breakpoints específicos para garantir a integridade do layout em três faixas de resolução:
  - 📱 **Mobile:** de `320px` até `768px`.
  - 💻 **Tablet/Laptop:** de `769px` até `1024px`.
  - 🖥️ **Desktop:** Acima de `1024px`.

### 3. Otimização de CSS (Best Practices)
- **Objetivo:** Limpeza de código e modernização técnica.
- **Ação:** Revisar todo o arquivo CSS eliminando propriedades obsoletas (como floats para layout ou posicionamentos fixos desnecessários). Substitua por **Flexbox** e **Grid**, priorizando a manutenibilidade e o desempenho.

---

## 📚 Referências Técnicas

Para auxiliar no desenvolvimento, utilize a documentação oficial da MDN:

*   [Estrutura de Elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
*   [Guia de CSS Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Grid)
*   [Guia de CSS Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Flex_box)
*   [Uso de Media Queries](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries)
*   [Referência JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
*   [Objeto Math no JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

> **Dica do Prof:** Lembrem-se de que a consistência visual é a chave para uma boa experiência de usuário (UX). Testem as resoluções utilizando o *Inspector* do navegador.

Box Model
=======
---

## 🎯 Desafio para a Próxima Aula
# Exercícios de Refatoração e Navegação — Projeto Esporte Total

## Objetivo
Praticar a organização de diretórios, manipulação de caminhos relativos (paths) e personalização de conteúdo temático em HTML e CSS.

---

### 📝 Lista de Exercícios

#### 1. Organização de Estrutura
Crie uma pasta chamada `/paginas` na raiz do seu projeto. Dentro dela, crie três novos arquivos HTML:
* `basquete.html`
* `futebol.html`
* `volei.html`

#### 2. Migração e Herança de Estilo
Copie todo o conteúdo do arquivo `index.html` para cada um dos novos arquivos criados. 
> **Atenção:** Como os arquivos agora estão dentro de uma subpasta, você precisará ajustar o caminho dos links do CSS e do JS. 
> *Exemplo:* De `<link href="css/style.css">` para `<link href="../css/style.css">`.

#### 3. Ajuste de Navegação (Menu)
Refatore o menu de navegação em **todas** as páginas (incluindo a `index.html`):
* O link "Home" deve apontar para `../index.html` (nas subpáginas) e para `index.html` (na home).
* Os links de **Basquete**, **Futebol** e **Vôlei** devem levar aos seus respectivos arquivos dentro da pasta `/paginas`.

#### 4. Personalização do Hero Section
Para cada página de esporte, altere o conteúdo da seção `Hero`:
* **Texto:** Atualize o título (`<h1>`) e a descrição para o esporte correspondente.
* **Imagem de Fundo:** No CSS, altere a `background-image` do Hero utilizando as imagens existentes na sua pasta `/img`.

#### 5. Desafio Visual: Efeito Sonar
Aplique o efeito de pulsação (Sonar) que estudamos usando `outline` e `@keyframes` nos botões de ação ou campos de entrada de cada página. 
* **Dica:** Tente usar cores que combinem com o esporte (ex: Laranja para Basquete, Verde para Futebol).

---

### 💡 Dica de Professor
Fique atento aos **caminhos relativos**. O uso do `../` é essencial para "subir" um nível na pasta e encontrar os diretórios de CSS, JS e Imagens a partir da pasta `/paginas`.
>>>>>>> main
