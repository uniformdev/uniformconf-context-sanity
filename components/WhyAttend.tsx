import React from 'react';
import { IWhyAttend } from '../lib/sanity-types';

export const WhyAttendLoading = () => {
  return <div className="container mx-auto flex flex-wrap pt-4 pb-12" style={{ minHeight: 515 }}></div>;
};

export type WhyAttendProps = IWhyAttend;

export const WhyAttend = ({ title, description, imageUrl }: WhyAttendProps) => (
  <section className="bg-white border-b py-8">
    <div
      className="container mx-auto flex flex-wrap pt-4 pb-12"
      style={{
        flexDirection: 'row',
      }}
    >
      {imageUrl ? (
        <div className="w-1/2">
          <img src={imageUrl} alt={title} width={400} height={400} loading="lazy" className="p-10" />
        </div>
      ) : null}
      <div className="w-1/2">
        <div className="p-10">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">{title}</h2>
          <hr />
          <p className="text-gray-800 p-10 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  </section>
);
