import * as React from 'react';

import * as Lesson from '../../Data/Lesson/Lesson';

import './Tag.css';

interface TagProps {
  tag: Lesson.Tag;
}

export const Tag = (props: TagProps) => (
  <span className="tag">
    {props.tag.name}
    <span className="delete-tag" title="remove this tag" />
  </span>
);
