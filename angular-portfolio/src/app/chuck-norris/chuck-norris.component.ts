import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss'],
})
export class ChuckNorrisComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;

  constructor() {}

  ngOnInit(): void {}
}
