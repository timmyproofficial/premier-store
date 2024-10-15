import { Link } from 'react-router-dom';

interface Props {
  heading: string;
  extras?: string;
  pages: {
    id: number;
    text: string;
    link: string;
  }[];
}

const FooterNav = ({ heading, extras, pages }: Props) => {
  return (
    <div>
      <h4 className="text-gray-color text-[2rem] mb-2">{heading}</h4>

      <nav className="pl-5">
        <ul className="flex flex-col gap-5">
          {pages.map((page) => (
            <li key={page.id}>
              <Link to={page.link} className="text-[1.6rem]">
                {page.text}
              </Link>
            </li>
          ))}
        </ul>
        {extras && <p className="mt-5">{extras}</p>}
      </nav>
    </div>
  );
};

export default FooterNav;
