import React, { useEffect, useState } from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { IGroup, ITeacher, MyCollection } from '../../types/types';
import { addData, getData } from '../../firebase/firestore';

export const AddGroup: React.FC = React.memo((): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IGroup>();
  const [teacher, setTeacher] = useState<ITeacher[]>([]);

  const save = (data: IGroup): void => {
    addData<IGroup>(MyCollection.GROUPS, data)
      .then(console.log)
      .catch(console.warn);
    reset();
  };

  useEffect(() => {
    getData<ITeacher>(MyCollection.TEACHERS)
      .then((res) => {
        console.log(res);
        setTeacher(res);
      })
      .catch(console.warn);
  }, []);

  const [group, setGroup] = useState<IGroup[]>([]);

  useEffect(() => {
    getData<IGroup>(MyCollection.GROUPS)
      .then((res) => {
        console.log(res);
        setGroup(res);
      })
      .catch(console.warn);
  }, []);

  console.log(group);

  return (
    <div className="addgroup">
      <form onSubmit={handleSubmit(save)}>
        <h2>Add Group</h2>
        <br />
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'Enter name' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <br />
        <input
          {...register('count', {
            required: 'emnter count',
            pattern: {
              value: /\d+$/,
              message: 'NaN',
            },
          })}
          placeholder="count"
          type="text"
        ></input>
        {errors.count && <p>{errors.count.message}</p>}
        <br />
        <select {...register('teacher_id', { required: 'Enter teacher' })}>
          {teacher.map((elm) => {
            return (
              <option value={elm.name} key={elm.id}>
                {elm.name}
              </option>
            );
          })}
        </select>
        {errors.teacher_id && <p>{errors.teacher_id.message}</p>}
        <br />

        <button>Save</button>
      </form>
    </div>
  );
});
