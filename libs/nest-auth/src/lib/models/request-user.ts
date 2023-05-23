/**
 * Utility Types
 */

type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
 */
type JsonObject = { [Key in string]?: JsonValue };

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
interface JsonArray extends Array<JsonValue> {}

export class RequestUser<Role = string> {
  id!: string; // Change type to number if using integer ids
  roles!: Role[];
  rules?: JsonValue[];
}
