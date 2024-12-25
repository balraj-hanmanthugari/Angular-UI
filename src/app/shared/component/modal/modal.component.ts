import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal',
	standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
	encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
	private modalService = inject(NgbModal);

	openBackDropCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openSm(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'sm' });
	}

	openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}

	openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}

	openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

	openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

	openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}

	openModalDialogCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { modalDialogClass: 'dark-modal' });
	}
}
