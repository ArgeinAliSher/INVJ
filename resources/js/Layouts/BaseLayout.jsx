import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const BaseLayout = ({ children, title }) => {
  return (
    <div className="">
        {children}
    </div>
  );
};

export default BaseLayout;
