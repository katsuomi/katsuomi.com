import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

import "./react-input-tag.css";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AdminCreateArticle = () => {
  const [tags, setTags] = useState<{ id: string; text: string }[]>([]);
  const [suggestions, setSuggestions] = useState<
    { id: string; text: string }[]
  >([
    { id: "News", text: "News" },
    { id: "受賞", text: "受賞" },
    { id: "制作物", text: "制作物" },
    { id: "つぶやき", text: "つぶやき" },
    { id: "競馬", text: "競馬" },
    { id: "プログラミング", text: "プログラミング" }
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
    <ReactTags
      tags={tags}
      suggestions={suggestions}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      delimiters={delimiters}
    />
  );
};

export default AdminCreateArticle;
