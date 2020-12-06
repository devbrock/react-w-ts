import React from "react";

interface Props {
  name?: string;
  show: boolean;
}

export default function Person({ name, show }: Props) {
  return (
    <div>
      {show && (
        <div>
          <p>{name}</p>
          <p>{show}</p>
        </div>
      )}
    </div>
  );
}
