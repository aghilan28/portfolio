import type { NavItem as NavItemType } from '../../types';

type NavItemProps = {
  item: NavItemType;
  active: boolean;
};

export function NavItem({ item, active }: NavItemProps) {
  const handleClick = () => {
    const element = document.getElementById(item.sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      className={active ? 'nav-item is-active' : 'nav-item'}
      onClick={handleClick}
      aria-current={active ? 'true' : undefined}
    >
      <span className="nav-item-line" aria-hidden="true" />
      <span className="nav-item-label">{item.label}</span>
    </button>
  );
}
