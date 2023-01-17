import { NgModule , APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";

import { AppComponent } from './app.component';

function myFunc(httpClient: HttpClient, configService : ConfigService)
{
	var config : any;
	return () => {  //anonymous function start
			return Promise.resolve(true)
				.then( _ => {alert("1"); return httpClient.get("./config.json").toPromise().then(res => {console.log(res);config = res;});  })
				.then( _ => {alert("2"); configService.setConfig(config); })
				.then( _ => {alert("3");})
				.then( _ => {alert("4");})
				;
		     } 	//anonymous function end
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
	HttpClientModule
  ],
  providers: [ 
	{  // <== REMEMBER THIS CURLY BRACES
	provide : APP_INITIALIZER,
	//useFactory : (client: HttpClient)=>  { client.get("./config.json").toPromise().then(res=> {alert(res); console.log(res);}); } , 
	useFactory : myFunc, 
	multi : true,   //<==REMEMBER THIS, THIS IS IMPORTANT
	deps : [HttpClient, ConfigService]
	}   //<== REMEMBER THIS CURLY BRACES
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
