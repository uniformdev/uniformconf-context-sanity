export type Entry<T> = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type:
    | 'page'
    | 'hero'
    | 'callToAction'
    | 'talk'
    | 'talksList'
    | 'personalizedHeroList'
    | 'personalizedTalksListList'
    | 'registrationForm'
    | 'whyAttend';
  _updateAt: Date;
} & T;

export interface InterfaceEnrichmentTagField {
  enrichmentTag?: {
    uniformEnrichmentTags: string;
  };
}

export interface PersonalizationCriteriaField {
  personalizationCriteria?: { uniformPersonalizationCriteria: string };
}

export type Image = {
  asset: {
    url: string;
  };
};

export interface PersonalizedHeroListFields {
  name: string;
  heroVariations: IHero[];
}

export type IPersonalizedHeroList = Entry<PersonalizedHeroListFields>;

export interface PersonalizedTalkListListFields {
  name: string;
  talksListVariations: ITalksList[];
}

export type IPersonalizedTalkListList = Entry<PersonalizedTalkListListFields>;

export interface CallToActionFields {
  subheading: string;
  buttonLink?: string;
  buttonText?: string;
  buttonImage?: Image;
}

export type ICallToAction = Entry<CallToActionFields>;

export interface HeroFields extends PersonalizationCriteriaField {
  title: string;
  description: string;
  buttonText?: string;
  buttonLinkSlug?: string;
  imageUrl?: string;
}

export type IHero = Entry<HeroFields>;

export interface PageFields extends InterfaceEnrichmentTagField {
  title: string;
  slug: {
    current: string;
  };
  components: (ICallToAction | IHero | IPersonalizedHeroList | IRegistrationForm | ITalksList | IWhyAttend)[];
}

export type IPage = Entry<PageFields>;

export interface RegistrationFormFields {
  heading: string;
  buttonText?: string;
  registeredText?: string;
}

export type IRegistrationForm = Entry<RegistrationFormFields>;

export interface TalkFields {
  title: string;
  description?: string;
  audience: string;
}

export type ITalk = Entry<TalkFields>;

export interface TalksListFields extends PersonalizationCriteriaField {
  title: string;
  titleWhenPersonalized?: string;
  numberToShow?: number;
  registerButtonText?: string;
  talks: ITalk[];
}

export type ITalksList = Entry<TalksListFields>;

export interface WhyAttendFields {
  title: string;
  description?: string;
  imageUrl?: string;
}

export type IWhyAttend = Entry<WhyAttendFields>;
