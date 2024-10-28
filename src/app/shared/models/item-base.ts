export type Id = number;

/** Mandatory properties for objects that are sent to server - "items". */
export type ItemBase = {
  id: Id;
  name?: string;
};
