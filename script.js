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
'M02': {
    title: 'MEO2-M02 : Politiques, Marketing et Commercialisation de l\'innovation',
    questions: [
        {
            section: "Chapitre 1 : Politiques publiques de soutien et de financement",
            question: "Selon l'OCDE, comment l'innovation est-elle définie ?",
            options: { a: "Comme une simple découverte scientifique", b: "Comme la mise en œuvre d'un produit, service, procédé, ou méthode, nouveau ou sensiblement amélioré", c: "Comme le processus de recherche fondamentale uniquement", d: "Comme l'achat de nouvelles technologies" },
            reponse: "b",
            explication: "L'OCDE définit l'innovation comme la mise en œuvre d'un produit (bien ou service), d'un processus, d'une méthode de commercialisation ou d'une méthode organisationnelle, nouveau ou sensiblement amélioré.",
            page: "7"
        },
        {
            question: "Quelle est la différence fondamentale entre une invention et une innovation ?",
            options: { a: "L'invention est le fait de l'entrepreneur, l'innovation est le fait du chercheur", b: "Il n'y a aucune différence, les deux termes sont synonymes", c: "L'invention est la solution technique, l'innovation est son application réussie sur le marché", d: "L'invention concerne les produits, l'innovation concerne les services" },
            reponse: "c",
            explication: "L'innovation est l'application réussie d'une invention dans le domaine économique. L'invention est une condition nécessaire mais pas suffisante pour l'innovation.",
            page: "8"
        },
        {
            question: "Parmi les trois branches de la R&D, laquelle consiste en des travaux pour acquérir des connaissances sans perspective d'application directe ?",
            options: { a: "La recherche appliquée", b: "Le développement expérimental", c: "La recherche fondamentale", d: "La recherche-action" },
            reponse: "c",
            explication: "La recherche fondamentale consiste en des travaux entrepris en vue d'acquérir de nouvelles connaissances indépendamment des perspectives d'application.",
            page: "8"
        },
        {
            question: "Quel est l'un des enjeux majeurs de l'innovation pour une entreprise dans un marché concurrentiel ?",
            options: { a: "Réduire le nombre d'employés", b: "Augmenter les prix de tous ses produits", c: "Se différencier et créer un avantage concurrentiel", d: "Maintenir des méthodes de production traditionnelles" },
            reponse: "c",
            explication: "L'innovation permet à l'entreprise de se différencier par rapport à la concurrence, d'obtenir des performances supérieures et d'anticiper les besoins des consommateurs.",
            page: "9"
        },
        {
            question: "L'innovation de produit concerne :",
            options: { a: "La mise en place d'un nouveau processus de production", b: "La conception d'un bien matériel ou d'un service nouveau ou sensiblement amélioré", c: "Un changement dans l'organisation du lieu de travail", d: "Une nouvelle méthode de conditionnement" },
            reponse: "b",
            explication: "L'innovation de produit concerne la conception d'un bien matériel ou d'un service, qui soit nouveau ou sensiblement amélioré sur le plan technologique ou de l'usage.",
            page: "11"
        },
        {
            question: "Une innovation qui vise à réduire les délais et les coûts de production en modifiant la manière de produire est une innovation de :",
            options: { a: "Produit", b: "Commercialisation", c: "Organisation", d: "Procédé" },
            reponse: "d",
            explication: "L'innovation de procédé a trait à la mise en place d'un processus de production ou de distribution nouvelle ou améliorée, avec pour effet la réduction des délais et des coûts.",
            page: "11"
        },
        {
            question: "L'introduction de changements dans la présentation d'un produit ou le mode de commercialisation est une innovation de :",
            options: { a: "Procédé", b: "Commercialisation (ou marketing)", c: "Produit", d: "Organisation" },
            reponse: "b",
            explication: "L'innovation de commercialisation a pour but d'améliorer les ventes par des changements dans la présentation, le conditionnement ou la promotion du produit.",
            page: "11"
        },
        {
            question: "Comment appelle-t-on une innovation qui consiste en une modification profonde occasionnant une transformation des méthodes de production ?",
            options: { a: "Innovation incrémentale", b: "Innovation d'adaptation", c: "Innovation majeure ou radicale", d: "Innovation d'assemblage" },
            reponse: "c",
            explication: "Les innovations majeures consistent à une modification profonde dans l'évolution de procédés ou des produits, créant de nouveaux marchés ou modifiant les comportements.",
            page: "12"
        },
        {
            question: "Les perfectionnements apportés aux produits existants pour améliorer la qualité ou la productivité sont des innovations de type :",
            options: { a: "Radical", b: "Majeure", c: "Incrémentale ou mineure", d: "De rupture" },
            reponse: "c",
            explication: "Les innovations incrémentales constituent des perfectionnements apportés aux produits ou procédés existants. Elles ne bouleversent pas les conditions d'usage.",
            page: "12"
        },
        {
            question: "Quel est l'un des outils de politique publique pour encourager la R&D privée ?",
            options: { a: "L'augmentation des impôts sur les sociétés", b: "La mise en place de subventions ou de dispositifs fiscaux comme le crédit d'impôt", c: "La limitation des brevets", d: "L'interdiction de la coopération entre entreprises" },
            reponse: "b",
            explication: "Le tableau des politiques publiques mentionne 'Subvention, dispositifs fiscaux (crédit d'impôt, aide fiscale)' pour encourager la R&D privée.",
            page: "13"
        },
        {
            question: "La création de pôles de compétitivité est une politique publique visant à :",
            options: { a: "Soutenir la croissance des entreprises individuellement", b: "Augmenter les bénéfices de la recherche publique", c: "Renforcer la coopération et les partenariats entre acteurs (privés et publics)", d: "Encourager uniquement les startups" },
            reponse: "c",
            explication: "Les politiques de 'Renforcer la coopération et les partenariats' incluent la 'Création de pôles de compétitivité'.",
            page: "14"
        },
        {
            section: "Chapitre 2: Marketing de l'innovation",
            question: "Laquelle de ces étapes fait partie du cycle commercial d'un produit innovant ?",
            options: { a: "La distribution de dividendes", b: "L'étude de marché", c: "Le rapport annuel", d: "L'audit comptable" },
            reponse: "b",
            explication: "Le cycle commercial d'un produit innovant comporte plusieurs étapes, dont l'étude de marché, la stratégie marketing, la planification commerciale, etc.",
            page: "15"
        },
        {
            question: "Quel est l'objectif du 'marketing mix' dans une stratégie d'innovation ?",
            options: { a: "Définir la structure hiérarchique de l'entreprise", b: "Savoir placer ou positionner les produits sur le(s) marché(s)", c: "Calculer la rentabilité du projet", d: "Protéger l'innovation par un brevet" },
            reponse: "b",
            explication: "Il s'agit de définir la composition commerciale (marketing mix) qui va consister à savoir placer ou positionner les produits sur le(s) marché(s).",
            page: "16"
        },
        {
            question: "Quels éléments, relevant du droit d'auteur, sont systématiquement présents dans la documentation publicitaire ?",
            options: { a: "Des secrets d'affaires", b: "Des formules mathématiques", c: "Des expressions d'idées et de concepts qui constituent des 'œuvres originales'", d: "Des données brutes non protégées" },
            reponse: "c",
            explication: "La documentation publicitaire contient presque systématiquement des expressions d'idées et de concepts qui constituent des « œuvres originales » qui relèvent du droit d'auteur.",
            page: "16"
        },
        {
            question: "Lequel de ces coûts n'est PAS directement lié à la protection de la propriété intellectuelle d'une innovation ?",
            options: { a: "Les coûts d'acquisition et de conservation des droits", b: "Les coûts de production des matières premières", c: "Les coûts liés à la surveillance de la propriété intellectuelle", d: "Les coûts liés au respect des droits de PI" },
            reponse: "b",
            explication: "Pour évaluer les coûts de la protection, il faut prendre en compte les coûts de création, acquisition, conservation, surveillance et respect des droits de PI.",
            page: "17"
        },
        {
            question: "Avant de lancer un produit sur le marché, de quoi l'entreprise doit-elle être certaine ?",
            options: { a: "D'avoir l'accord de tous ses concurrents", b: "D'être titulaire de tous les droits de propriété intellectuelle attachés au produit", c: "D'avoir réalisé un bénéfice l'année précédente", d: "Que le produit est parfait et n'aura jamais besoin d'amélioration" },
            reponse: "b",
            explication: "L'entreprise responsable du lancement doit être certaine d'être titulaire de tous les droits de propriété intellectuelle attachés à son produit, ou avoir dûment acquis ces droits.",
            page: "17"
        },
        {
            question: "Les slogans et les motifs sonores publicitaires peuvent être protégés par :",
            options: { a: "Uniquement le droit des brevets", b: "Uniquement le secret d'affaires", c: "Le droit d'auteur ou le droit des marques", d: "Uniquement le droit des dessins et modèles" },
            reponse: "c",
            explication: "Les slogans et les motifs sonores publicitaires peuvent être protégés par le droit d'auteur ou par le droit des marques.",
            page: "18"
        },
        {
            question: "Pour avertir le public de la protection par droit d'auteur, quelle mention peut-on apposer ?",
            options: { a: "Le symbole ™", b: "Le symbole ®", c: "Le mot 'Copyright' ou le symbole ©", d: "Le mot 'Breveté'" },
            reponse: "c",
            explication: "On peut avertir le public en apposant une mention de réserve du droit d'auteur par le mot 'Copyright' ou ©.",
            page: "19"
        },
        {
            question: "Parmi les actes proscrits en matière de publicité, on trouve :",
            options: { a: "L'utilisation d'éléments créatifs originaux", b: "La comparaison objective avec un concurrent", c: "L'utilisation d'œuvres de tiers sans l'autorisation de leur propriétaire", d: "La protection de sa marque par le symbole ®" },
            reponse: "c",
            explication: "Utiliser des éléments d'autrui et surtout protégés sans l'autorisation de leur propriétaire ou titulaire de droit peut être lourd de conséquences.",
            page: "20"
        },
        {
            question: "Dans la phase de conception de l'idée, que peut faire une entreprise pour trouver des idées innovantes ?",
            options: { a: "Ignorer ses clients et fournisseurs", b: "Mettre en place un système de veille et d'écoute de son environnement", c: "Copier exactement les produits des concurrents", d: "Se concentrer uniquement sur ses processus internes" },
            reponse: "b",
            explication: "Pour s'informer et trouver des idées, l'entreprise doit être à l'écoute de son environnement : veille, écoute des clients, surveillance des technologies, etc.",
            page: "21"
        },
        {
            question: "Lors de la phase d'évaluation, que permet la vérification de la liberté d'exploitation ?",
            options: { a: "De savoir si l'idée est rentable", b: "De s'assurer que l'innovation ne viole pas les droits de propriété intellectuelle de tiers", c: "De définir la stratégie marketing", d: "De tester le prototype" },
            reponse: "b",
            explication: "La validation de l'idée passe par la vérification de l'originalité et de la liberté d'exploitation, pour s'assurer de ne pas être en contrefaçon.",
            page: "22"
        },
        {
            question: "À quoi sert principalement le 'business plan' dans la phase de développement d'une innovation ?",
            options: { a: "C'est un document purement technique pour les ingénieurs", b: "C'est un support pour que les partenaires financiers et techniques apprécient la qualité du projet", c: "C'est un manuel d'utilisation pour le client final", d: "C'est un rapport annuel pour les actionnaires" },
            reponse: "b",
            explication: "Le plan de développement ou business plan est un support indispensable sur lequel les partenaires financiers et techniques se baseront pour apprécier la qualité et le sérieux du projet.",
            page: "22"
        },
        {
            question: "De quoi dépend principalement la pérennité d'une innovation, en plus de son positionnement sur le marché ?",
            options: { a: "Du prix de lancement le plus bas possible", b: "De l'absence totale de communication", c: "De la capacité de l'entreprise à anticiper les évolutions (veille technologique)", d: "De la complexité du produit" },
            reponse: "c",
            explication: "La pérennité de l'innovation dépend de son positionnement mais aussi de la capacité de l'entreprise à anticiper toute évolution sur le plan technique, concurrentiel et commercial.",
            page: "23"
        },
        {
            section: "Chapitre 3: Diffusion et commercialisation",
            question: "La valorisation 'externe' d'une innovation consiste à :",
            options: { a: "Utiliser l'innovation uniquement pour soi-même", b: "Lutter contre la contrefaçon", c: "Autoriser l'utilisation de l'innovation par des tiers moyennant des royalties", d: "Communiquer sur son patrimoine intellectuel" },
            reponse: "c",
            explication: "La valorisation « externe » consiste à autoriser l'utilisation de votre innovation par d'autres personnes physiques ou morales moyennant des royalties.",
            page: "24"
        },
        {
            question: "Quel processus vise à ajouter de la valeur aux résultats de recherche pour les transformer en produits ou services commercialisables ?",
            options: { a: "Le transfert", b: "La commercialisation", c: "La valorisation", d: "La publication" },
            reponse: "c",
            explication: "La valorisation peut être définie comme un processus qui vise à ajouter de la valeur aux résultats de recherche... en vue de les transformer en des produits, procédés, services utilisables ou commercialisables.",
            page: "25"
        },
        {
            question: "Comment se nomme le mouvement de transmission de connaissances et de savoir-faire entre des unités de recherche et le secteur privé ?",
            options: { a: "La valorisation", b: "Le transfert", c: "La commercialisation", d: "La cession" },
            reponse: "b",
            explication: "Le transfert est perçu comme un mouvement de transmission et de réception des connaissances et de savoir-faire entre partenaires.",
            page: "25"
        },
        {
            question: "La mise sur le marché d'une innovation sous forme de produit, procédé ou service est la définition de :",
            options: { a: "La valorisation", b: "Le transfert", c: "La commercialisation", d: "La licence" },
            reponse: "c",
            explication: "La commercialisation est la mise sur le marché par une entreprise sous forme de produit, procédé, service d'une innovation issue de l'exploitation commerciale des droits.",
            page: "25"
        },
        {
            question: "Qu'est-ce qu'un contrat de cession d'un droit de propriété industrielle ?",
            options: { a: "Un contrat de location du droit", b: "Un acte juridique qui transfère la propriété du droit à un tiers", c: "Un accord de non-divulgation", d: "Un contrat de travail pour l'inventeur" },
            reponse: "b",
            explication: "Le contrat de cession est un acte juridique par lequel le ou les titulaires d'un droit (Cédant) transfèrent la propriété de celui-ci à une ou plusieurs personnes (Cessionnaires).",
            page: "26"
        },
        {
            question: "Dans un contrat de cession, qui a l'obligation de payer les annuités pour maintenir un brevet en vigueur après la cession ?",
            options: { a: "Le Cédant (le vendeur)", b: "Le Cessionnaire (l'acheteur)", c: "Les deux parties à parts égales", d: "L'office des brevets" },
            reponse: "b",
            explication: "Le contrat de cession est un transfert de propriété. Il revient donc au Cessionnaire d'assurer le maintien en vigueur du brevet en s'acquittant des taxes.",
            page: "27"
        },
        {
            question: "Un contrat par lequel le titulaire d'un brevet concède à un tiers la jouissance de son droit, sans en transférer la propriété, est un contrat de :",
            options: { a: "Cession", b: "Vente", c: "Licence", d: "Travail" },
            reponse: "c",
            explication: "Contrairement à la cession, la licence ne comporte pas transfert de propriété du titre, le licencié n'en reçoit que la jouissance. Elle s'apparente à la location.",
            page: "27"
        },
        {
            question: "Une licence est dite 'exclusive' si le titulaire :",
            options: { a: "Se réserve le droit d'exploiter lui-même le titre", b: "Peut accorder d'autres licences à d'autres entreprises", c: "S'interdit de concéder d'autres licences du même titre à d'autres concessionnaires", d: "Ne reçoit aucune rémunération" },
            reponse: "c",
            explication: "Elle est exclusive si le titulaire s'interdit de concéder d'autres licences du même titre à d'autres concessionnaires.",
            page: "28"
        },
        {
            question: "En règle générale, un licencié peut-il accorder des sous-licences ?",
            options: { a: "Oui, toujours", b: "Oui, mais seulement s'il en informe le concédant", c: "Non, sauf stipulations contraires dans le contrat", d: "Non, c'est formellement interdit par la loi" },
            reponse: "c",
            explication: "Sauf stipulations contraires du contrat, la licence n'est pas cessible aux tiers et le licencié n'est pas autorisé à accorder des sous-licences.",
            page: "28"
        },
        {
            question: "Qu'est-ce qu'un contrat d'édition ?",
            options: { a: "Un contrat où l'auteur paie l'éditeur pour être publié", b: "Un contrat où l'auteur cède à un éditeur le droit de fabriquer et de diffuser son œuvre", c: "Un contrat de vente de livres entre un éditeur et une librairie", d: "Un contrat de représentation théâtrale" },
            reponse: "b",
            explication: "Le contrat d'édition est un contrat par lequel l'auteur... cède à des conditions déterminées à une personne appelée éditeur le droit de fabriquer... l'œuvre à charge pour elle d'en assurer la publication et la diffusion.",
            page: "29"
        },
        {
            question: "Dans un contrat 'à compte d'auteur', qui paie l'éditeur pour la fabrication et la diffusion de l'œuvre ?",
            options: { a: "L'éditeur prend tous les frais à sa charge", b: "Les frais sont partagés entre l'auteur et l'éditeur", c: "L'auteur ou ses ayants droit versent une rémunération à l'éditeur", d: "L'État subventionne la totalité des coûts" },
            reponse: "c",
            explication: "Le contrat dit à compte d'auteur est un acte écrit par lequel l'auteur ou ses ayants droit verse à l'éditeur une rémunération convenue...",
            page: "29"
        },
        {
            question: "Dans un contrat d'édition, l'éditeur a-t-il le droit d'apporter des modifications à l'œuvre sans l'accord de l'auteur ?",
            options: { a: "Oui, il a une liberté totale", b: "Non, il est tenu de respecter le droit moral de l'auteur et ne peut pas modifier l'œuvre sans son autorisation écrite", c: "Oui, mais seulement pour corriger les fautes d'orthographe", d: "Non, sauf si le livre ne se vend pas bien" },
            reponse: "b",
            explication: "L'éditeur est tenu de respecter le droit moral de l'auteur. A ce titre, il ne peut pas sans autorisation écrite de l'auteur apporter des modifications sur l'œuvre.",
            page: "30"
        },
        {
            question: "Comment se nomme le contrat qui autorise une personne (un entrepreneur de spectacles) à représenter une œuvre de l'esprit ?",
            options: { a: "Contrat d'édition", b: "Contrat de représentation", c: "Contrat de production audiovisuelle", d: "Contrat de licence de marque" },
            reponse: "b",
            explication: "C'est un acte par lequel l'auteur d'une œuvre de l'esprit ou ses ayants droit autorise une personne physique ou morale à représenter ladite œuvre à des conditions qu'ils déterminent.",
            page: "30"
        },
        {
            question: "L'entrepreneur de spectacles a-t-il l'obligation de déclarer ses recettes à l'auteur ?",
            options: { a: "Non, c'est une information confidentielle", b: "Seulement si un juge l'ordonne", c: "Oui, il doit fournir un état justifié de ses recettes", d: "Non, il paie un forfait unique" },
            reponse: "c",
            explication: "L'entrepreneur de spectacles est tenu de déclarer à l'auteur ou à ses représentants le programme exact des représentations... et de leur fournir un état justifié de ses recettes.",
            page: "31"
        },
        {
            question: "Le contrat de production audiovisuelle emporte-t-il automatiquement la cession des droits graphiques et théâtraux sur l'œuvre ?",
            options: { a: "Oui, tous les droits sont cédés en bloc au producteur", b: "Cela dépend de la durée du film", c: "Non, la loi stipule que ce contrat n'emporte pas cession de ces droits spécifiques", d: "Oui, sauf si l'auteur s'y oppose par écrit" },
            reponse: "c",
            explication: "La même loi stipule que le contrat de production audiovisuelle n'emporte pas cession au producteur des droits graphiques et théâtraux sur l'œuvre.",
            page: "32"
        },
        {
            question: "Dans le cadre d'un contrat de production audiovisuelle, pour chaque mode d'exploitation (cinéma, TV, VOD...), la rémunération des auteurs est-elle due ?",
            options: { a: "Non, la rémunération est un forfait unique", b: "Oui, la rémunération est due pour chaque mode d'exploitation", c: "Non, seuls les acteurs sont rémunérés", d: "Oui, mais seulement pour la première année d'exploitation" },
            reponse: "b",
            explication: "Il est à noter que la rémunération des auteurs est due pour chaque mode d'exploitation.",
            page: "32"
        },
        {
            question: "Laquelle de ces affirmations est une obligation principale de l'auteur dans un contrat de représentation ?",
            options: { a: "Assister à toutes les représentations", b: "Garantir à l'entrepreneur l'exercice paisible et exclusif du droit cédé", c: "Participer à la promotion de la pièce", d: "Financer une partie de la production" },
            reponse: "b",
            explication: "Obligations de l'auteur : L'auteur... est tenu de garantir à l'entrepreneur de spectacles l'exercice paisible et sauf convention contraire exclusif du droit cédé.",
            page: "31"
        }
    ]
},
        //Module 03
