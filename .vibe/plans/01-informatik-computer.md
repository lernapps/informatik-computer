---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: explore
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: {}
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

### Didaktik

- Leitbild **gläserner Computer**: Kapitel 1 zeigt Geräte von außen (Tablet, Smartwatch, Kasse), Kapitel 2 klappt ein
  Tablet „aus Glas“ auf: innen Prozessor, Arbeitsspeicher, Festspeicher; außen Ein- und Ausgabegeräte. Darüber die
  **drei EVA-Kästen mit Pfeilen** (Eingabe → Verarbeitung → Ausgabe). Alles eigene SVG-Zeichnungen.
- Geschichte (bis Klasse 6: gezeichnete, erfundene Kinder): Die Computer-AG der Schule baut eine Ausstellung „Der
  gläserne Computer“ für den Tag der offenen Tür. Zwei Kinder, Jona (11) und Selin (10), führen durch die Stationen;
  jede Seite ist eine Station, die Aufgaben sind Schilder und Karten für die Ausstellung. (guess, Namen und Aussehen
  lege ich mit der Musterseite fest)
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
- [ ] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [ ] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [ ] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [ ] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [ ] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.

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

- [ ] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [ ] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [ ] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [ ] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [ ] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [ ] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [ ] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.

### Content method

<!-- One line each: the patterns and where; the figures and how they are made; the data files; each component, what it
checks and what it cannot; how a later agent adds a chapter. It becomes the content guide in Code. -->
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [ ] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [ ] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [ ] Load skill `lernapps-explainer`.
- [ ] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [ ] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
<!-- tasks: pattern: the one page or screen that is the pattern for the others -->
- [ ] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
<!-- tasks: pages: the other pages or screens, after the pattern -->
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
