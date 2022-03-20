import { Component, DoCheck, OnInit } from '@angular/core';
import { InputType, InputTypes } from './input-types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
	inputTypes: InputType[] = InputTypes;
	selectedInputType: InputType | null = null;
	
	hasLabel = true;
	labelText = "Label 1";
	labelOutput = "";

	inputId = "";
	inputName = "";
	inputValue = "TestValue";

	formModelType: 'selectionNgModel' | 'selectionFormControl' = 'selectionNgModel';
	ngModelVarName = "";
	formControlVarName = "";

	inputOutput = `<input type="search" id="id1" [(ngModel)]="modelGoesHere" name="name1">`;

	htmlOutput = "";

	constructor() {
	}

	ngDoCheck(): void {
		this.formatHtmlData();
	}

	selectInputType(type: string){
		this.selectedInputType = this.inputTypes.find(f => f.type == type) as InputType;
		return;
	}

	formatHtmlData(){
		this.labelOutput = `<label for="${this.inputId}">${this.labelText}</label>`

		this.inputOutput = 
		`<input 
		type="${this.selectedInputType?.name || ''}"
		id="${this.inputId}"
		name="${this.inputName}"
		value="${this.inputValue}"
		placeholder="${this.selectedInputType?.name || ''}"
		${this.formModelType == 'selectionNgModel' ? `[(ngModel)]="${this.ngModelVarName}"` : `[formControl]="${this.formControlVarName}"`}
		>`

		this.htmlOutput = this.labelOutput +"<br>"+ this.inputOutput
		return;
	}
}
