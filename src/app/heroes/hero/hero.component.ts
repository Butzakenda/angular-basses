import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }
  getHeroDescription():string{

    return `${ this.name } - ${ this.age }`
  }
  changeHero():void{
    this.name = 'Thor'
  }
  changeAge():void{
    this.age = 3248946
  }
  resetForm(): void{
    this.name = 'Iron man',
    this.age = 45
  }
}
