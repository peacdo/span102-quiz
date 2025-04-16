export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResults: boolean;
  answers: string[];
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "Me ______ las manzanas.",
    options: ["gusta", "gustan", "gusto"],
    correctAnswer: "gustan",
    explanation: "Since 'manzanas' is plural, we use 'gustan'. Rule: Use 'gustan' with plural nouns. Remember: me/te/le/nos/os/les + gusta (singular) or gustan (plural)"
  },
  {
    id: 2,
    question: "¿Te ______ el chocolate caliente?",
    options: ["gustan", "gusta", "gustas"],
    correctAnswer: "gusta",
    explanation: "Since 'chocolate caliente' is singular, we use 'gusta'. Rule: Use 'gusta' with singular nouns."
  },
  {
    id: 3,
    question: "A Juan y a mí nos ______ las hamburguesas.",
    options: ["gusta", "gustan", "gusto"],
    correctAnswer: "gustan",
    explanation: "Since 'hamburguesas' is plural, we use 'gustan'. Even though it's two people (Juan y yo = nos), the verb agrees with the noun."
  },
  {
    id: 4,
    question: "¿Qué fruta es roja y pequeña?",
    options: ["La fresa", "La cebolla", "El pescado"],
    correctAnswer: "La fresa",
    explanation: "La fresa (strawberry) is red and small, while cebolla (onion) and pescado (fish) don't match these characteristics."
  },
  {
    id: 5,
    question: "¿Cuál de estos es un postre?",
    options: ["El pollo", "El helado", "La zanahoria"],
    correctAnswer: "El helado",
    explanation: "El helado (ice cream) is a dessert, while pollo (chicken) and zanahoria (carrot) are not desserts."
  },
  {
    id: 6,
    question: "¿Qué bebida es típica del desayuno?",
    options: ["El café", "El arroz", "La lechuga"],
    correctAnswer: "El café",
    explanation: "El café (coffee) is a typical breakfast drink, while arroz (rice) and lechuga (lettuce) are not drinks."
  },
  {
    id: 7,
    question: "A Pedro le ______ los refrescos.",
    options: ["gusta", "gustan", "gustas"],
    correctAnswer: "gustan",
    explanation: "Since 'refrescos' (soft drinks) is plural, we use 'gustan'. Remember: le + gustan with plural nouns."
  },
  {
    id: 8,
    question: "¿Qué comida es de color naranja?",
    options: ["La zanahoria", "El queso", "La leche"],
    correctAnswer: "La zanahoria",
    explanation: "La zanahoria (carrot) is orange in color, while queso (cheese) is usually yellow/white and leche (milk) is white."
  },
  {
    id: 9,
    question: "No me ______ el pescado, pero me ______ las ensaladas.",
    options: ["gusta / gustan", "gustan / gusta", "gusta / gusta"],
    correctAnswer: "gusta / gustan",
    explanation: "First blank: 'pescado' is singular (gusta), second blank: 'ensaladas' is plural (gustan). Each verb agrees with its own noun."
  },
  {
    id: 10,
    question: "A Juan _______ el baloncesto.",
    options: ["le gusta", "le gustan", "les gusta"],
    correctAnswer: "le gusta",
    explanation: "Since 'baloncesto' is singular and we're talking about Juan (third person singular), we use 'le gusta'."
  },
  {
    id: 11,
    question: "A nosotros _______ las películas de acción.",
    options: ["nos gusta", "nos gustan", "le gustan"],
    correctAnswer: "nos gustan",
    explanation: "Since 'películas' is plural and we're using 'nosotros', we use 'nos gustan'. The verb agrees with 'películas' (plural)."
  },
  {
    id: 12,
    question: "A mis amigos no _______ la música clásica.",
    options: ["les gusta", "les gustan", "le gusta"],
    correctAnswer: "les gusta",
    explanation: "Since 'música clásica' is singular but we're talking about multiple people (mis amigos), we use 'les gusta'. Remember: pronoun agrees with people, verb agrees with thing."
  },
  {
    id: 13,
    question: "¿Cómo se dice 'Me gustan las fresas' en español?",
    options: ["Me gusta las fresas", "Me gustan las fresas", "Me gustan la fresa"],
    correctAnswer: "Me gustan las fresas",
    explanation: "With plural nouns (fresas), we use the plural form 'gustan'. This is the correct translation of 'I like strawberries'."
  },
  {
    id: 14,
    question: "A ti no _______ el café con leche.",
    options: ["te gusta", "te gustan", "le gusta"],
    correctAnswer: "te gusta",
    explanation: "Since 'café con leche' is singular and we're talking to 'tú', we use 'te gusta'."
  },
  {
    id: 15,
    question: "A Rosa y a Jaime _______ ir a la playa.",
    options: ["les gusta", "les gustan", "le gusta"],
    correctAnswer: "les gusta",
    explanation: "With infinitives (ir), we always use singular form (gusta), but since it's two people we use 'les'. Rule: infinitives always use singular form."
  },
  {
    id: 16,
    question: "¿Cómo se dice 'We like to go out at night'?",
    options: ["Nos gustan salir de noche.", "Nos gusta salir de noche.", "Nos gusta salir en la noche."],
    correctAnswer: "Nos gusta salir de noche.",
    explanation: "With infinitives (salir), we always use singular form (gusta). 'De noche' is the correct expression for 'at night'."
  },
  {
    id: 17,
    question: "A vosotros _______ la paella, ¿verdad?",
    options: ["os gusta", "os gustan", "te gusta"],
    correctAnswer: "os gusta",
    explanation: "Since 'paella' is singular and we're using 'vosotros' (plural you), we use 'os gusta'."
  },
  {
    id: 18,
    question: "A ellos no _______ mucho ver la tele.",
    options: ["les gusta", "le gusta", "les gustan"],
    correctAnswer: "les gusta",
    explanation: "With infinitives (ver), we use singular form (gusta), and since it's 'ellos' (they) we use 'les'."
  },
  {
    id: 19,
    question: "A Marta _______ los churros con chocolate.",
    options: ["le encanta", "le encantan", "le encantamos"],
    correctAnswer: "le encantan",
    explanation: "Since 'churros' is plural, we use 'encantan'. The pronoun 'le' is used because it's about Marta (third person). Encantar follows the same rules as gustar."
  },
  {
    id: 20,
    question: "A nosotros no _______ la comida picante.",
    options: ["nos gusta", "nos gustan", "les gusta"],
    correctAnswer: "nos gusta",
    explanation: "Since 'comida picante' (spicy food) is singular and we're using 'nosotros', we use 'nos gusta'."
  },
  {
    id: 21,
    question: "A mis amigos les _______ las fresas y las manzanas.",
    options: ["encanta", "encantan", "encantas"],
    correctAnswer: "encantan",
    explanation: "Since 'fresas y manzanas' are plural items, we use 'encantan'. Multiple items require plural form."
  },
  {
    id: 22,
    question: "Yo _______ (poner) la mesa antes de la cena.",
    options: ["pono", "pongo", "pone"],
    correctAnswer: "pongo",
    explanation: "'Poner' (to put/to set) is irregular in the yo form. The correct conjugation is 'pongo'. Used here in the context of 'setting the table'."
  },
  {
    id: 23,
    question: "¿Tú _______ (tener) hambre?",
    options: ["tienes", "tiene", "tenes"],
    correctAnswer: "tienes",
    explanation: "The correct 'tú' form of 'tener' is 'tienes'. Full conjugation: tengo, tienes, tiene, tenemos, tenéis, tienen."
  },
  {
    id: 24,
    question: "Mis padres _______ (querer) comer en un restaurante español.",
    options: ["quiero", "queremos", "quieren"],
    correctAnswer: "quieren",
    explanation: "For third person plural (ellos/ellas/mis padres), the correct form of 'querer' (to want) is 'quieren'."
  },
  {
    id: 25,
    question: "¿Cuál de estos es un postre?",
    options: ["La tarta", "El atún", "El cordero"],
    correctAnswer: "La tarta",
    explanation: "La tarta (cake/pie) is a dessert, while atún (tuna) and cordero (lamb) are types of meat/fish."
  },
  {
    id: 26,
    question: "Si quiero desayunar, puedo tomar...",
    options: ["espinacas y sardinas", "leche y pan tostado", "pescado y chuletas"],
    correctAnswer: "leche y pan tostado",
    explanation: "Leche y pan tostado (milk and toast) are typical breakfast items, while the others (spinach and sardines, fish and chops) are not typical breakfast foods."
  },
  {
    id: 27,
    question: "¿Cuál de estas opciones es un tipo de carne?",
    options: ["El pescado", "El cordero", "El yogur"],
    correctAnswer: "El cordero",
    explanation: "'El cordero' means lamb and is a type of meat, while 'pescado' is fish and 'yogur' is yogurt."
  },
  {
    id: 28,
    question: "Yo _______ (hacer) la tarea todas las noches.",
    options: ["haco", "hago", "hace"],
    correctAnswer: "hago",
    explanation: "The verb 'hacer' (to do/make) is irregular in the yo form. The correct conjugation is 'hago'. Full conjugation: hago, haces, hace, hacemos, hacéis, hacen."
  },
  {
    id: 29,
    question: "Mis amigos _______ (tener) una casa en la playa.",
    options: ["tiene", "tenemos", "tienen"],
    correctAnswer: "tienen",
    explanation: "For third person plural (ellos/ellas/mis amigos), the correct form of 'tener' is 'tienen'. Remember the irregular conjugation: tengo, tienes, tiene, tenemos, tenéis, tienen."
  },
  {
    id: 30,
    question: "¿Tú _______ (venir) a la fiesta esta noche?",
    options: ["vienes", "vengo", "viene"],
    correctAnswer: "vienes",
    explanation: "For the tú form, the correct conjugation of 'venir' (to come) is 'vienes'. Full conjugation: vengo, vienes, viene, venimos, venís, vienen."
  },
  {
    id: 31,
    question: "Nosotros _______ (querer) viajar a España el próximo verano.",
    options: ["queremos", "quiero", "quieren"],
    correctAnswer: "queremos",
    explanation: "For nosotros form, the correct conjugation of 'querer' (to want) is 'queremos'. Full conjugation: quiero, quieres, quiere, queremos, queréis, quieren."
  },
  {
    id: 32,
    question: "Mi hermano no _______ (poder) comer gluten.",
    options: ["puede", "puedo", "pueden"],
    correctAnswer: "puede",
    explanation: "For third person singular (él/ella/mi hermano), the correct form of 'poder' is 'puede'. This is a stem-changing verb (o→ue): puedo, puedes, puede, podemos, podéis, pueden."
  },
  {
    id: 33,
    question: "Cuando hace frío, yo _______ (poner) un abrigo.",
    options: ["pono", "pongo", "pones"],
    correctAnswer: "pongo",
    explanation: "The verb 'poner' is irregular in the yo form. The correct conjugation is 'pongo'. Full conjugation: pongo, pones, pone, ponemos, ponéis, ponen."
  },
  {
    id: 34,
    question: "Mis amigos y yo _______ (salir) los viernes por la noche.",
    options: ["salgo", "salen", "salimos"],
    correctAnswer: "salimos",
    explanation: "For nosotros form (my friends and I), the correct conjugation of 'salir' is 'salimos'. Full conjugation: salgo, sales, sale, salimos, salís, salen."
  },
  {
    id: 35,
    question: "Mi madre siempre _______ (decir) la verdad.",
    options: ["dices", "dice", "digo"],
    correctAnswer: "dice",
    explanation: "For third person singular (él/ella/mi madre), the correct form of 'decir' is 'dice'. Full conjugation: digo, dices, dice, decimos, decís, dicen."
  },
  {
    id: 36,
    question: "¿Tú _______ (ver) muchas películas en el cine?",
    options: ["ves", "ve", "veo"],
    correctAnswer: "ves",
    explanation: "For the tú form, the correct conjugation of 'ver' (to see) is 'ves'. Full conjugation: veo, ves, ve, vemos, veis, ven."
  },
  {
    id: 37,
    question: "Los estudiantes _______ (dormir) temprano antes de un examen.",
    options: ["duerme", "duermen", "dormimos"],
    correctAnswer: "duermen",
    explanation: "For third person plural (ellos/ellas/los estudiantes), the correct form of 'dormir' is 'duermen'. This is a stem-changing verb (o→ue): duermo, duermes, duerme, dormimos, dormís, duermen."
  }
]; 