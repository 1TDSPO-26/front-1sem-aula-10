// Tipos de dados
// string  — Textos e caracteres  →  "texto"  ou  'texto'  ou  `template`
// number  — Inteiros e decimais (um só tipo)  →  42  /  3.14  /  -7
// boolean  — Verdadeiro ou falso  →  true  /  false
// null  — Ausência intencional de valor  →  null
// undefined  — Variável declarada sem valor  →  undefined
// object  — Coleções e estruturas complexas  →  { nome: 'Ana' }  /  [1, 2, 3]

// typeof revela o tipo de qualquer valor:
typeof "olá"       // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof null        // "object"  ← bug histórico do JS!
typeof undefined   // "undefined"
typeof {}          // "object"

