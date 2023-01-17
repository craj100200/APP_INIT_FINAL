import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

config : any ;
  constructor() { }

	setConfig(configIn : any) 
	{
		this.config = configIn;
	} 

	getConfig()
	{
		return this.config;
	} 


}
