# Sección 04: Ciclos y estructuras de control

- V031 - Introducción a la sección
- V032 - Temas puntuales de la sección
  - Estructuras de control de flujo
  - Paso de variables por valor y por referencia
  - Romper referencia de objetos
  - If y Else
  - Un poco sobre lógica booleana
  - Operadores y operadores de asignación
  - Operador condicional ternario
  - Diferentes usos del operador condicional ternario
  - Switch
  - While
  - Do While
    - For
    - For in
    - For of
  - Al final de la sección tenemos el código fuente por si lo llegan a necesitar.
- V033 - Valor, referencia y romper la referencia
  - Operador "spread" para romper la referencia del objeto
    ```js
      let persona3 = { ...persona1 };
    ```
- V034 - If y Else
  - Operadores

  | Operador | Nombre | Descripción | Ejemplo | Resultado |
  |---|---|---|---|---|
  | `&&` | AND lógico | Devuelve `true` si todas las condiciones son verdaderas | `true && true` | `true` |
  | `||` | OR lógico | Devuelve `true` si alguna condición es verdadera | `true || false` | `true` |
  | `!` | NOT lógico | Invierte el valor booleano | `!true` | `false` |
  | `??` | Nullish Coalescing | Devuelve el valor de la derecha si el de la izquierda es `null` o `undefined` | `null ?? "Hola"` | `"Hola"` |

  ## Operadores de comparación

  | Operador | Nombre | Ejemplo | Resultado |
  |---|---|---|---|
  | `==` | Igualdad | `5 == "5"` | `true` |
  | `===` | Igualdad estricta | `5 === "5"` | `false` |
  | `!=` | Desigualdad | `5 != "5"` | `false` |
  | `!==` | Desigualdad estricta | `5 !== "5"` | `true` |
  | `>` | Mayor que | `10 > 5` | `true` |
  | `<` | Menor que | `10 < 5` | `false` |
  | `>=` | Mayor o igual | `10 >= 10` | `true` |
  | `<=` | Menor o igual | `5 <= 10` | `true` |
- V035 - Laboratorio Alternativa al "if else"
  - Tarea, sin usar else if, ni swtitch, imprimir en la consola el dia de la semana usando un Objeto
- V036 - Lógica Booleana
- V037 - Pro Tip: Asignaciones con operadores
- V038 - Operador condicional ternario
- V039 - Prop tip: Otros usos del operador ternario
  - Condición ternaria normao y anidada
- V040 - Switch
- V041 - While y Do While
  - Romper con "Breack"
  - Continuar con "Continue"
  - Do While
    - Siempre se ejectua el código al menos 1 vez
- V042 - for in - for of
- V043 - Código fuente de la sección
  - [código](https://github.com/Klerith/javascript-basics/releases/tag/v0.0.3)