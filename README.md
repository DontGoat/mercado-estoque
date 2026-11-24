# Cesta Cheia Estoque - Sistema Interno

Projeto da **Situação de Aprendizagem 02** - interface de um sistema web interno para o Mercado Cesta Cheia, com tela de login, perfil do usuário e consulta de estoque com campo de pesquisa.

- **Aluno:** Pedro Henrique de Sousa Martins
- **Turma:** A1129-N-D.S.M.-312-20262

## Site publicado

https://dontgoat.github.io/mercado-estoque/

## Acesso de teste

| Campo  | Valor                  |
|--------|------------------------|
| E-mail | pedro@cestacheia.com   |
| Senha  | 123456                 |

## Páginas

- `index.html` - Tela de login com validação dos campos e mensagem de erro ou sucesso.
- `perfil.html` - Perfil do usuário com foto, dados do funcionário e formulário para atualizar telefone, turno e senha.
- `estoque.html` - Tabela de produtos em estoque com pesquisa por texto e filtro por categoria.

As páginas de perfil e estoque só abrem depois do login. O link **Sair** volta para o login e encerra a sessão.

## Protótipo

Antes da programação, as telas foram planejadas em wireframes (pasta `prototipo/`).

| Login | Perfil | Estoque |
|-------|--------|---------|
| ![Wireframe Login](prototipo/1-login.svg) | ![Wireframe Perfil](prototipo/2-perfil.svg) | ![Wireframe Estoque](prototipo/3-estoque.svg) |

## Identidade visual

- **Verde (#2e7d32):** cor principal, a mesma do site do Mercado Cesta Cheia (SA01).
- **Laranja (#ff9800):** cor de destaque para botões secundários e foco dos campos.
- **Situação do estoque:** verde para "Em estoque", laranja para "Estoque baixo" e vermelho para "Esgotado".
- **Fonte:** Arial, simples e fácil de ler em qualquer tela.

## Imagens otimizadas

| Imagem | Formato | Tamanho | Por quê |
|--------|---------|---------|---------|
| Logo e produtos | SVG | menos de 0,5 KB cada | Desenho vetorial, fica nítido em qualquer tamanho e quase não pesa. |
| Foto de perfil | WebP 240x240 | 1,9 KB | Formato moderno e leve. A imagem original em PNG 960x960 tinha 8 KB e foi reduzida para o dobro do tamanho exibido (120x120), ficando nítida em telas de alta resolução. |

Todas as imagens têm `width`, `height` e texto alternativo (`alt`).

## Usabilidade e acessibilidade

- Todo campo tem `label` ligado pelo `for`.
- Campos agrupados com `fieldset` e `legend` no perfil.
- `autocomplete` nos campos de e-mail, senha e telefone.
- Mensagens com `aria-live` para leitores de tela.
- Tabela com `caption` e `th scope="col"`.
- Destaque laranja no campo em foco.

## Responsividade

Feita com CSS puro: `flexbox`, `grid` e `@media (max-width: 600px)`. No celular o menu e os filtros ficam um embaixo do outro, e a tabela ganha rolagem horizontal.

## Estrutura de pastas

```
mercado-estoque/
├── index.html
├── perfil.html
├── estoque.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── login.js
│   ├── perfil.js
│   └── estoque.js
├── img/
│   ├── logo.svg
│   ├── avatar.webp
│   └── produtos/
│       └── (imagens dos produtos em SVG)
└── prototipo/
    ├── 1-login.svg
    ├── 2-perfil.svg
    └── 3-estoque.svg
```

## Tecnologias

- HTML5 semântico (`header`, `nav`, `main`, `section`, `form`, `fieldset`, `table`, `footer`)
- CSS3 externo (`css/style.css`)
- JavaScript (validação dos formulários, sessão de login e pesquisa na tabela)
