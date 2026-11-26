---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Explainer „Wie ein Computer arbeitet“ (lernapps/apps#490, Epic Informatik lernapps/apps#509). Strang
`informatik/informatiksysteme`, Stufe 5-6, Sprachen Deutsch (Ausgangssprache) und Englisch (vollständige Übersetzung).

## Curriculum

- Ordnung und Bausteine: Lernlandkarte Informatik, <https://lernapps.net/apps/map/informatik.json>, Strang
  `informatiksysteme`, Richtstufe 5-6. Die Karte gibt die Reihenfolge (`requires`); kein Lehrplan nötig.
- Orientierung (gelesen):
  - GI: Bildungsstandards Informatik Sek I (Januar 2025), S. 18, Abschnitt 5.4, IS-1, IS-2, IS-3.
  - NRW: Kernlehrplan Informatik Klasse 5 und 6 (MSB NRW 2021), S. 19 (EVA-Prinzip, Grundkomponenten), S. 15
    (Auswahl begründen).
  - Bayern LehrplanPLUS: Mittelschule Informatik 5, LB 1 (EVA); Gymnasium Natur und Technik 6, 2.1 (Speichern,
    Öffnen, Schließen, Kopieren, Einfügen).
  - Hessen: Handreichung Schulversuch „Digitale Welt“ (HMKB/HMDI, November 2024), S. 8, 13, 25.
- Kein Material eines Erstellers; der Auftrag ist das Issue lernapps/apps#490.

## Competencies

Kapitel `alltag` – Überall Informatiksysteme:
- `informatiksysteme-im-alltag`: „Ich kann Informatiksysteme in meinem Alltag erkennen, zum Beispiel Smartphone,
  Spielkonsole oder Kasse.“ → `src/alltag/informatiksysteme.yaml`
- `hardware-und-software`: „Ich kann Hardware und Software unterscheiden und erklären, wie sie in einem
  Informatiksystem zusammenwirken.“ → `src/alltag/hardware-software.yaml`
- `programme-bedienen`: „Ich kann Grundfunktionen von Programmen wie Öffnen, Speichern, Kopieren und Einfügen sicher
  nutzen.“ → `src/alltag/programme-bedienen.yaml`

Kapitel `innen` – Ein Blick ins Innere: das EVA-Prinzip:
- `computer-bestandteile`: „Ich kann die wichtigsten Bestandteile eines Computers wie Prozessor, Arbeitsspeicher,
  Festspeicher sowie Ein- und Ausgabegeräte benennen und ihre Aufgaben beschreiben.“ → `src/innen/bestandteile.yaml`
- `eva-prinzip`: „Ich kann das EVA-Prinzip (Eingabe, Verarbeitung, Ausgabe) erklären und Geräte und Vorgänge den drei
  Phasen zuordnen.“ → `src/innen/eva-prinzip.yaml` (Musterseite)
- `informatiksystem-auswaehlen`: „Ich kann für eine Aufgabe ein passendes Gerät oder Programm auswählen und meine Wahl
  begründen.“ → `src/innen/geraet-auswaehlen.yaml`

Keine Wiederholungsseite: Kein Baustein braucht etwas von außerhalb der App. Die Übungs-ids stehen in den Seiten;
jede Seite hat mindestens vier Übungen im Abschnitt `uebung` (eine im Abschnitt `einstieg`).

## Content structure

- Geschichte: Die Computer-AG der Schule zeigt die Ausstellung „Der gläserne Computer“. Jede Seite ist eine Station.
  Jona und Selin aus der Klasse 6b führen durch; Mia (6b) kommt auf der letzten Seite als Besucherin.
- Abschnitte jeder Seite, in dieser Reihenfolge, ids fest, Titel passend zur Seite:
  1. `einstieg` – die Station: ein Satz zur Szene, das Ziel der Seite („Auf dieser Seite lernst du …“), eine erste
     leichte Frage, die die Kinder vor der Erklärung beantworten.
  2. `idee` – das Neue: ein Bild (Abbildung oder Komponente), höchstens zwei kurze Texte, `definition` für jedes neue
     Fachwort, ein Kasten `note` „Merke“ zum typischen Fehler.
  3. `beispiel` – ein Kasten `example` oder eine Anleitung zum Mitmachen ohne Computer (unplugged), als `note`.
  4. `uebung` – vier Übungen oder mehr, von leicht (wiedererkennen) zu schwer (neue Lage); am Ende ein Text mit dem
     Lohn der Station und dem nächsten Schritt („An der nächsten Station …“).
- Länge: höchstens 350 Wörter zum Lesen, höchstens 4 Textblöcke hintereinander.

## Terminology

- Deutsch in einfacher Sprache (ISO 24495), kurze Sätze, „du“. Englisch: Plain English, „you“.
- Fachwörter (GI 2025 / Computing curriculum England), beim ersten Auftreten als `definition`:
  - Informatiksystem / computer system
  - Hardware / hardware, Software / software, Programm (App) / program (app)
  - Prozessor / processor, Arbeitsspeicher / memory (RAM), Festspeicher / storage
  - Eingabegerät / input device, Ausgabegerät / output device
  - EVA-Prinzip (Eingabe, Verarbeitung, Ausgabe) / IPO model (input, process, output)
  - Zwischenablage / clipboard
- Die drei Kästen heißen immer **Eingabe – Verarbeitung – Ausgabe** (en: **Input – Process – Output**); die Schublade
  darunter heißt **„Speicher – hebt auf“** (en: **„storage – keeps“**). Eine Zeile sagt: Manche Bücher nennen es
  EVAS-Prinzip (en: some books call it IPOS).
- Produktnamen nur als Beispiel; der Begriff steht vorn: Malprogramm, Textverarbeitung, Präsentationsprogramm,
  Musik-App. Tastenkürzel nur als Beispiel für Windows (Strg) und macOS (⌘), mit dem Satz, dass es auf Tablets oft über
  ein Menü geht; keine Übung hängt vom System ab.
- Keine Einheiten von Speicher (Byte kommt in #491), keine Taktfrequenzen.
- Vermeiden: „Rechner“ als Wort für den Prozessor; „Gehirn“ ohne zu sagen, wo der Vergleich aufhört.

## Exercise patterns

- **Ja oder nein mit Grund** (`informatiksysteme-im-alltag`): `generated` mit `pick: 1` aus `data/gegenstaende.yaml`
  (`name`, `istSystem`, `grund`), `compare: { choice: [ja, nein] }`; der `grund` steht in `steps`.
- **Hardware oder Software** (`hardware-und-software`): `generated` aus `data/hardware-software.yaml`, `choice`
  [Hardware, Software].
- **Befehle zählen** (`programme-bedienen`): `generated` `number` aus `data/befehlsfolgen.yaml` (Felder `folge`,
  `sonnen`, `fehlerKopieren`, `fehlerAusschneiden`): „Wie viele Sonnen sind danach auf dem Bild?“; die Fehlerfelder
  sind die Zahl, die mit dem typischen Fehler herauskommt, und immer verschieden von `sonnen`.
- **Marker zuordnen** (`computer-bestandteile`): `matching` mit `pairsFrom: material` am `labelled-figure`
  `glaeserner-computer.svg`.
- **In die EVA-Kästen legen** (`eva-prinzip`): Komponente `EvaSortierer`, Geräte aus `data/eva-geraete.yaml`
  (`name`, `phase` eingabe|verarbeitung|ausgabe, `grund`); der Touchscreen ist nicht in der Datei, er hat eine eigene
  Frage.
- **Vorgang in EVA-Reihenfolge** (`eva-prinzip`): `generated` mit `pick: 1` aus `data/vorgaenge.yaml` (`vorgang`,
  `eingabe`, `verarbeitung`, `ausgabe`) und `compare: order`.
- **Gerät für eine Aufgabe** (`informatiksystem-auswaehlen`): `generated` aus `data/aufgaben.yaml`, `choice` der Geräte.
- Dazu je Seite Fragen (`single-choice`, `multiple-choice`, `true-false`, `ordering`, `matching`); jede falsche Option
  sagt im `info`, warum sie nicht passt. Höchstens drei von fünf Übungen sind reine Auswahl.

## Figures

- Alles eigene SVG in `src/images/`, `source: eigene Zeichnung`, `licence: CC-BY-4.0`. Keine Screenshots fremder
  Software. Kein Text im Bild (Bilder gelten für beide Sprachen); Wörter stehen im Seitentext, in der Legende eines
  `labelled-figure` oder in den Props einer Komponente.
- Figuren (Stil der Vorlage `story-characters.svg`: Kopf, runder Körper, Umriss #333, keine Arme und Beine), Klasse 6b,
  alle 11 Jahre, als `defs` in `src/images/klasse-6b.svg`, in jeder Szene gleich:
  - **Jona**: kurze rotblonde Haare (#c8642a), helle Haut (#f3d2b3), grüner Kapuzenpulli (#2e8b57).
  - **Selin**: lange dunkelbraune Haare mit Pferdeschwanz (#3b2314), Haut #d9a27a, orange Jacke (#e07b24).
  - **Mia**: schwarze Locken (#222), runde Brille, Haut #8d5a3b, lila Jacke (#7b4fb8).
- **Gläserner Computer**: ein Tablet aus Glas (hellblaue, halb durchsichtige Fläche #cfe6f7, Rand #2b5d8a), innen
  sichtbar Prozessor (quadratischer Chip, dunkelgrau), Arbeitsspeicher (schmaler Riegel, grün), Festspeicher (Kästchen,
  orange); außen Kamera, Mikrofon, Lautsprecher, Touchscreen. Datei `src/images/glaeserner-computer.svg`.
- **EVA-Bild**: Komponente `EvaBild` (Anzeige, kein Text im SVG, Beschriftungen als Props je Sprache): drei Kästen
  nebeneinander (schmal: untereinander), Pfeile von links nach rechts; Eingabe blau (#2f5fb3), Verarbeitung grün
  (#2e8b57), Ausgabe orange (#c0601a), dazu je ein Buchstabe E/V/A (en I/P/O) als zweites Merkmal; im Kasten
  Verarbeitung „Prozessor, Arbeitsspeicher“; unter ihm die gestrichelte Schublade „Speicher – hebt auf“ mit
  „Festspeicher“.
- `alt` sagt, was das Bild zeigt, `caption`, worauf man schaut; beides nennt nie die Lösung einer Aufgabe.

## Sources

- Lernlandkarte, GI-Standards 2025, Lehrpläne NRW, BY, HE (siehe Curriculum), selbst geöffnet.
- Tastenkürzel: Microsoft Support „Tastenkombinationen in Windows“, Apple Support „Tastaturkurzbefehle auf dem Mac“
  (beide geöffnet beim Bau der Seite `programme-bedienen`, Links dort in `links`).
- Keine Videos, keine fremden Bilder.

## Adding a chapter or round

1. Bausteine der neuen Stufe aus der Karte holen (ids, „Ich kann …“), Reihenfolge nach `requires`.
2. Ordner `src/<kapitel>/` mit `chapter.yaml`, je Baustein eine Seite mit den Abschnitten `einstieg`, `idee`,
   `beispiel`, `uebung`; `competencies: [<id>]`. Voraussetzungen von außen: eine Seite „Das brauchst du hier“ mit
   `recap`.
3. Das Kapitel in `chapters` von `src/app.yaml` eintragen, beide Sprachen schreiben.
4. EVA-Bild über die Komponente `EvaBild`, Figuren aus `klasse-6b.svg`, Übungen aus den Mustern oben.
5. `npx vp build`, `npx --no -- lernapps check`, Commit.

## Rules learned from mistakes

None yet.
