import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanitizeHtmlPipe } from './core/pipes/sanitize-html.pipe';

@NgModule({
	declarations: [
		AppComponent,
		SanitizeHtmlPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		DragulaModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
