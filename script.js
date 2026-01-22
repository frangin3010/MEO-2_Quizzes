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
        //Module 04

        'M04': {
    title: 'MEO-M04 : Histoire du développement',
    questions: [
        {
            section: "Chapitre 1 : Les origines du développement et du sous-développement",
            question: "Dans quel pays la révolution industrielle a-t-elle débuté ?",
            options: { a: "Aux Etats-Unis", b: "En Allemagne", c: "En France", d: "En Angleterre" },
            reponse: "d",
            explication: "Le développement se définit toujours en référence à la révolution industrielle en Angleterre. C'est le point de départ historique.",
            page: "5"
        },
        {
            question: "À quel siècle la révolution industrielle a-t-elle commencé ?",
            options: { a: "XIXe siècle", b: "XVIIIe siècle", c: "XXe siècle", d: "XVIIe siècle" },
            reponse: "b",
            explication: "Au cours du XVIIIe siècle, tous les éléments sont réunis pour favoriser l'essor de l'industrie au cœur de la Grande-Bretagne.",
            page: "5"
        },
        {
            question: "Les facteurs endogènes (internes) de la révolution industrielle en Angleterre sont purement :",
            options: { a: "Sociaux", b: "Économiques", c: "Culturels", d: "Ils sont un mélange de plusieurs facteurs" },
            reponse: "d",
            explication: "Les causes endogènes incluent la révolution agricole, les progrès techniques, et des changements sociaux comme l'exode rural. Ce n'est pas un facteur unique.",
            page: "5-6"
        },
        {
            question: "Parmi les causes exogènes (externes) de la révolution industrielle en Angleterre, laquelle est citée dans le cours ?",
            options: { a: "Le développement du transport", b: "La métallurgie", c: "Le textile", d: "La domination commerciale et la traite négrière" },
            reponse: "d",
            explication: "Parmi les causes exogènes, le cours détaille l'importance de la traite négrière et du commerce international.",
            page: "6"
        },
        {
            question: "Dans le mode de production capitaliste, quel est le stade de la genèse (le premier stade) ?",
            options: { a: "Le capitalisme commercial", b: "Le capitalisme industriel", c: "Le capitalisme financier", d: "L'impérialisme" },
            reponse: "a",
            explication: "Le cours précise que 'le stade de la genèse est celui du capitalisme commercial'.",
            page: "5"
        },
        {
            question: "Selon Karl Polanyi, qu'est-ce qui a permis à l'économie de marché d'apparaître ?",
            options: { a: "Aux innovations technologiques", b: "À l'État", c: "Aux enclosures", d: "À la découverte de l'Amérique" },
            reponse: "c",
            explication: "Le système d'enclosure a ruiné la population rurale, la forçant à se rendre dans les centres urbains pour travailler, créant ainsi le marché du travail.",
            page: "5"
        },
        {
            question: "La transformation de l'agriculture en Angleterre, qui a précédé la révolution industrielle, a débuté avec :",
            options: { a: "Le mouvement des gros propriétaires terriens (landlords)", b: "L'intervention de l'État", c: "L'action des collectivités", d: "L'introduction de machines agricoles" },
            reponse: "a",
            explication: "Les landlords, riches propriétaires, ont amélioré les techniques d'exploitation, marquant le début de la révolution agricole.",
            page: "6"
        },
        {
            question: "Selon la thèse d'Eric Williams, la traite des noirs a financé la Révolution Industrielle en Angleterre.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le cours cite Eric Williams qui affirme que la traite négrière a fourni 'l'un des principaux courants de cette accumulation du capital en Angleterre qui a financé la Révolution Industrielle'.",
            page: "6"
        },
        {
            question: "Qui sont les 'landlords' dans le contexte de la révolution agricole anglaise ?",
            options: { a: "De riches propriétaires terriens", b: "Des bureaucrates du gouvernement", c: "Des industriels du textile", d: "Des chefs militaires" },
            reponse: "a",
            explication: "Les landlords sont définis comme de 'riches propriétaires qui détiennent désormais les terres agricoles'.",
            page: "6"
        },
        {
            question: "La révolution industrielle ne s'est PAS diffusée dans un des pays suivants au XIXe siècle :",
            options: { a: "En Égypte", b: "En Allemagne", c: "Aux États-Unis", d: "En France" },
            reponse: "a",
            explication: "Le cours détaille la diffusion aux États-Unis, en France, en Allemagne, en Russie et au Japon, mais pas en Égypte à cette période.",
            page: "8"
        },
        {
            section: "Chapitre 2 : Théories du développement",
            question: "Lorsque les économistes parlent d'économie duale dans les pays en développement, à quelle distinction font-ils référence ?",
            options: { a: "Un secteur traditionnel et un secteur moderne", b: "Les gens riches et les gens pauvres", c: "La ville et le pays", d: "Les hommes et les femmes" },
            reponse: "a",
            explication: "Le dualisme oppose un secteur traditionnel (souvent de subsistance) à un secteur moderne (souvent tourné vers l'exportation et plus productif).",
            page: "19-20"
        },
        {
            question: "Quelle théorie explique le sous-développement par une mauvaise allocation des ressources, souvent liée à un marché trop petit ?",
            options: { a: "Le néo-colonialisme", b: "L'hypothèse de sous-consommation", c: "La théorie de la dépendance", d: "L'hypothèse du cercle vicieux de la pauvreté" },
            reponse: "d",
            explication: "L'hypothèse du cercle vicieux de la pauvreté (formulée par Nurske) stipule qu'un pays est pauvre parce qu'il est pauvre, manquant de capitaux à cause de faibles revenus, ce qui est une forme de mauvaise allocation des ressources.",
            page: "23"
        },
        {
            question: "Les différentes théories (retard, domination, culturelle) montrent que le développement est appréhendé de différentes manières.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le cours présente explicitement plusieurs théories distinctes (la théorie du retard, de la domination, du retard culturel), ce qui valide l'affirmation.",
            page: "16"
        },
        {
            question: "Selon la théorie de Rostow, le passage à la société développée se fait nécessairement par combien d'étapes historiques ?",
            options: { a: "2", b: "4", c: "5", d: "6" },
            reponse: "c",
            explication: "Walt Whitman Rostow propose cinq étapes historiques : la société traditionnelle, les conditions préalables au décollage, le décollage, la marche vers la maturité, et la consommation de masse.",
            page: "16"
        },
        {
            question: "Parmi les propositions suivantes, laquelle n'est PAS une caractéristique de la société traditionnelle selon Rostow ?",
            options: { a: "Le changement de mode de vie d'une génération à l'autre", b: "La recherche de l'innovation", c: "L'individualisme", d: "Les valeurs sont fondées sur le fatalisme" },
            reponse: "d",
            explication: "Dans la société traditionnelle, le mode de vie ne change pas, les connaissances sont routinières, l'individualisme est faible et les valeurs sont fondées sur le fatalisme. Les autres options décrivent son opposé.",
            page: "16"
        },
        {
            question: "Selon Rostow, c'est à la phase de décollage que la société brise les freins liés à la tradition.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Pendant le décollage, la société brise littéralement tous les freins connexes à la tradition qui entravaient sa croissance.",
            page: "17"
        },
        {
            question: "Pour Penouil, quel est l'élément principal de l'exploitation capitaliste ?",
            options: { a: "La valeur", b: "La plus-value", c: "La valeur-travail", d: "L'impérialisme" },
            reponse: "b",
            explication: "Bien que le cours n'explicite pas la pensée de Penouil, dans l'analyse marxiste classique, l'exploitation capitaliste repose sur l'extraction de la plus-value (la différence entre la valeur du travail et le salaire versé).",
            page: "N/A"
        },
        {
            question: "Quel est le point central de l'analyse du dualisme sociologique de J.H. Boeke ?",
            options: { a: "La distinction entre l'activité économique des sociétés occidentales et coloniales", b: "Le lien entre commerce et productivité", c: "La différence entre secteur moderne et secteur de subsistance", d: "Le lien entre secteur agricole et industriel" },
            reponse: "a",
            explication: "Le point central de la thèse de Boeke est une distinction fondamentale entre les objectifs de l'activité économique des sociétés occidentales (basée sur les besoins économiques) et coloniales (basée sur les besoins sociaux).",
            page: "20"
        },
        {
            question: "Le 'dualisme dynamique', qui insiste sur le lien entre secteur agricole et industriel, a été défendu par Rostow.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Le dualisme dynamique (modèles bissectoriels) est principalement associé aux travaux de W. Arthur Lewis, ainsi que Fei et Ranis, pas à Rostow.",
            page: "21"
        },
        {
            question: "Dans la nouvelle vision du développement (selon Dudley Seers), quelles questions faut-il se poser ?",
            options: { a: "L'expérience des années 1950 et 1980", b: "Les taux de croissance record", c: "La bonne répartition des fruits de la croissance", d: "Comment ont évolué la pauvreté, le chômage et les inégalités" },
            reponse: "d",
            explication: "Selon le Pr. Dudley Seers, il faut se poser les questions : 'Comment a évolué la pauvreté dans ce pays ? Comment a évolué son niveau de chômage ? Comment ont évolué les inégalités dans ce pays ?'.",
            page: "22"
        },
        {
            section: "Chapitre 3 : Problèmes de développement et orientations politiques",
            question: "Comment les orientations politiques et stratégies de développement ont-elles évolué ?",
            options: { a: "En parallèle des problèmes se posant dans les pays en développement", b: "En fonction d'un programme unique pour la croissance", c: "Selon un accord mondial de rééchelonnement de la dette", d: "Selon un programme unique de stabilisation" },
            reponse: "a",
            explication: "Le cours indique que les stratégies ont évolué 'en parallèle avec les problèmes qui se posent dans les pays en développement et les théories économiques sous-jacentes'.",
            page: "23"
        },
        {
            question: "Pourquoi l'État est-il qualifié d' 'État développeur' dans les années 1950-1970 ?",
            options: { a: "En raison du rôle central qu'il devait jouer dans l'économie", b: "Grâce à l'accumulation de revenu pour l'élite", c: "Grâce à l'accroissement des capacités de financement extérieur", d: "Grâce à la formulation de stratégies non appliquées" },
            reponse: "a",
            explication: "Dans cette perspective, l'État se devait de jouer un rôle central pour pallier les défaillances du marché et piloter l'accumulation. D'où le qualificatif d'État développeur.",
            page: "23"
        },
        {
            question: "Parmi les éléments suivants, lequel n'est PAS un problème typique auquel font face la plupart des pays en développement ?",
            options: { a: "Un niveau d'endettement élevé", b: "Une pénurie de nourriture", c: "Une pénurie de main-d'œuvre", d: "Une croissance rapide de la population" },
            reponse: "c",
            explication: "Les pays en développement sont souvent caractérisés par une main-d'œuvre abondante (parfois en situation de sous-emploi), contrairement à une pénurie.",
            page: "N/A"
        },
        {
            question: "Quelle est la politique la plus efficace pour accroître la production agricole selon le cours ?",
            options: { a: "La réforme des terres (démembrement des grosses propriétés)", b: "La mécanisation à outrance", c: "La substitution aux importations", d: "La constitution d'équipes de marketing spécialisées" },
            reponse: "a",
            explication: "Bien que plusieurs stratégies soient discutées, la réforme agraire visant à démembrer les latifundia (grandes propriétés) est une politique structurelle souvent citée pour améliorer la productivité et l'équité.",
            page: "26"
        },
        {
            question: "Que signifie le sigle 'ISI' dans le contexte des stratégies de développement ?",
            options: { a: "Indice par Surinvestissement International", b: "Importation Sur l'Industrie", c: "Industrialisation par Substitution des Importations", d: "Intérêt sur les Intrants" },
            reponse: "c",
            explication: "Le cours définit explicitement le processus de l'ISI comme 'Industrialisation par substitution des importations'.",
            page: "24"
        },
        {
            question: "Où la stratégie d'ISI a-t-elle principalement commencé ?",
            options: { a: "En Asie", b: "En Égypte", c: "Au Maroc", d: "En Amérique Latine" },
            reponse: "d",
            explication: "Le texte indique : 'Commencée en Amérique latine, l'ISI s'est propagée vers d'autres régions'.",
            page: "25"
        },
        {
            question: "L'ISE (Industrialisation par Substitution aux Exportations) consiste à remplacer l'exportation de produits de base par des produits manufacturiers.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "L'industrialisation par substitution des exportations (ISE) consiste à substituer l'exportation de produits manufacturiers à l'exportation de produits de base.",
            page: "25"
        },
        {
            question: "En général, quelle part la production agricole représente-t-elle dans le PIB des pays en développement (PED) ?",
            options: { a: "30-40%", b: "20-30%", c: "15-20%", d: "5-15%" },
            reponse: "c",
            explication: "La part de la production agricole représente environ 15 à 20 % du PIB dans les PED.",
            page: "26"
        },
        {
            question: "Comment appelle-t-on une politique qui préconise l'intervention des pouvoirs publics dans la vie économique d'un pays ?",
            options: { a: "Croissance déséquilibrée", b: "Promotion des exportations", c: "Promotion de l'industrie", d: "Interventionnisme" },
            reponse: "d",
            explication: "L'interventionnisme est la doctrine qui prône l'intervention de l'État dans l'économie, ce qui correspond à la stratégie de l'État développeur.",
            page: "23"
        },
        {
            question: "L'aide internationale est reconnue comme une nécessité économique principalement par :",
            options: { a: "Les accords de Bretton Woods", b: "Les théories économistes classiques", c: "Les modèles industriels", d: "Les pays en développement eux-mêmes" },
            reponse: "a",
            explication: "Le cours précise que 'l'aide internationale est reconnue comme une nécessité économique par les accords de Bretton Woods'.",
            page: "28"
        },
        {
            section: "Chapitre 4 : Changement Social",
            question: "Selon Guy Rocher, quelle est la définition du changement social ?",
            options: { a: "Une augmentation durable de la quantité de biens et services", b: "Toute transformation observable dans le temps qui affecte la structure ou le fonctionnement d'une collectivité", c: "L'ensemble des transformations techniques uniquement", d: "Une simple modification des habitudes individuelles" },
            reponse: "b",
            explication: "Guy Rocher définit le changement social comme 'toute transformation observable dans le temps, qui affecte, d'une manière qui ne soit pas que provisoire ou éphémère, la structure ou le fonctionnement de l'organisation sociale d'une collectivité donnée'.",
            page: "33"
        },
        {
            question: "Qu'est-ce que le changement social ne doit PAS faire pour être qualifié comme tel ?",
            options: { a: "Modifier l'organisation sociale", b: "Transformer une seule structure", c: "Être identifié dans le temps", d: "Affecter la collectivité de manière durable" },
            reponse: "b",
            explication: "Le changement social affecte 'la structure ou le fonctionnement de l'organisation sociale', il n'est pas limité à une seule et unique structure isolée mais a un impact plus large et durable.",
            page: "33"
        },
        {
            question: "Le développement est une forme historique du changement social.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le développement est défini comme une forme historique du changement social, impliquant une transformation observable et durable de la société.",
            page: "34"
        },
        {
            question: "Combien de conceptions de la notion d'évolution Shalins et Service proposent-ils ?",
            options: { a: "3", b: "5", c: "6", d: "2" },
            reponse: "d",
            explication: "Shalins et Service proposent deux conceptions de l'évolution : une conception linéaire (à rejeter) et une conception multilinéaire.",
            page: "34"
        },
        {
            question: "Pour Émile Durkheim, quel est l'élément déterminant du changement social menant à la division du travail ?",
            options: { a: "L'agriculture", b: "La culture", c: "La démographie", d: "La science" },
            reponse: "c",
            explication: "Pour Emile Durkheim, c'est l'augmentation de la densité démographique qui est à la base de la division du travail et donc du changement social.",
            page: "35"
        },
        {
            question: "La doctrine calviniste, analysée par Max Weber, est basée sur la notion de :",
            options: { a: "Prédestination", b: "Développement", c: "Changement social", d: "Sous-développement" },
            reponse: "a",
            explication: "La doctrine calviniste est basée sur la notion de la 'prédestination' : le salut de l'homme est exclusivement un don de Dieu.",
            page: "35"
        },
        {
            question: "Le changement social est un phénomène historique, collectif et structurel.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le changement social est défini comme un phénomène à la fois historique, collectif et structurel affectant l'organisation sociale.",
            page: "34"
        },
        {
            question: "Le changement climatique est un phénomène :",
            options: { a: "Facile à appréhender", b: "Pas du tout complexe", c: "Complexe", d: "Localisé à un seul pays" },
            reponse: "c",
            explication: "Le cours souligne que le changement social est un phénomène complexe et difficile à cerner, le changement climatique en est un exemple majeur par ses multiples causes et conséquences.",
            page: "33"
        },
        {
            question: "Le changement social est toujours dynamique.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le changement social est défini comme un processus dynamique et évolutif, impliquant un mouvement et une transformation.",
            page: "33"
        },
        {
            question: "Il n'existe pas de théorie générale du changement social.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La sociologie moderne rejette l'idée d'une cause dominante et admet une pluralité de types de changement, ce qui conduit à l'inexistence d'une théorie générale unique.",
            page: "33"
        }
    ]
},
        //Module 05

