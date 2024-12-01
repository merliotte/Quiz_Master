import { Question } from '../../types/quiz';

export const utLevel2Part4: Question[] = [
  {
    id: '10',
    themeId: '1',
    levelId: '1-2',
    text: 'Le coefficient de Poisson d\'un matériau mesure :',
    options: [
      'La déformation longitudinale par rapport à la déformation transversale',
      'La rigidité du matériau',
      'La propagation des ondes ultrasonores',
      'L\'élasticité du matériau'
    ],
    correctAnswer: 0,
    explanation: 'Le coefficient de Poisson est une mesure de la manière dont un matériau s\'allonge ou se comprime en réponse à une contrainte appliquée.'
  },
  {
    id: '11',
    themeId: '1',
    levelId: '1-2',
    text: 'Lorsqu\'une onde traverse une interface avec une incidence normale et des impédances acoustiques différentes, une partie de l\'énergie est :',
    options: [
      'Totalement réfléchie',
      'Totalement transmise',
      'Réfléchie et transmise',
      'Absorbée'
    ],
    correctAnswer: 2,
    explanation: 'En cas d\'impédances acoustiques différentes, une partie de l\'énergie est réfléchie, tandis que le reste est transmis.'
  },
  {
    id: '12',
    themeId: '1',
    levelId: '1-2',
    text: 'La zone de Fresnel est :',
    options: [
      'La zone proche d\'un faisceau ultrasonore',
      'La zone où le faisceau est parfaitement focalisé',
      'La zone lointaine d\'un faisceau ultrasonore',
      'Une zone de diffusion des ondes'
    ],
    correctAnswer: 0,
    explanation: 'La zone de Fresnel correspond à la région proche où le faisceau ultrasonore n\'est pas encore totalement divergeant.'
  }
];