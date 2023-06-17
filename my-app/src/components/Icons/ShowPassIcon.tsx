import { FC } from "react";


type IconLikeType = {
    onClick?: () => void;
    className: string

};

export const ShowPassIcon: FC<IconLikeType> = ({ onClick, className }) => {
    return (
        <svg
            className={className}
            onClick={onClick}
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
		<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/> <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>
    );
};