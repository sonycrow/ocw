const e=`# Introducción\r
Bienvenido a **Open Card Wars**, un juego de cartas estratégico para 2 jugadores. En este juego, cada jugador controlará un equipo de personajes únicos con habilidades especiales, compitiendo para reducir los puntos de vida del oponente a cero. Combina estrategia, planificación y un poco de azar para derrotar a tu adversario.\r
\r
# El juego\r
\r
## Objetivo\r
Ser el primer jugador en reducir los 40 puntos de vida del oponente a 0.\r
\r
## Componentes\r
- **Cartas de personajes**: Representan a los personajes que controlan los jugadores, cada uno con atributos y habilidades únicas.\r
- **Cartas de equipo**: Mejoran o modifican las habilidades y atributos de los personajes.\r
- **Dados de mana**: Cada jugador necesita 8 dados de 6 caras para activar habilidades y personajes.\r
- **Marcadores de daño**: Fichas o contadores para indicar el daño recibido por los personajes.\r
- **Marcadores de estado**: Fichas o contadores para indicar estados como \`STUN\`, \`POISON\`, \`SHIELD\`, etc.\r
- **Tablero de campo de batalla**: Una rejilla de 3x3 para cada jugador, representando su campo de batalla.\r
- **Contadores de vida**: Para llevar la cuenta de los puntos de vida de cada jugador.\r
\r
## Preparación del juego\r
1. Selección de personajes:\r
   - Cada jugador elige un equipo de 5 personajes.\r
   - No se puede tener más de 2 personajes de la misma clase: \`ASESINO\`, \`MAGO\`, \`TIRADOR\`, \`DEFENSOR\`, \`LUCHADOR\` y \`SOPORTE\`.\r
2. Configuración del campo de batalla:\r
   - Cada jugador dispone de un campo de batalla propio, una rejilla de 3x3 posiciones.\r
   - Los personajes se despliegan en este campo y solo pueden ocupar posiciones dentro del mismo.\r
   - Las posiciones se dividen en:\r
     - **Vanguardia**: Fila frontal.\r
     - **Centro**: Fila central.\r
     - **Retaguardia**: Fila trasera.\r
3. Despliegue inicial:\r
   - Los jugadores despliegan sus 5 personajes en las posiciones deseadas de su campo de batalla antes de comenzar la partida.\r
   - Solo se puede desplegar un personaje por posición.\r
4. Determinación de la iniciativa:\r
   - Se decide al azar quién tendrá la iniciativa al comienzo del juego (por ejemplo, lanzando una moneda o tirando un dado).\r
   - El jugador con la iniciativa será el primero en tomar su turno.\r
\r
# Estructura del turno\r
El juego se desarrolla por turnos alternos. En cada turno, el jugador con la iniciativa (jugador activo) realiza las siguientes fases:\r
1. Fase de Mantenimiento\r
2. Fase de Mana\r
3. Fase de Despliegue\r
4. Fase de Activación y Combate\r
5. Fase Final\r
\r
## 1. Fase de mantenimiento\r
- **Actualización de efectos**:\r
  - Retira **marcadores de estado** que deban ser eliminados en esta fase (por ejemplo, reducir contadores de \`POISON\`).\r
  - Revisa habilidades que se activen o terminen en esta fase.\r
- **Retiro de personajes derrotados**:\r
  - Retira del campo de batalla los personajes que tengan 0 o menos puntos de vida.\r
- **Conservación de dados de mana**:\r
  - Los dados de mana no utilizados se mantienen para el siguiente turno del jugador activo.\r
\r
## 2. Fase de mana\r
- **Lanzamiento de dados de mana**:\r
  - El jugador activo lanza dados de mana hasta tener un total de dados igual a la ronda actual, con un máximo de 8 dados.\r
  - Si el jugador tiene dados de mana no utilizados de turnos anteriores, estos deben de ser incluidos hasta alcanzar el total correspondiente.\r
  > **Ejemplo**: En la ronda 3, el jugador lanzará dados hasta tener 3 dados de mana.\r
- **Gestión de dados de mana**:\r
  - Durante esta fase, el jugador puede **combinar** dados para obtener valores más altos.\r
    - **Combinación de dados**:\r
      - Se pueden sumar los valores de dos o más dados para formar un dado de mayor valor (máximo valor de 6).\r
      - Los dados utilizados en la combinación se descartan.\r
   > **Ejemplo**: Combinar un dado de 2 y uno de 4 para obtener un dado de valor 6, asigna el 6 a uno de los dados y descarta el otro.\r
\r
## 3. Fase de despliegue\r
- **Despliegue de Cartas**:\r
  - El jugador puede **desplegar personajes o equipo** desde su mano al campo de batalla.\r
  - **Coste de despliegue**:\r
    - Cada carta tiene un **coste de dados de mana** indicado.\r
    - Para desplegar una carta, asigna dados de mana hasta alcanzar el coste de despliegue. No se tiene en cuenta el valor de los dados.\r
  - **Reglas de despliegue**:\r
    - Los personajes se despliegan en posiciones vacías del campo de batalla.\r
    - No se puede tener más de un personaje en la misma posición.\r
> **Ejemplo**: Si deseas desplegar un personaje con un coste de 3, debes gastar 3 dados de cualquier valor para desplegar al personaje en una posición vacía de tu campo de batalla.\r
\r
## 4. Fase de activación y combate\r
### Asignación de dados a personajes\r
- **Límite de dados por personaje**:\r
  - Solo se puede asignar un dado a cada personaje por turno.\r
- **Activación de personajes**:\r
  - Al asignar un dado a un personaje, este puede:\r
    - Activar una de sus habilidades.\r
    - Realizar una acción adicional: **Atacar** o **Mover**.\r
\r
### Activación de habilidades\r
- **Coste de habilidad**:\r
  - Cada habilidad tiene un **coste de mana** especificado.\r
  - Bonificación por posición:\r
    - Si el personaje está en la **posición correspondiente** a la habilidad (vanguardia, centro o retaguardia), el **coste de mana se reduce en 1**.\r
- **Uso de dados de mana**:\r
  - Asigna un dado cuyo valor sea **igual o mayor** al coste de la habilidad (aplicando la bonificación si corresponde).\r
  - Si el personaje está en la posición correspondiente y tiene bonificación de -1, el coste es "2+".\r
> **Ejemplo**: Una habilidad con coste "3+" puede ser activada con un dado de valor 3 o superior.\r
\r
### Acciones adicionales\r
- Al asignar un dado a un personaje, además de activar una habilidad, puede realizar **una acción**:\r
  - **Atacar**:\r
    - El personaje puede realizar un ataque básico.\r
    - **Objetivo del ataque**:\r
      - Ataca al **primer enemigo en su línea**.\r
      - Si no hay enemigos en su línea, el ataque se dirige al **jugador oponente**, quien pierde puntos de vida igual al **ATK** del personaje.\r
    - **Cálculo de daño**:\r
      - **Daño Infligido** = **ATK del atacante** - **DEF del defensor**\r
      - Si el resultado es negativo, el daño es 0.\r
  - **Mover**:\r
    - El personaje puede moverse a una posición vacía en el campo de batalla.\r
\r
#### Ejemplo de activación y combate\r
- **Asignación de dado**:\r
  - Asignas un dado de 4 a tu personaje **Ashra**.\r
- **Activación de habilidad**:\r
  - **Ashra** tiene una habilidad de **Vanguardia** con coste "2+".\r
  - **Ashra** está en **Vanguardia**, por lo que el coste se reduce a "1+".\r
  - Con el dado de 4, puedes activar la habilidad.\r
  - **Efecto**: **Ashra** gana +2 ATK hasta el final del turno.\r
- **Acción**:\r
  - **Ashra** realiza un **ataque** al primer enemigo en su línea.\r
  - **Cálculo de daño**:\r
    - ATK de **Ashra** (4 + 2 bonus) = 6\r
    - DEF del enemigo = 3\r
    - **Daño Infligido**: 6 - 3 = 3\r
\r
## 5. Fase Final\r
- **Activación de efectos de fase final**:\r
  - Resuelve habilidades o efectos que se activen en esta fase.\r
- **Fin del turno**:\r
  - La iniciativa pasa al **otro jugador**, quien comienza su turno desde la **Fase de mantenimiento**.\r
\r
# Uso de mana en turno del oponente\r
En **Open Card Wars** es posible interactuar en el turno del oponente.\r
\r
## Conservación de dados de mana\r
  - Los dados de mana no utilizados se pueden guardar para activar habilidades durante el turno del oponente.\r
## Activación de habilidades\r
  - Puedes activar habilidades que tengan la palabra clave \`FLASH\` o que especifiquen que pueden ser usadas en el turno del oponente. Juega y resuelve las habilidades de forma normal, como si fuera tu turno.\r
## Prioridad de habilidades y resolución de conflictos\r
  - Las habilidades con \`FLASH\` tienen **prioridad** sobre las habilidades sin \`FLASH\`.\r
  - Si ambos jugadores activan habilidades con \`FLASH\` simultáneamente, se resuelven en el orden en que fueron declaradas.\r
\r
> **Ejemplo**: **Alex** ataca con un personaje. **Carla** decide activar una habilidad con \`FLASH\` que otorga \`SHIELD 1\` a su personaje. La habilidad de **Carla** se resuelve primero, y el \`SHIELD\` bloquea el siguiente ataque del personaje de **Alex**.\r
\r
# Detalles adicionales\r
\r
## Atributos de los personajes\r
\r
* **Ataque (ATK)**: Indica el daño que el personaje puede infligir.\r
* **Defensa (DEF)**: Reduce el daño recibido.\r
* **Vida (HP)**: Puntos de vida del personaje. Si llegan a 0, el personaje es derrotado.\r
\r
## Estados y marcadores\r
\r
### Estados comunes\r
  * \`STUN\`: El personaje no puede realizar acciones ni activar habilidades hasta el final de su siguiente turno.\r
  * \`POISON X\`: El personaje pierde X puntos de vida al inicio de su turno durante X turnos.\r
  * \`SHIELD X\`: Bloquea completamente el daño de X ataques.\r
\r
### Uso de marcadores\r
  * Coloca marcadores en los personajes para indicar estados y efectos temporales.\r
  * Actualiza o retira marcadores en la **Fase de mantenimiento**.\r
\r
### Ejemplos de estados\r
\r
* \`STUN\`:\r
  * Si un personaje recibe \`STUN\`, coloca un marcador de aturdimiento.\r
  * **Efecto**: No puede actuar hasta que se retire el marcador en su siguiente Fase de Mantenimiento.\r
* \`POISON 2\`:\r
  * El personaje pierde 2 HP al inicio de su turno, que irán reduciéndose durante 2 turnos.\r
  * Coloca 2 marcadores de veneno y retira uno en cada **Fase de mantenimiento**.\r
\r
# Condiciones de victoria\r
\r
* El juego termina cuando un jugador reduce los **puntos de vida del oponente a 0** o menos.\r
* El jugador que logra esto es declarado el **ganador**.\r
\r
# Consejos y estrategias\r
\r
* **Gestión de mana**:\r
  * Planifica cómo asignar tus dados de mana.\r
  * Considera guardar dados para activar habilidades durante el turno del oponente.\r
* **Posicionamiento**:\r
  * Mover tus personajes estratégicamente puede darte ventajas, como reducir el coste de habilidades.\r
* **Activación de habilidades**:\r
  * Prioriza activar habilidades que puedan cambiar el curso del juego.\r
  * Usa habilidades con \`FLASH\` para sorprender al oponente.\r
\r
# Resumen de pasos en un turno\r
\r
1. **Fase de mantenimiento**:\r
   * Actualiza y retira marcadores de estado.\r
   * Retira personajes derrotados.\r
2. **Fase de mana**:\r
   * Lanza dados de mana hasta tener tantos como la ronda actual (máximo 8).\r
   * Combina dados si lo deseas.\r
3. **Fase de despliegue**:\r
   * Despliega personajes, artefactos o armas pagando su coste.\r
4. **Fase de activación y combate**:\r
   * Asigna dados a personajes (un dado por personaje).\r
   * Activa habilidades y realiza acciones adicionales, como atacar.\r
5. **Fase final**:\r
   * Resuelve efectos de fase final.\r
   * La iniciativa pasa al otro jugador.\r
\r
# Ejemplo de turno completo\r
\r
**Supongamos que es la Ronda 3 y eres el jugador con la iniciativa.**\r
\r
## 1. Fase de mantenimiento\r
\r
* **Retiras** un marcador de \`POISON\` de tu personaje **Zeph**.\r
* **Zeph** pierde 1 HP por el efecto de \`POISON\`.\r
\r
## 2. Fase de mana\r
\r
* **Dados de mana**:\r
  * Como es la Ronda 3, debes tener 3 dados de mana.\r
  * Tienes 1 dado guardado del turno anterior.\r
  * Lanzas 2 dados adicionales para tener un total de 3.\r
* **Resultados de dados**:\r
  * Dados: 2, 2, 4.\r
* **Combinas** el dado de 2 y 4 para obtener un dado de valor 6.\r
\r
## 3. Fase de despliegue\r
\r
* **Decides desplegar** un personaje de coste 1.\r
* **Asignas** el dado de valor 2 para pagar el coste.\r
* El personaje **Rhyse** se coloca en juego, en la **Retaguardia**.\r
\r
## 4. Fase de activación y combate\r
\r
* **Dados disponibles**:\r
  * Te queda un dado de valor 6.\r
* **Asignas** el dado de 6 a tu personaje **Rhyse**.\r
* **Activación de habilidad**:\r
  * **Rhyse** tiene una habilidad de **Retaguardia** con coste "5+".\r
  * **Rhyse** está en **Retaguardia**, por lo que el coste se reduce a "4+".\r
  * Dado de 6 cumple el coste.\r
  * **Efecto**: **Rhyse** invoca un portal y puede \`MOVE\` a un personaje adyacente.\r
  * Mueves a **Ashra** a una posición más segura.\r
* **Acción**:\r
  * **Rhyse** realiza un **ataque** al enemigo en su línea.\r
  * **Cálculo de Daño**:\r
    * ATK de **Rhyse**: 4\r
    * DEF del enemigo: 1\r
    * **Daño Infligido**: 4 - 1 = 3\r
  * El enemigo reduce su HP en 3.\r
\r
## 5. Fase final\r
\r
* No hay efectos adicionales.\r
* La iniciativa pasa al otro jugador.\r
\r
# Glosario de términos\r
\r
## Estadísticas\r
\r
* **Ataque**:\r
* **Defensa**:\r
* **Coste**: Número de dados de despliegue\r
* **HP**: Puntos de vida\r
\r
## Habilidades\r
\r
* \`AVANZAR X\`: Avanza en tu misma línea tantos espacios como indique X.\r
* \`ESCUDO X\`: Bloquea completamente el daño de X ataques básicos y/o de habilidades. No bloquea ataques \`IMPARABLE\`.\r
* \`PRISIÓN\`: El objetivo con \`PRISIÓN\` no puede realizar ataques ni cambiar de ubicación, pero sí puede activar habilidades.\r
* \`MOVER\`: Permite mover a cualquier posición válida del campo de batalla a un objetivo.\r
* \`CURAR X\`: Recupera X puntos de vida de un objetivo.\r
* \`DOBLE DAÑO\`: Cuando realiza un ataque, si este causa daño hará el doble de ese daño.\r
* \`TRIPLE DAÑO\`: Cuando realiza un ataque, si este causa daño hará el triple de ese daño.\r
* \`DOBLE ATAQUE\`: Realiza 2 ataques completos, resolviendo toda la fase de combate 2 veces. Los ataques pueden realizarse a cualquier objetivo válido.\r
* \`TRIPLE ATAQUE\`: Realiza 3 ataques completos, resolviendo toda la fase de combate 3 veces. Los ataques pueden realizarse a cualquier objetivo válido.\r
* \`ESQUIVA\`: Esquiva el daño recibido de ataques básicos.\r
* \`DEFINITIVA\`: Es la habilidad más poderosa de un personaje.\r
* \`ALCANCE\`: \`ALCANCE\` permite atacar a cualquier objetivo de su misma línea.\r
* \`DESTELLO\`: Una habilidad con \`DESTELLO\` puede activarse en cualquier momento, incluso en el turno del contrario.\r
* \`CONTRAATAQUE\`: Cuando un objetivo con \`CONTRAATAQUE\` es atacado, este realiza inmediatamente un ataque, aunque no sea su turno.\r
* \`IMPARABLE\`: Un ataque \`IMPARABLE\` no puede ser bloqueado ni reducido.\r
* \`INVULNERABLE\`: Un personaje \`INVULNERABLE\` no puede ser objetivo de ataque ni habilidades de ningún tipo.\r
* \`ATURDIR\`: Un objetivo con \`ATURDIR\` no puede realizar ninguna acción hasta su siguiente turno.\r
* \`PRISA\`: La habilidad \`PRISA\` permite a quien la tiene atacar el mismo turno en el que entra en juego.\r
* \`INDESTRUCTIBLE\`: No puede reducir su valor de vida a menos de 1 durante ese turno.\r
* \`PROVOCAR\`: Las unidades atacantes están obligadas a atacar a la unidad con \`PROVOCAR\` aunque no esté en su misma línea. Si hay varias unidades con \`PROVOCAR\`, el atacante decide a quién atacar.\r
* \`ARROLLAR\`: Cuando una unidad con \`ARROLLAR\` realiza un ataque, el daño sobrante de ese ataque pasa al siguiente objetivo válido de su misma línea.\r
* \`REGENERACIÓN\`: Una unidad con \`REGENERACIÓN\` recupera todos los puntos de casco perdidos al final del turno.\r
* \`REDIRECCIÓN\`: Redirige todo el daño que reciba esa unidad a otra de su mismo equipo.\r
* \`REFLEJO\`: Cuando una unidad con \`REFLEJO\` es atacada, la unidad atacante recibe la misma cantidad de daño.\r
* \`VENENO X\`: Añade X contadores de \`VENENO X\`. Al principio del turno del jugador, el personaje con \`VENENO X\` pierde tantos puntos de vida como contadores tenga. Cada turno, durante la fase de mantenimiento, retira un contador de \`VENENO X\`.\r
* \`SILENCIO\`: Un personaje con \`SILENCIO\` no puede activar habilidades. Tampoco su \`DEFINITIVA\`.\r
\r
# Notas finales\r
\r
Este juego combina estrategia y planificación. La gestión efectiva de tus recursos y el aprovechamiento de las habilidades de tus personajes serán clave para obtener la victoria. Recuerda adaptarte a las circunstancias y anticiparte a las jugadas de tu oponente.\r
\r
¡Prepárate para la batalla y disfruta del juego!\r
\r
**¡Que comience la partida!**`;export{e as default};
