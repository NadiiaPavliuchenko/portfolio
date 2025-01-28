export default function Header() {
  return (
    <header className="flex justify-between items-center py-[34px] px-[86px]">
      <h2 className="font-normal text-2xl tracking-tight">
        Nadiia Pavliuchenko
      </h2>
      <ul className="flex gap-[40] text-xl font-normal">
        <li>
          <a
            className="hover:text-orange-400 focus:text-orange-400 active:text-orange-400"
            href="#technologies"
          >
            TECHNOLOGIES
          </a>
        </li>
        <li>
          <a
            className="hover:text-orange-400 focus:text-orange-400 active:text-orange-400"
            href="#portfolio"
          >
            PORTFOLIO
          </a>
        </li>
        <li>
          <a
            className="hover:text-orange-400 focus:text-orange-400 active:text-orange-400"
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </header>
  );
}
