import { Question } from '../../types/quiz';

export const utLevel2Part10: Question[] = [
  {
    id: '28',
    themeId: '1',
    levelId: '1-2',
    text: 'L\'atténuation des ultrasons dans un matériau dépend principalement :',
    options: [
      'De la fréquence de l\'onde',
      'De la densité du matériau',
      'De l\'angle d\'incidence',
      'De la largeur du faisceau'
    ],
    correctAnswer: 0,
    explanation: 'Une fréquence plus élevée entraîne une atténuation plus importante des ultrasons dans le matériau.'
  },
  {
    id: '29',
    themeId: '1',
    levelId: '1-2',
    text: 'Lorsqu\'une onde ultrasonore traverse un matériau anisotrope :',
    options: [
      'Sa vitesse varie en fonction de la direction de propagation',
      'Sa vitesse reste constante',
      'Elle est totalement absorbée',
      'Elle est réfléchie en totalité'
    ],
    correctAnswer: 0,
    explanation: 'Dans les matériaux anisotropes, les propriétés acoustiques varient en fonction de la direction, modifiant la vitesse des ondes.'
  },
  {
    id: '30',
    themeId: '1',
    levelId: '1-2',
    text: 'Les ondes de surface sont particulièrement utilisées pour :',
    options: [
      'Inspecter les couches profondes d\'un matériau',
      'Analyser les défauts proches de la surface',
      'Étudier la propagation dans les liquides',
      'Évaluer les propriétés électriques d\'un matériau'
    ],
    correctAnswer: 1,
    explanation: 'Les ondes de surface, comme les ondes de Rayleigh, sont idéales pour détecter les défauts superficiels.'
  }
];