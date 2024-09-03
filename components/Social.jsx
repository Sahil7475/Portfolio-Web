import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaMailBulk, FaGooglePlay, FaHackerrank} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/Sahil7475'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/Sahil7475/'},
    {icon: <FaMailBulk />, path: 'mailto:sahilj5645@gmail.com'}     
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
};

export default Social;