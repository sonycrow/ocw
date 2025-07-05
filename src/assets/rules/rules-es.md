# Introducción
Bienvenido a **Open Card Wars**, un juego de cartas estratégico para 2 jugadores. En este juego, cada jugador controlará un equipo de personajes únicos con habilidades especiales, compitiendo para reducir los puntos de vida del oponente a cero. Combina estrategia, planificación y un poco de azar para derrotar a tu adversario.

# El juego

## Objetivo
Ser el primer jugador en reducir los 40 puntos de vida del oponente a 0.

## Componentes
- **Cartas de personajes**: Representan a los personajes que controlan los jugadores, cada uno con atributos y habilidades únicas.
- **Cartas de equipo**: Mejoran o modifican las habilidades y atributos de los personajes.
- **Dados de mana**: Cada jugador necesita 8 dados de 6 caras para activar habilidades y personajes.
- **Marcadores de daño**: Fichas o contadores para indicar el daño recibido por los personajes.
- **Marcadores de estado**: Fichas o contadores para indicar estados como `STUN`, `POISON`, `SHIELD`, etc.
- **Tablero de campo de batalla**: Una rejilla de 3x3 para cada jugador, representando su campo de batalla.
- **Contadores de vida**: Para llevar la cuenta de los puntos de vida de cada jugador.

## Preparación del juego
1. Selección de personajes:
   - Cada jugador elige un equipo de 5 personajes.
   - No se puede tener más de 2 personajes de la misma clase: `ASESINO`, `MAGO`, `TIRADOR`, `DEFENSOR`, `LUCHADOR` y `SOPORTE`.
2. Configuración del campo de batalla:
   - Cada jugador dispone de un campo de batalla propio, una rejilla de 3x3 posiciones.
   - Los personajes se despliegan en este campo y solo pueden ocupar posiciones dentro del mismo.
   - Las posiciones se dividen en:
     - **Vanguardia**: Fila frontal.
     - **Centro**: Fila central.
     - **Retaguardia**: Fila trasera.
3. Despliegue inicial:
   - Los jugadores despliegan sus 5 personajes en las posiciones deseadas de su campo de batalla antes de comenzar la partida.
   - Solo se puede desplegar un personaje por posición.
4. Determinación de la iniciativa:
   - Se decide al azar quién tendrá la iniciativa al comienzo del juego (por ejemplo, lanzando una moneda o tirando un dado).
   - El jugador con la iniciativa será el primero en tomar su turno.

# Estructura del turno
El juego se desarrolla por turnos alternos. En cada turno, el jugador con la iniciativa (jugador activo) realiza las siguientes fases:
1. Fase de Mantenimiento
2. Fase de Mana
3. Fase de Despliegue
4. Fase de Activación y Combate
5. Fase Final

## 1. Fase de mantenimiento
- **Actualización de efectos**:
  - Retira **marcadores de estado** que deban ser eliminados en esta fase (por ejemplo, reducir contadores de `POISON`).
  - Revisa habilidades que se activen o terminen en esta fase.
- **Retiro de personajes derrotados**:
  - Retira del campo de batalla los personajes que tengan 0 o menos puntos de vida.
- **Conservación de dados de mana**:
  - Los dados de mana no utilizados se mantienen para el siguiente turno del jugador activo.

## 2. Fase de mana
- **Lanzamiento de dados de mana**:
  - El jugador activo lanza dados de mana hasta tener un total de dados igual a la ronda actual, con un máximo de 8 dados.
  - Si el jugador tiene dados de mana no utilizados de turnos anteriores, estos deben de ser incluidos hasta alcanzar el total correspondiente.
  > **Ejemplo**: En la ronda 3, el jugador lanzará dados hasta tener 3 dados de mana.
- **Gestión de dados de mana**:
  - Durante esta fase, el jugador puede **combinar** dados para obtener valores más altos.
    - **Combinación de dados**:
      - Se pueden sumar los valores de dos o más dados para formar un dado de mayor valor (máximo valor de 6).
      - Los dados utilizados en la combinación se descartan.
   > **Ejemplo**: Combinar un dado de 2 y uno de 4 para obtener un dado de valor 6, asigna el 6 a uno de los dados y descarta el otro.

