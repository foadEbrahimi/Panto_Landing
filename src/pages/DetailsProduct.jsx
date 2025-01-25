import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsProduct() {
  const { id } = useParams();
  return <div>details number #{id}</div>;
}
