# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 09 - Módulo 02

### M2S09 | Roteiro Projeto: Portal Educational - parte 3

E ai. futuro dev's?? Acharam que o projeto do portal educational iria acabar né? Mas não, ainda iremos utilizar ele para essa semana. Nesta semana, iremos dar um foco maior na organização e estilização do seu projeto. Para isso, utilize o conhecimento visto durante essa semana para aplicar no projeto criado na semana 07 e 08.

‌Bom código e bebam água ^-^ !!

### M2S09 | Ex. 01 - Modularização

Crie uma estrutura dos componentes compartilhados da aplicação:

Na pasta shared, crie um módulo de mesmo nome. Após isso, altere os metadados do módulo shared para importar e exportar todos os componentes das subpastas de shared.

### M2S09 | Ex. 02 - Organização

Para agrupar mais ainda nossos módulos, crie uma pasta para receber todos os componentes de páginas do projeto com o nome de **‘pages’**. Não se esqueça de corrigir os importes. Faça o mesmo com a pasta de shared, ela deve ficar dentro da pasta de app.

### M2S09 | Ex. 03 - Pré-processadores com SCSS

Agora, vamos migrar nosso projeto para utilizar o pré-processador SASS - SCSS. Siga o seguinte passo a passo:

- Instale a biblioteca schematics-scss-migrate (**npm i --save-dev schematics-scss-migrate**);
- Execute a migração da biblioteca, através do comando **ng g schematics-scss-migrate:scss-migrate;**
- A mudança deve ser feita do CSS para SCSS;
- Execute a aplicação localmente para visualizar se as alterações foram realizadas com sucesso (realize ajustes pontuais se necessário);
- Caso já esteja utilizando SCSS verifique em seus arquivos de estilização se você está utilizando o alinhamento e nested selectors corretamente, caso não, converta para fazer o uso correto.

### M2S09 | Ex. 04 - Responsividade

Utilizando o media query, os 3 breakpoints principais de visualização (480px, 768px e 1024px) e o conceito de mobile first, vamos deixar a **home** (tela inicial) da nossa aplicação responsivo para:

- Dispositivos de até 480px;
- Dispositivos de 480px até 768px;
- Dispositivos de 768px até 1024px;
- Dispositivos a partir de 1024px.

### M2S09 | Ex. 05 - Uso de Lib externa

Para estilizar mais o seu projeto, vamos instalar e importar a biblioteca do angular material no projeto. Faça as modificações necessárias no projeto para utilizar a biblioteca sem problema nenhum no projeto.

### M2S09 | Ex. 06 - Angular material, parte 1

Modifique toda a página de login a fim de usar os componentes de input, botão, card, diolog (para o modal de reset de senha) e qualquer outro que julgue necessário.

### M2S09 | Ex. 07 - Angular material, parte 2

Na tela de início, troque no **mínimo** 3 elementos visuais para receber qualquer componente do angular material.