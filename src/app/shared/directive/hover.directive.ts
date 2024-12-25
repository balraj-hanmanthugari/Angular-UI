import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHover]",
})
export class HoverDirective {
  @Input() appHover = "";

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appHover);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.eleRef.nativeElement.style.color = color;
    // or use this - this.renderer.addClass(this.el.nativeElement, 'wild');
    // this.renderer is used for DOM manipulations. 
  }
}