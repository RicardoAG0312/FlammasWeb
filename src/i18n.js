// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Recursos de traducción
const resources = {
  es: {
    translation: {
      // Navbar
      iniciocomp: "Inicio",
      productos: "Productos",
      soluciones: "Soluciones",
      monitorizacion: "Monitorización de Redes",
      infraestructura: "Infraestructura Integral",
      cloud: "Cloud y Virtualización",
      onesecurity: "One Security",
      marcus: "Marcus",
      zeroSpam: "ZeroSpam",
      secureDomain: "Secure Domain Intelligence",
      porQueFlammas: "¿Por qué Flammas?",
      soporte: "Soporte",
      serviciosProfesionales: "Servicios Profesionales",
      soporteTecnico: "Soporte Técnico",
      partners: "Partners",
      contacto: "Contacto",

      // Footer
      direccion: "Calle 122 7 A 18 Oficina 104, Bogota, Colombia",
      solucionesTitle: "SOLUCIONES",
      monitorizacionTitle: "MONITORIZACIÓN",

      // --- Inicio ---
      inicio: {
        encabezado: {
          texto1: "TRANSFORMA TU GESTIÓN CON FLAMMAS",
          texto2: "LA SOLUCIÓN INTEGRAL PARA",
          texto3: "MONITORIZACIÓN Y OBSERVABILIDAD",
          parrafo:
            "Una Suite de Supervisión Integral que Incluye Auditoría, Monitorización, Gestión de Configuración, Control Remoto, ITSM, Inventario y Seguridad del Sistema.",
          boton: "Hoja de Datos",
        },
        segundaSeccion: {
          titulo: "ONE TOOL TO RULE THEM ALL",
          subtitulo:
            "SEA LO QUE SEA QUE QUIERAS SUPERVISAR, TENEMOS LO QUE NECESITAS",
          videos: {
            video1: {
              titulo: "MONITORIZACIÓN INTEGRAL",
              texto:
                "Software de monitorización preparado y optimizado para cubrir todas tus necesidades.",
            },
            video2: {
              titulo: "CONTROL REMOTO",
              texto:
                "Un entorno dinámico con acceso remoto a tus servidores o estaciones de trabajo.",
            },
            video3: {
              titulo: "IT SERVICE MANAGER",
              texto:
                "Software de monitorización preparado y optimizado para cubrir todas tus necesidades.",
            },
          },
        },
        terceraSeccion: {
          titulo: "ARQUITECTURA TI",
          subtitulo: "¿CÓMO FUNCIONA FLAMMAS?",
          parrafo:
            "Así como el prisma descompone la luz en sus colores individuales, Flammas divide la complejidad de los datos empresariales. Cada componente, ya sea proveniente de proveedores, servicios en la nube o clientes, se analiza con precisión milimétrica. Esto permite una comprensión detallada de cada aspecto, facilitando la identificación de áreas de mejora y optimización.",
          boton: "DESCUBRE TODAS SUS FUNCIONALIDADES",
        },
        cuartaSeccion: {
          titulo: "FUNCIONALIDADES",
          subtitulo:
            "Toma el control de tu empresa con nuestras soluciones de monitorización",
          items: {
            item1: {
              titulo: "Monitorización de redes",
              texto:
                "Descubre todos tus equipos de red a través de mapas que muestran la estructura de tu red al detalle.",
            },
            item2: {
              titulo: "Monitorización UX",
              texto:
                "Descubre todos tus equipos de red a través de mapas que muestran la estructura de tu red al detalle.",
            },
            item3: {
              titulo: "Monitorización Cloud",
              texto:
                "Descubre todos tus equipos de red a través de mapas que muestran la estructura de tu red al detalle.",
            },
            item4: {
              titulo: "Servidores",
              texto:
                "Mainframe, IBM-i, Unix, Windows, Android y Linux: nuestro sistema es compatible con diversas plataformas.",
            },
            item5: {
              titulo: "Aplicaciones",
              texto:
                "Soluciones personalizables para casi cualquier caso y fuente de datos antes de afectar a los usuarios.",
            },
            item6: {
              titulo: "Gestión de logs",
              texto:
                "Recoge y almacena registros de todo tipo (incluyendo eventos de Windows) para búsquedas y alertas eficientes.",
            },
          },
        },
        quintaSeccion: {
          titulo: "+500 INTEGRACIONES:",
          subtitulo: "EXPANDE EL PODER DE TU MONITORIZACIÓN",
          texto1:
            "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo.",
          texto2:
            "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados.",
        },
        sextaSeccion: {
          titulo: "MÁS ALLÁ DE LOS LÍMITES, MÁS ALLÁ DE LAS EXPECTATIVAS",
        },
      },

      // --- Login ---
      login: {
        titulo: "CONTÁCTANOS",
        subtitulo: "FLAMMAS",
        descripcion:
          "Contacta el equipo de ventas, pide presupuesto o resuelve tus dudas sobre nuestras licencias.",
        form: {
          nombres: "(*) Nombres:",
          apellidos: "(*) Apellidos:",
          email: "(*) Email:",
          telefono: "(*) Número de teléfono:",
          empresa: "(*) Empresa:",
          cargo: "(*) Cargo:",
          options: {
            select: "Selecciona",
            cto: "CTO - CIO - Director",
            usuarioIT: "Usuario IT",
            partner: "Partner",
            estudiante: "Estudiante",
            otro: "Otros",
          },
        },
        conocimiento: {
          label: "(*) ¿Cómo conoció Flammas?:",
          options: {
            select: "Selecciona",
            buscador: "Buscador (Google - Yahoo, etc)",
            redes: "Redes Sociales",
            publicidad: "Publicidad",
            blog: "Blog - Publicaciones",
            plataforma: "Plataforma de opiniones",
            recomendacion: "Recomendación de un compañero",
            yaUso: "Ya utilizo Flammas",
            otro: "Otro",
          },
        },
        producto: {
          label: "(*) Producto de Interés:",
          options: {
            select: "Selecciona",
            monitorizacion: "Monitorización de Redes",
            infraestructura: "Infraestructura Integral",
            cloud: "Cloud y Virtualización",
            marcus: "Marcus",
            onesecurity: "OneSecurity",
          },
        },
        mensaje: {
          label: "(*) Mensaje:",
          placeholder: "Ingresa tu mensaje",
        },
        privacidad: {
          label: "(*) ",
          linkText: "Sí, acepto la política de privacidad",
          disclaimer:
            "Al hacer clic en enviar, aceptas que Flammas almacene y procese la información personal suministrada arriba para proporcionarte el contenido solicitado.",
          submit: "Enviar",
        },
        mini: {
          cliente: {
            titulo: "¿YA ERES CLIENTE?",
            texto: "Ingresa a la sección de soporte",
            boton: "Soporte",
          },
          servicios: {
            titulo: "¿CONOCES NUESTROS SERVICIOS?",
            texto: "Hablemos de servicios profesionales",
            boton: "Servicios",
          },
        },
      },

      // --- Nosotros ---
      nosotros: {
        encabezado: {
          subtitulo: "DESDE 2004 DESARROLLANDO SOFTWARE CON PASIÓN Y TALENTO",
          titulo:
            "SOMOS UN EQUIPO DE EXPERTOS VOLCADO EN AYUDAR A LÍDERES Y PERSONAL TI A CONSEGUIR LA TOTAL OBSERVABILIDAD DE SU ORGANIZACIÓN",
        },
        historia: {
          tituloBoton: "Nuestra Historia",
          sobreTitulo: "SOBRE FLAMMAS:",
          sobreTexto:
            "Comenzamos en el año 2004 primero con el nombre de Artica. Nuestra primera oficina era aproximadamente del mismo tamaño que un garaje californiano. El proyecto original se publicó bajo licencia de código abierto (GPL2), ya que originalmente surgió como un proyecto personal de su CEO y fundador, Sancho Lerena; a partir de entonces ha evolucionado, transformándose en una suite de monitorización para empresas, traspasando fronteras e idiomas y ofreciendo una de las soluciones más completas del mercado.",
        },
        mision: {
          tituloBoton: "Misión",
          titulo: "NUESTRA MISIÓN",
          carta1:
            "Nuestra misión es ofrecer un sistema de monitorización integrado y horizontal para medianas y grandes empresas, capaz de proveer información de distintas fuentes a diferentes departamentos, todo a través de una única consola.",
          carta2:
            "Creemos en el enorme potencial de la monitorización para mejorar cualquier organización que apoye su negocio en tecnología.",
          carta3:
            "Queremos ser una alerta temprana, queremos ser aquellos que avisan en el momento exacto antes de que suceda algo imprevisto, queremos ser ese compañero de viaje imprescindible para cualquier aventura y caminar juntos hasta la siguiente meta.",
        },
        vision: {
          tituloBoton: "Visión",
          titulo: "NUESTRA VISIÓN",
          parrafo1:
            "Creemos en el crecimiento sostenido. No tenemos prisa, hemos venido para quedarnos. Nuestra relación con clientes y empleados siempre es a largo plazo. Sabemos que el mercado actual está maduro y se renueva constantemente, cambiando las reglas del juego.",
          parrafo2:
            "Aprendemos, nos adaptamos y crecemos conforme lo hacen nuestros clientes. Nuestra visión es ser los proveedores de tecnología de servicios clave y estar presentes en empresas de todos los sectores a nivel mundial.",
        },
        numeros: {
          titulo: "FLAMMAS EN NÚMEROS EN LA ACTUALIDAD",
          subtitulo:
            "Desde 2004, Flammas no ha parado de crecer, posibilitando la evolución constante de este proyecto que hace que nos adaptemos a la realidad cambiante de hoy.",
          items: [
            {
              titulo: "+1M",
              subtitulo:
                "Métricas en la mayor de las instalaciones en un cliente real.",
            },
            {
              titulo: "24/7",
              subtitulo: "Soporte técnico disponible a nivel mundial.",
            },
            {
              titulo: "+60",
              subtitulo:
                "Presentes en más de 60 países de todo el mundo en los cinco continentes.",
            },
            {
              titulo: "96%",
              subtitulo:
                "De nuestros clientes se quedan con nosotros y renuevan cada año sus suscripciones.",
            },
            {
              titulo: "+100K",
              subtitulo:
                "Usuarios en todo el mundo que utilizan Flammas en todo tipo de organizaciones.",
            },
            {
              titulo: "1 HORA",
              subtitulo:
                "Es el tiempo que necesitas para instalarlo y cubrir tus sistemas.",
            },
          ],
        },
        porQue: {
          titulo: "¿POR QUÉ CONTAR CON NOSOTROS?",
          texto1:
            "Somos expertos en migraciones y grandes implantaciones. Tenemos nuestro propio equipo de consultoría e ingeniería especializada.",
          texto2:
            "Quién mejor que el fabricante para asegurarse del éxito de un proyecto.",
          texto3:
            "Si no estamos lo suficientemente cerca, podemos colaborar con un partner que conozca.",
          texto4: "Precios muy competitivos.",
        },
        valores: {
          titulo: "NUESTROS VALORES",
          items: [
            "Innovar como forma de ver la vida.",
            "Cuidar y escuchar a nuestros clientes, sobre todo si son críticos.",
            "Ofrecer el mejor soporte técnico a nuestros clientes.",
            "Seguir aprendiendo siempre, incluso de lo inesperado.",
            "Mejora continua y autocrítica constante.",
          ],
        },
        tsti: {
          titulo: "I+D+i",
          subtitulo: "Investigación + Desarrollo + Innovación",
          texto:
            "Desde sus orígenes Flammas siempre se ha caracterizado por ir más allá de lo establecido. Siempre hemos encontrado soluciones diferentes a los problemas nuevos y a los problemas de siempre. Nuestra filosofía de empresa de I+D+i nos acompaña desde 2007.",
        },
        quintaSeccion: {
          titulo: "+500 INTEGRACIONES:",
          subtitulo: "EXPANDE EL PODER DE TU MONITORIZACIÓN",
          texto1:
            "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo.",
          texto2:
            "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados.",
          texto3: "MÁS ALLÁ DE LOS LÍMITES, MÁS ALLÁ DE LAS EXPECTATIVAS",
        },
      },
      // partner
      partner: {
        encabezado: {
          subtitulo: "Partners de Flammas",
          titulo: "Encuentra a nuestros partners",
          texto:
            "Flammas cuenta con una red de partners que te ayudarán a encontrar la solución perfecta para tu negocio. Explora nuestra lista de partners y descubre cómo pueden ayudarte a alcanzar tus objetivos.",
        },
        partnerInfo: {
          titulo:
            "ESPACIO TECNOLOGICA, CONSULTORIA Y SERVICIOS A&F S.A.C. - ESTECS S.A.C. -",
          gold: "PARTNER GOLD",
          descripcion:
            "ESTECS S.A.C. es una empresa peruana especializada en la provisión de soluciones tecnológicas, consultoría y servicios IT para el sector público y privado. Desde su fundación en 2015, ha consolidado alianzas con marcas líderes del mercado, ofreciendo equipos, software y soporte técnico especializado. Su enfoque se basa en la innovación, la eficiencia operativa y la atención personalizada. Con visión de futuro, acompaña a sus clientes en sus procesos de transformación digital.",
          telefono: "Teléfono",
          email: "Correo",
          web: "Página web",
          direccion: "Dirección",
        },
      },
      //productos
      abasto: {
        encabezado: {
          titulo: "MONITORIZACIÓN",
          subtitulo: "Funcionalidades:",
        },
        items: [
          {
            tipo: "texto",
            titulo: "API",
            texto:
              "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando.",
          },
          {
            tipo: "texto",
            titulo: "Multitenant / MSP",
            texto:
              "Múltiples clientes con diferentes vistas, compartiendo una única plataforma, sin límite. Plantillas de informes comunes para que tengan solo que aplicarlo a aquellos activos que ven. Un sistema de cuadros de mando que permite ofrecer al cliente información en tiempo real, o programar informes en PDF para su envío periódico por eMail. Flammas te permite dar servicio a tus clientes (o incluso autoservicio) en una solución todo en uno.",
          },
          {
            tipo: "texto",
            titulo: "Alertas y notificaciones",
            texto:
              "Las alertas de Flammas están pensadas para integrarse en los ciclos de trabajo existentes, de lo más básico como un email a lo más moderno como Slack o Telegram. Las notificaciones sirven también para programar acciones automáticas como encendido/apagado de sistemas remotos, activación de actuadores o creación de incidencias en Remedy, Zendesk, JIRA, OTRS, etc. Las alertas incluyen escalados, excepciones por días especiales, paradas planificadas, fines de semana y muchas otras opciones de personalización.",
          },
          {
            tipo: "texto",
            titulo: "Políticas",
            texto:
              "Permiten homogeneizar la monitorización y conseguir desplegar una monitorización estándar por tecnologías. Permiten gestionar la configuración de cientos de sistemas de manera sencilla, con un par de clicks. Sin las políticas, gestionar miles de equipos de forma coherente es muy difícil y requiere tiempo. Las políticas permiten reutilizar y distribuir cambios sobre grupos grandes de sistemas.",
          },
          {
            tipo: "texto",
            titulo: "Monitorización distribuida",
            texto:
              "En entornos complejos, existen redes poco accesibles difíciles de supervisar mediante un descubrimiento centralizado. Nuestros Servidores Satélite son capaces de obtener información de la red y de los sistemas de manera autónoma, distribuida e integrada. Perfecto para redes de clientes remotas.",
          },
          {
            tipo: "texto",
            titulo: "Omnishell",
            texto:
              "Automatización IT: ejecución de comandos remotos de manera centralizada. Para la gestión y configuración de servidores y estaciones de trabajo. Aprovechando el despliegue de agentes de monitorización podrás además ejecutar avanzadas secuencias de comandos remotamente.",
          },
          {
            tipo: "texto",
            titulo: "Alta escalabilidad",
            texto:
              "El diseño federado de Flammas permite distribuir toda la carga entre diferentes nodos, de manera que la carga de procesamiento se reparte y se procesa en paralelo. Nuestro Command Center permite visualizar y gestionar toda la información en conjunto. Tenemos licencias de varios cientos de miles de agentes en funcionamiento.",
          },
          {
            tipo: "texto",
            titulo: "Monitorización de causa raíz",
            texto:
              "Ayudamos a encontrar la aguja en el pajar. Es mucho más eficiente mostrar visualmente el origen del fallo que limitarse a recibir cientos de eventos por segundo. Flammas ofrece el valor de su monitorización de servicios, que permite filtrar toda la información y mostrar solo lo crítico para cada departamento.",
          },
          {
            tipo: "imagen",
            titulo: "Dashboards",
            texto:
              "Cada usuario puede crear su propio cuadro de mando que destaque las métricas críticas más importantes para tu equipo y tus operaciones. Mantén a todos los miembros del equipo informados de los niveles de rendimiento del sistema. Estas pantallas pueden ser visualizadas a pantalla completa, compartidas con usuarios externos a través de una URL, que cambien automáticamente una tras otra con un temporizador o enlacen entre sí para crear drilldowns personalizados. Las pantallas permiten extender al infinito la manera de mostrar información, adaptándola a cada organización.",
            imagen: "dashboard",
          },
          {
            tipo: "imagen",
            titulo: "Informes",
            texto:
              "El constructor de informes te permite diseñar tus propios informes, personalizados con portadas, cabeceras y diferentes contenidos. Se pueden definir layouts a medida, similares a los cuadros de mando, para visualizar datos en tiempo real y contando con un histórico de varios años. Existen informes predefinidos para el cálculo de la disponibilidad, Top-N, SLA (mensuales, semanales o diarios), histogramas, gráficas, informes de capacity planning, eventos de informes, inventario, configuración y más. Además con el sistema de plantillas puedes ofrecer a tus clientes informes prediseñados por usted.",
            imagen: "report",
          },
        ],
        quintaSeccion: {
          titulo: "+500 INTEGRACIONES:",
          subtitulo: "EXPANDE EL PODER DE TU MONITORIZACIÓN",
          texto1:
            "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo.",
          texto2:
            "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados.",
        },
      },

      //soporte-Profesional-service
      seccionEncabezado1: {
        titulo: {
          ventas: "ENVÍENOS UN MENSAJE",
          contacto: "TELEFONO",
          titulo1: "SERVICIOS PROFESIONALES DE FLAMMAS FMS",
          subtitulo: "NUESTRO EQUIPO DE EXPERTOS ESTÁ PARA AYUDARTE",
          texto:
            "La experiencia acumulada de nuestros ingenieros te permitirá afrontar cualquier reto de monitorización. Para información adicional sobre nuestros servicios, por favor contacta con nosotros.",
        },
        seccionFormulario: {
          campos: {
            nombres: "(*) Nombres:",
            apellidos: "(*) Apellidos:",
            email: "(*) Email:",
            empresa: "(*) Empresa - Compañia:",
            pais: "(*) País:",
            mensaje: "(*) Mensaje:",
          },
          placeholder: {
            nombres: "Ingresa tus nombres",
            apellidos: "Ingresa tus apellidos",
            email: "Ingresa tu email",
            empresa: "Ingresa tu empresa - compañia",
            pais: "Ingresa tu país",
            mensaje: "Ingresa tu mensaje",
          },
          aviso:
            "Flammas necesita la información de contacto que nos proporciona para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre como darte de baja, asi como nuestras practicas de privacidad y el compromiso de proteger su privacidad, consulta nuestra Política de privacidad.",
          submit: "Enviar",
        },
        seccionClienteFinal: {
          titulo1: "SERVICIO PROFESIONALES PARA CLIENTE FINAL",
          items1: {
            texto1:
              "Extensiones de soporte 24×7 sobre el contrato de soporte estándar.",
            texto2:
              "Formación a medida, presencial o remota. Disponemos de varios niveles de certificación.",
            texto3:
              "Desarrollo de funcionalidades a medida, públicas o privadas.",
            texto4:
              "Outsourcing de personal, completo o parcial. Remoto o presencial.",
            texto5:
              "Desarrollo de integraciones a medida (plugins) para integrar la monitorización en aplicaciones propias o ampliar la monitorización de nuestros plugins actuales.",
            texto6:
              "Proyectos por bolsas de horas para intervenciones puntuales (p.e: migraciones, integraciones, actualizaciones, despliegues de configuración)",
            texto7:
              "Proyectos de despliegue completos llave en mano. Desde la consultoría de análisis hasta la coordinación de equipos propios y de terceros: jefe de proyecto, consultor especialista, desarrolladores e incluso diseñadores gráficos.",
          },
        },

        seccionMSP: {
          titulo2: "SERVICIOS PROFESIONAES PARA MSP'S E INTEGRADORES",
          items2: {
            texto1:
              "Colaboración en la implantación con personal técnico integrado en sus equipos.",
            texto2: "Jefatura externa de proyectos de implantación.",
            texto3: "Formación de equipos completos de operación.",
            texto4: "Ayuda en la puesta en marcha de soluciones SaaS propias.",
            texto5: "Creación personalizada de productos OEM.",
            texto6: "Ingeniería de monitorización a medida.",
          },
        },
        contacto: {
          titulo: "¡PONTE EN CONTACTO!",
          texto:
            "Nos encanta saber de ti. Nuestro equipo está siempre aquí para apoyarle",
          correo: "ventas@flammas.com",
          telefono: "+57 3228396554",
          imagenes: ["94.png", "95.png"],
        },
        quintaSeccion: {
          titulo: "+500 INTEGRACIONES:",
          subtitulo: "EXPANDE EL PODER DE TU MONITORIZACIÓN",
          texto1:
            "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo.",
          texto2:
            "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados.",
        },

        tituloSoporte: {
          titulo: "SOPORTE TÉCNICO DE FLAMMAS",
          subtitulo: "SOMOS EXPERTOS EN FLAMMAS",
          texto:
            "Garantizamos la continuidad del servicio y ofrecemos soporte a los equipos técnicos que gestionan Flammas.",
        },

        seccionFormulario1: {
          campos: {
            nombres: "(*) Nombres",
            apellidos: "(*) Apellidos",
            email: "(*) Email",
            empresa: "(*) Empresa - Compañia",
            pais: "(*) País",
            mensaje: "(*) Mensaje",
          },
          aviso:
            "Flammas necesita la información de contacto que nos proporciona para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre como darte de baja, asi como nuestras practicas de privacidad y el compromiso de proteger su privacidad, consulta nuestra Política de privacidad.",
          submit: "Enviar",
        },
        seccionSoporteTexto: {
          texto:
            "El objetivo principal del servicio de soporte técnico es brindar soporte para ayudar a resolver cualquier problema relacionado con la instalación, funcionamiento y uso de Flammas.",
          texto1:
            "El canal de soporte principal disponible para todos los clientes de soporte es nuestro Sistema de soporte, que garantiza la mensajería en línea para una comunicación rápida y fácil entre los clientes y nuestros especialistas técnicos. Damos soporte en inglés y español:",
          texto2:
            "Los clientes con niveles de soporte avanzados pueden acceder a los servicios de soporte por teléfono, llamando a números dedicados. El soporte 24/7 también está disponible para niveles de soporte avanzado.",
        },
        seccionViñetas: {
          tituloGlobal:
            "NOS GANAMOS LA CONFIANZA DE NUESTROS CLIENTES EN TODO EL MUNDO",
          items: {
            titulos: {
              titulo1: "Rápido y eficiente",
              titulo2: "Soporte integral",
              titulo3: "SLA controlado",
              titulo4: "Servicio confiable",
            },
            textos: {
              texto1:
                "Soporte ofrecido por el equipo de ingeniería de Flammas.",
              texto2: "Ofrecemos soporte opcional 24/7 para entornos críticos.",
              texto3:
                "Nuestros procedimientos de soporte incluyen una estricto monitorización de SLA.",
              texto4:
                "Nuestro soporte es el activo mejor valorado de nuestra plataforma.",
            },
          },
        },
        seccionIntegraciones: {
          titulo: "+500 INTEGRACIONES:",
          subtitulo: "EXPANDE EL PODER DE TU MONITORIZACIÓN",
          texto1:
            "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo.",
          texto2:
            "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados.",
        },
      },
      //****SOLUCIONES-MONITORIZACION*****/
      soluciones1: {
        monitorizacion1: {
          encabezado: {
            subtitulo: "Soluciones de Flammas",
            titulo: "Monitorización de red",
            texto:
              "Flammas te permite descubrir todos tus equipos de red y representar su topología en mapas que conectan interfaces y visualizan la estructura de su red al detalle. Ve más allá, unificando la gestión de tus dispositivos con una completa observabilidad en tu red.",
          },
          seccionPrincipal: {
            titulo: "¿Qué aporta la monitorización de redes a tu compañía?",
            parrafo1:
              "En la actualidad, las redes son esenciales para el negocio de muchas empresas y organizaciones. Las interrupciones o pérdidas de rendimiento de estas pueden conllevar graves consecuencias, como paradas en el servicio o caídas en la productividad. Tu sistema debe ser capaz de supervisar en todo momento el estado de tus redes y los diferentes componentes que forman parte de esta.",
            parrafo2:
              "Por ello, el monitoreo de redes será fundamental para prevenir incidencias o ayudar a resolverlas lo antes posible, cuando estas sean inevitables.",
          },
          info: {
            izquierda1_titulo: "Desde lo más básico a lo inimaginable",
            izquierda1_texto:
              "Ancho de banda, pérdida de paquetes, latencia, disponibilidad, número de conexiones. Da igual el origen: routers, AP, switches, firewalls, servidores, estaciones de trabajo, IoT. Si tiene IP, Flammas puede coger el dato. No estamos limitados sólo a SNMP o a recogida de datos con agentes.",
            derecha1_titulo: "Gestión de IPs",
            derecha1_texto:
              "Nuestro sistema IPAM permite gestionar redes, superedes y hacer subnetting. Podrás gestionar ubicaciones físicas, realizar reservas de IP y disponer de un mapa de IP así como informes de uso de IP, y alertas cuando te quedes sin IP disponibles. Se puede integrar con un servidor DHCP de Microsoft.",
            izquierda2_titulo: "Análisis de red en tiempo real",
            izquierda2_texto:
              "Netflow sirve para obtener estadísticas en tiempo real de tus equipos de red (routers, switches, firewalls) y ofrecer informes de uso, cuellos de botella o ayudar a hacer diagnósticos de problemas.",
            derecha2_titulo: "Alta escalabilidad",
            derecha2_texto:
              "Escalabilidad prácticamente ilimitada gracias a Command Center, y nuestros Servidores Satélite que permiten escalar horizontalmente y generar decenas de miles de consultas de red por segundo de forma distribuida. Contamos con clientes con más 100.000 dispositivos de red en una única instancia.",
            izquierda3_titulo: "Informes y cuadros de mando",
            izquierda3_texto:
              "Flammas recoge todo tipo de datos y te ofrece un editor de informes para que puedas generarlos de manera personalizada: top N, gráficas detalladas a cualquier escala de tiempo, informes SLA, informes de disponibilidad, cronogramas y decenas más.",
            derecha3_titulo: "Gestión de configuraciones",
            derecha3_texto:
              "Flammas puede recoger la configuraciones de tus equipos, detectar cuando cambian (y donde) y recuperar backup de dichas configuraciones. También podrá desplegar cambios masivamente en decenas de equipos (como por ejemplo añadir una VLAN).",
          },
          funcionalidades: {
            header: "Funcionalidades Avanzadas",
            f1_titulo: "Entornos distribuidos",
            f1_texto:
              "Descubre y monitoriza equipos remotos en redes de clientes de manera autónoma y desplegando una sencilla sonda instalable en Windows, Raspberrys o pequeñas máquinas virtuales. Nuestros servidores satélites funcionan de manera autónoma y silenciosa y son capaces de gestionar cientos de dispositivos.",
            f2_titulo: "Licenciamiento sin sorpresas",
            f2_texto:
              "Conoce exactamente lo que te va a costar, sin sorpresas, sin ampliaciones, sin módulos adicionales. Planifica el crecimiento de su entorno con exactitud desde el día uno. En Flammas todo incluido, significa eso, todo incluido en el coste inicial de la licencia.",
            f3_titulo: "Monitorización de seguridad",
            f3_texto:
              "Controla en todo momento de qué versiones, modelos e IP dispones. No sólo de equipos de red como switches, routers, también firewalls. Establece alertas si se usan modelos con vulnerabilidades. Envía los logs de todos tus sistemas a nuestra consola de logs y crea alertas de correlación.",
            f4_titulo: "Inteligencia artificial",
            f4_texto:
              "Deja que se configuren solo los umbrales de fallo de manera automática, en base al uso cotidiano. Crea alertas en base al uso proyectado de tus recursos. Genera informes útiles para planificar el uso de tu red.",
          },
          logs: {
            encabezado: {
              subtitulo: "Soluciones de Flammas",
              titulo: "Gestión de Logs",
              texto:
                "Imagina poder buscar información en los logs a lo largo de todos tus sistemas monitorizados con un solo click de ratón. Si ya tienes actualmente instalado un agente de Flammas en esas máquinas, ¿por qué no recoger también logs?",
            },
            izquierda_titulo: "Auditoría y seguridad (HIPAA, RGPD, ISO 27001)",
            izquierda_texto:
              "Lo último que quieres es fallar en una auditoría o tener que revelar una posible violación de datos porque no has recogido los datos necesarios para una investigación o no dispones de los datos requeridos para averiguar lo que ha pasado. Si ya monitorizas esos sistemas, guarda sus logs.",
            cartitas1_titulo: "Almacenamiento económico para sus logs",
            cartitas1_texto:
              "El tipo de almacenamiento para guardar logs en Flammas es muy asequible con respecto a otras herramientas similares. Con Flammas ahorrarás dinero en almacenamiento a largo plazo. La licencia Enterprise ya cubre esta funcionalidad, sólo tendrás que asignar más almacenamiento en tus servidores.",
            cartitas2_titulo: "Búsqueda de la información simple y sencilla",
            cartitas2_texto:
              "No necesitarás ser un científico de datos ni normalizar la información en un complicado juego de plantillas. Busca cadenas o patrones mediante expresiones regulares, y guarda tus búsquedas. Tan simple como suena.",
            minis: {
              texto1: "Olvídate de formatos, parseos o definiciones estrictas.",
              texto2: "Compatible con Linux, Windows y Unix por igual.",
              texto3:
                "Compatible con cualquier log en formato texto plano de cualquier aplicación.",
              texto4:
                "Investiga entre tu historial de logs con búsquedas intuitivas y sencillas.",
              texto5:
                "Sencillo de extraer. No requiere instalar software intermedio ni redirigir logs a través de la red.",
              texto6:
                "Investiga los registros con filtros de búsqueda intuitivos y un veloz rendimiento, visualízalos en bonitos paneles de Kibana.",
              texto7:
                "Tus datos seguirán siendo tuyos. Almacenamiento local 100% on-premise.",
              texto8:
                "Escala según tus necesidades. Puedes ampliar la capacidad de almacenamiento según lo necesites.",
            },
          },
          observabilidad: {
            header:
              "La solución de supervisión total para la observabilidad total",
            cartas: {
              titulo:"Expericia de usuario",
              c1_subtitulo: "Experiencia de usuario",
              c1_texto:
                "Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes.",
              c2_titulo: "Monitorización de aplicaciones (APM)",
              c2_subtitulo: "Monitorización de aplicaciones (APM)",
              c2_texto:
                "Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites.",
              c3_titulo: "Monitorización de entornos virtuales",
              c3_subtitulo: "Monitorización de entornos virtuales",
              c3_texto:
                "Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud.",
              c4_titulo: "Gestión de incidencias",
              c4_subtitulo: "Gestión de incidencias",
              c4_texto:
                "Integra el sistema de ticketing de tu infraestructura en Flammas.",
              c5_titulo: "Control Remoto",
              c5_subtitulo: "Control Remoto",
              
              c5_texto:
                "Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web.",
              c6_titulo: "Gestión de servicio y asistencia",
              c6_subtitulo: "Gestión de servicio y asistencia",
              c6_texto:
                "Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI.",
              c7_titulo: "Monitorización mainframe",
              c7_subtitulo: "Monitorización mainframe",
              c7_texto:
                "Dispón de una única plataforma para recoger y mostrar la información venga de donde venga.",
              c8_titulo: "Monitorización de redes",
              c8_subtitulo: "Monitorización de redes",
              c8_texto:
                "Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar.",
              c9_titulo: "Inventario TI",
              c9_subtitulo: "Inventario TI",
              c9_texto:
                "Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta.",
              c10_titulo: "Recolección de logs",
              c10_subtitulo: "Recolección de logs",
              c10_texto:
                "Recoge, visualiza y centraliza todos tus registros en un único punto.",
            },
          },
          quintaSeccion: {
            titulo: "+500 INTEGRACIONES:",
            subtitulo: "EXPANDE EL PODER DE TU MONITORIZACIÓN",
            texto1:
              "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo.",
            texto2:
              "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados.",
          },
        },
      },
    },
  },

  /////////////////////////////////////////////////////////////
  en: {
    translation: {
      // Navbar
      iniciocomp: "Home",
      productos: "Products",
      soluciones: "Solutions",
      monitorizacion: "Network Monitoring",
      infraestructura: "Complete Infrastructure",
      cloud: "Cloud and Virtualization",
      onesecurity: "One Security",
      marcus: "Marcus",
      zeroSpam: "ZeroSpam",
      secureDomain: "Secure Domain Intelligence",
      porQueFlammas: "Why Flammas?",
      soporte: "Support",
      serviciosProfesionales: "Professional Services",
      soporteTecnico: "Technical Support",
      partners: "Partners",
      contacto: "Contact",

      // Footer
      direccion: "Street 122 7 A 18 Office 104, Bogota, Colombia",
      solucionesTitle: "SOLUTIONS",
      monitorizacionTitle: "MONITORING",

      // --- Inicio ---
      inicio: {
        encabezado: {
          texto1: "TRANSFORM YOUR MANAGEMENT WITH FLAMMAS",
          texto2: "THE INTEGRAL SOLUTION FOR",
          texto3: "MONITORING AND OBSERVABILITY",
          parrafo:
            "A Comprehensive Supervision Suite that Includes Auditing, Monitoring, Configuration Management, Remote Control, ITSM, Inventory, and System Security.",
          boton: "Datasheet",
        },
        segundaSeccion: {
          titulo: "ONE TOOL TO RULE THEM ALL",
          subtitulo: "WHATEVER YOU WANT TO MONITOR, WE HAVE WHAT YOU NEED",
          videos: {
            video1: {
              titulo: "COMPREHENSIVE MONITORING",
              texto:
                "Monitoring software designed and optimized to cover all your needs.",
            },
            video2: {
              titulo: "REMOTE CONTROL",
              texto:
                "A dynamic environment with remote access to your servers or workstations.",
            },
            video3: {
              titulo: "IT SERVICE MANAGER",
              texto:
                "Monitoring software designed and optimized to cover all your needs.",
            },
          },
        },
        terceraSeccion: {
          titulo: "IT ARCHITECTURE",
          subtitulo: "HOW DOES FLAMMAS WORK?",
          parrafo:
            "Just as a prism splits light into its individual colors, Flammas breaks down the complexity of business data. Each component, whether from providers, cloud services, or clients, is analyzed with millimetric precision. This allows a detailed understanding of each aspect, facilitating the identification of areas for improvement and optimization.",
          boton: "DISCOVER ALL ITS FEATURES",
        },
        cuartaSeccion: {
          titulo: "FUNCTIONALITIES",
          subtitulo:
            "Take control of your company with our monitoring solutions",
          items: {
            item1: {
              titulo: "Network Monitoring",
              texto:
                "Discover all your network devices through maps that show the structure of your network in detail.",
            },
            item2: {
              titulo: "UX Monitoring",
              texto:
                "Discover all your network devices through maps that show the structure of your network in detail.",
            },
            item3: {
              titulo: "Cloud Monitoring",
              texto:
                "Discover all your network devices through maps that show the structure of your network in detail.",
            },
            item4: {
              titulo: "Servers",
              texto:
                "Mainframe, IBM-i, Unix, Windows, Android, and Linux: our system is compatible with various platforms.",
            },
            item5: {
              titulo: "Applications",
              texto:
                "Customizable solutions for almost any case and data source before affecting users.",
            },
            item6: {
              titulo: "Log Management",
              texto:
                "Collects and stores all types of logs (including Windows events) for efficient searches and alerts.",
            },
          },
        },
        quintaSeccion: {
          titulo: "+500 INTEGRATIONS:",
          subtitulo: "EXPAND THE POWER OF YOUR MONITORING",
          texto1:
            "We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide.",
          texto2: "We support emerging, established, and even legacy systems.",
        },
        sextaSeccion: {
          titulo: "BEYOND LIMITS, BEYOND EXPECTATIONS",
        },
      },
      // --- Login ---
      login: {
        titulo: "CONTACT US",
        subtitulo: "FLAMMAS",
        descripcion:
          "Contact the sales team, request a quote or resolve your doubts...",
        form: {
          nombres: "(*) First Name:",
          apellidos: "(*) Last Name:",
          email: "(*) Email:",
          telefono: "(*) Phone Number:",
          empresa: "(*) Company:",
          cargo: "(*) Position:",
          options: {
            select: "Select",
            cto: "CTO - CIO - Director",
            usuarioIT: "IT User",
            partner: "Partner",
            estudiante: "Student",
            otro: "Other",
          },
        },
        conocimiento: {
          label: "(*) How did you hear about Flammas?:",
          options: {
            select: "Select",
            buscador: "Search engine (Google - Yahoo, etc)",
            redes: "Social Media",
            publicidad: "Advertising",
            blog: "Blog - Publications",
            plataforma: "Review platforms",
            recomendacion: "Recommendation from a colleague",
            yaUso: "I already use Flammas",
            otro: "Other",
          },
        },
        producto: {
          label: "(*) Product of Interest:",
          options: {
            select: "Select",
            monitorizacion: "Network Monitoring",
            infraestructura: "Integrated Infrastructure",
            cloud: "Cloud and Virtualization",
            marcus: "Marcus",
            onesecurity: "OneSecurity",
          },
        },
        mensaje: {
          label: "(*) Message:",
          placeholder: "Enter your message",
        },
        privacidad: {
          label: "(*) ",
          linkText: "Yes, I accept the privacy policy",
          disclaimer:
            "By clicking submit, you agree that Flammas will store and process the personal information provided above to deliver the requested content.",
          submit: "Submit",
        },

        mini: {
          cliente: {
            titulo: "ALREADY A CLIENT?",
            texto: "Go to the support section",
            boton: "Support",
          },
          servicios: {
            titulo: "DO YOU KNOW OUR SERVICES?",
            texto: "Let's talk about professional services",
            boton: "Services",
          },
        },
      },

      // --- Nosotros ---
      nosotros: {
        encabezado: {
          subtitulo: "SINCE 2004 DEVELOPING SOFTWARE WITH PASSION AND TALENT",
          titulo:
            "WE ARE A TEAM OF EXPERTS DEDICATED TO HELPING LEADERS AND IT STAFF ACHIEVE TOTAL OBSERVABILITY OF THEIR ORGANIZATION",
        },
        historia: {
          tituloBoton: "Our History",
          sobreTitulo: "ABOUT FLAMMAS:",
          sobreTexto:
            "We started in 2004, first under the name Artica. Our first office was approximately the size of a Californian garage. The original project was published under an open-source license (GPL2), as it initially emerged as a personal project of its CEO and founder, Sancho Lerena. Since then, it has evolved, transforming into a monitoring suite for enterprises, crossing borders and languages, and offering one of the most comprehensive solutions on the market.",
        },
        mision: {
          tituloBoton: "Mission",
          titulo: "OUR MISSION",
          carta1:
            "Our mission is to provide an integrated and horizontal monitoring system for medium and large companies, capable of delivering information from different sources to various departments, all through a single console.",
          carta2:
            "We believe in the enormous potential of monitoring to improve any organization that supports its business with technology.",
          carta3:
            "We want to be an early warning, we want to be the ones who alert at the exact moment before something unforeseen happens, we want to be that essential travel companion for any adventure and walk together until the next goal.",
        },
        vision: {
          tituloBoton: "Vision",
          titulo: "OUR VISION",
          parrafo1:
            "We believe in sustained growth. We are not in a hurry, we are here to stay. Our relationship with clients and employees is always long term. We know that the current market is mature and is constantly renewing itself, changing the rules of the game.",
          parrafo2:
            "We learn, adapt, and grow as our clients do. Our vision is to be the providers of key service technology and to be present in companies from all sectors worldwide.",
        },
        numeros: {
          titulo: "FLAMMAS IN NUMBERS TODAY",
          subtitulo:
            "Since 2004, Flammas has not stopped growing, enabling the constant evolution of this project and helping us adapt to today's changing reality.",
          items: [
            {
              titulo: "+1M",
              subtitulo:
                "Metrics in the largest installation at a real customer.",
            },
            {
              titulo: "24/7",
              subtitulo: "Worldwide technical support available.",
            },
            {
              titulo: "+60",
              subtitulo:
                "Present in more than 60 countries across all five continents.",
            },
            {
              titulo: "96%",
              subtitulo:
                "Of our customers stay with us and renew their subscriptions every year.",
            },
            {
              titulo: "+100K",
              subtitulo:
                "Users worldwide rely on Flammas in all kinds of organizations.",
            },
            {
              titulo: "1 HOUR",
              subtitulo: "Is all you need to install and cover your systems.",
            },
          ],
        },
        porQue: {
          titulo: "WHY COUNT ON US?",
          texto1:
            "We are experts in migrations and large implementations. We have our own specialized consulting and engineering team.",
          texto2:
            "Who better than the manufacturer to ensure the success of a project.",
          texto3:
            "If we are not close enough, we can collaborate with a trusted partner.",
          texto4: "Very competitive prices.",
        },
        valores: {
          titulo: "OUR VALUES",
          items: [
            "Innovation as a way of life.",
            "Care for and listen to our customers, especially when they are critical.",
            "Provide the best technical support to our customers.",
            "Always keep learning, even from the unexpected.",
            "Continuous improvement and constant self-criticism.",
          ],
        },
        tsti: {
          titulo: "R+D+i",
          subtitulo: "Research + Development + Innovation",
          texto:
            "Since its origins, Flammas has always been characterized by going beyond what is established. We have always found different solutions to new problems as well as to recurring ones. Our R&D+i company philosophy has been with us since 2007.",
        },
        quintaSeccion: {
          titulo: "+500 INTEGRATIONS:",
          subtitulo: "EXPAND THE POWER OF YOUR MONITORING",
          texto1:
            "We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We offer integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We offer integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We offer integrations with current technologies, used in production environments worldwide.",
          texto2:
            "We support emerging, established, and even legacy technologies.",

          texto3: "BEYOND LIMITS, BEYOND EXPECTATIONS",
        },
      },
      // partner
      partner: {
        encabezado: {
          subtitulo: "Flammas Partners",
          titulo: "Meet our partners",
          texto:
            "Flammas has a network of partners that will help you find the perfect solution for your business. Explore our partner list and discover how they can help you achieve your goals.",
        },
        partnerInfo: {
          titulo:
            "ESPACIO TECNOLOGICA, CONSULTORIA Y SERVICIOS A&F S.A.C. - ESTECS S.A.C. -",
          gold: "GOLD PARTNER",
          descripcion:
            "ESTECS S.A.C. is a Peruvian company specialized in providing technological solutions, IT consulting, and services for both the public and private sectors. Since its foundation in 2015, it has established alliances with leading market brands, offering equipment, software, and specialized technical support. Its approach is based on innovation, operational efficiency, and personalized attention. With a forward-looking vision, it supports its clients in their digital transformation processes.",
          telefono: "Phone",
          email: "Email",
          web: "Website",
          direccion: "Address",
        },
      },

      //productos
      abasto: {
        encabezado: {
          titulo: "MONITORING",
          subtitulo: "Features:",
        },
        items: [
          {
            tipo: "texto",
            titulo: "API",
            texto:
              "Flammas offers a complete API to integrate your business processes, both in configuration management, notifications, provisioning processes, inventory processes, CMDB, and many more. Clients like Rakuten use our API to streamline their internal processes. Check the scope of the API in our documentation. Our API is constantly evolving, but always backward compatible so that any existing integration continues to work.",
          },
          {
            tipo: "texto",
            titulo: "Multitenant / MSP",
            texto:
              "Multiple clients with different views, sharing a single platform, with no limit. Common report templates so they only need to apply them to the assets they see. A dashboard system that allows you to provide clients with real-time information, or schedule PDF reports for periodic email delivery. Flammas lets you serve your clients (or even self-service) in an all-in-one solution.",
          },
          {
            tipo: "texto",
            titulo: "Alerts and Notifications",
            texto:
              "Flammas alerts are designed to integrate into existing workflows, from the most basic like email to the most modern like Slack or Telegram. Notifications can also be used to schedule automatic actions such as turning remote systems on/off, activating actuators, or creating incidents in Remedy, Zendesk, JIRA, OTRS, etc. Alerts include escalations, exceptions for special days, planned downtimes, weekends, and many other customization options.",
          },
          {
            tipo: "texto",
            titulo: "Policies",
            texto:
              "They allow you to standardize monitoring and deploy a technology-based monitoring system. They enable managing the configuration of hundreds of systems easily, with just a couple of clicks. Without policies, managing thousands of systems coherently is very difficult and time-consuming. Policies allow you to reuse and distribute changes across large groups of systems.",
          },
          {
            tipo: "texto",
            titulo: "Distributed Monitoring",
            texto:
              "In complex environments, there are networks with limited accessibility that are difficult to supervise through centralized discovery. Our Satellite Servers can autonomously, distributedly, and integrally gather information about the network and systems. Perfect for remote client networks.",
          },
          {
            tipo: "texto",
            titulo: "Omnishell",
            texto:
              "IT automation: execution of remote commands centrally. For the management and configuration of servers and workstations. Leveraging the deployment of monitoring agents, you can also run advanced command sequences remotely.",
          },
          {
            tipo: "texto",
            titulo: "High Scalability",
            texto:
              "The federated design of Flammas allows distributing the entire load among different nodes so that processing load is shared and processed in parallel. Our Command Center allows you to visualize and manage all information together. We have licenses for several hundred thousand agents in operation.",
          },
          {
            tipo: "texto",
            titulo: "Root Cause Monitoring",
            texto:
              "We help find the needle in the haystack. It is much more efficient to visually display the root cause of failure than to just receive hundreds of events per second. Flammas provides the value of service monitoring, which filters all information and shows only what is critical for each department.",
          },
          {
            tipo: "imagen",
            titulo: "Dashboards",
            texto:
              "Each user can create their own dashboard highlighting the most important critical metrics for your team and operations. Keep all team members informed about system performance levels. These screens can be displayed full-screen, shared with external users via a URL, automatically cycled with a timer, or linked together to create custom drilldowns. Dashboards allow infinite ways to display information, adapting to each organization.",
            imagen: "dashboard",
          },
          {
            tipo: "imagen",
            titulo: "Reports",
            texto:
              "The report builder lets you design your own reports, customized with covers, headers, and different contents. Custom layouts can be defined, similar to dashboards, to visualize data in real-time with historical data spanning several years. Predefined reports exist for availability calculation, Top-N, SLA (monthly, weekly, or daily), histograms, graphs, capacity planning reports, event reports, inventory, configuration, and more. Additionally, with the template system, you can offer your clients pre-designed reports.",
            imagen: "report",
          },
        ],
        quintaSeccion: {
          titulo: "+500 INTEGRATIONS:",
          subtitulo: "EXPAND THE POWER OF YOUR MONITORING",
          texto1:
            "We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our clients. We have integrations with current technologies used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our clients. We have integrations with current technologies used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our clients. We have integrations with current technologies used in production environments worldwide.",
          texto2:
            "We support emerging, established, and even legacy technologies.",
        },
      },
      //soporte-Profesional-service
      seccionEncabezado1: {
        titulo: {
          ventas: "SEND US A MESSAGE",
          contacto: "PHONE",
          titulo1: "FLAMMAS FMS PROFESSIONAL SERVICES",
          subtitulo: "OUR TEAM OF EXPERTS IS HERE TO HELP YOU",
          texto:
            "The accumulated experience of our engineers will allow you to face any monitoring challenge. For additional information about our services, please contact us.",
        },
        seccionFormulario: {
          campos: {
            nombres: "(*) First Name:",
            apellidos: "(*) Last Name:",
            email: "(*) Email:",
            empresa: "(*) Company:",
            pais: "(*) Country:",
            mensaje: "(*) Message:",
          },
          placeholder: {
            nombres: "Enter your first name",
            apellidos: "Enter your last name",
            email: "Enter your email",
            empresa: "Enter your company",
            pais: "Enter your country",
            mensaje: "Enter your message",
          },
          aviso:
            "Flammas needs the contact information you provide to reach out to you about our products and services. You can unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please see our Privacy Policy.",
          submit: "Send",
        },
        seccionClienteFinal: {
          titulo1: "PROFESSIONAL SERVICES FOR END CLIENTS",
          items1: {
            texto1:
              "24×7 support extensions beyond the standard support contract.",
            texto2:
              "Customized training, on-site or remote. We offer several certification levels.",
            texto3: "Development of custom features, public or private.",
            texto4:
              "Personnel outsourcing, full or partial. Remote or on-site.",
            texto5:
              "Development of custom integrations (plugins) to integrate monitoring into your applications or expand our current plugin monitoring.",
            texto6:
              "Projects by hour bundles for specific interventions (e.g., migrations, integrations, updates, configuration deployments)",
            texto7:
              "Turnkey full deployment projects. From analysis consulting to coordinating both in-house and third-party teams: project manager, specialist consultant, developers, and even graphic designers.",
          },
        },

        seccionMSP: {
          titulo2: "PROFESSIONAL SERVICES FOR END CLIENTS",
          items2: {
            texto1:
              "Collaboration in implementation with technical staff integrated into your teams.",
            texto2: "External project management for implementation.",
            texto3: "Training of full operation teams.",
            texto4: "Assistance in launching your own SaaS solutions.",
            texto5: "Customized OEM product creation.",
            texto6: "Tailored monitoring engineering.",
          },
        },

        contacto: {
          titulo: "GET IN TOUCH!",
          texto:
            "We love hearing from you. Our team is always here to support you",
          correo: "ventas@flammas.com",
          telefono: "+57 3228396554",
          imagenes: ["94.png", "95.png"],
        },
        quintaSeccion: {
          titulo: "+500 INTEGRATIONS:",
          subtitulo: "EXPAND THE POWER OF YOUR MONITORING",
          texto1:
            "We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide.",
          texto2: "We support emerging, established, and even legacy systems.",
        },

        tituloSoporte: {
          titulo: "FLAMMAS TECHNICAL SUPPORT",
          subtitulo: "WE ARE FLAMMAS EXPERTS",
          texto:
            "We ensure service continuity and provide support to technical teams managing Flammas.",
        },

        seccionFormulario: {
          campos: {
            nombres: "(*) First Name",
            apellidos: "(*) Last Name",
            email: "(*) Email",
            empresa: "(*) Company",
            pais: "(*) Country",
            mensaje: "(*) Message",
          },
          placeholder: {
            nombres: "Enter your first name",
            apellidos: "Enter your last name",
            email: "Enter your email",
            empresa: "Enter your company",
            pais: "Enter your country",
            mensaje: "Enter your message",
          },
          aviso:
            "Flammas needs the contact information you provide us in order to get in touch with you about our products and services. You can unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and our commitment to protecting your privacy, please refer to our Privacy Policy.",
          submit: "Send",
        },
        seccionSoporteTexto: {
          texto:
            "The main goal of the technical support service is to provide assistance to resolve any issues related to installation, operation, and use of Flammas.",
          texto1:
            "The main support channel available to all support customers is our Support System, which ensures online messaging for quick and easy communication between customers and our technical specialists. We provide support in English and Spanish:",
          texto2:
            "Customers with advanced support levels can access support services by phone, calling dedicated numbers. 24/7 support is also available for advanced support levels.",
        },
        seccionViñetas: {
          tituloGlobal: "WE EARN OUR CLIENTS’ TRUST WORLDWIDE",
          items: {
            titulos: {
              titulo1: "Fast & Efficient",
              titulo2: "Comprehensive Support",
              titulo3: "SLA Controlled",
              titulo4: "Reliable Service",
            },
            textos: {
              texto1: "Support provided by Flammas engineering team.",
              texto2:
                "We offer optional 24/7 support for critical environments.",
              texto3: "Our support procedures include strict SLA monitoring.",
              texto4:
                "Our support is the highest valued asset of our platform.",
            },
          },
        },
        seccionIntegraciones: {
          titulo: "+500 INTEGRATIONS:",
          subtitulo: "EXPAND THE POWER OF YOUR MONITORING",
          texto1:
            "We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide. We provide practical solutions to everyday problems through enterprise application plugins in collaboration with our customers. We have integrations with current technologies, used in production environments worldwide.",
          texto2: "We support emerging, established, and even legacy systems.",
        },
      },
      // soluciones - monitorizacion
      soluciones1: {
          monitorizacion1: {
            encabezado: {
              subtitulo: "Flammas Solutions",
              titulo: "Network Monitoring",
              texto:
                "Flammas lets you discover all your network devices and represent their topology on maps that connect interfaces and visualize your network’s structure in detail. Go further by unifying device management with complete observability of your network."
            },
            seccionPrincipal: {
              titulo: "What does network monitoring bring to your company?",
              parrafo1:
                "Nowadays, networks are essential to the business of many companies and organizations. Interruptions or performance loss can have serious consequences, such as service outages or productivity drops. Your system must be able to constantly monitor the status of your networks and their components.",
              parrafo2:
                "That’s why network monitoring is fundamental to prevent incidents or help solve them as quickly as possible when they are unavoidable."
            },
            info: {
              izquierda1_titulo: "From the basics to the unimaginable",
              izquierda1_texto:
                "Bandwidth, packet loss, latency, availability, number of connections. Regardless of origin: routers, APs, switches, firewalls, servers, workstations, IoT. If it has an IP, Flammas can capture the data. We are not limited only to SNMP or agent-based data collection.",
              derecha1_titulo: "IP Management",
              derecha1_texto:
                "Our IPAM system allows you to manage networks, supernets and perform subnetting. You can manage physical locations, reserve IPs, and have an IP map as well as IP usage reports, and alerts when you run out of available IPs. It can integrate with a Microsoft DHCP server.",
              izquierda2_titulo: "Real-time network analysis",
              izquierda2_texto:
                "Netflow is used to obtain real-time statistics from your network devices (routers, switches, firewalls) and provide usage reports, bottlenecks, or help diagnose problems.",
              derecha2_titulo: "High scalability",
              derecha2_texto:
                "Virtually unlimited scalability thanks to Command Center, and our Satellite Servers that allow horizontal scaling and generate tens of thousands of network queries per second in a distributed way. We have clients with more than 100,000 network devices on a single instance.",
              izquierda3_titulo: "Reports and dashboards",
              izquierda3_texto:
                "Flammas collects all kinds of data and offers you a report editor so you can generate them in a personalized way: top N, detailed charts at any time scale, SLA reports, availability reports, timelines, and dozens more.",
              derecha3_titulo: "Configuration management",
              derecha3_texto:
                "Flammas can collect your devices’ configurations, detect when (and where) they change, and recover backups. It can also deploy changes massively on dozens of devices (such as adding a VLAN)."
            },
            funcionalidades: {
              header: "Advanced Features",
              f1_titulo: "Distributed environments",
              f1_texto:
                "Discover and monitor remote devices on client networks autonomously by deploying a simple probe installable on Windows, Raspberrys or small virtual machines. Our satellite servers work autonomously and silently and are capable of managing hundreds of devices.",
              f2_titulo: "No-surprise licensing",
              f2_texto:
                "Know exactly what it will cost, with no surprises, no add-ons, no extra modules. Plan your environment’s growth accurately from day one. In Flammas all included means everything is covered in the initial license cost.",
              f3_titulo: "Security monitoring",
              f3_texto:
                "Control at all times what versions, models and IPs you have. Not only for network devices such as switches, routers, but also firewalls. Set alerts if vulnerable models are used. Send all your systems’ logs to our log console and create correlation alerts.",
              f4_titulo: "Artificial intelligence",
              f4_texto:
                "Let failure thresholds configure themselves automatically, based on everyday usage. Create alerts based on projected resource usage. Generate useful reports to plan your network usage."
            },
            logs: {
              encabezado: {
                subtitulo: "Flammas Solutions",
                titulo: "Log Management",
                texto:
                  "Imagine being able to search for information in logs across all your monitored systems with a single click. If you already have a Flammas agent installed on those machines, why not collect logs as well?"
              },
              izquierda_titulo: "Audit and security (HIPAA, GDPR, ISO 27001)",
              izquierda_texto:
                "The last thing you want is to fail an audit or have to disclose a possible data breach because you didn’t collect the necessary data for an investigation or lack the required data to figure out what happened. If you already monitor those systems, store their logs.",
              cartitas1_titulo:
                "Cost-effective storage for your logs",
              cartitas1_texto:
                "The type of storage used to save logs in Flammas is very affordable compared to other similar tools. With Flammas you’ll save money on long-term storage. The Enterprise license already covers this functionality; you’ll just need to assign more storage on your servers.",
              cartitas2_titulo:
                "Simple and easy information search",
              cartitas2_texto:
                "You don’t need to be a data scientist or normalize the information in a complicated template system. Search strings or patterns with regular expressions and save your searches. As simple as it sounds.",
              minis: {
                texto1: "Forget about formats, parsing or strict definitions.",
                texto2: "Compatible with Linux, Windows and Unix alike.",
                texto3: "Compatible with any plain text log from any application.",
                texto4: "Search through your log history with intuitive and simple queries.",
                texto5: "Easy extraction. No need to install intermediate software or redirect logs over the network.",
                texto6: "Investigate records with intuitive filters and fast performance, visualize them in beautiful Kibana dashboards.",
                texto7: "Your data will always be yours. 100% on-premise local storage.",
                texto8: "Scale as needed. You can increase storage capacity as required."
              }
            },
            observabilidad: {
              header: "The complete monitoring solution for total observability",
              cartas: {
                titulo: "User experience",
                c1_subtitulo: "User experience",
                c1_texto: "Check if your application works as expected. Detect failures before your customers do.",
                c2_titulo: "Application Monitoring (APM)",
                c2_subtitulo: "Application Monitoring (APM)",
                c2_texto: "Monitor your enterprise applications at all levels and get all the APM data you need.",
                c3_titulo: "Virtual environment monitoring",
                c3_subtitulo: "Virtual environment monitoring",
                c3_texto: "Optimize your infrastructure whether hybrid, virtual or cloud.",
                c4_titulo: "Incident management",
                c4_subtitulo: "Incident management",
                c4_texto: "Integrate your infrastructure’s ticketing system into Flammas.",
                c5_titulo: "Remote control",
                c5_subtitulo: "Remote control",
                c5_texto: "All your devices controlled by a tool accessible with just a web browser.",
                c6_titulo: "Service and support management",
                c6_subtitulo: "Service and support management",
                c6_texto: "Measure and monitor your IT stack to detect and solve issues in your IT infrastructure.",
                c7_titulo: "Mainframe monitoring",
                c7_subtitulo: "Mainframe monitoring",
                c7_texto: "Have a single platform to collect and display information regardless of its source.",
                c8_titulo: "Network monitoring",
                c8_subtitulo: "Network monitoring",
                c8_texto: "View all your information together, even when you have thousands of devices to monitor.",
                c9_titulo: "IT inventory",
                c9_subtitulo: "IT inventory",
                c9_texto: "Collect and monitor the status of all IT infrastructure data in a single tool.",
                c10_titulo: "Log collection",
                c10_titulo: "Log collection",
                c10_texto: "Collect, visualize and centralize all your logs in one place."
              }
            },
            quintaSeccion: {
              titulo: "+500 INTEGRATIONS:",
              subtitulo: "EXPAND THE POWER OF YOUR MONITORING",
              texto1:
                "We provide practical solutions to everyday problems through business application plugins in collaboration with our customers. We have integrations with current technologies used in production environments worldwide. We provide practical solutions to everyday problems through business application plugins in collaboration with our customers. We have integrations with current technologies used in production environments worldwide. We provide practical solutions to everyday problems through business application plugins in collaboration with our customers. We have integrations with current technologies used in production environments worldwide.",
              texto2:
                "We support emerging, established and even legacy technologies."
            }
          }
        },
    },
  },
};

// Inicialización
i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
