# Plan de lancement SEO local · ESPADE david Couverture · Lannemezan (65)

Contexte : domaine neuf + nouvelle fiche Google Business Profile. Sur un lancement à froid,
le classement dans le pack local dépend d'abord de la fiche GBP (32 % du poids, Whitespark 2026)
et des avis (~20 %, en hausse), puis du on-page. Le site est déjà optimisé côté code
(voir « Fait dans le code » en bas). Ce plan liste ce qui se joue EN DEHORS du code,
dans l'ordre d'impact.

## Semaine 0 · La fiche Google (le facteur n° 1)

1. **Créer la fiche GBP** avec le nom exact **« ESPADE david Couverture »** (identique au site
   et au schema : la cohérence nom/téléphone/zones entre fiche et site est un signal direct).
2. **Catégorie principale : « Couvreur »** — la mauvaise catégorie principale est le pire
   facteur négatif mesuré (score 176). Catégories secondaires : Charpentier, Entreprise de
   nettoyage de toitures (si proposées).
3. Téléphone : **06 73 30 30 82** (le même que le site, partout, à l'identique).
4. Zone desservie (SAB) : Lannemezan, Capvern, La Barthe-de-Neste, Saint-Laurent-de-Neste,
   Montréjeau, Bagnères-de-Bigorre, Tarbes. Note : le classement reste basé sur l'adresse de
   vérification, pas la zone déclarée (Sterling Sky 2025) — si une adresse ou un dépôt dans
   le 65 est possible un jour, c'est LE levier de proximité (55 % de la variance du
   classement local, Search Atlas 2025).
5. Renseigner les **services un par un** (les 8 prestations du site, mêmes intitulés),
   la description (reprendre celle du site), les horaires 24/7, et **10 à 15 photos réelles
   de chantiers** (des photos = +45 % de demandes d'itinéraire ; inutile d'en mettre 50).
6. Vérifier la fiche immédiatement (fiche vérifiée = facteur top 5).

## Semaines 1 à 4 · Les avis (le facteur n° 2)

- Objectif : **10 avis Google natifs** au plus vite — le « seuil magique » mesuré : passer
  de 9 à 10 avis produit un saut de classement net (Sterling Sky).
- Ensuite, viser la **régularité : au moins 1 avis toutes les 2-3 semaines**. Sans avis
  frais pendant 3 semaines, le classement décroche (« règle des 18 jours »). 74 % des
  consommateurs ne regardent que les avis de moins de 3 mois.
- Méthode : demander l'avis à chaque fin de chantier, par SMS avec le lien court de la fiche.
  **Jamais de tri des clients ni d'avis achetés** (interdit Google, purges massives en cours).
- Répondre à chaque avis (signal d'engagement + matière sémantique : les mots-clés présents
  dans les avis comptent pour ~5 % de la variance).

## Semaine 1 · Indexation express du domaine neuf

1. **Google Search Console** : ajouter la propriété, soumettre `sitemap.xml`, demander
   l'indexation de la page d'accueil manuellement.
2. **Bing Webmaster Tools** : importer depuis GSC, soumettre le sitemap, activer **IndexNow**.
   Bing alimente ChatGPT, Copilot et Alexa — pour un domaine neuf c'est l'index le plus
   rapide à pénétrer et le canal IA le plus direct.
3. Brancher le domaine définitif partout dans le code (voir README : canonical, og, schema,
   robots, sitemap, llms.txt contiennent l'hypothèse `rc-couverture-65.fr` à confirmer).

## Semaines 1 à 6 · Citations NAP (nom, téléphone identiques partout)

Tier 1, dans l'ordre : **Apple Business Connect** (27 % d'usage et en forte hausse),
**Bing Places**, **Facebook** (page pro), **PagesJaunes**, **Yelp**. Ces citations sont
aussi 3 des 5 premiers facteurs de visibilité dans les réponses IA (Whitespark 2026) :
ChatGPT s'appuie sur Bing/Yelp, Siri sur Apple/Yelp, Alexa sur Bing.
Toujours : « ESPADE david Couverture » + 06 73 30 30 82 + mêmes zones. Aucune variante.

## En continu · Signaux de comportement et fraîcheur

- Le site est le support de conversion : les **appels et demandes d'itinéraire depuis la
  fiche** sont des signaux de classement montants. Le bouton d'appel omniprésent du site
  y contribue directement.
- **Rafraîchir la page tous les 2-3 mois** (une phrase, une photo de chantier, la date du
  sitemap) : un contenu de moins de 3 mois est ~3× plus cité par les IA ; au-delà de
  6 mois sans mise à jour, l'éligibilité aux citations IA chute (SE Ranking).
- Publier 1 post GBP par mois (pas d'effet classement direct, mais des justifications
  d'annonce dans le pack).
- Dès que possible : une vidéo YouTube courte de chantier mentionnant « ESPADE david
  Couverture Lannemezan » — les mentions YouTube sont le signal le plus corrélé aux
  citations IA (0,737, Ahrefs 2025).

## Fait dans le code (ce commit)

- Schema RoofingContractor enrichi : `name` aligné sur la future fiche (« ESPADE david
  Couverture »), `legalName` conservé, `openingHoursSpecification` 24/7 structuré,
  `areaServed` avec liens Wikipedia des 7 communes + département (désambiguïsation
  d'entités pour Google et les IA).
- Schema WebSite (fr-FR) relié au business ; FAQPage conservé (plus de rich result Google
  depuis mai 2026, mais utile aux citations IA).
- `llms.txt` : fiche d'identité complète pour les crawlers IA (NAP, prestations, zones, garanties).
- `robots.txt` : accès explicite GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot + sitemap.
- Meta `geo.region` FR-65 / `geo.placename` Lannemezan.
- Déjà en place : title/meta description localisés, H1 « Votre couvreur à Lannemezan »,
  contenu 100 % serveur (zéro JS requis pour lire la page, les crawlers IA n'exécutent pas
  le JS), LCP optimisé (poster préchargé, vidéo 2,8 Mo, images lazy).

## Comment savoir si ça marche (indicateurs avant les positions)

- GSC : la home passe « indexée » sous 1 semaine, premières impressions sur « couvreur
  lannemezan » sous 3-4 semaines.
- GBP : appels + itinéraires dans les stats de la fiche dès les premiers avis.
- Recherche du nom exact « ESPADE david Couverture » : la fiche et le site doivent
  apparaître ensemble (sinon, problème de cohérence NAP).
- Test IA : demander à ChatGPT/Perplexity « couvreur à Lannemezan » après 4-6 semaines ;
  la présence Bing/Yelp est le prérequis.
