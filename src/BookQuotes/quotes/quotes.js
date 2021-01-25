const quotes = [
    { 
        author: "Tinieblas",
        book: "Javier del Ponte",
        quote: "Pero como siempre sucede, el amor suele ser un heroe o villano segun sea correspondido o no y, en ese ultimo caso, causar estragos en una persona."
    }, 
    {
        book: "Tinieblas",
        author: "Javier del Ponte",
        quote: "Solos pocos pueden acceder a este preciado y placentero conocimiento de transcribir en el papel los pensamientos por los que uno divaga, como también poder leer los pensamientos transcriptos por los otros que han divagado y decidido contárnoslo en sus libros."
    },
    {
        book: "Renovatio",
        author: "Javier del Ponte",
        quote: "—¿Qué pierdo...? La verdad no sé qué pierdo si no lo como en el momento, pero hay que aprovechar cuando uno tiene las cosas y disfrutarlas, porque un día pueden no estar y podemos arrepentirnos de no haberlas disfrutado lo suficiente."
    },
    {
        book: "Renovatio",
        author: "Javier del Ponte",
        quote: "Las palabras operan en todos nosotros como grandes desencadenadores, producen las más de las asociaciones y conllevan efectos, la mayoría de las veces, impensados. Precisamente fuera del dominio de los pensamientos. Llegan a producir mucha angustia y tristeza en cantidades que nos podrían llevar a un estado melancólico y posiblemente al suicidio, como también pueden provocarnos gran felicidad, comodidad, ganas de hacer, confianza o hasta devolvernos las ganas de vivir."
    },
    {
        book: "Game Over, Saga 3241.",
        author: "Nathalia Tortora",
        quote: "La noche llegó más pronto de lo que hubiesen querido. Pero es un saber común que el tiempo pasa a mayor velocidad entre menos queremos que transcurra. No existe excepción a esa regla. Ni siquiera la m gia de los dragones más poderosos hubiese sido capaz de detener las agujas del reloj para que los minutos siguientes no llegaran jamas. El tiempo es inalterable e inmune a cualquier intento de modificación."
    },
    {
        book: "Lolas",
        author: "Florencia Canosa",
        quote: "Sé que hay cosas que nunca van a faltar en mi vida, como champús que huelen rico, comida en la mesa, ronquidos, chistes, algunos ataques de amor y de histeria"
    },
    {
        book: "Lolas",
        author: "Florencia Canosa",
        quote: "Dicen que hay que dar la vuelta al mundo para volver a casa. Que hay que besar muchos sapos para encontrar al príncipe azul. Sin velas, sin platos cuadrados, imperfecto, sin cortarse jamás las uñas de los pies."
    },
    {
        book: "MicroAlmas",
        author: "Juan Sola",
        quote: "Lo injusto de enamorarse es no saber lo que le pasa al otro. Es difícil de explicar, pero se parece mucho a esperar el colectivo en una esquina donde no sabés si hay parada."
    },
    {
        book: "MicroAlmas",
        author: "Juan Sola",
        quote: " Y ahí estás vos, solo, cagado de frío, con los brazos cruzados y los ojos fijos en la calle que baja hasta el centro. Y ves el colectivo a quince cuadras, y te ponés contento, pero al mismo tiempo te preocupa estar en la esquina equivocada. Y el colectivo está a diez cuadras, y tratás de buscar algún indicio de que estás esperando en el lugar correcto. Ocho cuadras. A ver si no para más allá. Cinco. Dos. Levantás el brazo, ya estás jugado. Todo parece indicar que estás parado en el lugar correcto, pero todavía te incomoda esa amarga ficción en la que ves pasar el colectivo, ignorándote, mientras todavía tenés el brazo levantado y cara de boludo."
    },
    {
        book: "Los Espiritus del Aire",
        author: "Mariana Di Acqua",
        quote: "- ¿Por qué el amor tiene que ser para siempre?- preguntó él, con suavidad.- ¿Por qué no podemos disfrutar del tiempo que nos es concedido? Hizo una pausa. - ¿Acaso este instante es menos verdadero porque no será eterno?- insistió.- Tú y yo somos mortales ¿por qué exiges más?"
    }, 
    {
        book: "Los Espiritus del Aire",
        author: "Mariana Di Acqua",
        quote: "– Reﬂexionaba sobre los términos “bueno” y “malo”… que en verdad son muy vagos. Dependen de la posición en que se encuentre el observador ¿no te parece?–Mmm… Es demasiado general tu apreciación –respondió él. Se encogió de hombros.–Me refería a que en la vida no todo es blanco o negro… Tú me dijiste eso no hace mucho tiempo. Sino una amplia gama de grises… recién ahora comienzo a entenderlo"
    },
    {
        book: "Los Espiritus del Aire",
        author: "Mariana Di Acqua",
        quote: "Esa costumbre tuya de restar importancia a aquello que de veras te preocupa está ocasionándote demasiadas demoras e inconvenientes. Deberías aprender a prestar atención y aceptar tus sentimientos, por muy desagradables que puedan parecerte. Puesto que su función es guiarte."
    }, 
    {
        book:"Relatos Completos",
        author: "Susana Grimberg",
        quote: "En verdad, solía decir que le enseñaron los libros. Y fue a través de ellos que los ojos se le abrieron a otros paisajes, la sangre respiró lo eterno, lo breve del tiempo. Los libros fueron su mundo. El mundo." 
    },
    {
        book: "Renovatio",
        author: "Javier del Ponte",
        quote:" ¿Cuándo no hemos experimentado esos instantes que parecen ser eternos  y que la satisfacción durará por siempre? Pero sólo son eso, instantes, ni más ni menos que esos instante que vamos buscando en el andar por la vida. Pero seguirán siendo instantes y mientras más instantes sean, mayor será el anhelo por recobrarlos." 

    },
    {
        book:"Titulo: Alma de Heroe y Corazon de Rey I - Hilos del Destino",
        author:"Daniela Suarez",
        quote:"―¡Sí, muchacho! Tú has demostrado que “imposible” es apenas una palabra que usan los débiles para vivir derrotados y nos enseñaste con valor que no hay que temer a los desafíos ―sonrió Dorél. ―Si has de morir, hazlo, pero que sea peleando por tus sueños y alcanzando la cima, porque creer es el secreto ―murmuró Idilin. "

    },
    {
        book:"Titulo: Alma de Heroe y Corazon de Rey I - Hilos del Destino",
        author:"Daniela Suarez",
        quote:" ―¿Crees en el destino y en los sueños? Pensé que solamente los elfos lo hacíamos. ― Los mortales también necesitamos creer en algo…, quizá aferrarnos al pensamiento que no somos dueños del futuro, porque todo está escrito en las estrellas, nos quite la responsabilidad de la desdicha que nos toque vivir a causa de nuestros actos. "

    },
    {
        book:"Titulo: Alma de Heroe y Corazon de Rey I - Hilos del Destino",
        author:"Daniela Suarez",
        quote:"―Esa es la cruel trampa del azar, uno no elige de quién enamorarse, el sentimiento llega y se instala dentro…, desde entonces tenemos la responsabilidad de hacer lo imposible para lograr que el corazón del amado nos corresponda. Es como un desafío de la vida, si lo superas el premio es la felicidad, y si fallas el dolor del fracaso te corresponde. No te resistas si en algún momento toca a tu puerta, es mejor probar y fracasar, que perder sin haber intentado el éxito, tal vez no suene muy alentador pero en el futuro la pregunta, ¿qué pudo haber pasado?, no existirá." 

    },
    {
        book:"Entre el blanco y el negro",
        author:"Tamara Grosso",
        quote:"Somos las palabras que fueron escritas pero no fueron dichas y vamos a salir de este mundo de borradores para conquistar el tuyo, o vamos a ser suficientemente fuertes para crear un universo alternativo igual de válido, en el que nuestra historia sea la que termine, y la tuya la que quede suspendida en el limbo de los comienzos inconclusos. - Manifiesto de las palabras borradas"

    },
    {
        book:"Lolas",
        author:"Florencia Canosa",
        quote:"El amor, cuando uno crece, es el lugar feliz al cual volver cuando el afuera es un apocalipsis zombi. El amor es el olor de lo conocido, es irse a dormir sin depender del somnífero del pensamiento mágico. Es abrir la puerta y descubrir que dentro de tu casa hay vida, sea una planta, sea una mascota, sea tu viejo ex novio que te quita los zapatos y te mira hasta que está seguro de que vas a dormir y no vas a morir de un ataque de angustia, que tal vez te ponga un espejo bajo la nariz para cerciorarse que al otro día vas a volver a luchar contra los zombis. Eso es el amor, carajo. El ansia de elegir volver una y otra vez al mismo lugar."

    },
    {
        book:"Lolas",
        author:"Florencia Canosa",
        quote:"¿Saben qué hacen algunas chicas cuando se separan? Se castigan, se mutilan, se inmolan. Lo que no hice cuando me divorcié, lo hice en ese momento. Me puse a limpiar el inodoro, de rodillas, fregando, con la cabeza metida adentro y un pucho colgado en la boca, largando ceniza sobre lo que había limpiado, como si al eliminar la mugre acumulada y los pelos enredados detrás del inodoro, estuviese eliminando la mugre de mi interior. Saqué ropa del placard y munida de tijeras hice arreglos. O hice desastres."

    },
    {
        book:"Desde el Aire",
        author:"Mariela Ghenadenik",
        quote:"Después de dos meses, Laura no tiene claro el sentido de lo que está bien o mal en su trabajo, pero al menos sabe que nada de lo que sucede dentro de una oficina tiene demasiado sentido fuera de ese espacio. Y por sobre todas las conclusiones que podría sacar, la única que por ahora le sirve es suponer que todo tiene que ser al revés de lo que se dice."
    },
    {
        book:"Desde el Aire",
        author:"Mariela Ghenadenik",
        quote:"Laura comprueba que la impresora ya está tibia. Si la hoja es del tamaño adecuado y si los rodillos tienen buena predisposición, las copias saldrán bien. Pero en general no se sabe cuándo el cartucho de tinta entrará en huelga y creará poemas surrealistas con las frases deformadas sobre la hoja, cuándo los complejos dispositivos tironearán de un ángulo y la hoja será triturada o cuándo un pedazo minúsculo se papel será secuestrado en algún rincón inédito e interrumpirá el trabajo, tal vez durante horas"

    },
    {
        book:"Desde el Aire",
        author:"Mariela Ghenadenik",
        quote:"Desde el aire, cada vez más lejos de todo, la distancia es lo único capaz de transformar la realidad; los cultivos se convierten en retazos de un patchwork inmenso de verdes y tierras; las ciudades, filigranas de luces amarillas; la inmensidad en un recorrido abarcable."

    },
    {
        book:"Nacida bajo el signo del Toro",
        author:"Florencia Bonelli",
        quote:"—Cami —le repetía Alicia—, vos podés hacer lo que desees con tu vida. Los elementos que Dios o el cosmos te dio están en tu carta natal, es verdad. Pero lo divertido de esto es que, como somos seres conscientes, podemos hacer lo que se nos dé la gana, aunque los planetas no estén alineados de la mejor manera."

    },
]

export default quotes