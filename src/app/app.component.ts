import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BL_logo_square_png.png"
  url="https://www.bridgelabz.com"

  ngOnInit() : void{
    this.title="Hello from BridgeLabz!"
  }

  OnClick($event:any){
    console.log("Save button is clicked",$event);
    window.open(this.url,"_blank");
  }
}
