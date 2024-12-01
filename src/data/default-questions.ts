import { Question } from '../types/quiz';
import { utLevel2Part1 } from './questions/ut-level2-part1';
import { utLevel2Part2 } from './questions/ut-level2-part2';
import { utLevel2Part3 } from './questions/ut-level2-part3';
import { utLevel2Part4 } from './questions/ut-level2-part4';
import { utLevel2Part5 } from './questions/ut-level2-part5';
import { utLevel2Part6 } from './questions/ut-level2-part6';
import { utLevel2Part7 } from './questions/ut-level2-part7';
import { utLevel2Part8 } from './questions/ut-level2-part8';
import { utLevel2Part9 } from './questions/ut-level2-part9';
import { utLevel2Part10 } from './questions/ut-level2-part10';
import { utLevel2Part11 } from './questions/ut-level2-part11';
import { utLevel2Part12 } from './questions/ut-level2-part12';

export const defaultQuestions: Question[] = [
  ...utLevel2Part1,
  ...utLevel2Part2,
  ...utLevel2Part3,
  ...utLevel2Part4,
  ...utLevel2Part5,
  ...utLevel2Part6,
  ...utLevel2Part7,
  ...utLevel2Part8,
  ...utLevel2Part9,
  ...utLevel2Part10,
  ...utLevel2Part11,
  ...utLevel2Part12
];