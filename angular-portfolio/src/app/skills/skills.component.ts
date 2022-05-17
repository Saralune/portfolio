import { Component, OnInit } from '@angular/core';
import {
  faAngular,
  faBootstrap,
  faGit,
  faJsSquare,
  faPhp,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faPhp = faPhp;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faGit = faGit;
  faWordpressSimple = faWordpressSimple;
  faBootstrap = faBootstrap;
}