## 3. Fase de despliegue
- **Despliegue de Cartas**:
  - El jugador puede **desplegar personajes o equipo** desde su mano al campo de batalla.
  - **Coste de despliegue**:
    - Cada carta tiene un **coste de dados de mana** indicado.
    - Para desplegar una carta, asigna dados de mana hasta alcanzar el coste de despliegue. No se tiene en cuenta el valor de los dados.
  - **Reglas de despliegue**:
    - Los personajes se despliegan en posiciones vacías del campo de batalla.
    - No se puede tener más de un personaje en la misma posición.
> **Ejemplo**: Si deseas desplegar un personaje con un coste de 3, debes gastar 3 dados de cualquier valor para desplegar al personaje en una posición vacía de tu campo de batalla.

## 4. Fase de activación y combate
### Asignación de dados a personajes
- **Límite de dados por personaje**:
  - Solo se puede asignar un dado a cada personaje por turno.
- **Activación de personajes**:
  - Al asignar un dado a un personaje, este puede:
    - Activar una de sus habilidades.
    - Realizar una acción adicional: **Atacar** o **Mover**.

### Activación de habilidades
- **Coste de habilidad**:
  - Cada habilidad tiene un **coste de mana** especificado.
  - Bonificación por posición:
    - Si el personaje está en la **posición correspondiente** a la habilidad (vanguardia, centro o retaguardia), el **coste de mana se reduce en 1**.
- **Uso de dados de mana**:
  - Asigna un dado cuyo valor sea **igual o mayor** al coste de la habilidad (aplicando la bonificación si corresponde).
  - Si el personaje está en la posición correspondiente y tiene bonificación de -1, el coste es "2+".
> **Ejemplo**: Una habilidad con coste "3+" puede ser activada con un dado de valor 3 o superior.

### Acciones adicionales
- Al asignar un dado a un personaje, además de activar una habilidad, puede realizar **una acción**:
  - **Atacar**:
    - El personaje puede realizar un ataque básico.
    - **Objetivo del ataque**:
      - Ataca al **primer enemigo en su línea**.
      - Si no hay enemigos en su línea, el ataque se dirige al **jugador oponente**, quien pierde puntos de vida igual al **ATK** del personaje.
    - **Cálculo de daño**:
      - **Daño Infligido** = **ATK del atacante** - **DEF del defensor**
      - Si el resultado es negativo, el daño es 0.
  - **Mover**:
    - El personaje puede moverse a una posición vacía en el campo de batalla.

#### Ejemplo de activación y combate
- **Asignación de dado**:
  - Asignas un dado de 4 a tu personaje **Ashra**.
- **Activación de habilidad**:
  - **Ashra** tiene una habilidad de **Vanguardia** con coste "2+".
  - **Ashra** está en **Vanguardia**, por lo que el coste se reduce a "1+".
  - Con el dado de 4, puedes activar la habilidad.
  - **Efecto**: **Ashra** gana +2 ATK hasta el final del turno.
- **Acción**:
  - **Ashra** realiza un **ataque** al primer enemigo en su línea.
  - **Cálculo de daño**:
    - ATK de **Ashra** (4 + 2 bonus) = 6
    - DEF del enemigo = 3
    - **Daño Infligido**: 6 - 3 = 3

## 5. Fase Final
- **Activación de efectos de fase final**:
  - Resuelve habilidades o efectos que se activen en esta fase.
- **Fin del turno**:
  - La iniciativa pasa al **otro jugador**, quien comienza su turno desde la **Fase de mantenimiento**.

# Uso de mana en turno del oponente
En **Open Card Wars** es posible interactuar en el turno del oponente.

## Conservación de dados de mana
  - Los dados de mana no utilizados se pueden guardar para activar habilidades durante el turno del oponente.
## Activación de habilidades
  - Puedes activar habilidades que tengan la palabra clave `FLASH` o que especifiquen que pueden ser usadas en el turno del oponente. Juega y resuelve las habilidades de forma normal, como si fuera tu turno.
## Prioridad de habilidades y resolución de conflictos
  - Las habilidades con `FLASH` tienen **prioridad** sobre las habilidades sin `FLASH`.
  - Si ambos jugadores activan habilidades con `FLASH` simultáneamente, se resuelven en el orden en que fueron declaradas.

> **Ejemplo**: **Alex** ataca con un personaje. **Carla** decide activar una habilidad con `FLASH` que otorga `SHIELD 1` a su personaje. La habilidad de **Carla** se resuelve primero, y el `SHIELD` bloquea el siguiente ataque del personaje de **Alex**.

