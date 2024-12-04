import {
  BadgePercent,
  Banknote,
  LayoutGrid,
  ShoppingCart,
  Store,
  User,
} from "lucide-react";

function Header() {
  return (
    <div className="space-y-3 p-3">
      <h1 className="text-center text-3xl font-bold">ShopID</h1>
      <ul>
        <li className="flex justify-between sm:justify-normal sm:gap-10">
          <a href="#">
            <ShoppingCart />
          </a>
          <a href="#">
            <span className="sm:hidden">
              <LayoutGrid />
            </span>
            <span className="hidden sm:block">Category</span>
          </a>
          <a href="#">
            <span className="sm:hidden">
              <Banknote />
            </span>
            <span className="hidden sm:block">Gift Card</span>
          </a>
          <a href="#">
            <span className="sm:hidden">
              <Store />
            </span>
            <span className="hidden sm:block">Supermarket</span>
          </a>
          <a href="#">
            <span className="sm:hidden">
              <BadgePercent />
            </span>
            <span className="hidden sm:block">Best Sells</span>
          </a>
          <a href="#" className="justify-items-end sm:flex-1">
            <User />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