'M05': {
    title: 'MEO-M05 : Economie du développement',
    questions: [
        {
            section: "Chapitre 1 : Généralités de l'économie du développement",
            question: "Comment est définie l'économie du développement dans l'introduction du chapitre 1 ?",
            options: { a: "L'étude de la bourse et des marchés financiers", b: "Un ensemble de pratiques publiques et privées encourageant le développement économique", c: "La science de la gestion des entreprises multinationales", d: "L'histoire des crises économiques mondiales" },
            reponse: "b",
            explication: "L'économie du développement est définie comme un ensemble de pratiques publiques et privées encourageant le développement économique d'un pays ou d'une région.",
            page: "6"
        },
        {
            question: "Quelle discipline étudie le système économique au niveau agrégé à travers les grands agrégats comme le revenu ou l'investissement ?",
            options: { a: "La microéconomie", b: "L'économie du travail", c: "La macroéconomie", d: "La sociologie économique" },
            reponse: "c",
            explication: "La macroéconomie est définie comme la discipline qui étudie le système économique au niveau agrégé à travers les relations entre les grands agrégats économiques.",
            page: "6"
        },
        {
            question: "Le développement est défini comme un changement qui est à la fois :",
            options: { a: "Uniquement économique et financier", b: "Uniquement politique et social", c: "Économique, social, technologique et institutionnel", d: "Uniquement technologique et environnemental" },
            reponse: "c",
            explication: "Le développement est le changement économique, social, technologique et institutionnel lié à une évolution technologique et une organisation.",
            page: "6"
        },
        {
            question: "Quand l'économie du développement s'est-elle établie comme une discipline académique ?",
            options: { a: "À la fin du XIXe siècle", b: "Pendant l'entre-deux-guerres", c: "À la fin des années 1940 et au début des années 1950", d: "Au début des années 2000" },
            reponse: "c",
            explication: "C'est à la fin des années 1940 et au début des années 1950 que l'économie du développement s'est établie comme une discipline académique.",
            page: "7"
        },
        {
            question: "Quel était l'objectif fondamental de l'économie du développement à ses origines ?",
            options: { a: "Étudier la psychologie des investisseurs", b: "Être une source de conseils pour la formulation des politiques économiques de rattrapage", c: "Analyser uniquement les marchés financiers des pays riches", d: "Promouvoir la décroissance économique" },
            reponse: "b",
            explication: "Être une source de conseils pour la formulation des politiques économiques de rattrapage était un objectif fondamental de l'économie du développement à son origine.",
            page: "8"
        },
        {
            question: "Quel était le secteur clé pour les pionniers du développement dans la période d'après-guerre ?",
            options: { a: "L'agriculture", b: "Les services", c: "Le tourisme", d: "L'industrie" },
            reponse: "d",
            explication: "Le secteur clé des pionniers du développement était l'industrie. Les politiques prônées s'évertuaient à lancer l'industrialisation des PED.",
            page: "14"
        },
        {
            question: "Dans les années 60-70, la phase de radicalisation voit le sous-développement comme la résultante de :",
            options: { a: "Causes internes uniquement (culture, mentalité)", b: "Causes externes principalement (dépendance, échange inégal)", c: "Facteurs purement géographiques", d: "Manque de ressources naturelles" },
            reponse: "b",
            explication: "L'économie du développement s'est radicalisée au cours des années 60. Le sous-développement est alors vu comme la résultante principalement de causes externes (théorie de la dépendance, etc.).",
            page: "14"
        },
        {
            question: "La théorie de la dépendance, issue du marxisme, soutient que la pauvreté des pays du Sud est la conséquence de :",
            options: { a: "Leur manque d'intégration dans l'économie mondiale", b: "Leur climat défavorable", c: "Processus historiques mis en place par les pays du Nord", d: "Leur choix de ne pas s'industrialiser" },
            reponse: "c",
            explication: "Elle soutient que la pauvreté, l'instabilité politique et le sous-développement des pays du Sud est la conséquence de processus historiques mis en place par les pays du Nord.",
            page: "14"
        },
        {
            question: "Quelle thèse, développée par Emmanuel en 1969, explique l'inégalité par les écarts de rémunération du facteur travail ?",
            options: { a: "La thèse du dualisme", b: "La thèse de l'Échange inégal", c: "La thèse de la croissance équilibrée", d: "La thèse de la modernisation" },
            reponse: "b",
            explication: "La thèse de l'Échange inégal (1969) d'Emmanuel explique que l'échange inégal provient des écarts dans la rémunération du facteur travail entre les différentes régions du monde.",
            page: "15"
        },
        {
            question: "Qui sont les économistes du développement associés au 'micro-développement' et à la théorie de la randomisation ?",
            options: { a: "Rostow et Nurkse", b: "Lewis et Hirschman", c: "Michael Kremer, Esther Duflo, Abhijit Banerjee", d: "Samir Amin et André Gunder Frank" },
            reponse: "c",
            explication: "Le cours cite notamment Michael Kremer, Esther Duflo, Ted Miguel, Abhijit Banerjee, Sendhil Mullainathan comme les économistes ayant développé ces outils.",
            page: "16"
        },
        {
            question: "Que sont les Objectifs du Millénaire pour le Développement (OMD), fixés en 2000 ?",
            options: { a: "Un plan de libéralisation totale des marchés", b: "Un ensemble d'objectifs mesurables à atteindre d'ici 2015, comme la réduction de l'extrême pauvreté", c: "Un programme de développement industriel pour les pays de l'OCDE", d: "Une déclaration sur la protection de l'environnement uniquement" },
            reponse: "b",
            explication: "Les dirigeants politiques ont fixé en 2000 un ensemble d'objectifs mesurables appelés les Objectifs du millénaire pour le développement, à atteindre d'ici à 2015.",
            page: "17"
        },
        {
            question: "Parmi les 5 principes de la Déclaration de Paris sur l'Efficacité de l'Aide, lequel souligne que les pays partenaires doivent maîtriser leurs propres politiques ?",
            options: { a: "L'harmonisation", b: "La gestion axée sur les résultats", c: "La responsabilité mutuelle", d: "L'appropriation" },
            reponse: "d",
            explication: "L'appropriation suppose que les pays partenaires exercent une réelle maîtrise sur leurs politiques et stratégies de développement.",
            page: "17"
        },
        {
            question: "Combien d'Objectifs de développement durable (ODD) ont été adoptés par les Nations Unies en 2015 pour l'horizon 2030 ?",
            options: { a: "8", b: "12", c: "17", d: "25" },
            reponse: "c",
            explication: "Les 193 pays membres de l'ONU ont défini 17 Objectifs de développement durable (ODD).",
            page: "18"
        },
        {
            question: "Laquelle de ces affirmations correspond à la typologie d'un pays développé ?",
            options: { a: "Un IDH généralement inférieur à 0,8", b: "Une économie principalement agraire", c: "Un IDH généralement supérieur à 0,8", d: "Une forte dépendance à l'exportation de matières premières brutes" },
            reponse: "c",
            explication: "Les pays développés présentent en général un IDH supérieur à 0,8.",
            page: "19"
        },
        {
            question: "Quelle est la définition du Développement Durable ?",
            options: { a: "Une croissance économique maximale sans aucune contrainte", b: "Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures", c: "Un processus qui favorise uniquement les pays industrialisés", d: "Une conception qui vise à arrêter toute forme de croissance" },
            reponse: "b",
            explication: "Le développement durable est un développement qui répond aux besoins du présent sans corrompre la capacité des générations futures à répondre à leurs propres besoins.",
            page: "21"
        },
        {
            section: "Chapitre 2 : Modèle de développement",
            question: "Quels sont les deux types de croissance distingués par les économistes ?",
            options: { a: "Rapide et lente", b: "Interne et externe", c: "Extensive et intensive", d: "Agricole et industrielle" },
            reponse: "c",
            explication: "Deux types de croissance sont distingués par les économistes. La croissance extensive (augmentation des quantités de facteurs) et la croissance intensive (gains de productivité).",
            page: "23"
        },
        {
            question: "Selon Walt Whitman Rostow, combien de phases ou d'étapes de la croissance économique toutes les sociétés traversent-elles ?",
            options: { a: "3", b: "4", c: "5", d: "7" },
            reponse: "c",
            explication: "Rostow affirme que l'on peut dire de toutes sociétés qu'elles passent par l'une des cinq (5) phases suivantes.",
            page: "24"
        },
        {
            question: "Dans le modèle de Rostow, quelle est la première étape de la croissance économique ?",
            options: { a: "Le décollage ('take off')", b: "La société traditionnelle", c: "L'ère de la consommation de masse", d: "La marche vers la maturité" },
            reponse: "b",
            explication: "La première des cinq phases est la société traditionnelle, essentiellement agricole avec une technologie élémentaire.",
            page: "24"
        },
        {
            question: "Quelle est la caractéristique principale de l'étape du 'décollage' (take off) chez Rostow ?",
            options: { a: "La société est essentiellement agricole et statique", b: "La société brise les obstacles à sa croissance régulière", c: "La production de services devient prédominante", d: "La croissance est stable et généralisée à tous les secteurs" },
            reponse: "b",
            explication: "C'est la période pendant laquelle la société finit par renverser les obstacles et les barrages qui s'opposaient à sa croissance régulière.",
            page: "24"
        },
        {
            question: "Selon Rostow, quel taux d'investissement productif (en % du revenu national) est une des conditions du décollage ?",
            options: { a: "Il doit baisser en dessous de 2%", b: "Il doit stagner autour de 5%", c: "Il doit passer de 5% ou moins à plus de 10%", d: "Il doit atteindre 50%" },
            reponse: "c",
            explication: "Une des trois conditions du décollage est 'une hausse du taux de l'investissement productif qui passerait de 5 ou moins à plus de 10% du revenu national net'.",
            page: "25"
        },
        {
            question: "Qu'est-ce qu'un secteur moteur (leading sector) selon Rostow ?",
            options: { a: "Un secteur dont la croissance est très lente", b: "Un secteur dont le taux de croissance est élevé et qui résulte de l'innovation", c: "Un secteur qui ne dépend que de l'agriculture", d: "Un secteur entièrement contrôlé par l'État" },
            reponse: "b",
            explication: "Les secteurs de croissance primaire (SCP) ont un taux de croissance élevé qui résulte de l'innovation ou de l'exploitation de nouvelles ressources.",
            page: "27"
        },
        {
            question: "Pourquoi les investissements d'infrastructures (routes, ports) sont-ils une condition préalable au développement ?",
            options: { a: "Parce qu'ils sont très rentables pour les entrepreneurs individuels à court terme", b: "Parce qu'ils ont une période de création et d'amortissement longue et une forte indivisibilité", c: "Parce qu'ils ne nécessitent aucun financement de l'État", d: "Parce qu'ils concernent uniquement les pays déjà développés" },
            reponse: "b",
            explication: "Leurs caractéristiques (période d'amortissement longue, forte indivisibilité, rentabilité à l'échelle de la collectivité) font qu'une très large part doit être réalisée par l'Etat.",
            page: "27"
        },
        {
            question: "Une des critiques majeures de la théorie de Rostow est qu'elle propose :",
            options: { a: "Une vision cyclique de l'histoire", b: "Une vision linéaire de l'histoire où tous les pays doivent suivre le même chemin", c: "Une approche qui valorise les traditions", d: "Une théorie qui prend en compte l'environnement international" },
            reponse: "b",
            explication: "La critique principale est que sa chronologie des phases successives relève d'une vision linéaire de l'histoire, où chaque société est appelée à suivre le même parcours.",
            page: "28"
        },
        {
            section: "Chapitre 3 : Principaux défis des pays en voie de développement",
            question: "Quelle est l'une des caractéristiques générales internes des Pays en Voie de Développement (PVD) ?",
            options: { a: "Une économie principalement industrielle et un État fort", b: "Une économie agraire, un État faible et une structure sociale très inégalitaire", c: "Une transition démographique achevée et une population vieillissante", d: "Une insertion forte et dominante dans le commerce international" },
            reponse: "b",
            explication: "Les PVD se caractérisent par une structure économique et sociale qui constitue un obstacle à leur développement (économie agraire, État faible, structure sociale très inégalitaire...).",
            page: "30"
        },
        {
            question: "Qu'est-ce que la transition démographique ?",
            options: { a: "Le passage d'une population jeune à une population vieille", b: "Le passage d'un régime à forte natalité/mortalité à un régime à faible natalité/mortalité", c: "L'augmentation de l'espérance de vie uniquement", d: "La diminution de la population totale d'un pays" },
            reponse: "b",
            explication: "La transition démographique est le passage d'un régime démographique à forte natalité et mortalité à un régime démographique à faible natalité et mortalité.",
            page: "31"
        },
        {
            question: "Quelle est la principale cause de la 'mauvaise gouvernance' selon le cours ?",
            options: { a: "Des institutions trop démocratiques", b: "Les intérêts personnels privilégiés, la corruption et l'incompétence administrative", c: "Un niveau d'alphabétisme trop élevé", d: "Des choix stratégiques trop prudents" },
            reponse: "b",
            explication: "Les symptômes de la mauvaise gouvernance incluent : Intérêts personnels privilégiés, incompétence administrative, développement de réseaux de corruption, etc.",
            page: "33"
        },
        {
            question: "Qu'est-ce que l'atrophie du système judiciaire handicape principalement ?",
            options: { a: "La sécurité militaire du pays", b: "La sécurité juridique des investissements", c: "Les échanges culturels", d: "La recherche scientifique" },
            reponse: "b",
            explication: "L'état du système judiciaire est un point central. L'investissement de capitaux étrangers est fortement lié à la sécurité juridique de cet investissement.",
            page: "34"
        },
        {
            question: "Qu'est-ce que le 'BIG PUSH' (grande poussée) recommandé par certains économistes ?",
            options: { a: "Une politique de rigueur budgétaire drastique", b: "Un effort concerté d'investissement sur plusieurs fronts pour briser le cercle vicieux de la pauvreté", c: "Une ouverture soudaine et totale au commerce international", d: "Une augmentation massive des impôts pour la population" },
            reponse: "b",
            explication: "Vaincre les barrières de la pauvreté requiert un effort concerté sur plusieurs fronts, et certains économistes recommandent une « grande poussée » en avant (le BIG PUSH).",
            page: "35"
        },
        {
            question: "Parmi les actions préconisées pour échapper aux pièges de la pauvreté, laquelle est citée ?",
            options: { a: "Limiter l'éducation pour garder une main d'œuvre bon marché", b: "Se concentrer uniquement sur les grandes entreprises", c: "Investir dans le développement humain (alimentation, santé, éducation)", d: "Éviter de se doter d'infrastructures pour ne pas s'endetter" },
            reponse: "c",
            explication: "Le cours liste six catégories d'action, dont la première est 'Investir dans le développement humain : alimentation, santé, éducation, eau et infrastructures sanitaires'.",
            page: "35"
        },
        {
            question: "Dans le QCM d'auto-évaluation, comment est défini un pays émergent ?",
            options: { a: "Un pays où la majorité de la population accède à tous ses besoins vitaux", b: "Un pays qui a enclenché un processus sur le plan politique, économique et social", c: "Un pays qui a enclenché un processus pour relever le niveau de vie de ses habitants", d: "Un pays avec une économie entièrement basée sur les services" },
            reponse: "c",
            explication: "La bonne réponse au QCM est : 'Un pays qui a enclenché un processus sur le plan économique et social pour relever le niveau de vie de ses habitants'.",
            page: "22"
        },
        {
            question: "La 'décroissance' concerne les pays qui :",
            options: { a: "Ont toujours eu une croissance économique faible", b: "Sont en début de processus d'industrialisation", c: "Ont connu de forts taux de croissance par le passé", d: "Ont une économie purement agricole" },
            reponse: "a",
            explication: "Le QCM du cours indique que la décroissance concerne 'Les pays ayant connu de forts taux de croissance économique par le passé'.",
            page: "22"
        },
        {
            question: "Pour qu'il y ait développement économique, l'expérience suggère qu'il faut :",
            options: { a: "Promouvoir le développement industriel plutôt que l'agriculture", b: "Mettre l'accent uniquement sur l'importation de produits agricoles", c: "Utiliser une stratégie équilibrée qui promeut le développement conjoint de l'agriculture et de l'industrie", d: "Se concentrer exclusivement sur l'exportation de produits manufacturés" },
            reponse: "c",
            explication: "La réponse correcte au QCM est 'Utiliser une stratégie équilibrée qui promeut le développement conjoint de l'agriculture et de l'industrie'.",
            page: "22"
        },
        {
            question: "À quoi sert principalement le PIB (Produit Intérieur Brut) ?",
            options: { a: "À mesurer la croissance économique d'un pays", b: "À mesurer le nombre d'habitants", c: "À mesurer le niveau de bonheur de la population", d: "À mesurer uniquement la production agricole" },
            reponse: "a",
            explication: "Le PIB mesure la richesse produite sur un territoire. Sa variation, le taux de croissance du PIB, mesure la croissance économique. Le QCM interne propose 'mesurer la croissance économique d'un pays'.",
            page: "29"
        },
        {
            question: "La croissance économique est-elle synonyme de développement ?",
            options: { a: "Oui, toujours", b: "Non, le développement est un phénomène plus large, qualitatif, qui inclut des facteurs sociaux et culturels", c: "Oui, mais uniquement dans les pays riches", d: "Non, la croissance est qualitative et le développement est quantitatif" },
            reponse: "b",
            explication: "La conclusion du QCM indique que la croissance (quantitative) ne doit pas être confondue avec le développement (qualitatif, incluant des facteurs sociaux et culturels). La bonne réponse au QCM est 'Faux'.",
            page: "29"
        },
        {
            question: "Quel facteur n'est PAS considéré comme un facteur de croissance économique dans le QCM interne ?",
            options: { a: "Une augmentation de la quantité de travail et de capital", b: "Un accroissement de la productivité du travail", c: "Une augmentation de l'offre de monnaie", d: "L'innovation technologique" },
            reponse: "c",
            explication: "Les facteurs de croissance sont l'augmentation des facteurs de production (travail, capital) et l'amélioration de leur efficacité (productivité). Une simple augmentation de l'offre de monnaie peut créer de l'inflation sans croissance réelle.",
            page: "29"
        },
        {
            question: "Le protectionnisme consiste à :",
            options: { a: "Interdire totalement l'entrée des produits étrangers", b: "Protéger les produits nationaux contre la concurrence des produits étrangers", c: "Permettre aux pauvres de s'approvisionner plus facilement", d: "Subventionner uniquement les exportations" },
            reponse: "b",
            explication: "Le QCM interne définit le protectionnisme comme le fait de 'Protéger les produits contre la concurrence des producteurs étrangers'.",
            page: "36"
        },
        {
            question: "Comment appelle-t-on une limitation de la quantité de biens qui peuvent être importés dans un pays ?",
            options: { a: "Un droit de douane", b: "Une subvention", c: "Un quota", d: "Une taxe à la consommation" },
            reponse: "c",
            explication: "Un pays qui limite la quantité d'un produit (ex: acier) qui peut être importée utilise un quota. C'est un exemple de barrière non tarifaire.",
            page: "36"
        },
        {
            question: "L'expression 'droit de douane' correspond à :",
            options: { a: "Une limitation sur les quantités importées", b: "Une taxe sur les importations", c: "Le prix d'un bien à sa sortie du territoire", d: "Une aide aux exportateurs" },
            reponse: "b",
            explication: "Le QCM interne définit le droit de douane comme 'Une taxe sur les importations'.",
            page: "36"
        },
        {
            question: "La 'théorie du retard culturel' est une des approches explicatives du sous-développement.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "L'introduction du chapitre 2 cite explicitement 'La théorie du retard culturel' comme l'une des trois grandes approches.",
            page: "16"
        },
        {
            question: "Quel est l'objectif principal de la 'nouvelle vision du développement' apparue après les années 80 ?",
            options: { a: "Se concentrer uniquement sur la croissance du PIB", b: "Promouvoir la colonisation", c: "La réduction de la pauvreté, du chômage et des inégalités", d: "Ignorer les besoins fondamentaux de la population" },
            reponse: "c",
            explication: "Cette nouvelle vision, portée par Dudley Seers, met l'accent sur la nécessité de poser des questions sur l'évolution de la pauvreté, du chômage et des inégalités.",
            page: "22"
        }
    ]
},

        //Module 06

        'M06': {
    title: 'MEO-M06 : Processus Recherche Opportunités',
    questions: [
        {
            section: "Chapitre 1 : Généralités sur le processus de recherche d'opportunités",
            question: "Parmi les affirmations suivantes sur l'opportunité, laquelle est inexacte ?",
            options: { a: "L'opportunité doit correspondre à un besoin du marché", b: "L'opportunité se trouve au cœur du processus entrepreneurial", c: "L'opportunité est un concept lié à la conception classique", d: "L'opportunité se concrétise par la satisfaction des besoins du marché" },
            reponse: "c",
            explication: "L'opportunité est un concept lié à la conception néoclassique de l'économie, caractérisée par l'asymétrie de l'information, et non à la conception classique.",
            page: "5"
        },
        {
            question: "L'approche objectiviste de l'opportunité considère qu'elle existe indépendamment de l'entrepreneur, comme une réalité objective à découvrir.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La perspective objectiviste considère l'opportunité comme une réalité objective qui existe indépendamment de l'individu.",
            page: "6"
        },
        {
            question: "L'approche subjectiviste de l'opportunité dépend principalement de l'imagination, de la personnalité et des modes de vie de l'entrepreneur.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Dans la perspective subjectiviste, l'opportunité dépend principalement de l'imagination, de la personnalité de l'entrepreneur et de ses modes de vie et de pensée.",
            page: "6"
        },
        {
            question: "Dans l'approche subjectiviste, la disponibilité des ressources est le seul élément à prendre en compte pour identifier une opportunité.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "L'approche subjectiviste ne se limite pas aux ressources disponibles ; la perception de l'entrepreneur y joue un rôle central.",
            page: "6"
        },
        {
            question: "Les fournisseurs constituent les principaux détecteurs des carences et des atouts des produits et des services offerts sur le marché.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le contact avec les fournisseurs peut permettre de repérer des insatisfactions et des besoins, ce qui en fait des détecteurs d'opportunités.",
            page: "13"
        },
        {
            question: "La détection des opportunités découle uniquement de l'observation de la vie économique, sociale et professionnelle.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "La détection des opportunités ne découle pas uniquement de ces observations ; elle résulte aussi de l'intuition, de l'observation technologique, des analyses sectorielles, etc.",
            page: "9-10"
        },
        {
            question: "Quelle approche considère l'opportunité comme une construction sociale découlant des interactions entre une personne et son environnement ?",
            options: { a: "La perspective objectiviste", b: "La perspective subjectiviste", c: "La perspective constructiviste", d: "La perspective fataliste" },
            reponse: "b",
            explication: "La deuxième approche, qualifiée de perspective subjectiviste, considère l'opportunité comme une construction sociale.",
            page: "6"
        },
        {
            question: "Laquelle de ces dispositions n'est PAS citée comme favorable à la détection d'opportunités ?",
            options: { a: "Esprit critique", b: "Ouverture d'esprit", c: "Curiosité intellectuelle", d: "Rigidité de la pensée" },
            reponse: "d",
            explication: "Le chercheur d'opportunité doit être doté d'un esprit critique, d'une ouverture d'esprit et d'une curiosité intellectuelle sans précédent.",
            page: "7"
        },
        {
            question: "Parmi les sources d'opportunités, laquelle est liée au suivi de l'actualité, des mesures fiscales ou de la construction d'infrastructures ?",
            options: { a: "L'observation de la vie professionnelle", b: "L'observation de la vie quotidienne", c: "L'observation de la vie économique et sociale", d: "L'observation de la concurrence" },
            reponse: "c",
            explication: "Le suivi de l'actualité économique, comme l'annonce de la construction d'un centre hospitalier ou de mesures fiscales, peut constituer des occasions pour détecter de nouvelles opportunités.",
            page: "10"
        },
        {
            question: "L'exemple de l'application Uber est cité pour illustrer une opportunité émergente issue de :",
            options: { a: "La démographie", b: "La tendance des jeunes", c: "Les technologies numériques", d: "La vie quotidienne" },
            reponse: "c",
            explication: "À titre d'illustration des opportunités issues des technologies numériques, le cours cite le e-commerce, le mobile money, et l'application Uber.",
            page: "12"
        },
        {
            section: "Chapitre 2 : Etapes du développement d'opportunités",
            question: "La collecte des données est une étape indispensable dans le processus de développement d'un produit.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La première étape du développement consiste à identifier un problème et à collecter les informations pour mieux cerner les besoins.",
            page: "26"
        },
        {
            question: "Parmi les affirmations suivantes sur la génération de concepts, laquelle est inexacte ?",
            options: { a: "Elle consiste uniquement à la clarification du problème identifié", b: "Elle consiste à la clarification du problème et à la recherche de potentielles solutions", c: "Elle vise à définir le meilleur concept pour répondre aux besoins du client", d: "Elle peut s'appuyer sur des solutions internes et externes" },
            reponse: "a",
            explication: "La génération de concepts ne consiste pas uniquement à clarifier le problème, mais aussi à rechercher les potentielles solutions.",
            page: "28"
        },
        {
            question: "La perception d'un besoin nouveau ou insatisfait implique la recherche d'une meilleure solution pour le résoudre.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La perception d'un besoin nouveau ou insatisfait implique nécessairement l'identification d'un problème et la recherche d'une meilleure solution pour le résoudre.",
            page: "18"
        },
        {
            question: "Les principaux aspects à considérer dans le processus de développement d'un produit sont uniquement les fonctions production et marketing.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Le développement d'un produit implique plusieurs autres fonctions comme le design, la finance, la R&D, la logistique, etc.",
            page: "24"
        },
        {
            question: "Les potentielles solutions à un problème social identifié peuvent provenir de l'environnement externe de votre organisation.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La recherche de potentielles solutions se fait tant au niveau interne qu'externe à l'organisation.",
            page: "28"
        },
        {
            question: "La première phase du processus de détection d'opportunités est :",
            options: { a: "La création d'un concept commercial", b: "La perception des besoins du marché", c: "L'identification d'une adéquation entre besoins et ressources", d: "L'évaluation financière" },
            reponse: "b",
            explication: "Le processus de détection comporte trois principales étapes, dont la première est la perception des besoins du marché.",
            page: "17"
        },
        {
            question: "L'émergence de la société UberCab (devenue Uber) est née d'une frustration liée à :",
            options: { a: "La difficulté de trouver un restaurant à Paris", b: "La difficulté de trouver un taxi à San Francisco", c: "La difficulté de trouver un taxi à Paris", d: "Le coût élevé des hôtels à Paris" },
            reponse: "c",
            explication: "La société est née à la suite d'une grande frustration des fondateurs de ne pas pouvoir trouver facilement un taxi dans une grande ville comme Paris.",
            page: "19"
        },
        {
            question: "Quelle est la finalité de l'étape de création du concept commercial ?",
            options: { a: "Seulement satisfaire les besoins identifiés", b: "Aboutir à une réorientation globale de la stratégie de l'entreprise", c: "Uniquement trouver les financements", d: "Valider la perception initiale de l'idée" },
            reponse: "b",
            explication: "Cette étape peut aller au-delà des ressources disponibles pour la satisfaction des besoins identifiés pour aboutir à une réorientation globale de la stratégie d'ensemble de l'entreprise.",
            page: "21"
        },
        {
            question: "Les trois fonctions centrales sur lesquelles une attention particulière doit être portée pour le développement d'un produit sont :",
            options: { a: "Finance, Juridique, Ressources Humaines", b: "Marketing, Design et Production", c: "Logistique, Achat, Vente", d: "Direction, Communication, Qualité" },
            reponse: "b",
            explication: "Une attention particulière doit être portée sur les trois fonctions centrales : Marketing, Design et Production.",
            page: "25"
        },
        {
            question: "L'étape du 'Prototypage et essais' a pour but de :",
            options: { a: "Définir le prix final du produit", b: "Lancer la commercialisation à grande échelle", c: "Préparer la fabrication d'un prototype fonctionnel pour validation", d: "Former les équipes de vente" },
            reponse: "c",
            explication: "Cette phase correspond à la période de préparation de la fabrication d'un prototype fonctionnel et complet par l'équipe chargée de développer le produit.",
            page: "28"
        },
        {
            section: "Chapitre 3 : Typologies des innovations et des opportunités",
            question: "On distingue l'innovation de procédé de :",
            options: { a: "L'innovation de produit", b: "L'innovation incrémentale", c: "L'innovation radicale", d: "L'innovation d'usage" },
            reponse: "a",
            explication: "La typologie selon l'objet de l'innovation distingue principalement l'innovation de produit, de procédé, organisationnelle et de commercialisation. L'innovation de produit est donc distincte de celle de procédé.",
            page: "32-33"
        },
        {
            question: "Parmi les innovations suivantes, laquelle n'est pas une innovation d'usage ?",
            options: { a: "Le rasoir jetable", b: "Les emballages biodégradables", c: "Le commerce équitable", d: "L'innovation technologique" },
            reponse: "d",
            explication: "L'innovation technologique est une catégorie de la typologie selon la nature, tandis que l'innovation d'usage est une autre catégorie de cette même typologie. Elles sont donc distinctes.",
            page: "32"
        },
        {
            question: "La création d'une entreprise découle-t-elle toujours d'un problème connu avec des solutions déjà identifiées ?",
            options: { a: "Oui", b: "Non" },
            reponse: "b",
            explication: "Non, la création d'entreprise peut aussi naître de situations où le problème n'est pas clairement identifié ou pour lesquelles les solutions sont inconnues (transfert de technologie, inventions pures).",
            page: "40-41"
        },
        {
            question: "On distingue l'innovation incrémentale de :",
            options: { a: "L'innovation de produit", b: "L'innovation majeure", c: "L'innovation d'adaptation", d: "L'innovation de procédé" },
            reponse: "b",
            explication: "La typologie selon l'intensité distingue l'innovation majeure (ou radicale) de l'innovation incrémentale (ou mineure).",
            page: "34"
        },
        {
            question: "Parmi ces affirmations, laquelle est fausse ?",
            options: { a: "L'innovation permet une rente de monopole", b: "L'innovation conduit toujours à une invention utile", c: "L'innovation conduit à un monopole temporaire", d: "L'innovation d'adaptation consiste à dupliquer une innovation" },
            reponse: "b",
            explication: "Toutes les innovations ne découlent pas forcément d'une 'invention' (au sens technique) et ne sont pas toujours 'utiles' (cf. les exemples d'inventions inutiles).",
            page: "19, 31"
        },
        {
            question: "Quel est l'exemple donné pour l'innovation de produit ?",
            options: { a: "La chaîne de montage", b: "L'ordinateur et l'automobile", c: "Le e-commerce", d: "Les services de microcrédit" },
            reponse: "b",
            explication: "Le cours donne comme exemples d'innovation de produit : l'ordinateur, l'automobile.",
            page: "33"
        },
        {
            question: "Le 'mobile money' est un exemple d'innovation de :",
            options: { a: "Procédé", b: "Produit", c: "Commercialisation", d: "Organisationnelle" },
            reponse: "c",
            explication: "Le 'mobile money' est cité comme un exemple d'innovation de commercialisation (ou de marché).",
            page: "34"
        },
        {
            question: "Les services de microcrédit sont un exemple d'innovation de :",
            options: { a: "Modèle d'affaires", b: "Rupture", c: "Produit", d: "Technologique" },
            reponse: "a",
            explication: "Les services de microcrédit sont donnés comme exemple d'une innovation de modèle d'affaires, qui réorganise la structure des revenus et des coûts.",
            page: "34"
        },
        {
            question: "Une innovation qui consiste en des perfectionnements apportés à des produits existants est dite :",
            options: { a: "Radicale", b: "De rupture", c: "D'adaptation", d: "Incrémentale" },
            reponse: "d",
            explication: "L'innovation incrémentale consiste à des perfectionnements apportés aux produits ou aux procédés de production existants.",
            page: "35"
        },
        {
            question: "L'utilisation des motos en remplacement des ânes pour la traction des charrues est un exemple d'innovation :",
            options: { a: "D'adaptation", b: "De rupture", c: "D'assemblage", d: "Sociale" },
            reponse: "a",
            explication: "C'est un exemple d'innovation d'adaptation, où une solution d'un secteur (transport) est adaptée à un autre usage (agriculture).",
            page: "36"
        },
        {
            question: "Un camping-car est un exemple d'innovation :",
            options: { a: "Incrémentale", b: "D'adaptation", c: "D'assemblage", d: "De procédé" },
            reponse: "c",
            explication: "Le camping-car associe plusieurs offres existantes (véhicule, logement) pour en créer une nouvelle, ce qui correspond à une innovation d'assemblage.",
            page: "36"
        },
        {
            question: "Selon une enquête de CB Insight, quelle est la principale cause d'échec des startups (42% des cas) ?",
            options: { a: "Le manque de financement", b: "Une mauvaise équipe de direction", c: "La non-concordance de leurs offres aux besoins du marché", d: "Une concurrence trop forte" },
            reponse: "c",
            explication: "Une enquête de CB Insight a révélé que 42% des startups qui ont échoué sont arrivées à cette situation à cause de la non concordance de leurs offres aux besoins du marché.",
            page: "37"
        },
        {
            question: "Selon l'étude de Guenrich Alshuller sur 40 000 brevets, plus de 95% des inventions sont :",
            options: { a: "Des découvertes scientifiques pures", b: "Des améliorations ou des évolutions de produits existants", c: "La création de nouveaux concepts", d: "Des échecs commerciaux" },
            reponse: "b",
            explication: "L'étude révèle que plus de 95% des inventions constituent des améliorations ou des évolutions de produits existants.",
            page: "38"
        },
        {
            question: "Dans la typologie des processus d'innovation, une situation où le problème est connu mais la solution ne l'est pas correspond au :",
            options: { a: "1er type (chemin direct)", b: "2ème type (créativité requise)", c: "3ème type (transfert de technologie)", d: "4ème type (problème et solution inconnus)" },
            reponse: "b",
            explication: "Le 2ème type correspond à une situation où les problèmes à résoudre sont connus tandis que les solutions ne le sont pas, ce qui nécessite une dose de créativité.",
            page: "40"
        },
        {
            question: "La télémédecine est un exemple de quel type de processus d'innovation ?",
            options: { a: "Problème connu, solution connue", b: "Problème connu, solution inconnue", c: "Problème inconnu, solution connue (transfert de technologie)", d: "Problème inconnu, solution inconnue" },
            reponse: "c",
            explication: "La télémédecine est donnée comme exemple du 3ème type, où les capacités (la technologie) existent sans destination prédéfinie et où l'on cherche des problèmes à résoudre.",
            page: "41"
        },
        {
            question: "Dans la matrice 'Monde du problème / Monde de la solution', que représente la case 'Problème Connu / Solution Connue' ?",
            options: { a: "Transfert de technologie", b: "Résolution de problème", c: "Création d'entreprise", d: "Rêveurs" },
            reponse: "c",
            explication: "Quand le problème et la solution sont connus, le chemin est balisé pour la création d'une entreprise afin de commercialiser le produit. Le tableau le nomme 'Création d'entreprise'.",
            page: "42"
        },
        {
            question: "Poser la question 'Quels sont les modes de vie qui pourraient affecter la clientèle ?' relève de l'identification d'opportunités au niveau de :",
            options: { a: "La technologie", b: "La concurrence", c: "La jeunesse", d: "La démographie" },
            reponse: "c",
            explication: "Cette question est explicitement listée dans la section 'Au niveau de la jeunesse'.",
            page: "43"
        },
        {
            question: "Poser la question 'Quelles sont les activités dont le rythme de croissance est plus élevé que celui de l’économie ?' relève de l'analyse de :",
            options: { a: "La clientèle", b: "La concurrence", c: "Le personnel", d: "La vie quotidienne" },
            reponse: "b",
            explication: "Cette question fait partie des interrogations listées dans la section 'Au niveau de la concurrence' pour identifier des opportunités.",
            page: "44"
        },
        {
            question: "Selon la correction, la génération de concepts consiste uniquement à clarifier le problème.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "La correction fournie dans le document type indique que cette affirmation est inexacte, car la génération de concepts inclut aussi la recherche de solutions.",
            page: "3 (QCM Type)"
        },
        {
            question: "Selon la correction, l'essai du prototype est indispensable dans un processus innovant.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La correction du document indique que l'affirmation 'L'essai du prototype est indispensable' est Vraie, même si la question originale dans le type-file est formulée à la forme négative.",
            page: "4 (QCM Type)"
        }
    ]
},
        //Module 07

        'M07': {
    title: 'MEO-M07 : Etude de faisabilité d\'opportunités',
    questions: [
        {
            section: "Chapitre 1 : Généralités sur l'étude de faisabilité d'opportunité",
            question: "Comment est également appelée l'étude d'opportunité ?",
            options: { a: "Business Plan", b: "Analyse SWOT", c: "Business Case", d: "Analyse financière" },
            reponse: "c",
            explication: "L'étude d'opportunité est aussi appelée analyse d'opportunité, note d'opportunité ou encore business case.",
            page: "6"
        },
        {
            question: "Laquelle de ces questions N'EST PAS une préoccupation centrale d'une étude d'opportunité ?",
            options: { a: "Le projet est-il réalisable avec les moyens disponibles ?", b: "Le projet est-il réalisable d'un point de vue légal ?", c: "Le projet a-t-il déjà été réalisé par un concurrent ?", d: "Le projet couvrira-t-il les exigences du consommateur ?" },
            reponse: "c",
            explication: "L'étude d'opportunité cherche à savoir si le projet est réalisable (moyens, légalité) et s'il répondra aux exigences des parties prenantes, pas s'il a déjà été fait ailleurs.",
            page: "6"
        },
        {
            question: "L'étude d'opportunité est une combinaison de l'étude de faisabilité et de :",
            options: { a: "L'analyse de la concurrence", b: "L'évaluation des résultats attendus", c: "La recherche de financement", d: "La stratégie marketing" },
            reponse: "b",
            explication: "Elle constitue la combinaison d'une étude de faisabilité (l'opportunité est-elle réalisable ?) avec une évaluation des résultats attendus.",
            page: "7"
        },
        {
            question: "La première étape d'une étude d'opportunité pertinente est :",
            options: { a: "L'analyse de la situation", b: "Le choix de l'option", c: "L'étude des scénarios", d: "La définition du problème à résoudre" },
            reponse: "d",
            explication: "La réalisation de l'étude est précédée de l'évaluation des besoins. Cette étape préliminaire vise à cerner le problème à résoudre.",
            page: "9"
        },
        {
            question: "Quelle analyse est utilisée pour évaluer la capacité de l'organisation à soutenir le projet sur les plans économique, technique et financier ?",
            options: { a: "L'analyse des besoins", b: "L'analyse des risques", c: "L'analyse diagnostic", d: "L'analyse prévisionnelle" },
            reponse: "c",
            explication: "L'analyse diagnostic permet d'évaluer la capacité de l'organisation à soutenir le projet sur le plan économique, technique, financier et commercial.",
            page: "10"
        },
        {
            question: "Quel outil N'EST PAS cité pour l'analyse de la situation ?",
            options: { a: "La matrice SWOT", b: "L'analyse PESTEL", c: "La matrice BCG", d: "Le diagramme d'Ishikawa (5M)" },
            reponse: "c",
            explication: "Le cours mentionne spécifiquement la matrice SWOT, l'analyse PESTEL et le diagramme d'Ishikawa ou méthode de 5 M.",
            page: "10"
        },
        {
            question: "Quels types d'indicateurs doivent être prévus pour décrire l'état souhaité à l'issue de la résolution du problème ?",
            options: { a: "Indicateurs financiers uniquement", b: "Indicateurs qualitatifs", c: "Indicateurs SMART", d: "Indicateurs généraux" },
            reponse: "c",
            explication: "Cette composante doit prévoir des indicateurs SMART qui seront utilisés comme critère d'évaluation de la pertinence de la solution.",
            page: "11"
        },
        {
            question: "À l'issue du choix du scénario optimal, quel document doit être élaboré ?",
            options: { a: "Un rapport annuel", b: "Une fiche technique", c: "Un contrat de travail", d: "Une nouvelle analyse SWOT" },
            reponse: "b",
            explication: "A l'issue du choix du scénario retenu, une fiche technique y relative doit être élaborée.",
            page: "12"
        },
        {
            question: "Parmi les contraintes de l'étude d'opportunités, laquelle est liée à la nécessité d'un agrément ou d'une autorisation ?",
            options: { a: "Contraintes techniques", b: "Contraintes financières", c: "Contraintes légales et règlementaires", d: "Contraintes économiques" },
            reponse: "c",
            explication: "Les contraintes légales et règlementaires incluent l'obtention d'une autorisation ou d'un agrément.",
            page: "16"
        },
        {
            question: "La faisabilité économique d'un projet est principalement fonction de sa capacité à :",
            options: { a: "Utiliser les dernières technologies", b: "Satisfaire l'ensemble des employés", c: "Respecter les délais", d: "Réaliser un retour sur investissement" },
            reponse: "d",
            explication: "La faisabilité économique de votre projet sera fonction principalement de sa capacité à réaliser un retour sur investissement.",
            page: "17"
        },
        {
            section: "Chapitre 2 : Processus d'évaluation des opportunités",
            question: "Quels sont les quatre critères clés autour desquels le processus d'évaluation des opportunités est bâti ?",
            options: { a: "Le temps, le lieu, la méthode et le personnel", b: "Les coûts, les bénéfices, la cohérence stratégique et les difficultés de mise en œuvre", c: "Le marketing, la finance, la production et les ressources humaines", d: "L'innovation, la tradition, la concurrence et le monopole" },
            reponse: "b",
            explication: "Le processus d'évaluation est bâti principalement autour de quatre critères clés que sont les coûts, les bénéfices, la cohérence stratégique et les difficultés de mise en œuvre.",
            page: "28"
        },
        {
            question: "Dans la grille d'analyse du rapport coûts-bénéfices, que représentent les bénéfices ?",
            options: { a: "Le personnel et les équipements", b: "La réglementation et les matières premières", c: "Les parts de marché, la rentabilité, l'image de marque", d: "La distribution et la promotion" },
            reponse: "c",
            explication: "Les éléments à prendre en compte dans la constitution des bénéfices sont principalement les parts de marché, la rentabilité, l'image de marque, la satisfaction de la clientèle, etc.",
            page: "20"
        },
        {
            question: "Pour donner plus de chance de réussite à une opportunité, celle-ci doit être en concordance avec :",
            options: { a: "La stratégie de l'entreprise concurrente", b: "La stratégie globale de l'entreprise", c: "Les tendances économiques passées", d: "Les préférences personnelles du dirigeant" },
            reponse: "b",
            explication: "Pour donner plus de chance de réussite à une opportunité, cette dernière doit être en concordance avec la stratégie de l'entreprise ou tendre vers son futur profil stratégique.",
            page: "21"
        },
        {
            question: "Qu'est-ce que la 'force motrice' d'une entreprise ?",
            options: { a: "Son capital financier", b: "Son nombre d'employés", c: "L'élément catalyseur qui oriente ses choix et constitue sa principale source d'avantages concurrentiels", d: "Son ancienneté sur le marché" },
            reponse: "c",
            explication: "Qualifiée de force motrice, cet élément constitue la principale force d'une entreprise et la source de ses avantages concurrentiels les plus importants.",
            page: "22"
        },
        {
            question: "Une entreprise orientée 'concept de marché' va se caractériser par :",
            options: { a: "La fourniture d'un seul type de produit", b: "Le ciblage d'une catégorie de marché et des besoins y relatifs", c: "Un gros investissement en matière d'équipement", d: "Une aptitude à inventer de nouvelles technologies" },
            reponse: "b",
            explication: "Le tableau 5 indique qu'une entreprise orientée 'concept de marché' se caractérise par le 'Ciblage d'une catégorie de marché et des besoins y relatifs (Ex : secteur de l'équipement des hôpitaux)'.",
            page: "23"
        },
        {
            question: "Une entreprise orientée 'technologie/savoir-faire' aura comme caractéristique principale :",
            options: { a: "Le ciblage des personnes âgées", b: "La vente en ligne", c: "L'aptitude à inventer ou à acquérir des technologies", d: "Un gros investissement en équipement" },
            reponse: "c",
            explication: "Selon le tableau 5, la caractéristique est l''Aptitude à inventer ou à acquérir des technologies (Ex: Télécommunication)'.",
            page: "23"
        },
        {
            question: "De quoi dépendent les chances de réussite d'une opportunité ?",
            options: { a: "Uniquement de son coût faible", b: "Uniquement de ses bénéfices élevés", c: "De sa cohérence avec la stratégie d'ensemble de l'entreprise", d: "De sa complexité technique" },
            reponse: "c",
            explication: "Les chances de réussite d'une opportunité dépendent de sa cohérence avec la stratégie d'ensemble de l'entreprise.",
            page: "24"
        },
        {
            question: "Quand est-ce qu'une faible cohérence stratégique est-elle traduite ?",
            options: { a: "Par l'existence de similarité dans chacun des domaines de l'entreprise", b: "Par l'absence de similitude dans les domaines de l'entreprise", c: "Par une forte rentabilité", d: "Par un coût élevé" },
            reponse: "b",
            explication: "L'existence de similarité traduit une forte cohérence stratégique tandis que l'absence de similitude traduit une faible cohérence.",
            page: "25"
        },
        {
            question: "Le degré de difficulté de mise en œuvre d'une opportunité croît avec :",
            options: { a: "La diminution du nombre de changements nécessaires", b: "L'augmentation du nombre de changements nécessaires", c: "Le niveau de maîtrise élevé des personnes en charge", d: "Le faible coût du projet" },
            reponse: "b",
            explication: "Le degré de difficulté croit avec l'augmentation du nombre de changement nécessaire à la réalisation de l'opportunité considérée.",
            page: "25"
        },
        {
            question: "Dans la grille d'analyse complète, une opportunité qualifiée d''Excellente' (case A) se traduit par :",
            options: { a: "Un coût élevé, un bénéfice faible, une faible cohérence et une forte difficulté", b: "Un coût moyen, un bénéfice moyen, une cohérence moyenne et une difficulté moyenne", c: "Un coût réduit, un bénéfice élevé, une forte cohérence et une facilité de mise en œuvre", d: "Un coût élevé, un bénéfice élevé, une forte cohérence et une forte difficulté" },
            reponse: "c",
            explication: "Une opportunité dans la case A qualifiée d'excellente se traduira par un coût réduit, un niveau de bénéfice élevé, une forte cohérence stratégique et une facilité de mise en œuvre.",
            page: "27"
        },
        {
            question: "Dans la grille d'analyse complète, les opportunités dans les cases G, H, et I sont qualifiées de :",
            options: { a: "Excellentes", b: "Probables", c: "Mitigées", d: "Risquées" },
            reponse: "d",
            explication: "Les opportunités des cases G, H, I sont risquées à mettre en œuvre. Elles sont caractérisées par des niveaux de bénéfices et cohérence stratégique faibles.",
            page: "28"
        },
        {
            section: "Chapitre 3 : Développement et mise en œuvre des opportunités",
            question: "La première étape du développement d'une opportunité consiste à :",
            options: { a: "Identifier les facteurs critiques", b: "Bâtir des scénarios du meilleur et du pire des cas", c: "Analyser le rapport risque/gain", d: "Lancer le produit" },
            reponse: "b",
            explication: "La première étape du développement consiste à bâtir des scénarios en prévoyant les meilleurs et les pires résultats possibles pour chaque opportunité donnée.",
            page: "29"
        },
        {
            question: "Dans l'analyse 'risque/gain', quel coefficient correspond à un risque 'désastreux' ?",
            options: { a: "-1", b: "-3", c: "-5", d: "0" },
            reponse: "c",
            explication: "Le tableau de synthèse des coefficients indique que le niveau de risque 'Désastreux' correspond au coefficient -5.",
            page: "30"
        },
        {
            question: "Dans l'analyse 'risque/gain', quel coefficient correspond à un gain 'élevé' ?",
            options: { a: "1", b: "3", c: "5", d: "2" },
            reponse: "c",
            explication: "Le tableau de synthèse des coefficients indique que le niveau de gain 'Elevé' correspond au coefficient 5.",
            page: "30"
        },
        {
            question: "Selon la technique d'interprétation, une opportunité avec une côte positive d'au moins +1 doit être :",
            options: { a: "Abandonnée", b: "Mise en œuvre", c: "Réévaluée", d: "Mise en attente" },
            reponse: "b",
            explication: "La directive numéro 1 stipule qu'une obtention d'une côte positive d'au moins +1 correspond à une décision de 'Opportunités à mettre en œuvre'.",
            page: "32"
        },
        {
            question: "Une opportunité avec une côte entre -1 et +1 est une opportunité :",
            options: { a: "Excellente à mettre en œuvre", b: "À abandonner car trop risquée", c: "Avec impact minimal à abandonner", d: "À mettre en œuvre prioritairement" },
            reponse: "c",
            explication: "La directive numéro 3 indique qu'une obtention de côte entre -1 et +1 correspond à des 'Opportunités avec impact minimal à abandonner'.",
            page: "32"
        },
        {
            question: "Qu'est-ce qu'un 'facteur critique' dans le développement d'une opportunité ?",
            options: { a: "Un élément qui n'a aucun impact sur le projet", b: "Tout ce qui peut causer le meilleur ou le pire des scénarios", c: "Uniquement les ressources financières", d: "Le chef de projet" },
            reponse: "b",
            explication: "Le facteur critique est tout ce qui peut causer le meilleur ou le pire des scenarios.",
            page: "33"
        },
        {
            question: "La 'capacité à acquérir les adresses des clients cibles' est un exemple de :",
            options: { a: "Scénario du meilleur des cas", b: "Facteur critique pour le meilleur des cas", c: "Scénario du pire des cas", d: "Facteur critique pour le pire des cas" },
            reponse: "b",
            explication: "C'est un exemple de facteur critique qui, s'il est maîtrisé, contribue à la réalisation du meilleur scénario (ici, la conquête de clients).",
            page: "34"
        },
        {
            question: "La 'non-accessibilité des adresses des clients cibles' est un exemple de :",
            options: { a: "Scénario du meilleur des cas", b: "Facteur critique pour le meilleur des cas", c: "Scénario du pire des cas", d: "Facteur critique pour le pire des cas" },
            reponse: "d",
            explication: "C'est un exemple de facteur critique négatif qui, s'il se produit, contribue à la réalisation du pire scénario (ici, ne pas atteindre les clients).",
            page: "34"
        },
        {
            question: "Dans la liste de contrôle, la 'Disponibilité des compétences techniques' est un facteur de quel type ?",
            options: { a: "Facteurs de délais", b: "Facteurs de stabilité", c: "Facteurs techniques", d: "Facteurs de croissance" },
            reponse: "c",
            explication: "Cet élément est listé sous la catégorie 'Facteurs techniques' dans le tableau de contrôle.",
            page: "35"
        },
        {
            question: "La 'Permanence du marché' est un facteur de quel type ?",
            options: { a: "Facteurs de délais", b: "Facteurs de stabilité", c: "Facteurs techniques", d: "Facteurs de commercialisation" },
            reponse: "b",
            explication: "Cet élément est listé sous la catégorie 'Facteurs de stabilité'.",
            page: "35"
        },
        {
            question: "La 'Possibilité d'obtenir une famille de produits' est un facteur de quel type ?",
            options: { a: "Facteurs de positionnement", b: "Facteurs de croissance", c: "Facteurs de commercialisation", d: "Facteurs financiers" },
            reponse: "b",
            explication: "Cet élément est listé sous la catégorie 'Facteurs de croissance'.",
            page: "35"
        },
        {
            question: "Le 'Rendement prévu (ROI)' est un facteur de quel type ?",
            options: { a: "Facteurs de production", b: "Facteurs financiers", c: "Facteurs de protection", d: "Facteurs de commercialisation" },
            reponse: "b",
            explication: "Le 'Calcul du cash-flow' et le 'Rendement prévu (ROI)' sont listés sous la catégorie 'Facteurs financiers'.",
            page: "36"
        },
        {
            question: "La 'Possibilité d'obtention d'un brevet' est un facteur de quel type ?",
            options: { a: "Facteurs de production", b: "Facteurs financiers", c: "Protection", d: "Facteurs de commercialisation" },
            reponse: "c",
            explication: "Cet élément est listé sous la catégorie 'Protection'.",
            page: "36"
        },
        {
            question: "L'étape de mise en œuvre permet de déterminer de manière objective :",
            options: { a: "L'ampleur du risque encouru pour chaque opportunité", b: "Le meilleur scénario possible uniquement", c: "Le coût initial de l'idée", d: "La motivation de l'équipe" },
            reponse: "a",
            explication: "L'étape de mise en œuvre permet de déterminer de manière objective l'ampleur du risque encouru relatif à chaque opportunité et de prévoir les actions nécessaires.",
            page: "37"
        },
        {
            question: "Les actions visant à empêcher la cause d'un problème de se produire sont des actions :",
            options: { a: "Correctives", b: "D'incitation", c: "D'exploitation", d: "Préventives" },
            reponse: "d",
            explication: "Contrairement aux actions préventives qui cherchent à empêcher la cause d'un problème de se produire, celles d'incitation visent à s'assurer de la réalisation de la cause de l'opportunité.",
            page: "38"
        },
        {
            question: "La distribution gratuite de publications par des éditeurs est un exemple d'action :",
            options: { a: "Préventive", b: "D'incitation", c: "De secours", d: "Corrective" },
            reponse: "b",
            explication: "Celles d'incitation (exemple : distribution de publications gratuitement des éditeurs) visent à s'assurer de la réalisation effective de la cause de l'opportunité.",
            page: "38"
        },
        {
            question: "L'usage de panneaux 'défense de fumer' est un exemple de mesure :",
            options: { a: "Préventive", b: "D'incitation", c: "De secours", d: "D'exploitation" },
            reponse: "a",
            explication: "Les mesures préventives (exemple : l'usage des panneaux « défense de fumer ») visent à éliminer ou atténuer les problèmes futurs.",
            page: "38"
        },
        {
            question: "Que doit contenir un plan de mise en œuvre ?",
            options: { a: "Uniquement l'analyse des risques", b: "Uniquement le budget", c: "Les délais, les acteurs et les responsabilités", d: "Uniquement la liste des options" },
            reponse: "c",
            explication: "Un plan de mise en œuvre doit préciser les délais, les acteurs et les responsabilités.",
            page: "12"
        },
        {
            question: "Le livrable de l'étude de faisabilité d'opportunité aidera à :",
            options: { a: "Remplacer l'équipe de gestion de projet", b: "Prendre une décision éclairée sur le lancement du projet", c: "Garantir un succès à 100% sans aucun risque", d: "Obtenir directement un financement bancaire" },
            reponse: "b",
            explication: "Le livrable obtenu contribuera à prendre une décision éclairée et de s'assurer de l'atteinte des résultats.",
            page: "42"
        }
    ]
},

        //Module 08

        'M08': {
    title: 'MEO-M08 : Propriété Intellectuelle',
    questions: [
        {
            section: "Chapitre 1 : Généralités sur la Propriété Intellectuelle",
            question: "La propriété industrielle est une branche de la propriété intellectuelle.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La propriété intellectuelle comporte deux branches : la propriété industrielle et la propriété littéraire et artistique. Donc, la propriété industrielle n'englobe pas la PI, elle en fait partie.",
            page: "6"
        },
        {
            question: "La propriété intellectuelle porte uniquement sur les choses matérielles.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "La propriété intellectuelle régit la catégorie des biens incorporels ou immatériels, qui sont des créations de l'esprit humain.",
            page: "6"
        },
        {
            question: "La propriété intellectuelle s'intéresse à la protection des choses matérielles et immatérielles.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "La propriété intellectuelle ne protège que les biens incorporels ou immatériels (créations de l'esprit), par opposition au droit de propriété classique qui protège les biens meubles (matériels) et immeubles.",
            page: "6"
        },
        {
            question: "Le monopole d'exploitation sur une innovation technologique est :",
            options: { a: "Définitif et territorial", b: "Mondial et temporaire", c: "Temporaire et territorial", d: "Définitif et mondial" },
            reponse: "c",
            explication: "Les droits de propriété industrielle sont limités dans le temps (ex: 20 ans pour un brevet) et dans l'espace (le territoire pour lequel le titre a été délivré).",
            page: "21"
        },
        {
            question: "Les idées innovantes en tant que telles sont protégeables par le système de propriété intellectuelle.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "La propriété intellectuelle ne protège pas les idées en elles-mêmes, mais l'expression ou la matérialisation de ces idées (une invention, une œuvre, une marque).",
            page: "23"
        },
        {
            question: "La Convention de l'OMPI énonce une liste d'objets protégés qui inclut :",
            options: { a: "Uniquement les inventions", b: "Uniquement les œuvres littéraires", c: "Les inventions, les œuvres littéraires, les marques, les dessins et modèles, etc.", d: "Uniquement les découvertes scientifiques" },
            reponse: "c",
            explication: "La Convention de l'OMPI énonce une liste large et variée d'objets protégeables, incluant les œuvres, les inventions, les dessins industriels, les marques, etc.",
            page: "8"
        },
        {
            question: "Quel traité régit le système de PI au sein des états membres de l'Organisation Africaine de la Propriété Intellectuelle ?",
            options: { a: "La Convention de Berne", b: "L'Accord de Bangui", c: "L'Arrangement de la Haye", d: "Le Traité de coopération en matière de brevet (PCT)" },
            reponse: "b",
            explication: "L'Accord de Bangui régit le système de propriété intellectuelle au sein des dix-sept états membres de l'OAPI.",
            page: "9"
        },
        {
            question: "Quel organisme, créé en 1985 au Burkina Faso, est en charge de la gestion collective des droits d'auteur ?",
            options: { a: "L'OAPI", b: "La SNL", c: "L'OMPI", d: "Le Bureau Burkinabé du Droit d'Auteur (BBDA)" },
            reponse: "d",
            explication: "Pour le compte du Burkina Faso, cette fonction est exclusivement assurée par le Bureau Burkinabé du Droit d'Auteur (BBDA), créé en 1985.",
            page: "12"
        },
        {
            question: "Quelle est la mission principale de l'OMPI (Organisation Mondiale de la Propriété Intellectuelle) ?",
            options: { a: "Délivrer des brevets valables dans le monde entier", b: "Promouvoir un système international de protection intellectuelle équilibré et efficace", c: "Gérer les droits d'auteur au niveau national", d: "Sanctionner les actes de contrefaçon" },
            reponse: "b",
            explication: "La mission principale de l'OMPI consiste à promouvoir l'élaboration d'un système international de protection intellectuelle équilibré et efficace favorisant l'innovation.",
            page: "15"
        },
        {
            section: "Chapitre 2 : Droit de la propriété industrielle",
            question: "Les créations à caractère technique (inventions) sont uniquement protégeables par le brevet d'invention.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Les créations techniques peuvent aussi être protégées par le modèle d'utilité (ou petit brevet) ou le secret d'affaires, en plus du brevet.",
            page: "16-18"
        },
        {
            question: "La marque protège les créations esthétiques.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "La marque protège des signes distinctifs (noms, logos). Les créations esthétiques ou ornementales sont protégées par les dessins et modèles industriels.",
            page: "18-19"
        },
        {
            question: "L'apparence (les aspects ornementaux ou esthétiques) d'un objet est protégeable par le dessin et modèle industriel.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Les dessins et modèles industriels protègent les aspects ornementaux ou esthétiques (formes, couleurs, etc.) d'un objet utilitaire.",
            page: "18"
        },
        {
            question: "Les créations peuvent faire l'objet d'une protection au niveau international.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Il existe des systèmes de dépôt international comme le PCT pour les brevets, le système de Madrid pour les marques, ou le système de La Haye pour les dessins et modèles.",
            page: "10"
        },
        {
            question: "Les dépôts de demande de protection dans l'espace OAPI peuvent se faire suivant trois canaux.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Dans l'espace OAPI, trois modes de dépôt existent : le dépôt direct (au siège de l'OAPI ou via la SNL), le dépôt par intermédiaire (mandataire), et le dépôt international.",
            page: "21"
        },
        {
            question: "Pour qu'une invention soit brevetable, lequel de ces critères N'EST PAS requis ?",
            options: { a: "La nouveauté", b: "Le caractère inventif", c: "L'application industrielle", d: "Le succès commercial" },
            reponse: "d",
            explication: "Les trois critères de brevetabilité sont la nouveauté, le caractère inventif (non-évidence) et la possibilité d'application industrielle. Le succès commercial n'est pas une condition.",
            page: "17"
        },
        {
            question: "Le modèle d'utilité (ou petit brevet) est un titre adapté pour protéger :",
            options: { a: "Des œuvres littéraires", b: "Des petites inventions ou des aspects fonctionnels", c: "Des marques de service", d: "Des découvertes scientifiques" },
            reponse: "b",
            explication: "Le modèle d'utilité est un titre conféré pour protéger les petites inventions ou les aspects fonctionnels des modèles et dessins industriels.",
            page: "17"
        },
        {
            question: "Quel titre protège les variétés de végétaux nouvelles, stables, uniformes et distinctes ?",
            options: { a: "Le brevet", b: "La marque", c: "Le certificat d'obtention végétale (COV)", d: "Le droit d'auteur" },
            reponse: "c",
            explication: "Le certificat d'obtention végétale (COV) est le titre délivré pour protéger les variétés de végétaux qui sont nouvelles, stables, uniformes et distinctes.",
            page: "18"
        },
        {
            question: "La durée de protection d'un brevet d'invention dans l'espace OAPI est de :",
            options: { a: "10 ans", b: "15 ans", c: "20 ans", d: "25 ans" },
            reponse: "c",
            explication: "Le tableau récapitulatif indique une durée de 20 ans pour le brevet, non renouvelable, maintenu par le paiement d'annuités.",
            page: "21"
        },
        {
            question: "La durée de protection d'une marque dans l'espace OAPI est de :",
            options: { a: "5 ans renouvelable", b: "10 ans renouvelable indéfiniment", c: "20 ans non renouvelable", d: "7 ans renouvelable" },
            reponse: "b",
            explication: "Le tableau indique une durée de 10 ans pour la marque, avec un renouvellement illimité.",
            page: "21"
        },
        {
            section: "Chapitre 3 : Propriété littéraire et artistique",
            question: "Les droits patrimoniaux visent la protection de la personnalité de l'auteur.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Ce sont les droits moraux qui visent la protection de la personnalité de l'auteur. Les droits patrimoniaux visent à lui permettre de tirer un bénéfice économique de son œuvre.",
            page: "25"
        },
        {
            question: "Il n'existe pas de formalité à accomplir pour bénéficier de la protection du droit d'auteur sur son œuvre littéraire.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Toute œuvre, dès lors qu'elle est créée et originale, est automatiquement protégée par le droit d'auteur, sans aucune formalité, dès sa création.",
            page: "23"
        },
        {
            question: "Le genre de l'œuvre (littéraire, artistique, etc.) fait partie des critères de protection d'une œuvre artistique.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Sont exclus des critères de protection le genre de l'œuvre, la forme de l'expression, le niveau culturel ou la destination de l'œuvre.",
            page: "24"
        },
        {
            question: "Les droits voisins sont attribués uniquement aux organismes de radiodiffusion.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Les droits voisins sont attribués aux artistes-interprètes, aux producteurs de phonogrammes et de vidéogrammes, et aux organismes de radiodiffusion.",
            page: "26"
        },
        {
            question: "Les producteurs de phonogrammes jouissent uniquement des droits de reproduction.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Les producteurs de phonogrammes et de vidéogrammes jouissent des droits de reproduction, de distribution et de représentation.",
            page: "27"
        },
        {
            question: "Lesquels de ces droits sont des droits moraux de l'auteur ?",
            options: { a: "Le droit de reproduction et de représentation", b: "Le droit de paternité et le droit au respect de l'œuvre", c: "Le droit de suite et le droit de communication au public", d: "Le droit de radiodiffusion" },
            reponse: "b",
            explication: "Les droits moraux comprennent le droit de divulgation, de paternité, à l'intégrité (respect) et de retrait.",
            page: "25"
        },
        {
            question: "Les droits patrimoniaux de l'auteur sont perpétuels.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Les droits patrimoniaux sont temporaires (généralement la vie de l'auteur plus une période post-mortem, ex: 70 ans), contrairement aux droits moraux qui sont perpétuels.",
            page: "25"
        },
        {
            section: "Chapitre 4 : Mécanismes et procédures de protection",
            question: "Les droits attachés à un brevet permettent à son titulaire de :",
            options: { a: "Fabriquer l'invention décrite", b: "Interdire des actes comme la fabrication ou la commercialisation par des tiers", c: "Commercialiser l'invention décrite sans restriction", d: "Obtenir un monopole permanent" },
            reponse: "b",
            explication: "Le brevet est un droit d'interdiction. Il confère à son titulaire le droit d'empêcher les tiers d'exploiter (fabriquer, commercialiser) son invention sans son autorisation.",
            page: "17, 28"
        },
        {
            question: "J'ai conçu une forme particulière dont le but est qu'elle réalise une fonction. Pour prétendre à un monopole, j'opte pour :",
            options: { a: "Le brevet", b: "Le Dessin & Modèle", c: "La marque", d: "Le droit d'auteur" },
            reponse: "b",
            explication: "Le Dessin et Modèle protège l'apparence (forme, aspect ornemental) d'un produit. Si la fonction est nouvelle et inventive, le brevet serait plus approprié, mais ici l'accent est mis sur la 'forme'.",
            page: "18"
        },
        {
            question: "Pour être attractive, ma marque peut laisser supposer une qualité que mon produit ou service n'a pas.",
            options: { a: "Vrai", b: "Faux", c: "Peut être, mais c'est risqué" },
            reponse: "b",
            explication: "Non, une marque ne doit pas être trompeuse (déceptive) sur la qualité, les caractéristiques ou la provenance du produit. Un tel signe est exclu de la protection.",
            page: "38"
        },
        {
            question: "À quoi sert un brevet, entre autres ?",
            options: { a: "À protéger les dessins et modèles industriels", b: "À protéger une invention", c: "À protéger un auteur", d: "À protéger un signe distinctif" },
            reponse: "b",
            explication: "Un brevet est un titre délivré par une autorité publique pour protéger une invention technique.",
            page: "17, 28"
        },
        {
            question: "Les inventions réalisées par un salarié dans l'exécution de son contrat de travail ('inventions de mission') appartiennent en principe :",
            options: { a: "Au salarié", b: "À l'employeur", c: "Sont partagées à 50/50", d: "À l'État" },
            reponse: "b",
            explication: "Les inventions de mission appartiennent de facto à l'employeur, l'inventeur ayant droit à une rémunération.",
            page: "32-33"
        },
        {
            question: "Une invention est considérée comme nouvelle si elle n'a pas été rendue accessible au public avant la date de dépôt de la demande de brevet.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La nouveauté est une des trois conditions de brevetabilité. Elle est détruite par toute divulgation avant la date de dépôt (sauf exception de 'période de grâce').",
            page: "30"
        },
        {
            question: "Laquelle de ces créations est considérée comme non brevetable ?",
            options: { a: "Un nouveau procédé de fabrication chimique", b: "Une nouvelle machine-outil", c: "Une découverte scientifique ou une théorie mathématique", d: "Un nouveau médicament" },
            reponse: "c",
            explication: "Les découvertes, théories scientifiques et méthodes mathématiques sont explicitement exclues du champ de la brevetabilité.",
            page: "31"
        },
        {
            section: "Chapitre 5 : Contentieux de la propriété intellectuelle",
            question: "L'utilisation d'une partie seulement de la marque complexe d'un tiers constitue-t-elle une contrefaçon ?",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Oui, la reproduction, même partielle, d'un signe protégé peut constituer une contrefaçon si elle engendre un risque de confusion dans l'esprit du public. C'est la contrefaçon partielle.",
            page: "42"
        },
        {
            question: "J'ai identifié un contrefacteur de ma marque. Je décide de le laisser faire et je pourrai, plus tard, l'attaquer.",
            options: { a: "Vrai", b: "Faux", c: "Cela dépend du délai que je laisse s'écouler" },
            reponse: "c",
            explication: "L'action en contrefaçon est soumise à un délai de prescription. Si le titulaire de la marque tarde trop à agir, son action peut être déclarée irrecevable.",
            page: "N/A (Principe juridique général)"
        },
        {
            question: "La reproduction d'un seul élément d'une marque (ex: la virgule de Nike avec un autre nom) n'est pas une contrefaçon.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "b",
            explication: "Faux, la reproduction même d'un seul élément, s'il est l'élément dominant et distinctif de la marque, peut suffire à créer un risque de confusion et être qualifiée de contrefaçon.",
            page: "42"
        },
        {
            question: "La contrefaçon ne porte que sur des créations protégées par un titre de propriété industrielle ou par des droits d'auteur/voisins.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "La contrefaçon est par définition une atteinte à un droit de propriété intellectuelle existant. Sans droit protégé, il ne peut y avoir de contrefaçon (mais possiblement de la concurrence déloyale).",
            page: "40, 42"
        },
        {
            question: "Quelle est la différence entre la contrefaçon et la concurrence déloyale ?",
            options: { a: "Il n'y a aucune différence", b: "La contrefaçon sanctionne une atteinte à un droit privatif (ex: brevet), la concurrence déloyale un manquement à la déontologie commerciale", c: "La contrefaçon ne concerne que les marques", d: "La concurrence déloyale n'est pas punie par la loi" },
            reponse: "b",
            explication: "L'action en contrefaçon sanctionne l'atteinte à un droit de PI, tandis que l'action en concurrence déloyale vise à sanctionner un manquement à la déontologie commerciale (dénigrement, parasitisme...).",
            page: "41"
        },
        {
            question: "La 'copie servile' d'un produit est une forme de contrefaçon.",
            options: { a: "Vrai", b: "Faux" },
            reponse: "a",
            explication: "Le tableau des types de contrefaçon définit la contrefaçon servile comme la 'Reproduction à l'identique (produit ou signe distinctif)'.",
            page: "42"
        },
        {
            question: "Pour obtenir une saisie-contrefaçon, il faut d'abord saisir sur requête :",
            options: { a: "Le commissariat de police", b: "Le ministère du Commerce", c: "Le Président du Tribunal de Grande Instance", d: "L'OAPI directement" },
            reponse: "c",
            explication: "Pour obtenir une saisie-contrefaçon, il faut saisir sur requête le Président du Tribunal de Grande Instance du lieu où la saisie doit être réalisée.",
            page: "43"
        }
    ]
},```
        
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
