# Detalles adicionales

## Atributos de los personajes

* **Ataque (ATK)**: Indica el daño que el personaje puede infligir.
* **Defensa (DEF)**: Reduce el daño recibido.
* **Vida (HP)**: Puntos de vida del personaje. Si llegan a 0, el personaje es derrotado.

## Estados y marcadores

### Estados comunes
  * `STUN`: El personaje no puede realizar acciones ni activar habilidades hasta el final de su siguiente turno.
  * `POISON X`: El personaje pierde X puntos de vida al inicio de su turno durante X turnos.
  * `SHIELD X`: Bloquea completamente el daño de X ataques.

### Uso de marcadores
  * Coloca marcadores en los personajes para indicar estados y efectos temporales.
  * Actualiza o retira marcadores en la **Fase de mantenimiento**.

### Ejemplos de estados

* `STUN`:
  * Si un personaje recibe `STUN`, coloca un marcador de aturdimiento.
  * **Efecto**: No puede actuar hasta que se retire el marcador en su siguiente Fase de Mantenimiento.
* `POISON 2`:
  * El personaje pierde 2 HP al inicio de su turno, que irán reduciéndose durante 2 turnos.
  * Coloca 2 marcadores de veneno y retira uno en cada **Fase de mantenimiento**.

# Condiciones de victoria

* El juego termina cuando un jugador reduce los **puntos de vida del oponente a 0** o menos.
* El jugador que logra esto es declarado el **ganador**.

# Consejos y estrategias

* **Gestión de mana**:
  * Planifica cómo asignar tus dados de mana.
  * Considera guardar dados para activar habilidades durante el turno del oponente.
* **Posicionamiento**:
  * Mover tus personajes estratégicamente puede darte ventajas, como reducir el coste de habilidades.
* **Activación de habilidades**:
  * Prioriza activar habilidades que puedan cambiar el curso del juego.
  * Usa habilidades con `FLASH` para sorprender al oponente.

# Resumen de pasos en un turno

1. **Fase de mantenimiento**:
   * Actualiza y retira marcadores de estado.
   * Retira personajes derrotados.
2. **Fase de mana**:
   * Lanza dados de mana hasta tener tantos como la ronda actual (máximo 8).
   * Combina dados si lo deseas.
3. **Fase de despliegue**:
   * Despliega personajes, artefactos o armas pagando su coste.
4. **Fase de activación y combate**:
   * Asigna dados a personajes (un dado por personaje).
   * Activa habilidades y realiza acciones adicionales, como atacar.
5. **Fase final**:
   * Resuelve efectos de fase final.
   * La iniciativa pasa al otro jugador.

# Ejemplo de turno completo

**Supongamos que es la Ronda 3 y eres el jugador con la iniciativa.**

## 1. Fase de mantenimiento

* **Retiras** un marcador de `POISON` de tu personaje **Zeph**.
* **Zeph** pierde 1 HP por el efecto de `POISON`.

## 2. Fase de mana

* **Dados de mana**:
  * Como es la Ronda 3, debes tener 3 dados de mana.
  * Tienes 1 dado guardado del turno anterior.
  * Lanzas 2 dados adicionales para tener un total de 3.
* **Resultados de dados**:
  * Dados: 2, 2, 4.
* **Combinas** el dado de 2 y 4 para obtener un dado de valor 6.

## 3. Fase de despliegue

* **Decides desplegar** un personaje de coste 1.
* **Asignas** el dado de valor 2 para pagar el coste.
* El personaje **Rhyse** se coloca en juego, en la **Retaguardia**.

## 4. Fase de activación y combate

* **Dados disponibles**:
  * Te queda un dado de valor 6.
* **Asignas** el dado de 6 a tu personaje **Rhyse**.
* **Activación de habilidad**:
  * **Rhyse** tiene una habilidad de **Retaguardia** con coste "5+".
  * **Rhyse** está en **Retaguardia**, por lo que el coste se reduce a "4+".
  * Dado de 6 cumple el coste.
  * **Efecto**: **Rhyse** invoca un portal y puede `MOVE` a un personaje adyacente.
  * Mueves a **Ashra** a una posición más segura.
