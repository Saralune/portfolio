import { Component, OnInit } from '@angular/core';
import { Career } from '../interfaces/career.interface';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  careers: Career[] = [
    {
      date: 'Août à Octobre 2021',
      title: 'Développeuse web stagiaire',
      description: '',
    },
    {
      date: 'Mars à Novembre 2021',
      title: 'Formation développeuse web & web mobile',
      description: '',
    },
    {
      date: '2020',
      title: 'Bilan de compétences',
    },
    {
      date: 'Janvier 2016 à Octobre 2017',
      title: 'Autoentrepreneuse - Les Pelotes de Lune',
      description: '',
    },
    {
      date: 'Avant',
      title: 'Mon autre vie',
      description:
        "Avant d'arriver jusqu'à vous, j'ai été opticienne, préparatrice de commandes et assistante dentaire. Une vie à me découvrir et à farfouiller à droite à gauche, à la recherche du bonheur (professionnel). Aujourd'hui, je suis toujours aussi curieuse, mais je connais la direction !",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
