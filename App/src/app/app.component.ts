import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "./core/ux/animations";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent{

  constructor(
    private titleService:Title) {}

    /**
     * Aqui aproveite para fazer uma solução um pouco melhor do que a descrita no cap 4
     * Além de colocar um efeito nas mudanças de rotas, inserimos por rota um title
     * Plugin utilizado => Route Transition Animation
     **/
  prepareRoute(outlet: RouterOutlet) {
      (outlet.activatedRouteData.title  && this.titleService.setTitle(outlet.activatedRouteData.title))
      return outlet && outlet.activatedRouteData
      && outlet.activatedRouteData.animation;
  }
}
