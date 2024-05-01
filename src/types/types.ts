export interface IGroup {
  id: string;
  name: string;
  count: number;
  teacher_id: string;
}

export interface ITeacher {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface IStudent {
  id: string;
  name: string;
  surname: string;
  age: number;
  email: string;
  group_id: string;
  skills: string[];
}


export const skills: string[] = [
    'HTML', "JS", "Java", 'React', 'CSS', 'Node', "Angular", "Vue"
]

export enum MyCollection {
  GROUPS = 'groups',
  STUDENTS = 'students',
  TEACHERS = 'teachers',
}
export enum MyWhere {
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL_TO = '<=',
  EQUAL_TO = '==',
  GREATER_THAN = '>',
  GREATER_THAN_OR_EQUAL_TO = '>=',
  NOT_EQUAL_TO = '!=',
  ARRAY_CONTAINS = 'array-contains',
  ARRAY_CONTAINS_ANY = 'array-contains-any',
  IN = 'in',
  NOT_IN = 'not-in'
}
