import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private counterService: CounterService) { }
  counter: number = 0;
  ngOnInit(){
    this.counterService.getCounter().subscribe(counter => {
      this.counter = counter;
    });

}
}
