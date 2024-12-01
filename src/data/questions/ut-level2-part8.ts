import { Question } from '../../types/quiz';

export const utLevel2Part8: Question[] = [
  {
    id: '22',
    themeId: '1',
    levelId: '1-2',
    text: 'Lorsque l\'angle d\'incidence dépasse l\'angle critique à une interface, l\'onde :',
    options: [
      'Continue à traverser l\'interface',
      'Est totalement réfléchie',
      'Est absorbée dans le second matériau',
      'Est transformée en onde de surface'
    ],
    correctAnswer: 1,
    explanation: 'Au-delà de l\'angle critique, l\'énergie ultrasonore est totalement réfléchie en raison de la réflexion interne totale.'
  },
  {
    id: '23',
    themeId: '1',
    levelId: '1-2',
    text: 'Une onde transversale peut être créée à partir d\'une onde longitudinale lorsque :',
    options: [
      'L\'onde traverse une interface solide-solide',
      'L\'onde traverse un matériau isotrope',
      'L\'onde entre dans un matériau liquide',
      'L\'onde est réfléchie sur une surface lisse'
    ],
    correctAnswer: 0,
    explanation: 'Lorsqu\'une onde longitudinale traverse une interface solide-solide, elle peut se transformer en onde transversale en raison des propriétés du matériau.'
  },
  {
    id: '24',
    themeId: '1',
    levelId: '1-2',
    text: 'La résolution spatiale des ultrasons est améliorée lorsque :',
    options: [
      'La fréquence augmente',
      'La fréquence diminue',
      'L\'impédance acoustique est élevée',
      'L\'angle d\'incidence est réduit'
    ],
    correctAnswer: 0,
    explanation: 'Une fréquence plus élevée réduit la longueur d\'onde, ce qui améliore la résolution spatiale.'
  }
];