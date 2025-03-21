export function formatNumber(num: number, round: 'B' | 'M' | 'K' = 'K', digits: number = 2): string {

    const format = (n: number, suffix: string) => {
        return addCommas(parseFloat(n.toFixed(digits))) + suffix;
    };

    function addCommas(n: number): string {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (num >= 1e9) {
        return format(num / 1e9, 'B');
    } else if (num >= 1e6 && round == 'M') {
        return format(num / 1e6, 'M');
    } else if (num >= 1e3 && round == 'K') {
        return format(num / 1e3, 'K');
    } else {
        return addCommas(parseFloat(num.toFixed(digits).toString()));
    }

}