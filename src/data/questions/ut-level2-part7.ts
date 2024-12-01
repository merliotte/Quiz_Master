import { Question } from '../../types/quiz';

export const utLevel2Part7: Question[] = [
  {
    id: '19',
    themeId: '1',
    levelId: '1-2',
    text: 'Quelle est la fréquence qui permet la meilleure pénétration dans un échantillon à gros grains ?',
    options: [
      '1 MHz',
      '4 MHz',
      '8 MHz',
      '10 MHz'
    ],
    correctAnswer: 0,
    explanation: 'Les fréquences basses ont des longueurs d\'onde plus longues, ce qui leur permet de traverser des structures grossières sans subir trop d\'atténuation.'
  },
  {
    id: '20',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un traducteur ultrasonore, l\'amortisseur a pour but de :',
    options: [
      'Transmettre les vibrations ultrasonores au câble coaxial',
      'Réduire la largeur de l\'impulsion ultrasonore émise',
      'Réduire l\'énergie de l\'onde ultrasonore émise',
      'Amortir les vibrations du boîtier'
    ],
    correctAnswer: 1,
    explanation: 'L\'amortisseur améliore la résolution temporelle en réduisant la durée de l\'impulsion émise.'
  },
  {
    id: '21',
    themeId: '1',
    levelId: '1-2',
    text: 'Les ondes de cisaillement sont utilisées principalement pour :',
    options: [
      'Mesurer l\'épaisseur de tôles minces',
      'Détecter les discontinuités dans les soudures',
      'Évaluer les propriétés mécaniques des métaux',
      'Analyser la structure des liquides'
    ],
    correctAnswer: 1,
    explanation: 'Les ondes de cisaillement, grâce à leur longueur d\'onde plus courte, sont particulièrement efficaces pour détecter de petites discontinuités.'
  }
];