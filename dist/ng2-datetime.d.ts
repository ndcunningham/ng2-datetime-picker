/**
 * Static variables that you can override
 *   1. days.           default 1,2,....31
 *   2. daysOfWeek,     default Sunday, Monday, .....
 *   3. firstDayOfWeek, default 0 as in Sunday
 *   4. months,         default January, February
 *   5. formatDate(d)   default returns YYYY-MM-DD HH:MM
 *   6. parseDate(str)  default returns date from YYYY-MM-DD HH:MM
 */
export declare class Ng2Datetime {
    static days: number[];
    static daysOfWeek: any[];
    static firstDayOfWeek: number;
    static months: any[];
    static formatDate(d: Date, format?: string, dateOnly?: boolean): string;
    static parseDate(dateStr: string, dateFormat?: string): Date;
    private static removeTimezone(dateStr);
    private static addDSTOffset(dateStr);
    private static parseFromDefaultFormat(dateStr);
    getMonthData(year: number, month: number): any;
}
