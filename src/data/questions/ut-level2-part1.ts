import { Question } from '../../types/quiz';

export const utLevel2Part1: Question[] = [
  {
    id: '1',
    themeId: '1',
    levelId: '1-2',
    text: 'La vibration, produisant l\'impulsion de longueur d\'onde la plus courte, pour une fréquence donnée et dans un matériau donné, est:',
    options: [
      'L\'onde longitudinale',
      'L\'onde de compression',
      'L\'onde de cisaillement',
      'L\'onde de surface'
    ],
    correctAnswer: 2,
    explanation: 'L\'onde de cisaillement est la réponse correcte car elle produit l\'impulsion de longueur d\'onde la plus courte pour une fréquence et un matériau donnés. Cela est dû à sa vitesse de propagation plus faible par rapport aux ondes longitudinales.'
  },
  {
    id: '2',
    themeId: '1',
    levelId: '1-2',
    text: 'La formule Z₁ - Z₂ / Z₁ + Z₂ désigne :',
    options: [
      'La formule du rapport d\'impédance acoustique',
      'La formule de conversion de phase',
      'La formule de la zone de Fresnel',
      'La loi Snell-Descartes'
    ],
    correctAnswer: 3,
    explanation: 'La loi de Snell-Descartes établit la relation entre les angles d\'incidence et de réfraction aux interfaces entre deux milieux.'
  },
  {
    id: '3',
    themeId: '1',
    levelId: '1-2',
    text: 'La formule sin θ₁ / V₁ = sin θ₂ / V₂ est utilisée pour:',
    options: [
      'L\'angle de réfraction',
      'Les vitesses des phases',
      'La quantité d\'énergie sonore réfléchie',
      'L\'impédance acoustique'
    ],
    correctAnswer: 0,
    explanation: 'Cette formule permet de calculer l\'angle de réfraction d\'une onde ultrasonore passant à travers deux milieux différents.'
  }
];