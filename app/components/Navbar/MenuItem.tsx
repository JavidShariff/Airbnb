'use client';

interface MenuItemProps {
    onClick: () => void;
    label:string;
}

const MenuItem: React.FC<MenuItemProps> = ({onClick,label}) => {
  return (
    <div
    onClick={onClick} 
    className="
    hover:bg-neutral-300
    transition
    font-semibold
    px-4
    py-3
    rounded-full
    overflow-hidden
    ">
      {label}
    </div>
  )
}

export default MenuItem
