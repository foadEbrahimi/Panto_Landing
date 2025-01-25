import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      all products
      <Link to={`${2}`}>go to producs 2</Link>
    </div>
  );
}
