export function join(...args: any[]) {
    return args.filter(Boolean).join(" ");
}
