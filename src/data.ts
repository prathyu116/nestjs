export enum ReportType {
    INCOME = "income",
    EXPENSE = "expence"
}
interface Data {
    report: {
        id: string;
        amount: number;
        source: string;
        created_at: Date;
        updated_at: Date;
        type: ReportType;

    }[]
}


export const data: Data = {
    report: [
        {
            id: '1',
            amount: 7500,
            source: 'job',
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: '2',
            amount: 2500,
            source: 'ytb',
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
}


// data.report.push({
//     id: '1',
//     amount: 7500,
//     source: '1',
//     created_at: new Date(),
//     updated_at: new Date(),
//     type: ReportType.INCOME
// })