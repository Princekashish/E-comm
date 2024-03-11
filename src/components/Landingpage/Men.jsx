import React from "react";
import Header from "../Header/Header";

function Men() {
  return (
    <div>
      <div>
        <Header
          frame1={[
            { text: "New Arrivals", link: "/about" },
            { text: "Best-Sellers", link: "/#" },
            { text: "Clothing", link: "/#" },
            { text: "Tops & Jeans", link: "/#" },
            { text: "Pants & Jeans", link: "/#" },
            { text: "Outwear", link: "/#" },
            { text: "Shoes & Bags", link: "/#" },
            { text: "Sale", link: "/#" },
          ]}
        />
      </div>
    </div>
  );
}

export default Men;
