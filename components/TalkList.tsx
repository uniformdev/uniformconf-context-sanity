import React from 'react';
import { ITalksList } from '../lib/sanity-types';
import { Talk } from './Talk';

export type TalkListProps = ITalksList;

export function TalkList({ title, talks }: TalkListProps) {
  return (
    <fieldset>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{title}</h1>
          {talks.map((talk) => (
            <div key={talk._id} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <Talk {...talk} />
            </div>
          ))}
        </div>
      </section>
    </fieldset>
  );
}
