import React, { useState, FC } from "react";
import Link from "next/link";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between mb-6">
      <h1 className="is-size-4">{title}</h1>

      <Link href="/components">
        <a className="button is-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="mr-4"
            fill="currentColor"
            viewBox="0 0 1792 1792"
          >
            <path d="M1792 800v192q0 14-9 23t-23 9h-1248v224q0 21-19 29t-35-5l-384-350q-10-10-10-23 0-14 10-24l384-354q16-14 35-6 19 9 19 29v224h1248q14 0 23 9t9 23z" />
          </svg>
          Back
        </a>
      </Link>
    </div>
  );
};
export default SectionHeader;
