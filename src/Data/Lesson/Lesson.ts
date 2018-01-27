import * as User from './../User/User';

export interface Tag {
  id: string;
  name: string;
}

export interface LessonSummary {
  id: string;
  name: string;
  doneTimes: number;
  tags: Tag[];
  creator: User.User;
}
