import { LanguageTable } from '../types';
import { enGb, guIn, hiIn } from '../i18n';

export enum LanguageOptions {
  EnGb = 'en-GB',
  GuIn = 'gu-IN',
  HiIn = 'hi-IN',
}

export const LANGAUGES: LanguageTable = {
  [LanguageOptions.EnGb]: enGb,
  [LanguageOptions.GuIn]: guIn,
  [LanguageOptions.HiIn]: hiIn,
};
