import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AdminCreateArticle = () => {
  const [tags, setTags] = useState<{ id: string; text: string }[]>([
    { id: "Thailand", text: "Thailand" },
    { id: "India", text: "India" }
  ]);
  const [suggestions, setSuggestions] = useState<
    { id: string; text: string }[]
  >([
    { id: "USA", text: "USA" },
    { id: "Germany", text: "Germany" },
    { id: "Austria", text: "Austria" },
    { id: "Costa Rica", text: "Costa Rica" },
    { id: "Sri Lanka", text: "Sri Lanka" },
    { id: "Thailand", text: "Thailand" }
  ]);

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag: any, index: any) => index !== i));
  };

  const handleAddition = (tag: any) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag: any, currPos: any, newPos: any) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  return (
    <div>
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        delimiters={delimiters}
      />
    </div>
  );
};

export default AdminCreateArticle;
