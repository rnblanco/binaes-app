import { Component } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
	selector: 'root',
	template: '',
})
export class UploadFileComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public varbinaryImage: string;
	public uploadedFiles: File[];
	public uploadedFile: any[] = [];
	public selectedfiles: any[] = [];
	
	public onUpload(event: any): void {
		for (let file of event.files) {
			this.uploadedFile.push(file);
		}
	}
	
	public onSelectFile(event: { files: File[]; }) {
		this.uploadedFiles = [...<File[]>event.files];
		this.varbinaryImage = btoa(this.uploadedFiles[0].name);
		this.selectedfiles = this.uploadedFiles;
	}
	
	public uploadFile(): void {
		const formData = new FormData();
		
		let fileOfBlob;
		fileOfBlob = new File([this.uploadedFiles[0]], this.uploadedFiles[0].name, { type: 'application/png' });
		formData.append('file', fileOfBlob, fileOfBlob.name);
		
		this.subscription.add(
			this.catalogService.addOfURL("UploadImage", formData).subscribe(
				() =>{}
			)
		);
	}
}