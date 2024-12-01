import { Question } from '../../types/quiz';

export const utLevel2Part12: Question[] = [
  {
    id: '34',
    themeId: '1',
    levelId: '1-2',
    text: 'La technique de contrôle par immersion dans l\'eau de barres en acier, avec un angle critique d\'incidence, utilise :',
    options: [
      '7°',
      '14°',
      '30°',
      '90°'
    ],
    correctAnswer: 0,
    explanation: 'L\'angle critique pour l\'onde longitudinale dans l\'acier est d\'environ 7° dans les conditions données (vitesse dans l\'eau : 1480 m/s, dans l\'acier : 5950 m/s).'
  },
  {
    id: '35',
    themeId: '1',
    levelId: '1-2',
    text: 'Lors du sondage d\'un produit en acier forgé, on constate un écho de 25 mm de hauteur provenant d\'une discontinuité située à 75 mm de la face d\'entrée. La surface de cette discontinuité est probablement :',
    options: [
      'Le double de celle du trou à fond plat de référence',
      'Au moins égale à celle du trou à fond plat de référence',
      'Très légèrement inférieure à celle du trou à fond plat de référence',
      'Égale à la moitié de la surface du trou à fond plat de référence'
    ],
    correctAnswer: 1,
    explanation: 'L\'écho a une amplitude similaire à celle du trou à fond plat, ce qui suggère une discontinuité d\'une taille comparable.'
  },
  {
    id: '36',
    themeId: '1',
    levelId: '1-2',
    text: 'Lorsqu\'un écho de fond chute brusquement sans indication de discontinuité importante, cela peut signifier :',
    options: [
      'Une discontinuité mal orientée par rapport à la face d\'entrée',
      'Un nid de porosités',
      'Une augmentation importante de la grosseur de grain',
      'Les 3 conditions ci-dessus'
    ],
    correctAnswer: 3,
    explanation: 'Ce phénomène peut résulter de divers facteurs, notamment des défauts mal orientés, des porosités ou des variations de grosseur de grain.'
  }
];