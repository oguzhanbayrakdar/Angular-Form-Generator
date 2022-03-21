import { Component, DoCheck } from '@angular/core';
import { InputData, InputDatas } from './input-data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
	inputDatas: InputData[] = InputDatas;
	selectedInputData: InputData;

	formPlacementData: any[][] = [
		[
			this.inputDatas[0],
			this.inputDatas[1],
		],
		[
			this.inputDatas[2],
		],
		[
			this.inputDatas[3],
			this.inputDatas[4],
			this.inputDatas[5]
		],
	]
	
	hasLabel = true;
	labelText = "Label 1";
	labelOutput = "";

	inputId = "";
	inputName = "";
	inputValue = "";

	formModelType: 'selectionNgModel' | 'selectionFormControl' = 'selectionNgModel';
	ngModelVarName = "";
	formControlVarName = "";

	inputOutput = `<input type="search" id="id1" [(ngModel)]="modelGoesHere" name="name1">`;

	htmlOutput = "";

	cssFramework: 'bootstrap' | 'pureCss' = 'pureCss';

	constructor() {
		// Sets default value
		this.selectedInputData = this.inputDatas.find(f => f.type == 'text') as InputData
	}

	ngDoCheck(): void {
		this.formatHtmlData();
	}

	addElementToRow(rowIndex: number){
		this.formPlacementData[rowIndex].push({})
	}

	addRowToFormPlacementData(){
		this.formPlacementData.push([{}])
	}

	removeElement(rowIndex:number, elemIndex: number){
		// Removes element form it's row(array)
		this.formPlacementData[rowIndex].splice(elemIndex, 1);

		// Remove array from formPlacementData if the array is empty
		if(this.formPlacementData[rowIndex].length < 1){
			this.formPlacementData.splice(rowIndex, 1)
		}
	}

	editElement(rowIndex:number, elemIndex:number){

	}

	addElement(rowIndex: number, elemIndex: number, type: string){
		let element = this.inputDatas.find(f => f.type == type);
		this.formPlacementData[rowIndex].splice(elemIndex, 1, element)
	}

	selectInputType(type: string){
		this.selectedInputData = this.inputDatas.find(f => f.type == type) as InputData;
		return;
	}

	formatHtmlData(){
		this.labelOutput = `<label for="${this.inputId}">${this.labelText}</label>`

		this.inputOutput = 
		`<input 
		type="${this.selectedInputData?.type || ''}"
		id="${this.inputId}"
		name="${this.inputName}"
		placeholder="${this.selectedInputData?.name || ''}"
		${this.formModelType == 'selectionNgModel' ? `[(ngModel)]="${this.ngModelVarName}"` : `[formControl]="${this.formControlVarName}"`}
		>`

		this.htmlOutput = this.labelOutput +"<br>"+ this.inputOutput
		return;
	}
}
