export function generateID(): string {
    return Math.random().toString(36).substring(2, 9) + "" + new Date().getTime();
}

export function generateSwitchLabel(labelState: boolean, onText: string, offText: string): string {
    return labelState ? onText : offText;
}

export function padWithZero<T extends number | string, U extends number>(number: T, width: U): string {
    return number.toString().padStart(width, "0");
}

export function formatPrice(price: number): string {
    return price?.toLocaleString("en-US", { minimumFractionDigits: 0 });
}

export const priceText = (value: number, rounding?: boolean): string => {
    let result = "";
    if (value === 0) {
        return "رایگان";
    }
    const m = Math.floor(value / 1000000);
    const t = Math.floor(Math.floor(value % 1000000) / 1000);
    if (value > 1000000) {
        if (value % 1000 == 0) {
            result = m + " میلیون و " + t + " هزار تومن";
        } else {
            result = m + " میلیون و " + t + " هزار و پونصد تومن";
        }
    } else {
        if (value % 1000 == 0) {
            result = t + " هزار تومن";
        } else {
            if (rounding) {
                result = t + "هزار و " + (value % 1000) + " تومن";
            } else {
                // if (value % 1000 === 500) {
                result = t + " تومان";
                // }
                // else {
                //   result = t + "هزار و " + (value % 1000) + " تومن";
                // }
            }
        }
    }
    return result;
};
