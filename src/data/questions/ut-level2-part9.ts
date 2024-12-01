import { Question } from '../../types/quiz';

export const utLevel2Part9: Question[] = [
  {
    id: '25',
    themeId: '1',
    levelId: '1-2',
    text: 'Le coefficient de réflexion à une interface dépend de :',
    options: [
      'La densité des matériaux',
      'Les impédances acoustiques des matériaux',
      'La fréquence de l\'onde incidente',
      'L\'épaisseur des matériaux'
    ],
    correctAnswer: 1,
    explanation: 'Le coefficient de réflexion est calculé à partir du rapport des impédances acoustiques des deux matériaux.'
  },
  {
    id: '26',
    themeId: '1',
    levelId: '1-2',
    text: 'Une onde ultrasonore qui se propage dans un matériau est affectée par :',
    options: [
      'La rugosité de la surface',
      'La température',
      'La densité du matériau',
      'Toutes les réponses ci-dessus'
    ],
    correctAnswer: 3,
    explanation: 'Les propriétés du matériau, sa température et la rugosité de la surface influencent la propagation des ultrasons.'
  },
  {
    id: '27',
    themeId: '1',
    levelId: '1-2',
    text: 'Un transducteur piézoélectrique convertit :',
    options: [
      'L\'énergie électrique en énergie acoustique',
      'L\'énergie acoustique en énergie électrique',
      'Les deux (A et B)',
      'Aucune des réponses ci-dessus'
    ],
    correctAnswer: 2,
    explanation: 'Les transducteurs piézoélectriques fonctionnent à la fois comme émetteurs (électrique vers acoustique) et récepteurs (acoustique vers électrique).'
  }
];