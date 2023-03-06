import { Component } from '@angular/core';
import { Islider } from 'src/app/models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  slides: Islider[] = [
    {
      url: 'assets/images/Atari2600.jpg',
      title: 'Atari 2600',
      description: 'Old but gold',
      price: 199,
      link: '/product/15',
    },
    {
      url: 'assets/images/xbox360.jpg',
      title: 'Xbox 360',
      description: 'Only for plaing Call of duty',
      price: 199,
      link: '/product/8',
    },
    {
      url: 'assets/images/ps5.png',
      title: 'PlayStation 5',
      description: 'Console for FIFA by FIFA',
      price: 499,
      link: '/product/2',
    },
  ];
  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return this.slides[this.currentIndex].url;
  }
  getCurrentSlideDescription() {
    return this.slides[this.currentIndex].description;
  }
  getCurrentSlidePrice() {
    return this.slides[this.currentIndex].price;
  }
  getCurrentSlideLink() {
    return this.slides[this.currentIndex].link;
  }
  getCurrentSlideTitle() {
    return this.slides[this.currentIndex].title;
  }
}
