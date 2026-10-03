import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsSlack,
  BsYoutube,
} from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "cn";

const SocialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <BsYoutube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com/@reactjsBD",
    icon: <BsGithub className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/@reactjsBD",
    icon: <BsLinkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/@reactjsBD",
    icon: <BsFacebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.slack.com/@reactjsBD",
    icon: <BsSlack className="w-5 h-5" />,
  },
];

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5")}>
        {SocialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger>
              <a
                href={item?.href}
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("rounded-full hover:text-shop_light_green hoverEffect", iconClassName)}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>
                {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
