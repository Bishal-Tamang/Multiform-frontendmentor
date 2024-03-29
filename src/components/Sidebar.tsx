import React, { useState } from "react";
import Link from "next/link";
import {data} from '@/lib/data';

const Sidebar = () => {
  return (
    <aside 
      className="absolute top-0 left-0 right-[100%] sm:relative bg-mobile sm:bg-desktop sm:bg-cover bg-no-repeat w-[100%] h-[100%] pt-8 sm:pl-8 sm:basis-[30%] sm:rounded-lg flex items-start justify-center sm:flex-col sm:justify-start bg-blue-600"
    >
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex items-center space-x-4 leading-4 sm:mb-10"
          >
            <Link
              href={item.linkTo}
            >
              {item.id}
            </Link>
            <div>
              <p className="hidden sm:block uppercase text-neutral-coolGray text-[14px]">
                {item.step}
              </p>
              <p className="hidden sm:block uppercase text-neutral-lightGray font-[500] tracking-wider">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;