import { Personalize } from '@uniformdev/context-react';
import { TalkList } from './TalkList';
import { formatPersonalizeVariants } from '../lib/uniform/formatPersonalizeVariants';
import { IPersonalizedTalkListList } from '../lib/sanity-types';

export function PersonalizedTalkList(props: IPersonalizedTalkListList) {
  if (!props.talksListVariations.length) {
    return null;
  }

  //@todo consider adding "count" field to Personalized List content type from the app
  return (
    <Personalize
      name={props.name ?? 'Default name for Personalized list of TalkList'}
      variations={formatPersonalizeVariants(props.talksListVariations)}
      component={TalkList}
    />
  );
}
