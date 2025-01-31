import { PersonalizedVariant } from '@uniformdev/context';
import { Entry, PersonalizationCriteriaField } from '../sanity-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatPersonalizeVariants<T extends Entry<PersonalizationCriteriaField>>(
  variants: T[]
): (T & PersonalizedVariant)[] {
  return variants.map((variant) => {
    const personalizedVariant: T & PersonalizedVariant = { ...variant, id: variant._id };
    if (variant.personalizationCriteria?.uniformPersonalizationCriteria) {
      try {
        const criteria = JSON.parse(variant.personalizationCriteria?.uniformPersonalizationCriteria);
        personalizedVariant.pz = criteria as PersonalizedVariant['pz'];
      } catch (e: unknown) {
        // eslint-disable-next-line no-console
        console.error('Failed to parse uniformPersonalizationCriteria JSON - ', e);
      }
    }
    return personalizedVariant;
  });
}
