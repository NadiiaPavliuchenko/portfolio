import React from "react";
import contacts from "@/lib/contact.json";

export default function Contact() {
  return (
    <div id="contact" className="px-[100px] py-[90px]">
      <h2 className="font-light text-7xl mb-[66px]">Contact</h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="flex items-center gap-4 text-lg p-4 rounded-md bg-[#232323]  w-[300]"
          >
            <svg className="fill-white" width="30" height="30">
              <use href={contact.icon}></use>
            </svg>
            {contact.url ? (
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contact.name}
              </a>
            ) : (
              <span>{contact.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
