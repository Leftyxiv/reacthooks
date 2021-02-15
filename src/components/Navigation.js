import React from "react";
import Link from './Link';

const Navigation = () => {
  return <div className="ui secondary pointing menu">
    <Link href="/" className="item">Accordion</Link>
    <Link href="/list" className="item">Search List</Link>
    <Link href="/dropdown" className="item">Dropdown</Link>
    <Link href="/translate" className="item">Translator</Link>
  </div>;
};

export default Navigation;