import React from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { IStudent, MyCollection, skills } from '../../types/types';
import { addData } from '../../firebase/firestore';

export const AddStudent: React.FC = React.memo((): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IStudent>();
  const save = (data: IStudent): void => {
    console.log(data);
    
    addData<IStudent>(MyCollection.STUDENTS, data)
      .then(console.log)
      .catch(console.warn);
    reset();
  };

  return (
    <div className="addstudent">
      <form onSubmit={handleSubmit(save)}>
        <h2>Add Student</h2>
        <br />
        <input
          type="text"
          {...register('name', { required: 'Enter name' })}
          placeholder="name"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <input
          type="text"
          {...register('surname', { required: 'Enter surname' })}
          placeholder="surname"
        />
        {errors.surname && <p>{errors.surname.message}</p>}
        <br />

        <input
          type="text"
          {...register('age', {
            required: 'Enter age',
            pattern: { value: /\d+$/, message: 'NaN' },
          })}
          placeholder="age"
        />
        {errors.age && <p>{errors.age.message}</p>}
        <br />

        <input
          type="text"
          {...register('email', {
            required: 'Enter email',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Not a email',
            },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br />

        <input
          type="text"
          {...register('group_id', { required: 'Enter group_id' })}
          placeholder="group_id"
        />
        {errors.group_id && <p>{errors.group_id.message}</p>}
        <br />
        <br />
        <select multiple {...register('skills', { required: 'Enter skills' })}>
          {skills.map((elm, id) => {
            return (
              <option key={id} value={elm}>
                {elm}
              </option>
            );
          })}{' '}
        </select>
        {errors.skills && <p>{errors.skills.message}</p>}
        <br />
        <button>Save</button>
      </form>
    </div>
  );
});
