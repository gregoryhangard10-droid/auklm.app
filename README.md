# AuKLM — Observatoire citoyen du bruit et du calme

**[auklm.app](https://auklm.app)**

AuKLM est un site web citoyen et gratuit qui permet à chacun de signaler, en quelques secondes et de façon anonyme, son ressenti face au bruit ou au calme d'un lieu — sur une carte collaborative en temps réel.

Le site propose également une carte data-driven analysant environ 4 000 rues et 700 parcs/jardins parisiens, en croisant plusieurs jeux de données ouvertes officielles pour estimer un score de calme par lieu.

## Fonctionnalités

- **CartoKLM** — carte collaborative citoyenne du bruit, alimentée par les signalements des utilisateurs (Google Sheets + Apps Script en backend, visualisation Looker Studio)
- **Carte du calme de Paris** — carte interactive (Leaflet) avec recherche par nom de rue/lieu, classant les rues et parcs parisiens selon un score de calme calculé
- **Guide prévention santé** — informations sourcées sur les impacts du bruit sur la santé
- **Ressources** — annuaire d'associations et d'organismes de lutte contre le bruit

## Méthodologie du score de calme

Le score croise plusieurs facteurs, chacun pondéré et combiné avec une décroissance continue par distance (pas de paliers grossiers) :

1. **Bruit de transport** (routier + ferroviaire), Lden et Ln — [Bruitparif](https://www.bruitparif.fr), cartes stratégiques de bruit (Licence Ouverte)
2. **Effet de bordure** — proximité continue aux zones de bruit ≥65 dB
3. **Vie nocturne pondérée** — bars/pubs à proximité, pondérés par terrasse et horaires tardifs — [OpenStreetMap](https://www.openstreetmap.org) (licence ODbL)
4. **Taux de végétation** (canopée) — [Paris Data](https://opendata.paris.fr), datasets "Les arbres" et "Îlots de fraîcheur" (licence ODbL)
5. **Marchés découverts** — pénalité pondérée par nombre de jours d'ouverture hebdomadaire — [Paris Data](https://opendata.paris.fr) (licence ODbL)

Seules les rues avec un échantillonnage suffisant sont incluses dans les classements ; les rues courtes (peu de points de mesure) sont affichées avec une confiance réduite, signalée visuellement.

## Stack technique

- Frontend : HTML/CSS/JavaScript vanilla, [Leaflet.js](https://leafletjs.com/) pour les cartes interactives
- Backend signalements : Google Apps Script + Google Sheets
- Visualisation CartoKLM : Google Looker Studio (rapports responsives mobile/tablette/desktop)
- Traitement des données : Python (GeoPandas, Shapely) pour le calcul du score de calme
- Hébergement : Gandi Simple Hosting

## Licences des données utilisées

- Bruitparif : Licence Ouverte / Etalab
- OpenStreetMap : Open Database License (ODbL)
- Paris Data (Ville de Paris) : Licence Ouverte / ODbL

## Confidentialité

Aucune donnée personnelle n'est collectée lors d'un signalement. Voir la [politique de confidentialité](https://auklm.app/politique-confidentialite.html) pour le détail.

## Contact

[auklm.app/contact.html](https://auklm.app/contact.html)
