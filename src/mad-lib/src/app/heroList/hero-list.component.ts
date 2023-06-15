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
      image:
        'https://static.wikia.nocookie.net/p__/images/5/53/Action_Comics_1000_Variant_Cover.jpeg/revision/latest?cb=20220206142418&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Batman',
      image:
        'https://static.wikia.nocookie.net/p__/images/a/a6/Batman_Vol_2_2_Variant_Textless.jpg/revision/latest?cb=20210727021305&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Wonder Woman',
      image:
        'https://static.wikia.nocookie.net/p__/images/2/2c/4e243e3d02fbd21ee8d857e17ab7e291.jpg/revision/latest?cb=20200503142949&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'The Flash',
      image:
        'https://static.wikia.nocookie.net/p__/images/b/bf/The-Flash.jpg/revision/latest/scale-to-width-down/250?cb=20120131042146&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Green Lantern',
      image:
        'https://static.wikia.nocookie.net/p__/images/1/1d/3703047-hal_jordan.jpg/revision/latest?cb=20170215184745&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Aquaman',
      image:
        'https://static.wikia.nocookie.net/p__/images/b/b6/Aquaman-8.jpg/revision/latest?cb=20170817205758&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Martian Manhunter',
      image:
        'https://static.wikia.nocookie.net/p__/images/2/21/Martian_Manhunter_%28DCAU%29.png/revision/latest/scale-to-width-down/700?cb=20190122184715&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Green Arrow',
      image:
        'https://static.wikia.nocookie.net/p__/images/b/bf/Green_Arrow_0012.jpg/revision/latest/scale-to-width-down/658?cb=20191208204125&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Batwoman',
      image:
        'https://static.wikia.nocookie.net/p__/images/a/ac/Batwoman_Render.png/revision/latest/scale-to-width-down/686?cb=20191031140934&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Shazam',
      image:
        'https://static.wikia.nocookie.net/p__/images/4/45/2402177-shazam.jpg/revision/latest?cb=20170329114933&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Supergirl',
      image:
        'https://static.wikia.nocookie.net/p__/images/5/54/Supergirl-3458.jpg/revision/latest?cb=20200330201224&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Nightwing',
      image:
        'https://static.wikia.nocookie.net/p__/images/8/8a/Dick_Grayson-037.png/revision/latest/scale-to-width-down/197?cb=20170213192038&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Red Hood',
      image:
        'https://static.wikia.nocookie.net/p__/images/9/90/Red_Hood_%28Task_Force_Z_Vol_1_-10%29.jpg/revision/latest/scale-to-width-down/660?cb=20220416060913&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Zatanna',
      image:
        'https://static.wikia.nocookie.net/p__/images/6/63/3841872-zatanna.jpg/revision/latest?cb=20170215211424&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Hawkman',
      image:
        'https://static.wikia.nocookie.net/p__/images/5/5c/Hawkman.png/revision/latest?cb=20170215192212&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Black Canary',
      image:
        'https://static.wikia.nocookie.net/p__/images/6/6f/Black_Canary_0003.jpg/revision/latest?cb=20201005050225&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Atom',
      image:
        'https://static.wikia.nocookie.net/p__/images/a/a2/Atom_Ray_Palmer_0006.jpg/revision/latest?cb=20191207221730&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Batgirl',
      image:
        'https://static.wikia.nocookie.net/p__/images/1/1c/Batgirl_Vol_4_26_Textless.jpg/revision/latest/scale-to-width-down/199?cb=20150810082210&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Cyborg',
      image:
        'https://static.wikia.nocookie.net/p__/images/8/80/Cyborg-DC.png/revision/latest/scale-to-width-down/650?cb=20220601230309&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Constantine',
      image:
        'https://static.wikia.nocookie.net/p__/images/e/e7/5446102-95john.png/revision/latest?cb=20170216003210&path-prefix=protagonist',
      selected: false,
    },
  ];
  MarvelHeroes: Hero[] = [
    {
      name: 'Spider-Man',
      image:
        'https://static.wikia.nocookie.net/p__/images/8/84/Spider-man-render-by-bobhertley-d5qlcde.png/revision/latest/scale-to-width-down/250?cb=20140505164016&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Iron Man',
      image:
        'https://static.wikia.nocookie.net/p__/images/d/dc/4956367-ironman.jpg/revision/latest?cb=20170213173120&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Captain America',
      image:
        'https://static.wikia.nocookie.net/p__/images/a/a9/America.jpg/revision/latest/scale-to-width-down/300?cb=20170916203609&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Thor',
      image:
        'https://static.wikia.nocookie.net/p__/images/0/0e/5396930-thor.jpg/revision/latest?cb=20170213224821&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Hulk',
      image:
        'https://static.wikia.nocookie.net/p__/images/d/d5/Hulk.png/revision/latest/scale-to-width-down/300?cb=20200728171737&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Black Widow',
      image:
        'https://static.wikia.nocookie.net/p__/images/f/ff/Black_Widow-086.png/revision/latest?cb=20170214044306&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Wolverine',
      image:
        'https://static.wikia.nocookie.net/p__/images/0/06/22197e0a2d1321205f03333411551ed5.jpg/revision/latest/scale-to-width-down/202?cb=20170910165629&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Deadpool',
      image:
        'https://static.wikia.nocookie.net/p__/images/6/62/Deadpool-comics.jpg/revision/latest/scale-to-width-down/674?cb=20210708201504&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Black Panther',
      image:
        'https://static.wikia.nocookie.net/p__/images/9/9f/Black_Panther_OS_Vol_1_2.png/revision/latest/scale-to-width-down/699?cb=20210926232353&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Doctor Strange',
      image:
        'https://static.wikia.nocookie.net/p__/images/3/35/Doctor_Strange_Annual_Vol_3_1_Textless.jpg/revision/latest?cb=20200812031632&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Captain Marvel',
      image:
        'https://static.wikia.nocookie.net/p__/images/3/31/671140-captain_marvel.jpg/revision/latest?cb=20170401173859&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Ant-Man',
      image:
        'https://static.wikia.nocookie.net/p__/images/1/13/4153674-scott.jpg/revision/latest?cb=20170404003818&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Hawkeye',
      image:
        'https://static.wikia.nocookie.net/p__/images/2/28/5212860-hawkeye.jpg/revision/latest?cb=20170213234413&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Scarlet Witch',
      image:
        'https://static.wikia.nocookie.net/p__/images/6/6f/Scarlet_Witch_Vol_2_4_Women_of_Power_Variant_Textless.jpg/revision/latest/scale-to-width-down/646?cb=20200716155022&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Vision',
      image:
        'https://static.wikia.nocookie.net/p__/images/1/1d/4479803-vision.jpg/revision/latest?cb=20170217170712&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Daredevil',
      image:
        'https://static.wikia.nocookie.net/p__/images/a/aa/Daredevil_Vol_6_21_Textless.jpg/revision/latest?cb=20200909000209&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Luke Cage',
      image:
        'https://static.wikia.nocookie.net/p__/images/4/45/Luke_Cage_Vol_1_1_Textless.jpg/revision/latest/scale-to-width-down/666?cb=20200222004300&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Iron Fist',
      image:
        'https://static.wikia.nocookie.net/p__/images/1/1d/Screenshot_2023-03-29_8.51.01_PM.png/revision/latest?cb=20230330043754&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Rocket Raccoon',
      image:
        'https://static.wikia.nocookie.net/p__/images/f/f4/Rocket_Raccon_.png/revision/latest?cb=20170404124021&path-prefix=protagonist',
      selected: false,
    },
    {
      name: 'Star Lord',
      image:
        'https://static.wikia.nocookie.net/p__/images/8/8e/5490565-starlord-anka.jpg/revision/latest?cb=20170215233855&path-prefix=protagonist',
      selected: false,
    },
  ];
}
