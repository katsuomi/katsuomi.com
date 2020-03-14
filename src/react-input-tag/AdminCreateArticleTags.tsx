import React, { FC, useState, useEffect } from "react";
import { WithContext as ReactTags } from "react-tag-input";

// import css
import "./react-input-tag.css";

// import methods
import * as firebaseMethods from "methods/tagMethods";

// import models
import * as Model from "models/tagModel";

interface DefaultProps {
  onChange: (tags: { id: string; text: string }[]) => void;
}

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AdminCreateArticle: FC<DefaultProps> = ({ onChange }) => {
  const [tags, setTags] = useState<Model.Tag[]>([]);
  const [suggestions, setSuggestions] = useState<Model.Tag[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await firebaseMethods.getTags();
    setSuggestions(data);
  };

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag: Model.Tag, index: number) => index !== i));
  };

  const handleAddition = (tag: Model.Tag) => {
    setTags([...tags, tag]);
  };

  const handleInputBlur = () => {
    tags.forEach(tag => {
      firebaseMethods.addTag(tag.text);
    });
    onChange(tags);
  };

  const handleDrag = (tag: Model.Tag, currPos: number, newPos: number) => {
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
