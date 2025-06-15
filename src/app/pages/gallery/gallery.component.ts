import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BtnSocialNetworksComponent } from "../../components/btn-social-networks/btn-social-networks.component";

@Component({
  selector: 'app-gallery',
  imports: [NavbarComponent, FooterComponent, BtnSocialNetworksComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    imagesURLs : string[] = [
        'gallery/image.png',
        'gallery/img-11.jpg',
        'gallery/img-3.png',
        'gallery/img-4.png',
        'gallery/img-5.png',
        'gallery/img-6.png',
        'gallery/img-7.png',
        'gallery/img-8.png',
        'gallery/img-9.png',
        'gallery/img-10.jpg',
        'gallery/img-11.jpg',
        'gallery/img-3.png',
        'gallery/img-4.png',
        'gallery/img-5.png',
        'gallery/img-6.png',
        'gallery/img-7.png',
        'gallery/img-8.png',
        'gallery/img-9.png',
        'gallery/img-10.jpg',
    ];

    selectedIndex: number | null = null;

    openGallery(index: number) {
        this.selectedIndex = index;
    };
    closeGallery() {
        this.selectedIndex = null;
    };
    nextImage() {
        if (this.selectedIndex !== null && this.selectedIndex < this.imagesURLs.length - 1) {
            this.selectedIndex++;
        }
    };
    prevImage() {
        if (this.selectedIndex !== null && this.selectedIndex > 0) {
            this.selectedIndex--;
        }
    }
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (this.selectedIndex === null) return;
        if (event.key === 'ArrowRight') {
            this.nextImage();
        } else if (event.key === 'ArrowLeft') {
            this.prevImage();
        } else if (event.key === 'Escape') {
            this.closeGallery();
        }
    }

    @HostListener('document:click', ['$event'])
    handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('overlay')) {
            this.closeGallery();
        }
    }

}
