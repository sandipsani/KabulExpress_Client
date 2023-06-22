import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  constructor(private homeservice:HomeService){}

  ngOnInit() {
    this.homeservice.getAllUser()
      .subscribe(data => {
        console.log(data)
      })
  }

}
