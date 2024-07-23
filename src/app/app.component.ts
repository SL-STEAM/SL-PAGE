import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './compartido/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compartido/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {

    
  }



  title = 'SL';
}
