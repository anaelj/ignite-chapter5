 yarn add json-server -D

  "scripts": {
    "server": "json-server -d 750 -w -p 3333 ./src/server.js"
  },

  yarn add faker // para gerar dados aleatórios "mock"

  - react devTools
    - Components and Profiler

  - Memo
    - Usar para componentes puros (componentes que abstraem visual), dados os mesmo parâmetros sempre retornam mesmo resultado.
    - Usar em componentes que são renderezados muitas vezes, com frequência
    - Usar quando renderizar varias vezes com as mesmas props
    - Usar quando o componente for muito grande

  - useMemo
    - Usado para evitar que processamento pesado seja refeito na renderização do componente
    - Cálculos pesados
    - Quando a variável por repassada para um componente filho
  
  - useCallback
    - Quando a função é repassada para os componentes filhos

  - Formatação de dados
    - 
