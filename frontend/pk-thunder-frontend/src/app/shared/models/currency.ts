// How the information is received from the API
export interface RawCurrency {
	time:       Time;
	disclaimer: string;
	chartName:  string;
	bpi:        Bpi;
}
// How the information is needed in frontend
export interface FormattedCurrency {
	time:       Time;
	disclaimer: string;
	chartName:  string;
	bpi:        BpiDetail[];
}

export interface Bpi {
	USD: BpiDetail;
	GBP: BpiDetail;
	EUR: BpiDetail;
}

export interface BpiDetail {
	code:        string;
	symbol:      string;
	rate:        string;
	description: string;
	rate_float:  number;
}

export interface Time {
	updated:    Date;
	updatedISO: Date;
	updateduk:  Date;
}

export interface Chart {
	labels: string[];
	datasets: ChartDataSet[];
}

export interface ChartDataSet {
	label?: string;
	data: number[];
	backgroundColor: string[]
}

export interface History {
	bpi: BpiDetail[];
	time: Time;
}

export const CurrencySymbol = {
	'&euro;':  '€',
	'&pound;': '£',
	'&#36;': '$',
}
