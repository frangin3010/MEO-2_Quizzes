document.addEventListener('DOMContentLoaded', () => {

    // --- BIBLIOTHÈQUE DE QUIZ ---
    // C'est ici que vous ajouterez vos futurs modules.
    const allQuizzes = {
        'M01': {
    title: 'MEO2-M01 : Concepts Fondamentaux de Développement',
    questions: [
        {
            section: "Chapitre I : Concepts de Développement et de Sous-développement",
            question: "Selon la définition de Grellet 1 citée dans le cours, comment le développement est-il principalement défini ?",
            options: { a: "Comme une augmentation du PIB par habitant", b: "Comme le processus par lequel une société cherche à satisfaire les besoins fondamentaux", c: "Comme l'industrialisation rapide d'une nation", d: "Comme l'adoption de technologies avancées" },
            reponse: "b",
            explication: "Le cours le définit comme 'le processus par lequel une société cherche à satisfaire les besoins - pour tout l'homme et pour tous les hommes - qu'elle considère comme fondamentaux'.",
            page: "4"
        },
        {
            question: "Quelle est la principale différence entre la croissance et le développement économiques ?",
            options: { a: "Il n'y a aucune différence, les termes sont synonymes.", b: "La croissance est qualitative, tandis que le développement est quantitatif.", c: "Le développement est un concept plus large qui inclut la croissance (quantitative) mais aussi des changements structurels et qualitatifs.", d: "La croissance concerne les pays riches, le développement les pays pauvres." },
            reponse: "c",
            explication: "Le développement, au-delà du concept de croissance qui est d'ordre quantitatif, postule aussi des idées de qualité, implique une hausse du bien-être social et une mutation de la société.",
            page: "5"
        },
        {
            question: "Selon l'analyse de Rostow, le développement était essentiellement réduit à quelle dimension ?",
            options: { a: "La dimension sociale", b: "La dimension culturelle", c: "La dimension politique", d: "La dimension économique, soit la croissance du revenu réel par habitant" },
            reponse: "d",
            explication: "Pour Rostow, le concept de développement est réduit à sa dimension économique : la croissance du revenu réel par habitant dans les pays du Sud.",
            page: "5"
        },
        {
            question: "À la fin des années 1960, une rupture s'opère dans la vision du développement, qui intègre davantage :",
            options: { a: "Uniquement la performance technologique", b: "Les aspects social et humain, avec des notions centrées sur les valeurs socioculturelles", c: "L'importance des exportations agricoles", d: "Le rôle de la finance internationale" },
            reponse: "b",
            explication: "À la fin des années 1960, le concept de développement, en intégrant le social et l'humain, subit une véritable révolution sémantique avec la naissance de notions comme le développement endogène, humain, etc.",
            page: "6"
        },
        {
            question: "Après la Seconde Guerre mondiale, quel terme a été largement utilisé pour désigner les pays pauvres par opposition aux pays riches ?",
            options: { a: "Pays émergents", b: "Pays en transition", c: "Sous-développement", d: "Pays de la francophonie" },
            reponse: "c",
            explication: "Le concept de sous-développement a été largement utilisé après la Seconde Guerre mondiale pour désigner les pays pauvres par opposition aux pays riches, industrialisés et développés.",
            page: "7"
        },
        {
            question: "Qui est l'auteur associé au concept de 'Tiers Monde' ?",
            options: { a: "Frédéric Teulon", b: "W. Rostow", c: "Alfred Sauvy", d: "Karl Marx" },
            reponse: "c",
            explication: "Le cours cite plusieurs expressions pour le sous-développement, dont 'Tiers Monde' (A. Sauvy).",
            page: "7"
        },
        {
            question: "Les origines du concept de développement sont étroitement liées à quel événement historique majeur ?",
            options: { a: "La Révolution française", b: "La révolution industrielle en Angleterre", c: "La découverte de l'Amérique", d: "La chute de l'Empire romain" },
            reponse: "b",
            explication: "L'industrialisation et le développement sont deux concepts étroitement liés, car les origines du développement sont contées depuis la révolution industrielle en Angleterre.",
            page: "8"
        },
        {
            question: "Selon le premier courant d'analyse, le sous-développement est interprété comme :",
            options: { a: "Un produit de la colonisation", b: "Un simple retard à combler par des politiques de rattrapage", c: "Une conséquence du climat", d: "Une fatalité culturelle" },
            reponse: "b",
            explication: "Pour le premier courant, le phénomène du sous-développement est l'expression d'un simple retard qu'il fallait combler par des politiques de rattrapage.",
            page: "9"
        },
        {
            question: "Selon le second courant d'analyse (théories 'centre-périphérie'), le sous-développement est considéré comme :",
            options: { a: "Un manque de ressources naturelles", b: "Le produit historique de l'industrialisation et du développement des pays capitalistes avancés", c: "Un échec des politiques locales", d: "Un simple retard de croissance" },
            reponse: "b",
            explication: "Pour le second courant, le sous-développement est le produit historique de l'industrialisation et du développement des pays capitalistes avancés (théorie de la dépendance).",
            page: "9"
        },
        {
            question: "Quelle est la préoccupation centrale du concept de 'Développement Humain' proposé par le PNUD ?",
            options: { a: "L'augmentation du revenu national", b: "Le respect des équilibres macroéconomiques", c: "Placer l'homme au centre du processus de développement", d: "La libéralisation des marchés" },
            reponse: "c",
            explication: "Le concept de développement humain traduit une préoccupation ancienne : placer l'homme au centre du processus de développement.",
            page: "12"
        },
        {
            question: "Quelles sont les trois composantes fondamentales de l'Indice de Développement Humain (IDH) ?",
            options: { a: "PIB, inflation et chômage", b: "Espérance de vie, niveau d'éducation et revenu par habitant", c: "Exportations, importations et balance commerciale", d: "Démocratie, liberté de la presse et droits de l'homme" },
            reponse: "b",
            explication: "L'IDH repose sur trois composantes distinctes : l'espérance de vie, le niveau d'éducation et le revenu par habitant.",
            page: "13"
        },
        {
            question: "Que mesure principalement l'indicateur IPH-1 ?",
            options: { a: "La richesse des pays industrialisés", b: "La pauvreté et le dénuement dans les pays en développement", c: "Les inégalités de genre au niveau mondial", d: "La participation des femmes au marché du travail" },
            reponse: "b",
            explication: "L'IPH-1 mesure la pauvreté dans les pays en développement (faible IDH) en repérant la part de la population qui connaît le dénuement le plus total.",
            page: "14"
        },
        {
            question: "Les indicateurs ISDH et IPF ont été créés pour mesurer spécifiquement :",
            options: { a: "La dégradation de l'environnement", b: "Les inégalités entre les hommes et les femmes", c: "La fracture numérique", d: "La dette publique" },
            reponse: "b",
            explication: "L'indicateur sexospécifique du développement humain (ISDH) et l'indicateur de participation des femmes (IPF) s'intéressent aux inégalités entre les hommes et les femmes.",
            page: "14"
        },
        {
            section: "Chapitre II : Développement Durable et Socialement Durable",
            question: "Quelle est la définition la plus célèbre du développement durable, issue du rapport Brundtland de 1987 ?",
            options: { a: "Un développement qui assure une croissance économique de 5% par an.", b: "Un développement qui ne repose que sur des énergies renouvelables.", c: "Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs.", d: "Un développement qui élimine totalement la pauvreté en moins de 10 ans." },
            reponse: "c",
            explication: "Il s'efforce de répondre aux besoins du présent sans compromettre la capacité de satisfaire ceux des générations futures.",
            page: "16"
        },
        {
            question: "Quels sont les trois aspects ou piliers indissociables du développement durable ?",
            options: { a: "Technologique, agricole et industriel", b: "Politique, culturel et militaire", c: "Respect de l'environnement, équité sociale et rentabilité économique", d: "Liberté, égalité et fraternité" },
            reponse: "c",
            explication: "Le développement durable postule qu'un développement à long terme n'est viable qu'en conciliant trois aspects indissociables : Le respect de l'environnement, L'équité sociale, La rentabilité économique.",
            page: "16"
        },
        {
            question: "Quel rapport, commandé par le Club de Rome en 1972, a alerté sur les dangers d'une croissance économique et démographique continue ?",
            options: { a: "Le rapport Brundtland", b: "Le rapport Meadows ('Halte à la croissance ?')", c: "L'agenda 21", d: "Le Protocole de Kyoto" },
            reponse: "b",
            explication: "C'est surtout le rapport Meadows, publié en 1972 sous le titre Halte à la croissance ? qui va alimenter les débats sur les rapports entre les sociétés humaines et l'environnement.",
            page: "17"
        },
        {
            question: "Quelle conférence des Nations unies de 1972 est considérée comme l'acte initial de la genèse du développement durable ?",
            options: { a: "La conférence de Rio de Janeiro", b: "La conférence de Johannesburg", c: "La conférence de Kyoto", d: "La Conférence de Stockholm" },
            reponse: "d",
            explication: "La conférence des Nations unies tenue à Stockholm en 1972 est généralement considérée comme l'acte initial de la genèse du développement durable.",
            page: "18"
        },
        {
            question: "Quel concept, précurseur du 'développement durable', a émergé de la conférence de Stockholm ?",
            options: { a: "La croissance verte", b: "L'écodéveloppement", c: "L'économie circulaire", d: "La décroissance" },
            reponse: "b",
            explication: "Les discussions... ont néanmoins donné une consistance au concept « écodéveloppement » qui... était alors une préfiguration du concept « développement durable ».",
            page: "18"
        },
        {
            question: "Le Sommet de la Terre de Rio en 1992 a abouti à l'adoption d'un vaste programme d'actions pour le 21ème siècle. Comment s'appelle-t-il ?",
            options: { a: "Les Objectifs du Millénaire", b: "Le Protocole de Kyoto", c: "L'Agenda 21", d: "La Déclaration de Johannesburg" },
            reponse: "c",
            explication: "L'Agenda 21 est un document qui... formule un programme d'actions à réaliser tout au long du 21ème siècle.",
            page: "20"
        },
        {
            question: "Le sommet de Johannesburg en 2002 a mis en avant quel pilier du développement durable, sous la pression des pays du Sud ?",
            options: { a: "Le pilier économique", b: "Le pilier environnemental", c: "Le pilier social", d: "Le pilier technologique" },
            reponse: "c",
            explication: "À Johannesburg, le social était en première ligne, suite à la pression des Etats du Sud.",
            page: "21"
        },
        {
            question: "Le développement socialement durable est-il la même chose que la lutte contre la pauvreté ?",
            options: { a: "Oui, c'est exactement la même chose.", b: "Non, la lutte contre la pauvreté n'en est qu'une dimension, mais le concept est plus large et inclut l'équité et la cohésion sociale.", c: "Oui, mais uniquement dans les pays développés.", d: "Non, le développement socialement durable s'oppose à la lutte contre la pauvreté." },
            reponse: "b",
            explication: "Le cours précise que 'la lutte contre la pauvreté épuise la dimension sociale du développement durable', signifiant que ce dernier est un concept plus large.",
            page: "22"
        },
        {
            question: "Selon le cours, la croissance économique seule suffit-elle à réduire la pauvreté ?",
            options: { a: "Oui, toujours et partout.", b: "Non, la croissance ne suffit pas toujours à réduire la pauvreté, notamment en cas de fortes inégalités.", c: "Oui, mais seulement si elle dépasse 10% par an.", d: "La croissance économique n'a aucun lien avec la pauvreté." },
            reponse: "b",
            explication: "Le texte indique que 'certains pays ont vu la pauvreté se maintenir malgré de forts taux de croissance', montrant que 'la croissance ne suffit pas à réduire la pauvreté'.",
            page: "23"
        },
        {
            question: "Quelle est la notion centrale dans la définition du développement socialement durable ?",
            options: { a: "La notion de 'marché'", b: "La notion de 'profit'", c: "La notion de 'capacités'", d: "La notion de 'technologie'" },
            reponse: "c",
            explication: "On remarque ainsi que la notion de 'capacités' est finalement au cœur de la définition du concept de développement socialement durable.",
            page: "26"
        },
        {
            question: "Le concept de Développement Humain Durable (DHD) est une fusion de deux concepts, lesquels ?",
            options: { a: "Le développement économique et la croissance industrielle", b: "Le développement humain (de A. Sen) et le développement durable", c: "Les programmes d'ajustement structurel et la bonne gouvernance", d: "Le développement socialiste et le développement capitaliste" },
            reponse: "b",
            explication: "C'est la fusion des deux analyses sur le développement humain et le développement durable qui aboutit à la notion de DHD.",
            page: "26"
        },
        {
            question: "Quel économiste est particulièrement associé à la notion de 'capabilités' ?",
            options: { a: "John Maynard Keynes", b: "Milton Friedman", c: "Amartya Sen", d: "Thomas Piketty" },
            reponse: "c",
            explication: "Le concept de DHD est l'œuvre du PNUD avec la collaboration de A. SEN (pour le concept humain). [...] selon Sen toute personne dépourvue de capabilités ne peut pas participer à l'échange.",
            page: "26"
        },
        {
            question: "Lequel de ces éléments N'EST PAS une des formes de capital à préserver dans un développement humain durable ?",
            options: { a: "Capital physique", b: "Capital humain", c: "Capital spéculatif", d: "Capital naturel" },
            reponse: "c",
            explication: "Le cours liste le capital physique, financier, naturel, humain et social comme stocks de capital à protéger et accroître.",
            page: "27"
        },
        {
            question: "Lequel de ces indicateurs a une dominante principalement environnementale ?",
            options: { a: "L'IDH (Indicateur de développement humain)", b: "L'IPH (Indicateur de pauvreté humaine)", c: "L'Empreinte Écologique", d: "L'ISS (Indicateur de santé sociale)" },
            reponse: "c",
            explication: "Parmi les indicateurs, certains... sont à dominante environnementale (empreinte écologique, PNB vert etc.).",
            page: "28"
        },
        {
            question: "En quelle année l'ONU a-t-elle adopté les Objectifs de développement durable (ODD) pour l'horizon 2030 ?",
            options: { a: "2000", b: "2005", c: "2010", d: "2015" },
            reponse: "d",
            explication: "Lors de l'assemblée générale de l'ONU de septembre 2015, 193 pays ont adopté de nouveaux objectifs pour 2030, les Objectifs de développement durable.",
            page: "31"
        },
        {
            question: "Combien d'Objectifs de Développement Durable (ODD) ont été définis dans l'Agenda 2030 ?",
            options: { a: "8", b: "12", c: "17", d: "25" },
            reponse: "c",
            explication: "Les Objectifs de Développement Durable (ODD) définissent 17 priorités pour un développement socialement équitable...",
            page: "31"
        },
        {
            question: "L'ODD numéro 1 concerne :",
            options: { a: "L'accès à une éducation de qualité", b: "L'égalité entre les sexes", c: "L'éradication de la pauvreté", d: "La lutte contre le changement climatique" },
            reponse: "c",
            explication: "Le premier intitulé court adopté par l'ONU est : 1. Eradication de la pauvreté.",
            page: "31"
        },
        {
            section: "Chapitre III : Mécanismes de Développement",
            question: "Qu'est-ce que le Mécanisme pour un Développement Propre (MDP ou CDM) ?",
            options: { a: "Un programme de subventions agricoles de l'Union Européenne", b: "Un dispositif du Protocole de Kyoto pour des projets de réduction de GES dans les pays en développement", c: "Un fonds de la Banque Mondiale pour la lutte contre la corruption", d: "Une agence de notation de la durabilité des entreprises" },
            reponse: "b",
            explication: "Le mécanisme pour un développement propre (MDP) ou Clean Development Mechanism (CDM), dispositif de flexibilité du Protocole de Kyoto (1997), vise à associer directement les PED à la lutte contre le changement climatique.",
            page: "34"
        },
        {
            question: "Quel est le double objectif principal du MDP ?",
            options: { a: "Augmenter les exportations et réduire les importations", b: "Aider les PED à se développer durablement ET aider les pays développés à atteindre leurs objectifs de réduction d'émissions", c: "Financer la recherche fondamentale et la recherche appliquée", d: "Promouvoir le tourisme et préserver la culture locale" },
            reponse: "b",
            explication: "Le MDP a pour objet : Aider les pays en développement à parvenir à un développement durable... et Aider les pays développés... de remplir leurs engagements chiffrés de réduction de leurs émissions.",
            page: "35"
        },
        {
            question: "Comment s'appellent les crédits d'émission générés par un projet MDP, qui sont utilisables sur le marché carbone ?",
            options: { a: "Les Dollars verts", b: "Les Actions carbone", c: "Les CER (Carbon Emission Reduction)", d: "Les Obligations durables" },
            reponse: "c",
            explication: "Ce mécanisme permet... de bénéficier alors de crédits d'émissions (Carbon Emission Reduction (CER)), utilisables ou échangeables sur le marché carbone.",
            page: "35"
        },
        {
            question: "Selon le consensus géopolitique du MDP, qui sont considérés comme les premiers responsables du changement climatique ?",
            options: { a: "Les pays en développement", b: "Les pays développés", c: "Les organisations non gouvernementales", d: "Les entreprises multinationales" },
            reponse: "b",
            explication: "D'après ce consensus, les pays développés, considérés comme premiers responsables du changement climatique, assument cette responsabilité...",
            page: "35"
        },
        {
            question: "Quel est l'un des principaux arguments des pays en développement (PED) dans les négociations climatiques ?",
            options: { a: "Leur 'droit au développement'", b: "Leur supériorité technologique", c: "Leur absence totale d'émissions de GES", d: "Leur souhait de ne pas participer à l'effort mondial" },
            reponse: "a",
            explication: "Les PED font valoir un « droit au développement » car leurs émissions de GES par habitant restent faibles.",
            page: "36"
        },
        {
            question: "La mise en œuvre et la viabilité du mécanisme MDP sont principalement supportées par :",
            options: { a: "Les Nations Unies", b: "Les gouvernements des pays hôtes", c: "Le secteur privé", d: "Les ONG environnementales" },
            reponse: "c",
            explication: "La mise en œuvre et la viabilité du mécanisme sont supportées par le secteur privé, considéré comme le mieux à même de trouver les opportunités de réduction aux coûts les plus faibles.",
            page: "36"
        },
        {
            question: "Quelle autorité un pays doit-il mettre en place pour pouvoir accueillir des projets MDP ?",
            options: { a: "Un Ministère de l'Industrie", b: "Une Autorité Nationale Désignée (AND)", c: "Une Banque Centrale indépendante", d: "Un Conseil Constitutionnel" },
            reponse: "b",
            explication: "Ils ont ainsi la pleine responsabilité de leurs initiatives de politique climatique et doivent dans ce cadre mettre en place une Autorité Nationale Désignée (AND) pour le MDP.",
            page: "37"
        },
        {
            question: "Le mécanisme MDP a-t-il été accessible de la même manière à tous les pays en développement ?",
            options: { a: "Oui, il a été réparti équitablement entre tous les pays.", b: "Non, il est resté marginal pour la majorité des PED et s'est concentré sur les pays émergents.", c: "Oui, seuls les pays africains en ont bénéficié.", d: "Non, il a été réservé aux pays les moins avancés (PMA)." },
            reponse: "b",
            explication: "Le dispositif reste marginal pour la majorité des PED. Le bilan actuel est contrasté car les MDP mondiaux restent polarisés sur les pays émergents.",
            page: "38-39"
        },
        {
            question: "Quel est l'un des principaux points de critique adressés aux projets MDP ?",
            options: { a: "Leur coût trop élevé pour les pays développés", b: "Leur manque d'efficacité énergétique", c: "La question de l'additionalité effective (le projet aurait-il eu lieu sans le MDP ?)", d: "Leur concentration sur l'énergie solaire uniquement" },
            reponse: "c",
            explication: "Les principaux points de critique portent sur le contenu et les logiques des projets... D'une part, la question de l'additionalité effective des projets fait toujours débat.",
            page: "38"
        },
        {
            question: "Selon l'analyse finale du cours, quelles sont les retombées des projets MDP dans les pays en développement ?",
            options: { a: "Un succès total avec un transfert massif de technologie", b: "Mitigées : faible réception de technologie et vague contribution au développement durable", c: "Un échec complet sans aucun projet réalisé", d: "Uniquement des bénéfices financiers pour les élites locales" },
            reponse: "b",
            explication: "L'analyse des retombées attendues des projets de Mécanisme de Développement Propre (MDP) dans les pays en développement montre qu'elles sont mitigées : faible réception de technologie et vague contribution au développement durable.",
            page: "40"
        }
    ]
},

        //Module 02

        
        // Vous pourrez ajouter 'M05', etc. ici
     
    };

    // --- LOGIQUE DE L'APPLICATION ---

    // --- Références aux éléments HTML ---
    const quizSelect = document.getElementById('quiz-select');
    const quizContent = document.getElementById('quiz-content');
    const initialMessage = document.getElementById('initial-message');
    const courseTitle = document.getElementById('course-title');
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const historyScoresContainer = document.getElementById('history-scores');
    const userInput = document.getElementById('user-name');
    const MAX_HISTORY = 5;

    // --- Variables d'état pour suivre le quiz actuel ---
    let currentQuizData = [];
    let currentModuleId = '';

    // --- Fonctions de gestion de l'historique (dépendantes du module) ---
    function getHistoryKey() {
        return `multiUserQuizHistory_${currentModuleId}`;
    }

    function getFullHistory() {
        try {
            const history = localStorage.getItem(getHistoryKey());
            return history ? JSON.parse(history) : {};
        } catch (e) {
            console.error("Erreur lors de la lecture de l'historique :", e);
            return {};
        }
    }

    function saveScore(userName, score) {
        if (!userName || userName.trim() === '' || !currentModuleId) return;
        const fullHistory = getFullHistory();
        if (!fullHistory[userName]) {
            fullHistory[userName] = [];
        }
        const userHistory = fullHistory[userName];
        
        const newEntry = {
            score: score,
            total: currentQuizData.length,
            date: new Date().toLocaleString('fr-FR')
        };
        userHistory.unshift(newEntry);
        if (userHistory.length > MAX_HISTORY) {
            userHistory.pop();
        }
        
        localStorage.setItem(getHistoryKey(), JSON.stringify(fullHistory));
    }

    function loadUserHistory(userName) {
        historyScoresContainer.innerHTML = '';
        if (!currentModuleId) return;

        const fullHistory = getFullHistory();
        const userHistory = (userName && fullHistory[userName]) ? fullHistory[userName] : [];
        
        if (userHistory.length === 0) {
            historyScoresContainer.innerHTML = `<p>Aucune tentative pour <strong>${userName || 'cet utilisateur'}</strong> sur ce module.</p>`;
            return;
        }
        userHistory.forEach(entry => {
            const scoreCard = document.createElement('div');
            scoreCard.className = 'score-card';
            scoreCard.innerHTML = `
                <span class="score-value">${entry.score} / ${entry.total}</span>
                <span class="score-date">${entry.date}</span>
            `;
            historyScoresContainer.appendChild(scoreCard);
        });
    }

    // --- Fonctions du Quiz ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function buildQuiz() {
        let currentSection = "";
        quizContainer.innerHTML = '';
        currentQuizData.forEach((item, index) => {
            if (item.section && item.section !== currentSection) {
                currentSection = item.section;
                const sectionTitle = document.createElement('h2');
                sectionTitle.className = 'section-title';
                sectionTitle.textContent = currentSection;
                quizContainer.appendChild(sectionTitle);
            }

            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.id = 'question-' + index;

            const questionText = document.createElement('p');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${item.question}`;
            questionBlock.appendChild(questionText);
            
            const optionsArray = Object.entries(item.options);
            shuffleArray(optionsArray);

            const displayLetters = ['a', 'b', 'c', 'd'];
            optionsArray.forEach(([key, value], i) => {
                const label = document.createElement('label');
                label.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'question' + index;
                radio.value = key;

                label.appendChild(radio);
                label.append(` ${displayLetters[i]}) ${value}`);
                questionBlock.appendChild(label);
            });
            quizContainer.appendChild(questionBlock);
        });
    }

    function showResults() {
        const userName = userInput.value.trim();
        let score = 0;
        
        currentQuizData.forEach((item, index) => {
            const questionBlock = document.getElementById('question-' + index);
            const selectedOption = questionBlock.querySelector(`input[name="question${index}"]:checked`);
            
            const oldExplanation = questionBlock.querySelector('.explanation');
            if (oldExplanation) oldExplanation.remove();
            
            questionBlock.querySelectorAll('.option').forEach(label => {
                label.classList.remove('correct', 'incorrect');
            });

            if (selectedOption) {
                const userAnswer = selectedOption.value;
                if (userAnswer === item.reponse) {
                    score++;
                    selectedOption.parentElement.classList.add('correct');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                    const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                    if (correctOptionInput) correctOptionInput.parentElement.classList.add('correct');
                }
            } else {
                const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                if (correctOptionInput) correctOptionInput.parentElement.classList.add('correct');
            }
            
            const explanation = document.createElement('div');
            explanation.className = 'explanation';
            explanation.innerHTML = `<strong>Explication :</strong> ${item.explication} <em>(Page : ${item.page})</em>`;
            questionBlock.appendChild(explanation);
        });

        resultContainer.innerHTML = `Votre score : ${score} / ${currentQuizData.length}`;
        saveScore(userName, score);
        loadUserHistory(userName);
        submitBtn.textContent = "Réessayer le quiz";
    }

    function resetQuiz() {
        resultContainer.innerHTML = '';
        submitBtn.textContent = "Vérifier mes réponses";
        buildQuiz();
    }

    // --- Logique principale de l'application ---
    function populateDropdown() {
        for (const moduleId in allQuizzes) {
            const option = document.createElement('option');
            option.value = moduleId;
            option.textContent = allQuizzes[moduleId].title;
            quizSelect.appendChild(option);
        }
    }

    function loadModule(moduleId) {
        if (moduleId && allQuizzes[moduleId]) {
            currentModuleId = moduleId;
            currentQuizData = allQuizzes[moduleId].questions;
            courseTitle.textContent = allQuizzes[moduleId].title;
            
            initialMessage.style.display = 'none';
            quizContent.style.display = 'block';
            
            resetQuiz();
            loadUserHistory(userInput.value.trim());
        } else {
            currentModuleId = '';
            currentQuizData = [];
            initialMessage.style.display = 'block';
            quizContent.style.display = 'none';
        }
    }

    // --- Écouteurs d'événements ---
    quizSelect.addEventListener('change', (e) => {
        loadModule(e.target.value);
    });
    
    submitBtn.addEventListener('click', () => {
        if (submitBtn.textContent === "Réessayer le quiz") {
            resetQuiz();
        } else {
            showResults();
        }
    });

    userInput.addEventListener('input', () => {
        loadUserHistory(userInput.value.trim());
    });

    // --- Initialisation au chargement de la page ---
    populateDropdown();
});



















