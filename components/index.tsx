import { ComponentType } from 'react';
import { DefaultNotImplementedComponent } from './DefaultNotImplementedComponent';
import { Hero } from './Hero';
import { TalkList } from './TalkList';
import { WhyAttend } from './WhyAttend';
import { Talk } from './Talk';
import { RegisterForm } from './RegisterForm';
import Navbar from './Navbar';
import Footer from './Footer';
import { PersonalizedTalkList } from './PersonalizedTalkList';
import { PersonalizedHeroList } from './PersonalizedHeroList';
import type {
  IHero,
  IPersonalizedHeroList,
  ICallToAction,
  IPage,
  IPersonalizedTalkListList,
  IRegistrationForm,
  ITalk,
  ITalksList,
  IWhyAttend,
  Entry,
} from '../lib/sanity-types';

// @todo fix usage of union type.
export type EntryUnionType =
  | IHero
  | IPage
  | IPersonalizedHeroList
  | ICallToAction
  | IPersonalizedTalkListList
  | IRegistrationForm
  | ITalk
  | ITalksList
  | IWhyAttend;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMapping = Record<string, ComponentType<any>>;

const mappings: ComponentMapping = {
  hero: Hero,
  talksList: TalkList,
  talk: Talk,
  whyAttend: WhyAttend,
  registrationForm: RegisterForm,
  header: Navbar,
  footer: Footer,
  personalizedHeroList: PersonalizedHeroList,
  personalizedTalksListList: PersonalizedTalkList,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveRenderer(entry: Entry<any>): ComponentType<Entry<any>> {
  const componentImpl = mappings[entry._type];
  return componentImpl ?? DefaultNotImplementedComponent;
}

export default mappings;
