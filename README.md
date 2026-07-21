# ESPADE david Couverture · Lannemezan (65)

Second site du client ESPADE david Couverture 09 (rc-couverture-09.fr, maquette Ariège dans
`rc-couverture-refonte/`), ciblant cette fois **Lannemezan et les Hautes-Pyrénées (65)**.

Design distinct de la maquette Ariège : registre cinématique sombre (noir chaud, crème,
terracotta discret), hero vidéo pleine hauteur avec grain film, nav pilule liquid-glass,
marquee de prestations, révélation de texte au scroll, footer avec mot géant. Statique pur
HTML/CSS/JS, sans build ni dépendance.

## Structure

- `index.html` : one-page (hero, marquee, manifeste, 8 prestations, pourquoi, étapes, zones, FAQ, devis, CTA, footer)
- `mentions-legales.html`
- `assets/` : styles.css, script.js, photos et vidéos (repris de la maquette Ariège, même client)
- `robots.txt`, `sitemap.xml`

## Avant mise en ligne (rien n'est inventé, tout est à confirmer avec le client)

1. **Domaine** : `rc-couverture-65.fr` est une HYPOTHÈSE. À confirmer, puis remplacer dans
   canonical, og:url, og:image, twitter:image, schema (`url`, `@id`, `image`), `robots.txt`, `sitemap.xml`,
   `mentions-legales.html` (canonical).
2. **Clé Web3Forms** : remplacer `REMPLACER_PAR_VOTRE_CLE_WEB3FORMS` dans `index.html`
   (gratuit, 30 s sur web3forms.com). Sans clé, le formulaire affiche le repli téléphone.
3. **Mentions légales** : compléter les blocs orange (forme juridique, SIRET 14 chiffres, APE,
   TVA, décennale et sa couverture géographique 65, directeur de publication, hébergeur).
4. **Photos réelles** : les visuels actuels sont ceux de la maquette Cycy (stock). Remplacer par
   de vraies photos de chantiers dès que le client en fournit.
5. **Zones 65** : liste actuelle (Lannemezan, Capvern, La Barthe-de-Neste, Saint-Laurent-de-Neste,
   Montréjeau, Bagnères-de-Bigorre, Tarbes) à valider avec le client, ainsi que la présence
   locale éventuelle (adresse ou dépôt dans le 65 → mettrait à jour schema + NAP).

## NAP (identique au site Ariège, source rc-couverture-09.fr)

ESPADE david Couverture 09 · « Votre spécialiste en toiture » · mobile 06 63 22 08 31 (primaire) ·
fixe 05 33 06 41 70 · Av. Aristide Berges, 09190 Lorp-Sentaraille · SIREN 525 184 883 ·
24/24 et 7/7 · pas d'email ni WhatsApp fournis.

## Preview

`launch.json` : name `rc-couverture-lannemezan`, port 4193 (python http.server).
