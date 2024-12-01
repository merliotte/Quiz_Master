import { Question } from '../../types/quiz';

export const utLevel2Part11: Question[] = [
  {
    id: '31',
    themeId: '1',
    levelId: '1-2',
    text: 'En ultrasons multiéléments, la focalisation du faisceau utilise :',
    options: [
      'Une orientation des éléments',
      'Une modulation de fréquence',
      'Les lois de retard',
      'Un réglage de gain différent pour chacun des éléments'
    ],
    correctAnswer: 2,
    explanation: 'Les lois de retard permettent de synchroniser les signaux émis par différents éléments pour focaliser le faisceau ultrasonore.'
  },
  {
    id: '32',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans une sonde multiéléments (barrette linéaire), qu\'est-ce que le «pitch» ?',
    options: [
      'La hauteur des éléments',
      'L\'ouverture du groupe d\'éléments actifs',
      'La largeur d\'un élément',
      'La distance de centre à centre de deux éléments consécutifs'
    ],
    correctAnswer: 3,
    explanation: 'Le pitch est une caractéristique géométrique définissant l\'espacement des éléments dans une sonde multiéléments.'
  },
  {
    id: '33',
    themeId: '1',
    levelId: '1-2',
    text: 'Une onde ultrasonore de mode longitudinal se propage dans un matériau à la vitesse de 6000 m/s. Si la fréquence est de 2 MHz, quelle est sa longueur d\'onde ?',
    options: [
      '0,3 mm',
      '3 mm',
      '3 cm',
      '0,3 m'
    ],
    correctAnswer: 1,
    explanation: 'La longueur d\'onde est donnée par la formule λ = v/f, soit λ = 6000/(2×10⁶) = 0,003 m = 3 mm.'
  }
];