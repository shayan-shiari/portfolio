import React, { useState } from "react";
import PannelWrapper from "../../components/pannel-wrapper/PannelWrapper";
import AddCategory from "./add-modal/AddCategory";
import Table from "../../core-ui/Table";

const Posts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PannelWrapper>
      <Table
        open={setIsOpen}
        title="posts"
        modal="add post"
        theadData={["category", "image", "action"]}
      />
      {isOpen && <AddCategory open={setIsOpen}/>}
    </PannelWrapper>
  );
};

export default Posts;