* **Acción**:
  * **Rhyse** realiza un **ataque** al enemigo en su línea.
  * **Cálculo de Daño**:
    * ATK de **Rhyse**: 4
    * DEF del enemigo: 1
    * **Daño Infligido**: 4 - 1 = 3
  * El enemigo reduce su HP en 3.

## 5. Fase final

* No hay efectos adicionales.
* La iniciativa pasa al otro jugador.

# Glosario de términos

## Estadísticas

* **Ataque**:
* **Defensa**:
* **Coste**: Número de dados de despliegue
* **HP**: Puntos de vida

## Habilidades

* `AVANZAR X`: Avanza en tu misma línea tantos espacios como indique X.
* `ESCUDO X`: Bloquea completamente el daño de X ataques básicos y/o de habilidades. No bloquea ataques `IMPARABLE`.
* `PRISIÓN`: El objetivo con `PRISIÓN` no puede realizar ataques ni cambiar de ubicación, pero sí puede activar habilidades.
* `MOVER`: Permite mover a cualquier posición válida del campo de batalla a un objetivo.
* `CURAR X`: Recupera X puntos de vida de un objetivo.
* `DOBLE DAÑO`: Cuando realiza un ataque, si este causa daño hará el doble de ese daño.
* `TRIPLE DAÑO`: Cuando realiza un ataque, si este causa daño hará el triple de ese daño.
* `DOBLE ATAQUE`: Realiza 2 ataques completos, resolviendo toda la fase de combate 2 veces. Los ataques pueden realizarse a cualquier objetivo válido.
* `TRIPLE ATAQUE`: Realiza 3 ataques completos, resolviendo toda la fase de combate 3 veces. Los ataques pueden realizarse a cualquier objetivo válido.
* `ESQUIVA`: Esquiva el daño recibido de ataques básicos.
* `DEFINITIVA`: Es la habilidad más poderosa de un personaje.
* `ALCANCE`: `ALCANCE` permite atacar a cualquier objetivo de su misma línea.
* `DESTELLO`: Una habilidad con `DESTELLO` puede activarse en cualquier momento, incluso en el turno del contrario.
* `CONTRAATAQUE`: Cuando un objetivo con `CONTRAATAQUE` es atacado, este realiza inmediatamente un ataque, aunque no sea su turno.
* `IMPARABLE`: Un ataque `IMPARABLE` no puede ser bloqueado ni reducido.
* `INVULNERABLE`: Un personaje `INVULNERABLE` no puede ser objetivo de ataque ni habilidades de ningún tipo.
* `ATURDIR`: Un objetivo con `ATURDIR` no puede realizar ninguna acción hasta su siguiente turno.
* `PRISA`: La habilidad `PRISA` permite a quien la tiene atacar el mismo turno en el que entra en juego.
* `INDESTRUCTIBLE`: No puede reducir su valor de vida a menos de 1 durante ese turno.
* `PROVOCAR`: Las unidades atacantes están obligadas a atacar a la unidad con `PROVOCAR` aunque no esté en su misma línea. Si hay varias unidades con `PROVOCAR`, el atacante decide a quién atacar.
* `ARROLLAR`: Cuando una unidad con `ARROLLAR` realiza un ataque, el daño sobrante de ese ataque pasa al siguiente objetivo válido de su misma línea.
* `REGENERACIÓN`: Una unidad con `REGENERACIÓN` recupera todos los puntos de casco perdidos al final del turno.
* `REDIRECCIÓN`: Redirige todo el daño que reciba esa unidad a otra de su mismo equipo.
* `REFLEJO`: Cuando una unidad con `REFLEJO` es atacada, la unidad atacante recibe la misma cantidad de daño.
* `VENENO X`: Añade X contadores de `VENENO X`. Al principio del turno del jugador, el personaje con `VENENO X` pierde tantos puntos de vida como contadores tenga. Cada turno, durante la fase de mantenimiento, retira un contador de `VENENO X`.
* `SILENCIO`: Un personaje con `SILENCIO` no puede activar habilidades. Tampoco su `DEFINITIVA`.

# Notas finales

Este juego combina estrategia y planificación. La gestión efectiva de tus recursos y el aprovechamiento de las habilidades de tus personajes serán clave para obtener la victoria. Recuerda adaptarte a las circunstancias y anticiparte a las jugadas de tu oponente.

¡Prepárate para la batalla y disfruta del juego!

**¡Que comience la partida!**