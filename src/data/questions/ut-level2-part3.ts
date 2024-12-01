import { Question } from '../../types/quiz';

export const utLevel2Part3: Question[] = [
  {
    id: '7',
    themeId: '1',
    levelId: '1-2',
    text: 'Quelle est la différence en atténuation entre un écho de réflexion et un écho de diffraction ?',
    options: [
      '-4 dB',
      '-10 dB',
      '-20 dB',
      '-30 dB'
    ],
    correctAnswer: 2,
    explanation: 'Un écho de diffraction est souvent plus faible qu\'un écho de réflexion avec une atténuation d\'environ 20 dB.'
  },
  {
    id: '8',
    themeId: '1',
    levelId: '1-2',
    text: 'En technique TOFD, quel est le type d\'onde utilisé pour le dimensionnement des indications ?',
    options: [
      'L\'onde longitudinale',
      'L\'onde transversale',
      'L\'écho de fond',
      'L\'onde latérale'
    ],
    correctAnswer: 1,
    explanation: 'Les ondes transversales sont utilisées pour évaluer les dimensions des indications dans la méthode TOFD.'
  },
  {
    id: '9',
    themeId: '1',
    levelId: '1-2',
    text: 'En technique TOFD, les conditions opératoires permettent de générer :',
    options: [
      'Seule une onde de cisaillement',
      'Seule une onde de compression',
      'Seule une onde de surface',
      'Une onde de compression et une onde de cisaillement'
    ],
    correctAnswer: 3,
    explanation: 'La méthode TOFD utilise des ondes de compression et de cisaillement pour détecter et dimensionner les indications.'
  }
];