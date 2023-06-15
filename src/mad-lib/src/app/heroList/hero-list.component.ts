import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'mad-lib-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {
  DCHeroes: Hero[] = [
    {
      name: 'Superman',
      image: '../assets/hero-photos/superman.webp',
      selected: false,
    },
    {
      name: 'Batman',
      image: '../assets/hero-photos/batman.webp',
      selected: false,
    },
    {
      name: 'Wonder Woman',
      image: '../assets/hero-photos/wonder woman.webp',
      selected: false,
    },
    {
      name: 'The Flash',
      image: '../assets/hero-photos/The-Flash.webp',
      selected: false,
    },
    {
      name: 'Green Lantern',
      image: '../assets/hero-photos/green lantern.webp',
      selected: false,
    },
    {
      name: 'Aquaman',
      image: '../assets/hero-photos/aquaman.webp',
      selected: false,
    },
    {
      name: 'Martian Manhunter',
      image: '../assets/hero-photos/martian manhunter.webp',
      selected: false,
    },
    {
      name: 'Green Arrow',
      image: '../assets/hero-photos/green arrow.webp',
      selected: false,
    },
    {
      name: 'Batwoman',
      image: '../assets/hero-photos/batwoman.webp',
      selected: false,
    },
    {
      name: 'Shazam',
      image: '../assets/hero-photos/shazam.webp',
      selected: false,
    },
    {
      name: 'Supergirl',
      image: '../assets/hero-photos/supergirl.webp',
      selected: false,
    },
    {
      name: 'Nightwing',
      image: '../assets/hero-photos/nightwing.webp',
      selected: false,
    },
    {
      name: 'Red Hood',
      image: '../assets/hero-photos/red hood.webp',
      selected: false,
    },
    {
      name: 'Zatanna',
      image: '../assets/hero-photos/zatanna.webp',
      selected: false,
    },
    {
      name: 'Hawkman',
      image: '../assets/hero-photos/hawkman.webp',
      selected: false,
    },
    {
      name: 'Black Canary',
      image: '../assets/hero-photos/black canary.webp',
      selected: false,
    },
    {
      name: 'Atom',
      image: '../assets/hero-photos/atom.webp',
      selected: false,
    },
    {
      name: 'Batgirl',
      image: '../assets/hero-photos/batgirl.webp',
      selected: false,
    },
    {
      name: 'Cyborg',
      image: '../assets/hero-photos/cyborg.webp',
      selected: false,
    },
    {
      name: 'Constantine',
      image: '../assets/hero-photos/constantine.webp',
      selected: false,
    },
  ];
  MarvelHeroes: Hero[] = [
    {
      name: 'Spider-Man',
      image: '../assets/hero-photos/spider-man.webp',
      selected: false,
    },
    {
      name: 'Iron Man',
      image: '../assets/hero-photos/iron man.webp',
      selected: false,
    },
    {
      name: 'Captain America',
      image: '../assets/hero-photos/captain america.webp',
      selected: false,
    },
    {
      name: 'Thor',
      image: '../assets/hero-photos/thor.webp',
      selected: false,
    },
    {
      name: 'Hulk',
      image: '../assets/hero-photos/hulk.webp',
      selected: false,
    },
    {
      name: 'Black Widow',
      image: '../assets/hero-photos/black widow.webp',
      selected: false,
    },
    {
      name: 'Wolverine',
      image: '../assets/hero-photos/wolverine.webp',
      selected: false,
    },
    {
      name: 'Deadpool',
      image: '../assets/hero-photos/deadpool.webp',
      selected: false,
    },
    {
      name: 'Black Panther',
      image: '../assets/hero-photos/black panther.webp',
      selected: false,
    },
    {
      name: 'Doctor Strange',
      image: '../assets/hero-photos/doctor strange.webp',
      selected: false,
    },
    {
      name: 'Captain Marvel',
      image: '../assets/hero-photos/captain marvel.webp',
      selected: false,
    },
    {
      name: 'Ant-Man',
      image: '../assets/hero-photos/ant man.webp',
      selected: false,
    },
    {
      name: 'Hawkeye',
      image: '../assets/hero-photos/hawkeye.webp',
      selected: false,
    },
    {
      name: 'Scarlet Witch',
      image: '../assets/hero-photos/scarlet witch.webp',
      selected: false,
    },
    {
      name: 'Vision',
      image: '../assets/hero-photos/vision.webp',
      selected: false,
    },
    {
      name: 'Daredevil',
      image: '../assets/hero-photos/daredevil.webp',
      selected: false,
    },
    {
      name: 'Luke Cage',
      image: '../assets/hero-photos/luke cage.webp',
      selected: false,
    },
    {
      name: 'Iron Fist',
      image: '../assets/hero-photos/iron fist.webp',
      selected: false,
    },
    {
      name: 'Rocket Raccoon',
      image: '../assets/hero-photos/rocket raccoon.webp',
      selected: false,
    },
    {
      name: 'Star Lord',
      image: '../assets/hero-photos/star lord.webp',
      selected: false,
    },
  ];
}
