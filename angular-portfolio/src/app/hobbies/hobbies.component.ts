import { Component, OnInit } from '@angular/core';
import {
  faBook,
  faCut,
  faFilm,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { Hobbies } from '../interfaces/hobbies.interface';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
  faCut = faCut;
  faFilm = faFilm;
  faBook = faBook;
  faPalette = faPalette;

  hobbies: Hobbies[] = [
    {
      icon: faCut,
      title: 'Couture',
    },
    {
      icon: faFilm,
      title: 'Comédies',
    },
    {
      icon: faBook,
      title: 'Lecture',
    },
    {
      icon: faPalette,
      title: 'Illustration / Couleurs',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
