// The logic of EvaSortierer.vue: the learner puts five devices into the three boxes of the IPO model (Eingabe,
// Verarbeitung, Ausgabe). Pure functions, which the build tests over fixed seeds (the exercise contract). A task is the
// list of the five devices drawn from the data file eva-geraete (at least two inputs, one part that processes and two
// outputs); an answer is the box chosen for each device, in the order shown, -1 for a device not yet placed.
// Written for lernapps/informatik-computer (#490); other explainers of the epic may copy it, naming this origin.

/** A device of the data file: its name, its box (0 input, 1 process, 2 output) and what it does. */
export interface Device {
  name: string;
  phase: number;
  grund: string;
}

/** The props the logic needs. */
export interface Props {
  /** The task above the devices. */
  task: string;
  /** Every device of the data file eva-geraete. */
  devices: Device[];
  /** The names of the three boxes, in the order input, process, output. */
  boxes: string[];
  /** The message when a device is not placed yet. */
  unplaced: string;
  /** The message for a device in a wrong box, with {name} and {grund}. */
  wrong: string;
}

/** The devices of a task, in the order shown. */
export interface Task {
  devices: Device[];
}

/** The box of each device in the order shown: 0, 1 or 2, -1 for none yet. */
export type Answer = number[];

/** A small seeded random generator (mulberry32). */
function random(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** `count` different items of `list`, drawn with `next`. */
function draw<T>(list: readonly T[], count: number, next: () => number): T[] {
  const rest = [...list];
  const out: T[] = [];
  while (out.length < count && rest.length > 0) out.push(...rest.splice(Math.floor(next() * rest.length), 1));
  return out;
}

/** How many devices of each box a task has: two inputs, one part that processes, two outputs. */
const PER_BOX = [2, 1, 2];

/** The task of `seed`: five devices of the data file, mixed. */
export function generate(seed: number, props: Props): Task {
  const next = random(seed);
  const chosen = PER_BOX.flatMap((count, phase) =>
    draw(
      props.devices.filter((device) => device.phase === phase),
      count,
      next,
    ),
  );
  return { devices: draw(chosen, chosen.length, next) };
}

/** Whether every device lies in its box. */
export function check(task: Task, answer: Answer): boolean {
  return answer.length === task.devices.length && task.devices.every((device, i) => answer[i] === device.phase);
}

/** The right answer: each device in its box. */
export function solution(task: Task): Answer {
  return task.devices.map((device) => device.phase);
}

/** A wrong answer: inputs and outputs swapped. */
export function wrong(task: Task): Answer {
  return task.devices.map((device) => 2 - device.phase);
}

/** The answer of each typical mistake of about.mistakes: inputs and outputs swapped; the processing part as output. */
export function mistakes(task: Task, _props?: Props): (Answer | undefined)[] {
  return [wrong(task), task.devices.map((device) => (device.phase === 1 ? 2 : device.phase))];
}

/** A text with {name} and {grund} of `device` filled in. */
const fill = (text: string, device: Device) =>
  text.replace(/\{name\}/g, device.name).replace(/\{grund\}/g, device.grund);

/** The app's message for a wrong answer: a device not placed yet, or the first device in a wrong box with what it does. */
export function reason(task: Task, answer: Answer, props: Props, _lang?: string): string | undefined {
  if (task.devices.some((_, i) => (answer[i] ?? -1) < 0)) return props.unplaced;
  const index = task.devices.findIndex((device, i) => answer[i] !== device.phase);
  const device = task.devices[index];
  return device === undefined ? undefined : fill(props.wrong, device);
}

/** An answer as text: each device with its box. */
export function show(answer: Answer, task: Task, props: Props, _lang?: string): string {
  return task.devices.map((device, i) => `${device.name} → ${props.boxes[answer[i] ?? -1] ?? "–"}`).join(", ");
}

/** The task as a learner reads it, and its solution. */
export function describe(task: Task, props: Props, _lang: string): { task: string; solution: string } {
  return {
    task: `${props.task} ${task.devices.map((device) => device.name).join(", ")}`,
    solution: show(solution(task), task, props),
  };
}

/** The task once, with {Geraete} for the devices of the task. */
export function template(props: Props, _lang: string): string {
  return `${props.task} {Geraete}`;
}

/** What sets a task: the devices shown, in their order. */
export function params(task: Task, _props: Props, _lang: string): Record<string, string> {
  return { Geraete: task.devices.map((device) => device.name).join(", ") };
}

/** What the exercise is, for a tutor. */
export const about = {
  task: {
    de: "Fünf Geräte oder Bauteile eines Computers stehen untereinander. Das Kind legt jedes mit einem von drei Knöpfen in einen Kasten: Eingabe, Verarbeitung oder Ausgabe. Dann drückt es „Prüfen“.",
    en: "Five devices or parts of a computer are listed. The child puts each one into a box with one of three buttons: input, process or output. Then they press “Check”.",
  },
  answer: {
    de: "Für jedes Gerät der gewählte Kasten.",
    en: "The box chosen for each device.",
  },
  correct: {
    de: "Richtig, wenn jedes Gerät im passenden Kasten liegt: was Daten hineingibt in Eingabe, was rechnet oder Daten für die Arbeit hält in Verarbeitung, was etwas zeigt, abspielt oder druckt in Ausgabe.",
    en: "Right when each device is in its box: what puts data in goes to input, what calculates or holds data for the work goes to process, what shows, plays or prints goes to output.",
  },
  mistakes: [
    {
      de: "Eingabe und Ausgabe vertauscht: Geräte, die etwas hineingeben, in Ausgabe gelegt und umgekehrt.",
      en: "Input and output swapped: devices that put something in placed in output, and the other way round.",
    },
    {
      de: "Prozessor oder Arbeitsspeicher in Ausgabe gelegt, als käme das Ergebnis aus ihnen heraus.",
      en: "Processor or memory placed in output, as if the result came out of them.",
    },
  ],
};
