import React, { useState } from "react";
import PannelWrapper from "../../components/pannel-wrapper/PannelWrapper";
import AddCategory from "./add-modal/AddCategory";
import Table from "../../core-ui/Table";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PannelWrapper>
      <Table
        open={setIsOpen}
        title="gallery"
        modal="add gallery"
        theadData={["category", "image", "action"]}
      />
      {isOpen && <AddCategory open={setIsOpen}/>}
    </PannelWrapper>
  );
};

export default Gallery;