'M03': {
    title: 'MEO2-M03 : Connaissance des sociétés',
    questions: [
        {
            section: "Chapitre 1 : Éléments constitutifs d'une société",
            question: "Selon Laplantine, qui est l'auteur de la citation : « L'homme n'a jamais cessé de s'interroger sur lui-même » ?",
            options: { a: "Fernand Tönnies", b: "Émile Durkheim", c: "Laplantine", d: "Marcel Mauss" },
            reponse: "c",
            explication: "Le cours cite explicitement Laplantine (2001) comme étant l'auteur de cette phrase.",
            page: "4"
        },
        {
            question: "Quel ouvrage, considéré comme un classique de l'anthropologie, est attribué à Marcel Mauss ?",
            options: { a: "De la division du travail social", b: "Essai sur le don", c: "Communauté et société", d: "Les deux sœurs et leur mère" },
            reponse: "b",
            explication: "Le document mentionne que l'approche anthropologique classique a permis d'écrire des ouvrages comme l'Essai sur le don, un classique de la discipline.",
            page: "4"
        },
        {
            question: "Quel sociologue allemand a introduit le mot 'société' d'un point de vue analytique en 1887 avec son ouvrage 'Gemeinschaft und Gesellschaft' ?",
            options: { a: "Karl Marx", b: "Max Weber", c: "Émile Durkheim", d: "Fernand Tönnies" },
            reponse: "d",
            explication: "Le cours précise que 'le mot société a été introduit par le sociologue allemand Fernand Tönnies en 1887'.",
            page: "4"
        },
        {
            question: "Qui est l'auteur de l'ouvrage 'De la division du travail social' ?",
            options: { a: "Pierre Bourdieu", b: "Fernand Tönnies", c: "Émile Durkheim", d: "A.R Radcliffe Brown" },
            reponse: "c",
            explication: "Le cours attribue l'ouvrage 'De la division du travail social' à Durkheim (2007).",
            page: "4"
        },
        {
            question: "Selon Géraud et al. (2004), quel est le rôle fondamental de la parenté dans la société ?",
            options: { a: "Elle est purement biologique et sans impact social", b: "Elle ne concerne que la transmission des noms de famille", c: "Elle détermine des droits, statuts, régit la transmission de biens et reproduit l'ordre social", d: "Elle vise uniquement à limiter les conflits familiaux" },
            reponse: "c",
            explication: "Le cours cite Géraud et al. : la parenté 'détermine des droits, des statuts, régit la transmission de biens, assure une partie de la socialisation et contribue puissamment à la reproduction de l'ordre social.'",
            page: "5"
        },
        {
            question: "Comment est définie la filiation unilinéaire ?",
            options: { a: "L'appartenance est déterminée en référence à un seul parent (père ou mère)", b: "La transmission combine les droits du père et de la mère", c: "Les principes de descendance sont indistincts du côté paternel et maternel", d: "L'appartenance est choisie par l'individu à sa majorité" },
            reponse: "a",
            explication: "Les filiations sont dites unilinéaires lorsque l'appartenance est déterminée en référence à un seul parent, père (patrilinéaire) ou mère (matrilinéaire).",
            page: "5"
        },
        {
            question: "À quoi renvoie la filiation bilinéaire ?",
            options: { a: "L'appartenance est déterminée par le lignage maternel uniquement", b: "L'appartenance est déterminée par le lignage paternel uniquement", c: "La transmission combine en parallèle des droits provenant du père et de la mère", d: "Les principes de descendance sont flous et non définis" },
            reponse: "c",
            explication: "La filiation est bilinéaire lorsque la transmission combine en parallèle des droits provenant du père et de la mère.",
            page: "5"
        },
        {
            question: "Qu'est-ce que la filiation cognatique (ou indifférenciée) ?",
            options: { a: "Une référence unique à la lignée du père", b: "Une référence unique à la lignée de la mère", c: "Une combinaison des droits des deux parents", d: "Les principes de descendance s'affirment de manière indistincte du côté paternel et maternel" },
            reponse: "d",
            explication: "La filiation est cognatique ou indifférenciée lorsque les principes de descendance s'affirment de manière indistincte du côté paternel et maternel.",
            page: "5"
        },
        {
            question: "Selon Claude Lévi-Strauss, quel est l'acte fondateur des échanges matrimoniaux qui permet de passer de la Nature à la Culture ?",
            options: { a: "Le mariage arrangé", b: "La dot", c: "La prohibition de l'inceste", d: "Le divorce" },
            reponse: "c",
            explication: "Pour Claude Lévi-Strauss, la prohibition de l'inceste est considérée comme un acte fondateur des échanges matrimoniaux, permettant de passer de la Nature à la Culture.",
            page: "5"
        },
        {
            question: "Qui est l'auteure de l'ouvrage 'Les deux sœurs et leur mère', qui propose de dépasser l'interprétation de l'inceste de Lévi-Strauss ?",
            options: { a: "Simone de Beauvoir", b: "Françoise Héritier", c: "Margaret Mead", d: "Sylvie Brunnel" },
            reponse: "b",
            explication: "Le cours indique que 'Françoise Héritier dans Les deux sœurs et leur mère va proposer de dépasser l'interprétation faite de l'inceste par Lévi-Strauss'.",
            page: "6"
        },
        {
            question: "Dans la typologie de Service (1962), quelle structure politique correspond aux sociétés de chasseurs-cueilleurs et est fondée sur la parenté ?",
            options: { a: "La tribu", b: "La chefferie", c: "L'État", d: "La bande" },
            reponse: "d",
            explication: "La bande a une structure politique qui correspond aux sociétés de chasseurs-cueilleurs. Elle est fondée sur la parenté.",
            page: "6"
        },
        {
            question: "Quelle est la principale différence entre la socialisation primaire et la socialisation secondaire selon Berger et Luckmann (1996) ?",
            options: { a: "La primaire se fait à l'école, la secondaire en famille", b: "La primaire concerne la période de l'enfance à l'adolescence, la secondaire intervient à l'âge adulte", c: "La primaire est volontaire, la secondaire est obligatoire", d: "Il n'y a pas de différence" },
            reponse: "b",
            explication: "La socialisation primaire est assurée par la famille de l'enfance à l'adolescence. La socialisation secondaire intervient à l'âge adulte et se poursuit toute la vie.",
            page: "7"
        },
        {
            section: "Chapitre 2 : La dynamique de populations",
            question: "Selon le cours, quel penseur a formulé la question démographique de manière théorique, précise et nouvelle il y a deux siècles ?",
            options: { a: "Platon", b: "Polybe", c: "Malthus", d: "Durkheim" },
            reponse: "c",
            explication: "Le cours énonce : 'La question démographique n'a été formulée au niveau théorique de manière précise et nouvelle que depuis deux siècles avec Malthus.'",
            page: "9"
        },
        {
            question: "Qu'est-ce qui est à l'origine de l'« explosion démographique » dans les pays du Sud après la Seconde Guerre mondiale ?",
            options: { a: "Une forte hausse de la natalité et une forte hausse de la mortalité", b: "Une forte baisse de la mortalité et le maintien d'une natalité élevée", c: "Une forte baisse de la natalité et une forte baisse de la mortalité", d: "Une forte hausse de la natalité et le maintien d'une mortalité élevée" },
            reponse: "b",
            explication: "C'est le décalage entre une mortalité en baisse (grâce aux vaccins, hygiène...) et une natalité qui reste élevée qui a causé l'« explosion démographique ».",
            page: "9"
        },
        {
            question: "À partir de quelle période une antenne de l'Office français de la Migration a-t-elle été installée en Tunisie pour organiser la migration officielle ?",
            options: { a: "Au milieu des années 1920", b: "Au milieu des années 1960", c: "Au milieu des années 1990", d: "Au milieu des années 2000" },
            reponse: "b",
            explication: "Le besoin de main d'œuvre en Europe a conduit à l'organisation de la migration. 'C'est ainsi qu'au milieu des années 1960, une antenne de l'Office français de la Migration a par exemple été installée en Tunisie'.",
            page: "10"
        },
        {
            question: "Quel pays a adopté une politique de l'enfant unique à partir des années 1980 ?",
            options: { a: "Le Japon", b: "La Tunisie", c: "L'Inde", d: "La Chine" },
            reponse: "d",
            explication: "Le cours indique : 'Avec les années 1980, même la Chine a adopté la planification des naissances en allant même un peu plus loin en imposant un seul enfant par famille'.",
            page: "10"
        },
        {
            question: "Quel pays a adopté dès 1964 un programme de planification familiale ?",
            options: { a: "La Tunisie", b: "L'Algérie", c: "Le Maroc", d: "L'Égypte" },
            reponse: "a",
            explication: "Cette situation a été aussi à l'origine de... l'adoption de véritables programmes de planification familiale dans de nombreux pays comme la Tunisie dès 1964.",
            page: "10"
        },
        {
            question: "Quel pays détient actuellement le record mondial de l'espérance de vie la plus longue ?",
            options: { a: "La Suède", b: "Le Canada", c: "Le Japon", d: "L'Australie" },
            reponse: "c",
            explication: "C'est ainsi que le Japon détient actuellement le record mondial de l'espérance de vie la plus longue.",
            page: "11"
        },
        {
            question: "Quel événement a été l'occasion pour l'Europe de commencer à adopter des mesures pour arrêter la migration au début des années 1970 ?",
            options: { a: "La chute du mur de Berlin", b: "La fin de la guerre du Vietnam", c: "Le premier choc pétrolier", d: "La création de l'Union Européenne" },
            reponse: "c",
            explication: "Le premier choc pétrolier a été l'occasion de concrétiser ces craintes et dès 1972, l'Europe... adopta des mesures draconiennes pour arrêter la migration.",
            page: "11"
        },
        {
            question: "Selon le cours, quel est le grand défi auquel sont confrontés les pays du Sud concernant leur population fortement jeune ?",
            options: { a: "Le vieillissement de la population", b: "La baisse de la natalité", c: "Le renforcement du capital humain", d: "La construction de maisons de retraite" },
            reponse: "c",
            explication: "La conclusion du chapitre II indique : 'Le grand défi auxquels se trouvent confrontés les pays du Sud demeure le renforcement du capital humain.'",
            page: "12"
        },
        {
            section: "Chapitre 3 : Les mutations dans un contexte de globalisation",
            question: "Quel auteur, tenant de l'anthropologie dynamique, va montrer qu'aucune société n'est statique ?",
            options: { a: "Claude Lévi-Strauss", b: "Georges Balandier", c: "Pierre Bourdieu", d: "François Laplantine" },
            reponse: "b",
            explication: "Tenant de l'anthropologie dynamique, Balandier va montrer qu'aucune société n'est statique.",
            page: "13"
        },
        {
            question: "Selon le cours, quel événement en 1990 a marqué le basculement progressif vers un monde dominé par le système capitaliste ?",
            options: { a: "La création de l'OMC", b: "La chute du mur de Berlin", c: "La signature du traité de Maastricht", d: "La première guerre du Golfe" },
            reponse: "b",
            explication: "Depuis la chute du mur de Berlin en 1990, l'humanité a basculé progressivement dans un monde dominé par le système capitaliste.",
            page: "13"
        },
        {
            question: "Quel discours, prononcé en 1990, a marqué le début de l'avènement de la démocratie dans de nombreux pays africains ?",
            options: { a: "Le discours de Nelson Mandela à sa libération", b: "Le discours de François Mitterrand à La Baule", c: "Le discours de George H.W. Bush sur le Nouvel Ordre Mondial", d: "Le discours de Mikhaïl Gorbatchev sur la Perestroïka" },
            reponse: "b",
            explication: "Depuis le discours de François Mitterrand en 1990 sur la nécessité de la mise en place de la démocratie dans les pays africains, de nombreuses mutations ont affecté les pays du Sud.",
            page: "14"
        },
        {
            question: "Quelle condition a été imposée par les institutions internationales (Banque Mondiale, FMI) pour l'accès aux financements internationaux ?",
            options: { a: "Le système de parti unique", b: "La 'bonne gouvernance'", c: "L'augmentation des dépenses militaires", d: "La fermeture des frontières" },
            reponse: "b",
            explication: "Imposée par les institutions de la coopération internationale..., la « bonne gouvernance » est devenue une condition préalable aux financements internationaux.",
            page: "14"
        },
        {
            question: "L'émergence des sociétés civiles en Afrique est un impact visible de quel processus ?",
            options: { a: "De la colonisation", b: "De la guerre froide", c: "De l'ouverture démocratique", d: "De la crise de la dette" },
            reponse: "c",
            explication: "L'émergence des sociétés civiles plus ou moins organisés... constitue également un impact visible de l'ouverture démocratique dans les pays d'Afrique.",
            page: "14"
        },
        {
            question: "Quel pays ou région est cité comme un exemple où l'on pourrait voir apparaître des 'réfugiés climatiques' ?",
            options: { a: "La Suisse", b: "La Sibérie", c: "Le Bangladesh", d: "Le Canada" },
            reponse: "c",
            explication: "Le réchauffement... met en péril de nombreux archipels et terres basses, comme les Pays-Bas ou le Bangladesh. Ce siècle sera peut-être le premier à voir l'apparition de « refugiés climatiques ».",
            page: "15"
        },
        {
            question: "Quels trois pays émergents sont cités comme représentant à eux seuls environ 40% de la population mondiale ?",
            options: { a: "Brésil, Russie, Afrique du Sud", b: "Mexique, Indonésie, Turquie", c: "Chine, Inde, Brésil", d: "Nigeria, Pakistan, Bangladesh" },
            reponse: "c",
            explication: "...le boom économique des pays émergents comme la Chine, l'Inde et le Brésil, qui représentent à eux trois environ 40% de la population mondiale.",
            page: "15"
        },
        {
            question: "Quelle est la destination migratoire privilégiée des Africains, autre que l'Europe, ces dix dernières années selon le cours ?",
            options: { a: "L'Australie", b: "Le Japon", c: "Les Etats-Unis", d: "La Chine" },
            reponse: "c",
            explication: "...ces dix dernières [années] ce courant s'oriente fortement vers les Etats-Unis compte tenu du durcissement des lois migratoires en Europe.",
            page: "14"
        },
        {
            section: "Chapitre 4 : L'effet papillon du Coronavirus",
            question: "En quelle année est apparue la maladie à coronavirus 2019, communément appelée Covid19 ?",
            options: { a: "2018", b: "2019", c: "2020", d: "2021" },
            reponse: "b",
            explication: "Le nom même de la maladie, Covid-19, indique son année d'apparition. Le cours la nomme 'maladie à coronavirus 2019'.",
            page: "17"
        },
        {
            question: "Dans quel pays la maladie Covid-19 est-elle apparue initialement ?",
            options: { a: "Italie", b: "États-Unis", c: "Brésil", d: "Chine" },
            reponse: "d",
            explication: "L'apparition d'une épidémie de coronavirus à Wuhan en Chine avec l'effet papillon qu'il a entraîné en est un exemple.",
            page: "16"
        },
        {
            question: "Selon Carroue (2020), la diffusion de la Covid-19 par le trafic aérien et les élites nationales est qualifiée de :",
            options: { a: "Pandémie par le bas", b: "Pandémie rurale", c: "Pandémie par le haut", d: "Pandémie localisée" },
            reponse: "c",
            explication: "Il y a une diffusion de la « pandémie par le haut », tant géographiquement par le trafic aérien, que socialement par le biais des élites nationales.",
            page: "17"
        },
        {
            question: "Selon Carroue, qu'est-ce que la pandémie de Covid-19 a surtout mis en lumière ?",
            options: { a: "La solidité du système de santé mondial", b: "La grande faiblesse des chaînes mondiales de valeur éclatées", c: "L'inutilité des technologies de l'information", d: "La fin des migrations internationales" },
            reponse: "b",
            explication: "CARROUE : « La pandémie a surtout mis en lumière la grande faiblesse des chaînes mondiales de valeur éclatées entre de nombreux pays. »",
            page: "19"
        },
        {
            question: "Qui est l'auteur de la théorie du chaos, illustrée par 'l'effet papillon' ?",
            options: { a: "Ian Goldin", b: "Mary Vakaris", c: "Edward Lorenz", d: "Laurent Carroue" },
            reponse: "c",
            explication: "La note de bas de page 2 précise : 'Selon la théorie du chaos d'Edward Lorenz, un battement d'ailes de papillon au-dessus du Brésil peut provoquer une tornade au Texas.'",
            page: "19"
        },
        {
            question: "À quel auteur appartient la pensée : « À mesure que les réseaux [...] s'interconnectent, ils deviennent plus complexes et plus instables. » ?",
            options: { a: "Mary Vakaridis", b: "Laurent Carroue", c: "Donald Trump", d: "Ian Goldin" },
            reponse: "d",
            explication: "Le cours cite la journaliste Vakaris qui elle-même cite le professeur Ian Goldin : 'À mesure que les réseaux commerciaux, financiers, cybernétiques et de voyage s'interconnectent, ils deviennent plus complexes et plus instables.'",
            page: "19"
        },
        {
            question: "Quel président américain est associé au pilotage de la crise sanitaire basé sur le slogan « America first » ?",
            options: { a: "Barack Obama", b: "Joe Biden", c: "Donald Trump", d: "George W. Bush" },
            reponse: "c",
            explication: "Le cours mentionne que 'le pilotage trumpien basé sur le « America first » s'est avéré catastrophique.'",
            page: "19"
        },
        {
            question: "Selon les données du CBO pour le second trimestre 2020, quelle a été la conséquence du choc économique aux États-Unis ?",
            options: { a: "Une chute du PNB de -5%", b: "Une chute du PNB de -10%", c: "Une chute du PNB de -20%", d: "Une chute du PNB de -40%" },
            reponse: "d",
            explication: "Selon les données publiées par le CBO... la richesse créée, saisie par le produit national brut, plonge de -40 %.",
            page: "19"
        },
        {
            question: "Quelle citation de Lévi-Strauss est utilisée pour conclure le cours sur la finalité de la connaissance des sociétés ?",
            options: { a: "« L'homme n'a jamais cessé de s'interroger sur lui-même. »", b: "« Le lointain éclaire le proche, mais le proche peut aussi éclairer le lointain. »", c: "« La prohibition de l'inceste est le passage de la Nature à la Culture. »", d: "« Nous sommes tous des cannibales. »" },
            reponse: "b",
            explication: "La conclusion générale se termine en rappelant la citation de Lévi-Strauss : « Entre les sociétés dites complexes ou évoluées... Le lointain éclaire le proche, mais le proche peut aussi éclairer le lointain ».",
            page: "21"
        },
        {
            question: "Qu'est ce qui différencie la tribu de la chefferie ?",
            options: { a: "La chefferie ne possède pas de pouvoir centralisé", b: "La tribu possède un pouvoir centralisé", c: "La chefferie possède un pouvoir centralisé", d: "La chefferie ne possède pas de systèmes de hiérarchies" },
            reponse: "c",
            explication: "La chefferie, contrairement à la tribu possède un pouvoir centralisé. Toutefois, elle diffère de l'État par l'absence d'un appareil de coercition censé détenir le monopole de la violence légitime.",
            page: "7"
        },
        {
            question: "A quelle époque la démographie comme science récente remonte ?",
            options: { a: "Au XXe siècle", b: "Au XIXe siècle", c: "Au XVIIe siècle", d: "Au XVIe siècle" },
            reponse: "b",
            explication: "On peut dire que la démographie comme science récente remonte au XIXe siècle et c'est au cours du XXe siècle qu'on prend conscience de la fracture démographique entre deux mondes.",
            page: "9"
        },
        {
            question: "De quand date la première crise pétrolière ?",
            options: { a: "1970", b: "1980", c: "1990", d: "2000" },
            reponse: "a",
            explication: "Ce sont les trente (années) glorieuses où la croissance économique du Nord a été suffisamment soutenues jusqu'à la première crise pétrolière du début des années 1970.",
            page: "10"
        }
    ]
},
        
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





















