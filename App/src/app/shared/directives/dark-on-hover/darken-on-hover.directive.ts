import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";
/** Diretivas são atributos que fazem uma determinada função no front-end **/
@Directive({
  selector:'[appDarkenOnHover]'
})
export class DarkenOnHoverDirective{

  @Input() brightness:string = '';

  /** Element Ref => manipulação do DOM**/
  constructor(
    private el:ElementRef,
    private render:Renderer2
  ) {
  }

  @HostListener('mouseover')
  darkenOn(){
    this.render.setStyle(this.el.nativeElement,'filter',`brightness(${this.brightness})`)
  }

  @HostListener('mouseleave')
  darkenOff(){
    this.render.setStyle(this.el.nativeElement,'filter','brightness(100%)')
  }
  /** Evento de click **/
  @HostListener('click', ['$event']) onClick($event){

  }

}
