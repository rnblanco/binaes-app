import { MenuItem } from 'primeng/api';

export interface PageComponent {
	getBreadCrumbs(): MenuItem[]
}

export interface DetailPage {
	formIsValid?: boolean
	loadInfo?(): void,
	loadAll(): void,
	add(): void,
	update(): void,
	delete(): void,
}