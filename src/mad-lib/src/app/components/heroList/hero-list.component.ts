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
      image: '',
      selected: false,
    },
    {
      name: 'Batman',
      image: '',
      selected: false,
    },
    {
      name: 'Wonder Woman',
      image: '',
      selected: false,
    },
    {
      name: 'The Flash',
      image: '',
      selected: false,
    },
    {
      name: 'Green Lantern',
      image: '',
      selected: false,
    },
    {
      name: 'Aquaman',
      image: '',
      selected: false,
    },
    {
      name: 'Martian Manhunter',
      image: '',
      selected: false,
    },
    {
      name: 'Green Arrow',
      image: '',
      selected: false,
    },
    {
      name: 'Batwoman',
      image: '',
      selected: false,
    },
    {
      name: 'Shazam',
      image: '',
      selected: false,
    },
    {
      name: 'Supergirl',
      image: '',
      selected: false,
    },
    {
      name: 'Nightwing',
      image: '',
      selected: false,
    },
    {
      name: 'Red Hood',
      image: '',
      selected: false,
    },
    {
      name: 'Zatanna',
      image: '',
      selected: false,
    },
    {
      name: 'Hawkman',
      image: '',
      selected: false,
    },
    {
      name: 'Black Canary',
      image: '',
      selected: false,
    },
    {
      name: 'Atom',
      image: '',
      selected: false,
    },
    {
      name: 'Batgirl',
      image: '',
      selected: false,
    },
    {
      name: 'Cyborg',
      image: '',
      selected: false,
    },
    {
      name: 'Constantine',
      image: '',
      selected: false,
    },
  ];
  MarvelHeroes: Hero[] = [
    {
      name: 'Spider-Man',
      image: '',
      selected: false,
    },
    {
      name: 'Iron Man',
      image: '',
      selected: false,
    },
    {
      name: 'Captain America',
      image: '',
      selected: false,
    },
    {
      name: 'Thor',
      image: '',
      selected: false,
    },
    {
      name: 'Hulk',
      image: '',
      selected: false,
    },
    {
      name: 'Black Widow',
      image: '',
      selected: false,
    },
    {
      name: 'Wolverine',
      image: '',
      selected: false,
    },
    {
      name: 'Deadpool',
      image: '',
      selected: false,
    },
    {
      name: 'Black Panther',
      image: '',
      selected: false,
    },
    {
      name: 'Doctor Strange',
      image: '',
      selected: false,
    },
    {
      name: 'Captain Marvel',
      image: '',
      selected: false,
    },
    {
      name: 'Ant-Man',
      image: '',
      selected: false,
    },
    {
      name: 'Hawkeye',
      image: '',
      selected: false,
    },
    {
      name: 'Scarlet Witch',
      image: '',
      selected: false,
    },
    {
      name: 'Vision',
      image: '',
      selected: false,
    },
    {
      name: 'Daredevil',
      image: '',
      selected: false,
    },
    {
      name: 'Luke Cage',
      image: '',
      selected: false,
    },
    {
      name: 'Iron Fist',
      image: '',
      selected: false,
    },
    {
      name: 'Rocket Racoon',
      image: '',
      selected: false,
    },
    {
      name: 'Star Lord',
      image: '',
      selected: false,
    },
  ];
}
