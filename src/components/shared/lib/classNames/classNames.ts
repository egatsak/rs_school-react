export type Mods = Record<string, undefined | boolean>;

export function classNames(cls: string, mods: Mods = {}, extra: (string | undefined)[] = []): string {
  return [
    cls,
    ...extra.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
