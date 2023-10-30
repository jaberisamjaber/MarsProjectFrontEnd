import { Component, OnInit } from '@angular/core';
import { MarsServiceService } from './service/data/mars-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // variables
  title = 'mars-frontend';

  day : number = 0;
  camera : string = 'any';
  photos : any;

  imgLoaded : boolean = false;


  constructor(private marsService : MarsServiceService){}

  ngOnInit(){

  }

  loadIamges(){
    // resetting imgLoaded and photos variable at start of function call to make loading images element appear
    this.imgLoaded = true;
    this.photos = null;
    
    // fetching the images from the api
    this.marsService.retrievePhotos(this.day, this.camera).subscribe(data =>{
      this.photos = data;
      this.imgLoaded = false;
      
    })

  }

}

// add good readmes (make repo for frontend)
// host
// turn in and see feedback
