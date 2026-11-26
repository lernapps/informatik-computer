---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: code
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: { checks-pass: 1 }
---

# Plan: informatik-computer, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-26. Explore, Plan, Code, Commit.*

## Goal

Kinder der Klassen 5-6 erkennen Informatiksysteme in ihrem Alltag, zerlegen sie in Hardware und Software, üben das
Bedienen eines Programms und ordnen die Bauteile eines Computers dem EVA-Prinzip zu. Am Ende wählen sie mit dem
EVA-Bild begründet ein Gerät für eine Aufgabe.

## Key decisions

- Archetyp `explainer`: Der Auftrag (lernapps/apps#490) verlangt einen Explainer im Format 2; Kinder brauchen
  Erklärseiten mit Bildern vor dem Üben.
- Strang `informatik/informatiksysteme`, alle 6 Bausteine liegen in diesem Strang, Richtstufe 5-6.
- Kapitel wie im Auftrag: 1 „Überall Informatiksysteme“ (3 Seiten), 2 „Ein Blick ins Innere: das EVA-Prinzip“
  (3 Seiten). Die Reihenfolge folgt `requires` der Karte.
- Keine Sammel-Wiederholung: Kein Baustein braucht etwas von außerhalb des Explainers (alle `requires` liegen in der App
  oder sind leer).
- Wiederkehrendes Bild „gläserner Computer mit drei EVA-Kästen“ (Auftrag); Name und Aussehen lege ich mit der
  Musterseite fest und melde sie dem Orchestrator.
- EVA-Bild als Anzeige-Komponente `EvaBild` (Props je Sprache), nicht als SVG-Datei: `image` ist ein Pfad für alle
  Sprachen, Text im Bild ließe sich nicht übersetzen (Fund an der Vorlage, gemeldet). Alle anderen SVGs ohne Text.
- Kein `scope`: keine `open-task` und kein Material eines Erstellers; optional laut structure.md, also weggelassen.
- Sprachen `[de, en]` (Nachtrag 1 des Orchestrators): Deutsch ist Ausgangssprache, Englisch vollständige Übersetzung
  in Plain English mit „you“; Fachbegriffe wie im Computing curriculum England (input – process – output, IPO model,
  hardware, software, processor, memory, storage). Bildtexte werden übersetzt, Namen bleiben.

## Notes

### Strang und Bausteine

Strang `informatik/informatiksysteme` (Karte informatik.json, Status `draft`, explainerFocus `strand`). Alle 6
Bausteine haben `practisedBy: []` (Lücken). Kein Baustein braucht etwas von außerhalb der App.

| Kapitel | Seite (Datei) | Baustein (id) | Schritt | requires | opens |
|---|---|---|---|---|---|
| 1 Überall Informatiksysteme | `alltag/informatiksysteme` | informatiksysteme-im-alltag | 1 | – | 30 |
| 1 | `alltag/hardware-software` | hardware-und-software | 2 | informatiksysteme-im-alltag | 27 |
| 1 | `alltag/programme-bedienen` | programme-bedienen | 3 | hardware-und-software | 11 |
| 2 Ein Blick ins Innere: das EVA-Prinzip | `innen/bestandteile` | computer-bestandteile | 3 | hardware-und-software | 6 |
| 2 | `innen/eva-prinzip` | eva-prinzip | 4 | computer-bestandteile | 3 |
| 2 | `innen/geraet-auswaehlen` | informatiksystem-auswaehlen | 4 | computer-bestandteile | 0 |

„Ich kann …“-Sätze wörtlich aus der Karte:
- informatiksysteme-im-alltag: „Ich kann Informatiksysteme in meinem Alltag erkennen, zum Beispiel Smartphone,
  Spielkonsole oder Kasse.“
- hardware-und-software: „Ich kann Hardware und Software unterscheiden und erklären, wie sie in einem
  Informatiksystem zusammenwirken.“
- programme-bedienen: „Ich kann Grundfunktionen von Programmen wie Öffnen, Speichern, Kopieren und Einfügen sicher
  nutzen.“
- computer-bestandteile: „Ich kann die wichtigsten Bestandteile eines Computers wie Prozessor, Arbeitsspeicher,
  Festspeicher sowie Ein- und Ausgabegeräte benennen und ihre Aufgaben beschreiben.“
- eva-prinzip: „Ich kann das EVA-Prinzip (Eingabe, Verarbeitung, Ausgabe) erklären und Geräte und Vorgänge den drei
  Phasen zuordnen.“
- informatiksystem-auswaehlen: „Ich kann für eine Aufgabe ein passendes Gerät oder Programm auswählen und meine Wahl
  begründen.“

Voraussetzungen von außerhalb: keine. Keine Wiederholungsseite.

### Quellen (geöffnet und gelesen)

- Lernlandkarte Informatik: https://lernapps.net/apps/map/informatik.json (Strang informatiksysteme).
- GI: Bildungsstandards Informatik Sek I (Januar 2025), doi:10.18420/rec2025_052,
  https://www.mnu.de/images/fachbereiche/Informatik/Bildungsstandards_Sek_I_2025__pdf-A_.pdf, S. 18, Abschnitt 5.4:
  Informatiksystem = „Zusammenstellung von Hard- und Softwarekomponenten sowie deren Vernetzung“; Jg. 5-6: IS-1
  (identifizieren Informatiksysteme aus ihrer Lebenswelt), IS-2 (beschreiben Bestandteile und deren Funktion), IS-3
  (öffnen und speichern Dateien). IS-10 „wählen zielgerecht Informatiksysteme aus“ steht erst in Jg. 7-10. Das Wort
  „EVA“ kommt im Text nicht vor.
- NRW: Kernlehrplan Informatik Klasse 5 und 6, MSB NRW 2021,
  https://lehrplannavigator.nrw.de/system/files/media/document/file/si_kl5u6_if_klp_2021_07_01.pdf, S. 19: „beschreiben
  das Prinzip der Eingabe, Verarbeitung und Ausgabe (EVA-Prinzip) als grundlegendes Prinzip der Datenverarbeitung“,
  „benennen Grundkomponenten … und beschreiben ihre Funktionen“; S. 15: „begründen die Auswahl eines
  Informatiksystems“.
- Bayern LehrplanPLUS, Mittelschule Informatik 5, LB 1:
  https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/5/informatik – „benennen die Komponenten von
  Rechensystemen, um daran das Prinzip Eingabe-Verarbeitung-Ausgabe (EVA) nachzuvollziehen“. Gymnasium Natur und
  Technik 6, 2.1: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/6/nt_gym – „grundlegende Funktionen von
  Standardsoftware (z. B. Speichern, Öffnen, Schließen, Kopieren, Einfügen)“; dort kein EVA.
- Hessen: Handreichung Schulversuch „Digitale Welt“, HMKB/HMDI, November 2024,
  https://kultus.hessen.de/sites/kultus.hessen.de/files/2024-11/hmkb_digwelt_nov24_barrierefrei_v2.pdf, S. 8, 13, 25:
  Hardware/Software, zentrale Hardwarebestandteile (Eingabegeräte, Festplattenspeicher, Arbeitsspeicher, Prozessor,
  Ausgabegeräte), EVA-Prinzip, Jg. 5. **Nicht geprüft:** die Entwürfe der Kerncurricula „KI und Digitale Welt“ 5/6
  (PDF-Adressen liefern 404).
- Lehrpläne hat ein Hilfsagent gelesen; die EVA-Stellen in NRW, BY-MS und HE habe ich in den Texten nachgesehen.
- Tastenkürzel (Windows, macOS) prüfe ich vor dem Schreiben in der Herstellerdokumentation (Microsoft, Apple Support).
  Noch ungeprüft.

### Didaktik

- Leitbild **gläserner Computer**: Kapitel 1 zeigt Geräte von außen (Tablet, Smartwatch, Kasse), Kapitel 2 klappt ein
  Tablet „aus Glas“ auf: innen Prozessor, Arbeitsspeicher, Festspeicher; außen Ein- und Ausgabegeräte. Darüber die
  **drei EVA-Kästen mit Pfeilen** (Eingabe → Verarbeitung → Ausgabe). Alles eigene SVG-Zeichnungen.
- Geschichte (bis Klasse 6: gezeichnete, erfundene Kinder): Die Computer-AG der Schule baut eine Ausstellung „Der
  gläserne Computer“. Klasse 6b des Epics: Jona (11) und Selin (11) führen durch die Stationen, Mia (11) darf als
  Besucherin vorkommen (Orchestrator). Jede Seite ist eine Station, die Aufgaben sind Schilder und Karten für die
  Ausstellung. Aussehen lege ich auf der Musterseite fest und melde es.
- EVA-Bild (Orchestrator): Prozessor und Arbeitsspeicher in „Verarbeitung“; der Festspeicher ist eine Schublade unter
  diesem Kasten, beschriftet „Speicher – hebt auf“ (en: „storage – keeps“). Kein vierter Kasten; eine Zeile nennt den
  Namen EVAS-Prinzip. #492 knüpft an die Schublade an.
- Unplugged steht als Anleitung auf der Seite: S. 1 Gerätesuche im Klassenzimmer und zu Hause (Liste), S. 5 Rollenspiel
  „Wir sind ein Computer“ (ein Kind gibt ein, eins rechnet, eins gibt aus). Geprüft wird mit Übungen der Seite.

### Wie die Kinder hinkommen, welcher Fehler abgefangen wird

- informatiksysteme-im-alltag: Sie sortieren Gegenstände (Fahrrad, Smartwatch, Lineal, Kasse, Waschmaschine) mit
  einem Merkmal: „Darin steckt ein kleiner Computer, der nach einem Programm arbeitet.“ Fehler: „Nur Geräte mit
  Bildschirm sind Informatiksysteme“ (Waschmaschine, Auto) und „Alles mit Strom ist eins“ (Taschenlampe, Föhn).
- hardware-und-software: Probe „Kann ich es anfassen?“, dann Zusammenwirken: ohne Software tut die Hardware nichts,
  Software braucht Hardware zum Laufen. Fehler: „Die App ist Hardware, weil sie auf dem Tablet ist“; „Der Bildschirm
  ist Software, weil er Bilder zeigt“.
- programme-bedienen: Am Beispiel eines Malprogramms: Öffnen, Speichern, Kopieren, Einfügen (dazu Ausschneiden,
  Rückgängig). Sie ordnen Schritte und erkennen, was nach einem Befehl passiert. Fehler: „Kopieren fügt schon ein“,
  „Ausschneiden und Kopieren sind gleich“, „Schließen speichert von selbst“.
- computer-bestandteile: Sie schauen in den gläsernen Computer (Bild mit Markern) und ordnen Teil und Aufgabe zu.
  Fehler: „Arbeitsspeicher behält alles, auch ohne Strom“ (Arbeitsspeicher vs. Festspeicher), „Der Bildschirm
  rechnet“, „Prozessor = Speicher“.
- eva-prinzip: Sie sortieren Geräte und Schritte eines Vorgangs in die drei Kästen und leiten es selbst im Rollenspiel
  ab. Fehler: Eingabe und Ausgabe vertauscht (Lautsprecher als Eingabe), „Touchscreen ist nur Ausgabe“ (er ist beides),
  „Verarbeitung passiert im Bildschirm“.
- informatiksystem-auswaehlen: Sie vergleichen Geräte für eine Aufgabe (Referat, Fotos, Musik) mit dem EVA-Bild:
  welche Eingabe und Ausgabe braucht die Aufgabe? Fehler: „Das teuerste/neueste Gerät ist immer am besten“, „Ein Gerät
  ohne Tastatur ist für langen Text genauso gut“.

### Umfang

- Drin: die 6 Bausteine, Geräte aus dem Alltag von Kindern, das EVA-Prinzip mit drei Kästen, ein Malprogramm als
  Beispiel für Bedienen (Öffnen, Speichern, Kopieren, Einfügen, Ausschneiden, Rückgängig; Tastenkürzel als Beispiel
  für Windows und macOS).
- Nicht drin (Abgrenzung #490): Ordner, Dateien, Pfade und Speicherorte (#492, braucht Baum und Byte); Netz und Internet
  (#502); Automaten mit Zuständen (#500); Bit und Byte (#491). „Speichern“ heißt hier nur: das Bild unter einem Namen
  sichern; *wo* es liegt, kommt in #492.
- Daten: 3 Gerätebeispiele aus dem Auftrag (Tablet, Smartwatch, Kasse) plus Alltagsgeräte; Bauteile: Prozessor,
  Arbeitsspeicher, Festspeicher, Tastatur, Maus, Mikrofon, Kamera, Touchscreen, Bildschirm, Lautsprecher, Drucker.
  Keine Speichergrößen oder Taktfrequenzen (kein Byte vor #491).
- Sprachen: Deutsch (einfache Sprache, „du“) und Englisch (Plain English, „you“), je ein vollständiger Seitenbaum.

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [x] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [x] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.
      Creator: Plan und Umfang passen, weiter. Speicher: ja, wie vorgeschlagen (Schublade „Speicher – hebt auf“ unter Verarbeitung, kein vierter Kasten). Figuren: Klasse 6b, Jona (11), Selin (11), Mia (11).

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

Die „Ersteller“-Rolle hat in diesem Epic der Orchestrator (lernapps/apps#509). Die Antworten stehen im Auftrag
(Issue lernapps/apps#490) und in den gemeinsamen Regeln des Epics; ich zitiere sie.

- Goal: „Ich erkenne Informatiksysteme in meinem Alltag, kenne ihre Teile und erkläre mit dem EVA-Prinzip, wie sie
  Eingaben zu Ausgaben verarbeiten.“ (Leitidee, #490)
- Learners: Informatik, „Stufen 5-6“ (#490). Vorwissen: keins aus dem Fach; Alltag mit Geräten.
- Model and focus: „Ein gläserner Computer, in den man hineinschauen kann … Das EVA-Prinzip ist das Bild, das bleibt:
  Drei Kästen mit Pfeilen, in die jedes Gerät eingeordnet wird.“ (#490, Didaktik). Kein Vorbild im Katalog (noch keine
  Informatik-App gelistet).
- Hurdles: im Auftrag nicht genannt; offene Frage an der Checkpoint „Recherche“. Bis dahin meine Annahmen unter Notes
  (guess).
- Content: „Er ist fertig entworfen und kann ohne Rückfrage umgesetzt werden.“ (#490). Ich schreibe die Inhalte aus
  Karte, GI-Bildungsstandards und Lehrplänen HE, BY, NRW (Regeln, Abschnitt 4).
- Amount: „Der Explainer hat nur Stufe 5-6, Welle 1 ist also der ganze Explainer.“ 2 Kapitel, 6 Bausteine (#490).
- Languages: „Deutsch in einfacher Sprache (ISO 24495), Lernende mit ‚du‘ anreden.“ (Regeln, Abschnitt 2);
  Nachtrag 1: „Jede App hat zwei Sprachen, Deutsch und Englisch … Deutsch ist die Ausgangssprache. Englisch ist eine
  vollständige Übersetzung … Plain English, Lernende mit ‚you‘.“
- Look and feel: fixed by the archetype.
- Terms: „Fachbegriffe wie die GI-Bildungsstandards 2025: Informatiksystem, EVA-Prinzip (Eingabe, Verarbeitung,
  Ausgabe) …“; „Produktnamen nur als Beispiel; der Begriff steht im Vordergrund (‚Tabellenkalkulation‘, nicht
  ‚Excel‘).“ (Regeln, Abschnitt 2). Bild: „gläserner Computer“ mit „drei EVA-Kästen“ (#490).
- Finding the app: Katalogeintrag macht der Orchestrator; Suchwörter (guess): EVA-Prinzip, Hardware und Software,
  Bestandteile Computer, Informatiksysteme Klasse 5.

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [x] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [x] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [x] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [x] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Ja, so bauen. Musterseite innen/eva-prinzip in de und en zuerst.

### Content method

**Aufbau.** `src/app.yaml` mit `format: 2`, `strand: informatik/informatiksysteme`, `languages: [de, en]`. Kapitel
`alltag` (Seiten `informatiksysteme`, `hardware-software`, `programme-bedienen`) und `innen` (Seiten `bestandteile`,
`eva-prinzip`, `geraet-auswaehlen`), je Seite `competencies: [<id>]`. Keine Wiederholungsseite: keine Voraussetzung
von außerhalb. Abschnitte mit gleichen ids auf jeder Seite: `einstieg` (Station und erste Aufgabe), `idee` (das Neue,
mit Bild), `beispiel` (Kasten `example` oder Anleitung zum Mitmachen), `uebung`. Titel passen zur Seite.

**Muster je Baustein** (Fehler und Rückmeldung wie unter Notes):
- informatiksysteme-im-alltag (erkennen): `multiple-choice` „Welche Dinge sind Informatiksysteme?“; `true-false` gegen
  „nur mit Bildschirm“; `matching` Gerät → was sein Computer tut; `generated` mit `choice` [ja, nein] aus
  `data/gegenstaende.yaml` (Felder `name`, `istSystem`, `grund`), der Grund steht in der Rückmeldung.
- hardware-und-software (unterscheiden, erklären): `multiple-choice` „Was kannst du anfassen?“; `generated` mit
  `choice` [Hardware, Software] aus `data/hardware-software.yaml`; `matching` Hardware → Software, die sie nutzt
  (Kamera → Kamera-App); `single-choice` zum Zusammenwirken („neues Tablet ohne Software“).
- programme-bedienen (nutzen): `labelled-figure` Malprogramm-Fenster mit Markern; `ordering` „Sonne in ein neues Bild
  kopieren und speichern“; `matching` Befehl → was passiert; `generated` `number` aus `data/befehlsfolgen.yaml`: „Wie
  viele Sonnen sind nach diesen Befehlen auf dem Bild?“ mit den Fehlern „Kopieren fügt schon ein“ und „Ausschneiden
  lässt das Original stehen“ (Felder je Datensatz, verschieden von der Antwort).
- computer-bestandteile (benennen, beschreiben): `matching` mit `pairsFrom: material` am gläsernen Computer (Marker →
  Bauteil); `matching` Bauteil → Aufgabe; `single-choice` „Strom weg, Bild nicht gespeichert – wo war es?“
  (Arbeitsspeicher); `true-false` „Akku leer – gespeichertes Foto weg?“ (falsch, Festspeicher).
- eva-prinzip (erklären, zuordnen): Komponente `EvaSortierer` (Geräte in die drei Kästen); `generated` mit `order` aus
  `data/vorgaenge.yaml`: die drei Schritte eines Vorgangs in die EVA-Reihenfolge bringen; `single-choice` Touchscreen
  (Eingabe und Ausgabe); `multiple-choice` „Welche Geräte geben aus?“.
- informatiksystem-auswaehlen (auswählen, begründen): `generated` mit `choice` aus `data/aufgaben.yaml` (Aufgabe →
  passendes Gerät, Fehler je falsches Gerät); `matching` Aufgabe → Art von Programm (Textverarbeitung,
  Präsentationsprogramm, Malprogramm, Musik-App); `single-choice` „Welche Begründung passt?“ (EVA-Begründung gegen
  „das neueste“/„das teuerste“); `true-false` „Das neueste Gerät ist immer das beste“.
- Jede Seite: mindestens 4 Übungen, höchstens 3 von 5 „ratbar“ (Auswahl), Pflichtübung ist eine Frage oder `generated`.
  Jede falsche Option hat ihr `info`, `generated` hat `mistakes` und `hint`.

**Bilder** (eigene SVG, `source: eigene Zeichnung`, `licence: CC-BY-4.0`; Text in Bildern je Sprache, sonst Marker
mit Legende):
- `ausstellung.svg` (S. 1): Jona und Selin vor drei Ausstellungstischen mit Tablet, Smartwatch und Kasse, von außen.
  Die Kinder sehen den Ort der Geschichte und die drei Geräte, die später aufgeklappt werden. Ohne Antwort zu den
  Aufgaben (kein Häkchen an Geräten).
- `hardware-software.svg` (S. 2): ein Tablet, links die Teile zum Anfassen (Gehäuse, Bildschirm, Kamera), rechts als
  Wolke die Apps. Bezug: die Probe „Kann ich es anfassen?“; die Pfeile zeigen das Zusammenwirken.
- `malprogramm.svg` (S. 3, `labelled-figure`): ein erfundenes Malprogramm-Fenster mit Menü „Datei“ und „Bearbeiten“,
  Sonne auf der Leinwand; Marker an Öffnen, Speichern, Kopieren, Einfügen, Ausschneiden, Rückgängig. Keine fremde
  Software, kein Screenshot.
- `glaeserner-computer.svg` (S. 4, `labelled-figure`, `legend: false` für die Zuordnung): das Tablet aus Glas,
  aufgeklappt; innen Prozessor, Arbeitsspeicher, Festspeicher, außen Touchscreen, Kamera, Mikrofon, Lautsprecher.
  Die Kinder lesen die Marker, ordnen dann zu.
- `eva-kaesten.svg` (S. 5, wiederkehrendes Bild, auch S. 6): drei Kästen „Eingabe → Verarbeitung → Ausgabe“ mit
  Pfeilen; im Kasten Verarbeitung Prozessor und Arbeitsspeicher; darunter eine Schublade „Speicher – hebt auf“ mit
  Festspeicher. en: „Input → Process → Output“, „storage – keeps“. Die Kinder lesen Pfeilrichtung und Kästen, dann
  sortieren sie selbst. Text im Bild → eine Datei je Sprache, falls die Runtime das kann; sonst Marker E/V/A mit
  Legende (guess, kläre ich beim Bauen).
- Figuren Jona, Selin (und Mia) nach `story-characters.svg` der Vorlage, Aussehen fest im Inhaltsleitfaden.

**Datendateien** (`src/data/`, Texte als `{ de, en }`): `gegenstaende.yaml`, `hardware-software.yaml`,
`befehlsfolgen.yaml`, `vorgaenge.yaml` (Felder `name`, `eingabe`, `verarbeitung`, `ausgabe`), `aufgaben.yaml`
(`aufgabe`, `geraet`, `grund`, falsche Geräte mit Grund), `eva-geraete.yaml` (`name`, `phase`, `grund`) für die
Komponente.

**Komponente `EvaSortierer`** (S. 5, Übungskomponente; kein Block kann „in Kästen einordnen“ mit mehreren gleichen
Zielen ausdrücken, `matching` braucht verschiedene rechte Seiten): zieht je Aufgabe 5 Geräte aus `eva-geraete.yaml`
(Touchscreen ausgenommen, weil er in zwei Kästen gehört). Die Kinder legen jedes Gerät mit Tippen oder Tastatur in
einen der drei Kästen (je Gerät drei Knöpfe, das Gerät erscheint im gewählten Kasten). Prüft: jedes Gerät im richtigen
Kasten. `reason` nennt das erste falsch gelegte Gerät mit seinem Grund („Ein Lautsprecher gibt Töne aus“), nicht die
Lösung. Kann nicht: Geräte mit zwei Phasen prüfen, frei beschriftete Geräte. Budget: nur Variablen der Seite, kein
eigenes CSS-Framework. Text ohne JavaScript: kommt aus `describe`.

**Engagement je Seite:**
1. informatiksysteme: Einstieg „Selin zeigt auf Fahrrad, Smartwatch, Lineal: Wo steckt ein Computer drin?“ – Wechsel:
   Bild ansehen, Merkmal lesen, Klassenzimmer-Suche (unplugged), sortieren – Lohn: die Liste der Geräte für die
   Ausstellung – Geschichte: Die AG sammelt Geräte für die Ausstellung; nächste Station: Was steckt in jedem Gerät?
2. hardware-software: Einstieg „Was am Tablet kannst du anfassen?“ – Wechsel: Bild, Probe, Beispielkasten Kamera,
   zuordnen – Lohn: Schild „Hardware / Software“ für jedes Gerät – Geschichte: Jona klebt Schilder; nächste Station:
   eine Software bedienen.
3. programme-bedienen: Einstieg „Selins Bild ist weg. Warum?“ – Wechsel: Fenster mit Markern, Tabelle der Befehle,
   Reihenfolge legen, Sonnen zählen – Lohn: das Plakat der Ausstellung ist gemalt und gespeichert – Geschichte: Plakat
   malen; nächste Station: Wir klappen das Tablet auf.
4. bestandteile: Einstieg „Wo denkt das Tablet?“ – Wechsel: gläserner Computer, Vergleich Schreibtisch/Schrank, zuordnen
   – Lohn: Steckbrief des Tablets – Geschichte: Der gläserne Computer wird aufgeklappt; nächste Station: Wie arbeiten
   die Teile zusammen?
5. eva-prinzip: Einstieg „Jona tippt 3 + 4: Was passiert zuerst?“ – Wechsel: EVA-Bild, Rollenspiel (unplugged),
   sortieren, Vorgänge ordnen – Lohn: jedes Gerät der Ausstellung hat seinen Kasten – Geschichte: Rollenspiel an der
   Station; nächste Station: Besucherin Mia fragt, welches Gerät sie nehmen soll.
6. geraet-auswaehlen: Einstieg „Mia will ein Referat schreiben: Smartwatch, Smartphone oder Laptop?“ – Wechsel:
   Vergleichstabelle, Drei-Fragen-Methode im Beispielkasten, Aufgaben zuordnen – Lohn: Rückblick auf die ganze
   Ausstellung (alle Stationen) – Geschichte: Mia geht mit einer Wahl nach Hause; Ende der Ausstellung.

**Wiederholen mit Absicht:** Die EVA-Kästen kommen auf S. 6 wieder, jetzt als Werkzeug zum Auswählen. Hardware und
Software kommen auf S. 4 wieder, jetzt im Innern.

**Tastenkürzel** (Orchestrator): Windows und macOS nur als Beispiel; dazu der Satz, dass es auf Tablets und anderen
Geräten oft über ein Menü geht. Keine Übung hängt vom System ab.

**Ein neues Kapitel** (z. B. Stufe 7-8): eigener Ordner unter `src/`, gleiche Abschnitts-ids, das EVA-Bild
`eva-kaesten.svg` wiederverwenden, Figuren wie im Inhaltsleitfaden.

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [x] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [x] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [x] Load skill `lernapps-explainer`.
- [x] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [x] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [x] Musterseite innen/eva-prinzip in de und en: EVA-Bild eva-kaesten (mit Schublade Speicher), Figuren Jona und Selin, Rollenspiel-Anleitung, Komponente EvaSortierer mit Test, generated Vorgänge ordnen, Data vorgaenge und eva-geraete; zeigt das wiederkehrende Bild und das Seitenmuster
<!-- tasks: pattern (1 added): the one page or screen that is the pattern for the others -->
- [x] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
      Creator: Ja, die übrigen 5 Seiten folgen diesem Muster. Als Nächstes bestandteile mit dem gläsernen Tablet.
- [x] Seite alltag/informatiksysteme (de, en): Bild ausstellung, Gerätesuche unplugged, generated aus gegenstaende; zeigt Informatiksysteme im Alltag erkennen
- [ ] Seite alltag/hardware-software (de, en): Bild hardware-software, generated aus hardware-software, matching Hardware zu Software; zeigt Unterscheiden und Zusammenwirken
- [ ] Seite alltag/programme-bedienen (de, en): labelled-figure malprogramm, Befehlstabelle mit Tastenkürzeln (Quellen Microsoft und Apple Support), ordering, generated Sonnen zählen; zeigt Öffnen, Speichern, Kopieren, Einfügen
- [ ] Seite innen/bestandteile (de, en): labelled-figure glaeserner-computer, Vergleich Schreibtisch und Schrank, matching pairsFrom material; zeigt Bestandteile und Aufgaben
- [ ] Seite innen/geraet-auswaehlen (de, en): Vergleichstabelle, Drei-Fragen-Methode mit EVA-Bild, generated aus aufgaben, Rückblick auf die Ausstellung; zeigt Auswählen und Begründen
<!-- tasks: pages (5 added): the other pages or screens, after the pattern -->
- [ ] Update the content guide so that it describes the app as built (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [ ] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [ ] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [ ] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->
