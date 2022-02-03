import { Component, OnInit } from '@angular/core';
import { Section } from '../interfaces/section.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sections: Section[] = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'Compétences',
      href: '#skills',
    },
    {
      name: 'Parcours',
      href: '#career',
    },
    {
      name: 'Projets',
      href: '#projects',
    },
    {
      name: 'Hobbies',
      href: '#hobbies',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
