import { Question } from '../../types/quiz';

export const utLevel2Part2: Question[] = [
  {
    id: '4',
    themeId: '1',
    levelId: '1-2',
    text: 'Une onde ultrasonore est transmise à travers l\'interface de deux matériaux. Si le premier matériau a une valeur d\'impédance acoustique supérieure mais la même vitesse que le second matériau, l\'angle de réfraction sera :',
    options: [
      'Plus grand que l\'angle d\'incidence',
      'Inférieur à l\'angle d\'incidence',
      'Le même que l\'angle d\'incidence',
      'Au-delà de l\'angle critique'
    ],
    correctAnswer: 2,
    explanation: 'Si les vitesses des deux matériaux sont identiques, l\'angle de réfraction est équivalent à l\'angle d\'incidence, indépendamment des impédances.'
  },
  {
    id: '5',
    themeId: '1',
    levelId: '1-2',
    text: 'Le produit de la vitesse de propagation du son dans un matériau par sa masse volumique est :',
    options: [
      'La valeur de réfraction du matériau',
      'L\'impédance acoustique du matériau',
      'La constante élastique du matériau',
      'Le coefficient de Poisson du matériau'
    ],
    correctAnswer: 1,
    explanation: 'L\'impédance acoustique est calculée en multipliant la vitesse du son dans le matériau par sa masse volumique.'
  },
  {
    id: '6',
    themeId: '1',
    levelId: '1-2',
    text: 'À l\'interface eau-acier et sous une incidence de 7°, les ondes ultrasonores réfractées sont :',
    options: [
      'Longitudinales',
      'Transversales',
      'Longitudinales et transversales',
      'De surface'
    ],
    correctAnswer: 2,
    explanation: 'Lorsqu\'un faisceau ultrasonore traverse une interface, des ondes longitudinales et transversales sont générées dans le second milieu.'
  }
];