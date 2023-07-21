export function classNames(
    cls: string,
    additional?: string | undefined
): string {
    return additional ? `${cls} ${additional}` : cls;
}
