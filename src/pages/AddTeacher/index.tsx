import React from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { ITeacher, MyCollection } from '../../types/types';
import { addData } from '../../firebase/firestore';

export const AddTeacher: React.FC = React.memo((): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITeacher>();
  const save = (data: ITeacher): void => {
    addData<ITeacher>(MyCollection.TEACHERS,data)
    .then(console.log)
    .catch(console.warn)
    reset();
  };

  return (
    <div className="addteacher">
      <h2>Add Teacher </h2>
      <br />
      <form onSubmit={handleSubmit(save)}>
        <br />
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'invalid name' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <input
          type="text"
          placeholder="surname"
          {...register('surname', { required: 'invalid surname' })}
        />
        {errors.surname && <p>{errors.surname.message}</p>}
        <br />
        <input
          type="text"
          placeholder="email"
          {...register('email', { required: 'invalid email', pattern:{
       value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Not a email"
          } })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <button>Save</button>
        <br />
      </form>
    </div>
  );
});
