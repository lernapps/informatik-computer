// The logic of EvaBild.vue, the recurring picture of this explainer: the three boxes of the IPO model (Eingabe,
// Verarbeitung, Ausgabe) with arrows, and under the box Verarbeitung the drawer "Speicher – hebt auf". Pure functions.
// Written for lernapps/informatik-computer (#490); other explainers of the epic may copy it, naming this origin.

/** The props the picture needs. */
export interface Props {
  /** The names of the three boxes: input, process, output. */
  boxes: string[];
  /** The letter of each box: E, V, A (en I, P, O). */
  letters: string[];
  /** What each box holds as an example, one text per box; an empty text shows nothing. */
  items: string[];
  /** The label of the drawer under the box Verarbeitung. */
  drawer: string;
  /** What lies in the drawer. */
  drawerItem: string;
}

/** One box of the picture. */
export interface Box {
  name: string;
  letter: string;
  item: string;
}

/** The three boxes, in the order of the arrows: input, process, output. */
export function boxes(props: Props): Box[] {
  return [0, 1, 2].map((i) => ({
    name: props.boxes[i] ?? "",
    letter: props.letters[i] ?? "",
    item: props.items[i] ?? "",
  }));
}
