import { Component, OnInit } from '@angular/core';
import { Career } from '../interfaces/career.interface';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  /* export from carrer's interface */
  careers: Career[] = [
    {
      date: 'Août à Octobre 2021',
      title: 'Développeuse web stagiaire',
      p1: 'Travail sur une boutique Prestashop existante',
      p2: '→ Refonte pages statique et dynamiques : HTML/CSS, Smarty & JavaScript',
      p3: '→ Ajout de champs Front Office vendeur : PHP',
    },
    {
      date: 'Mars à Novembre 2021',
      title: 'Formation développeuse web & web mobile',
      p1: 'Front et Back',
      p2: '→ HTML/CSS, JavaScript, Angular',
      p3: '→ PHP, Java',
      p4: "→ Projet de formation : création d'un site de parc à thème (voir le détail dans les projets)",
      p5: "→ Projet de groupe : création d'une application Android de récupération de points sur une carte",
    },
    {
      date: '2020',
      title: 'Bilan de compétences',
    },
    {
      date: 'Janvier 2016 à Octobre 2017',
      title: 'Autoentrepreneuse',
      p1: 'Teinture de laine à la main, pour les particuliers (tricot, crochet)',
      p2: '→ Création du site internet via PrestaShop & mise à jour du site et des réseaux sociaux',
      p3: '→ Vente directe (salons) et en ligne',
    },
    {
      date: 'Avant',
      title: 'Mon autre vie',
      p1: "Avant d'arriver jusqu'à vous, j'ai été opticienne, préparatrice de commandes et assistante dentaire. Une vie à me découvrir et à farfouiller à droite à gauche, à la recherche du bonheur (professionnel). Aujourd'hui, je suis toujours aussi curieuse, mais je connais la direction !",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
