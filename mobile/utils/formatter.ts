export function formatNumber(num: number): string {
    const format = (n: number, suffix: string) => {
        return parseFloat(n.toFixed(2)) + suffix;
    };

    if (num >= 1e9) {
        return format(num / 1e9, 'B');
    } else if (num >= 1e6) {
        return format(num / 1e6, 'M');
    } else if (num >= 1e3) {
        return format(num / 1e3, 'K');
    } else {
        return parseFloat(num.toFixed(2)).toString();
    }
}