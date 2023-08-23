export function classNames(
    cls: string,
    additional?: string
): string {
    return additional ? `${cls} ${additional}` : cls;

}
