export interface Metric {
    "year": number,
    "percent": number,
    "units": number,
    "grow_units": number,
    "orange_metric": number,
    "gray_metric": number,
    "blue_metric": number
}

export interface User {
    "id": string,
    "name": string,
    "saldo": number,
    "sent": number,
    "overdue": number,
    "metrics": Metric[]
}

export interface ChartData {
    "name": string,
    "value": number
}