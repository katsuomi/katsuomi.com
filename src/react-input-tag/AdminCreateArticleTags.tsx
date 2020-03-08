import React, { useState, useEffect } from "react";
import { WithContext as ReactTags } from "react-tag-input";

// import css
import "./react-input-tag.css";

// import methods
import * as firebaseMethods from "methods/firebaseMethods";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AdminCreateArticle = () => {
  const [tags, setTags] = useState<{ id: string; text: string }[]>([]);
  const [suggestions, setSuggestions] = useState<
    { id: string; text: string }[]
  >([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await firebaseMethods.getTags();
    setSuggestions(data);
  };

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag: any, index: any) => index !== i));
  };

  const handleAddition = (tag: any) => {
    setTags([...tags, tag]);
  };

  const handleInputBlur = () => {
    tags.forEach(tag => {
      firebaseMethods.addTag(tag.text);
    });
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
      handleInputBlur={handleInputBlur}
      delimiters={delimiters}
    />
  );
};

export default AdminCreateArticle;
