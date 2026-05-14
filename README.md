# 🚀 Front-End-Design-Engineering - TDS

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