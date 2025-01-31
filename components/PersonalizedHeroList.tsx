import { Personalize } from '@uniformdev/context-react';
import { Hero } from './Hero';
import { formatPersonalizeVariants } from '../lib/uniform/formatPersonalizeVariants';
import { IPersonalizedHeroList } from '../lib/sanity-types';

export function PersonalizedHeroList(props: IPersonalizedHeroList) {
  if (!props.heroVariations.length) {
    return null;
  }

  //@todo consider adding "count" field to Personalized List content type from the app
  return (
    <Personalize
      name={props.name ?? 'Default name for Personalized list of Heros'}
      variations={formatPersonalizeVariants(props.heroVariations)}
      component={Hero}
    />
  );
}
