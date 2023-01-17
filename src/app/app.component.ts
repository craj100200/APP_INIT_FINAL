import { Component } from '@angular/core';
import {ConfigService } from "./config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'config';
	constructor(configService : ConfigService) { 
		alert("from app.component.ts");
		alert(configService.getConfig().apiurl);
	}
}
