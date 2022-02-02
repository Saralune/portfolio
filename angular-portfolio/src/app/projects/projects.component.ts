import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Exemple',
      img: '../src/assets/Illustration-Sarah-v2.jpg',
      tags: ['#HTML', '#CSS', '#JavaScript'],
      introduction: 'Blablabla, ceci est un projet.',
    },
    {
      name: 'exemple2',
      img: '../src/assets/Illustration-Sarah-v2.jpg',
      tags: ['#HTML', '#CSS', '#JavaScript'],
      introduction: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
