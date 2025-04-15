export function propsToDataAttrs(
  props: Record<string, any>,
  baseAttr: string
): Record<string, string> {
  const dataAttrs: Record<string, string> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    const kebabKey = key
      .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
      .toLowerCase();

    dataAttrs[`lk-${baseAttr}-${kebabKey}`] = String(value);
  });

  return dataAttrs;
}

