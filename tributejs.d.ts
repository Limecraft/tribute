// Type definitions for TributeJS
// Project: https://github.com/zurb/tribute
// Definitions by: Jordan Humphreys <https://github.com/mrsweaters/>

export type TributeItem<T extends {}> = {
  index: number;
  original: T;
  score: number;
  string: string;
};

export type TributeSearchOpts = {
  pre: string;
  post: string;
  skip: boolean;
};

export type TributeCollection<T extends {}> = {
  // symbol that starts the lookup
  trigger?: string;

  // element to target for @mentions
  iframe?: any;

  // class added in the flyout menu for active item
  selectClass?: string;

  // class added in the flyout menu for active item
  containerClass?: string;

  itemClass?: string;

  // function called on select that returns the content to insert
  selectTemplate?: (item: TributeItem<T>|undefined) => string;

  // template for displaying item in menu
  menuItemTemplate?: (item: TributeItem<T>) => string;

  // template for when no match is found (optional),
  // If no template is provided, menu is hidden.
  noMatchTemplate?: () => string;

  // specify an alternative parent container for the menu
  menuContainer?: Element;

  // column to search against in the object (accepts function or string)
  lookup?: string | ((item: T, mentionText: string) => string);

  // column that contains the content to insert by default
  fillAttr?: string;

  // array of objects to match
  values: Array<T> | ((text: string, cb: (result: Array<T>) => void) => void);

  // When your values function is async, an optional loading template to show
  loadingItemTemplate?: string;

  // specify whether a space is required before the trigger character
  requireLeadingSpace?: boolean;

  // specify whether a space is allowed in the middle of mentions
  allowSpaces?: boolean;

  // optionally specify a custom suffix for the replace text
  // (defaults to empty space if undefined)
  replaceTextSuffix?: string;

  //specify whether the menu should be positioned
  positionMenu?: boolean;

  //specify whether to put Tribute in autocomplete mode
  autocompleteMode?: boolean;

  // specify a regex to define after which characters the autocomplete option should open
  autocompleteSeparator?: RegExp;

  // Customize the elements used to wrap matched strings within the results list
  searchOpts?: TributeSearchOpts;

  // Limits the number of items in the menu
  menuItemLimit?: number;

  // require X number of characters to be entered before menu shows
  menuShowMinLength?: number;

  // specify if the current match should be selected when the spacebar is hit
  spaceSelectsMatch?: boolean;
};

export type TributeOptions<T> =
  | TributeCollection<T>
  | {
      // pass an array of config objects
      collection: Array<TributeCollection<{ [key: string]: any }>>;
    };

type TributeElement = Element | NodeList | HTMLCollection | Array<Element>;

export default class Tribute<T extends {}> {
  constructor(options: TributeOptions<T>);

  isActive: boolean;

  append(index: number, values: Array<T>, replace?: boolean): void;

  appendCurrent(values: Array<T>, replace?: boolean): void;

  attach(to: TributeElement): void;

  detach(to: TributeElement): void;

  showMenuForCollection(input: Element, collectionIndex?: number): void;
}
