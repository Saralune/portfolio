import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Portfolio',
      img: '../../assets/projects/portfolio.png',
      tags: ['#Angular', '#JavaScript', '#TypeScript', '#Git', '#HTML', '#CSS'],
      introduction: 'Site personnel qui retrace mon parcours et mes projets.',
    },
    {
      name: 'Blog',
      img: '../../assets/projects/couture-circulaire.png',
      tags: ['#WordPress'],
      introduction:
        'Blog personnel présentant mes projets de couture upcycling (= cousus à partir de vêtements inutilisés, entre autres).',
    },
    {
      name: 'MarketPlace',
      img: '../../assets/projects/marketplace.png',
      tags: [
        '#PHP',
        '#Prestashop',
        '#JavaScript',
        '#MySQL',
        '#Git',
        '#HTML',
        '#CSS',
      ],
      introduction:
        'Refonte des pages (statique et dynamique) et ajout de champs dans le front office vendeur.',
    },
    {
      name: 'Parc Couture',
      img: '../../assets/projects/couverture.jpg',
      tags: [
        '#PHP',
        '#JavaScript',
        '#MySQL',
        '#Git',
        '#FullCalendar',
        '#Bootstrap',
        '#HTML',
        '#CSS',
      ],
      introduction:
        "Projet de formation développeuse. Création d'un site de réservation en ligne avec gestion des utilisateurs et des ateliers disponibles.",
    },
    {
      name: 'Site Cocktails',
      img: '../../assets/projects/couverture.jpg',
      tags: ['#Angular', '#TypeScript', '#Git', '#HTML', '#CSS'],
      introduction:
        "Création d'un site qui répertorie quelques recettes de cocktails. Exercice réalisé dans le cadre de la formation Dyma.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
