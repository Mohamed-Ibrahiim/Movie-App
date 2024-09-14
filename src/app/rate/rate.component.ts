import { NgbRatingModule ,NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {
  @Input() rating: any;
  constructor(config: NgbRatingConfig) {
		config.max = 5;
		config.readonly = true;
	}
}
